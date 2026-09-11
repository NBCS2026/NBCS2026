const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function(name, ...args) {
  return originalResolve.call(this, name.startsWith('@/') ? path.join(root, name.slice(2)) : name, ...args);
};
require.extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, file);
const { getProgramEntries, getSchedule, programDayFromUrl, resolveProgramAnchor, getOpeningCeremony, getProgramDays } = require('../data/program.ts');
const { PROGRAM_THEMES, SESSION_THEMES, getThemeSessionTitle } = require('../data/program-themes.ts');
const { SUMMIT_WEEK_DATES, SUMMIT_WEEK_EVENTS, getSummitWeekEvents } = require('../data/summit-week-events.ts');
const { PROGRAM_WORDLY_LINKS } = require('../data/program-wordly-links.ts');
const { validateFormShape, escapeHtml, readFormJson, checkFormRate } = require('../lib/form-security.ts');

test('English and French share every stable session ID, parent and anchor', () => {
  const en = getProgramEntries('en'), fr = getProgramEntries('fr');
  assert.equal(new Set(en.map(x => x.id)).size, en.length);
  assert.deepEqual(en.map(x => [x.id,x.anchor,x.blockId]), fr.map(x => [x.id,x.anchor,x.blockId]));
  for (const entry of en) assert.equal(resolveProgramAnchor(entry.anchor)?.id,entry.id);
});
test('all seven themes contain only real sessions, and every interpretation link still resolves', () => {
  const entries = getProgramEntries('en');
  for (const [id, theme] of Object.entries(SESSION_THEMES)) {
    assert(entries.some(x=>x.id===id), id);
    assert.equal(typeof theme, "string", "A session must have exactly one primary theme");
    assert(PROGRAM_THEMES.some(x=>x.id===theme));
    assert(!["ceremony", "logistics"].includes(entries.find(x=>x.id===id).kind), id);
  }
  for (const theme of PROGRAM_THEMES) assert(Object.values(SESSION_THEMES).includes(theme.id));
  assert.equal(Object.keys(PROGRAM_WORDLY_LINKS).length,31);
  for (const [id, link] of Object.entries(PROGRAM_WORDLY_LINKS)) {
    assert(entries.some(x=>x.id===id),id);
    assert.match(link.url,/^https:\/\/attend\.wordly\.ai\/join\//);
  }
});
test('public day labels keep Friday separate from main Summit days without breaking URLs', () => {
  assert.deepEqual(getProgramDays('en').map(day=>[day.day,day.label]),[[1,'Power of Youth Day'],[2,'Day 1'],[3,'Day 2']]);
  assert.deepEqual(getProgramDays('fr').map(day=>day.label),['La jeunesse au pouvoir','Jour 1','Jour 2']);
});

test('youth discovery prefixes use block metadata, not the date', () => {
  for(const locale of ['en','fr']) {
    const entries=getProgramEntries(locale);
    for(const id of ['day1:opening-ceremony','day1:registration','day1:networking','day1:exhibition-artists-meet-greet']) {
      const entry=entries.find(item=>item.id===id);
      assert(entry,id);
      assert.equal(getThemeSessionTitle(entry,locale),entry.title);
      assert.equal(SESSION_THEMES[id],undefined);
    }
    const youth=entries.find(item=>item.id==='day1:session-1');
    assert.equal(youth.kind,'youth-session');
    assert(getThemeSessionTitle(youth,locale).endsWith(': '+youth.title));
  }
  assert.equal(Object.keys(SESSION_THEMES).length,28);
  assert.equal(SESSION_THEMES['day1:session-6'],undefined);
});

test('all seven Summit Week dates resolve once, chronologically, without losing any event', () => {
  assert.deepEqual(SUMMIT_WEEK_DATES,['2026-09-14','2026-09-15','2026-09-16','2026-09-17','2026-09-18','2026-09-19','2026-09-20']);
  const listed=SUMMIT_WEEK_DATES.flatMap(getSummitWeekEvents);
  assert.equal(new Set(listed.map(event=>event.id)).size,listed.length);
  assert.deepEqual(listed.map(event=>event.id).sort(),SUMMIT_WEEK_EVENTS.map(event=>event.id).sort());
  for(const date of SUMMIT_WEEK_DATES) {
    const times=getSummitWeekEvents(date).map(event=>event.startTime);
    assert.deepEqual(times,[...times].sort());
  }
});

test('a direct cross-day anchor wins over a stale day query', () => {
  assert.equal(programDayFromUrl(new URL('https://example.test/en/program?day=1#day2-d2-am-1')),2);
  assert.equal(programDayFromUrl(new URL('https://example.test/fr/program?day=1#day3-closing-ceremony')),3);
  assert.equal(programDayFromUrl(new URL('https://example.test/en/program?day=99')),1);
});
test('the registration RSVP derives from the current opening ceremony in both languages', () => {
  for(const locale of ['en','fr']) {
    const ceremony=getOpeningCeremony(locale);
    assert.equal(ceremony.id,'opening-ceremony');
    assert.match(ceremony.action.url,/^https:\/\/forms\.cloud\.microsoft\//);
    assert.equal(ceremony.location,'Hall C');
  }
});
test('Canada Life uses the urgently approved description and retains its moderator', () => {
  const session=getSchedule(2,'en').flatMap(x=>x.sessions||[]).find(x=>x.id==='d2-pm-2');
  assert.match(session.description,/This conversation looks at how our lived experiences shape the way we lead/);
  assert(session.people.flatMap(x=>x.names).some(x=>x.includes('Harun Kibirige')));
});
test('form input rejects wrong types, unknown keys and oversized fields', () => {
  for(const value of [null,[],{name:[]},{anonymous:'yes'},{comments:'x'.repeat(4001)},{unexpected:'x'},{expertise:[{}]},{locale:'xx'},{submissionKind:'unknown'}]) assert.throws(()=>validateFormShape(value));
  validateFormShape({name:'Example',email:'person@example.test',comments:'Fine',anonymous:true,locale:'fr'});
  assert.equal(escapeHtml('<script>"&\''),'&lt;script&gt;&quot;&amp;&#039;');
});
test('JSON requests reject oversized bodies, malformed input, cross-origin posts and honeypots', async () => {
  const request=(body, headers={})=>new Request('https://example.test/api/contact',{method:'POST',headers:{'content-type':'application/json',...headers},body});
  await assert.rejects(readFormJson(request('x'.repeat(32769))), e=>e.status===413);
  await assert.rejects(readFormJson(request('{oops')), e=>e.status===400);
  await assert.rejects(readFormJson(request('{}',{origin:'https://elsewhere.test'})), e=>e.status===403);
  await assert.rejects(readFormJson(request('{"website":"spam"}')), e=>e.status===400);
});
test('forms validate, escape, anonymize, handle provider errors and coalesce retries without sending real mail', async () => {
  const realFetch=global.fetch;
  const oldKey=process.env.RESEND_API_KEY, oldRecipient=process.env.FEEDBACK_RECIPIENT_EMAIL;
  process.env.RESEND_API_KEY='test-only-not-a-real-key';
  process.env.FEEDBACK_RECIPIENT_EMAIL='test@example.invalid';
  const sent=[];
  global.fetch=async (url, options)=>{
    assert.equal(url,'https://api.resend.com/emails');
    sent.push({body:JSON.parse(options.body),headers:options.headers});
    await new Promise(resolve=>setTimeout(resolve,10));
    return new Response(JSON.stringify({id:'mock-email-id'}),{status:200});
  };
  const { POST:contact } = require('../app/api/contact/route.ts');
  const { POST:feedback } = require('../app/api/feedback/route.ts');
  const request=(endpoint,body,key)=>new Request('https://example.test/api/'+endpoint,{method:'POST',headers:{'content-type':'application/json',...(key?{'idempotency-key':key}:{})},body:JSON.stringify(body)});
  try {
    assert.equal((await contact(request('contact',{name:'   ',email:'valid@example.test',message:'Hello'}))).status,400);
    assert.equal((await feedback(request('feedback',{name:'Name',email:'x@example.test',rating:'5',comments:'Hello',feedbackType:'session',session:'not-a-session'}))).status,400);
    assert.equal((await feedback(request('feedback',{submissionKind:'survey',name:'Name',email:'x@example.test',insights:'Insight of sufficient length'}))).status,400);
    assert.equal((await feedback(request('feedback',{submissionKind:'media',name:'Name',email:'x@example.test',mediaUrl:'javascript:alert(1)',caption:'Caption',credit:'Credit',permission:true}))).status,400);
    assert.equal(sent.length,0);
    const body={name:'<b>Example</b>',email:'x@example.test',message:'<script>alert(1)</script>'};
    const results=await Promise.all([contact(request('contact',body,'readiness-double-click-001')),contact(request('contact',body,'readiness-double-click-001'))]);
    assert(results.every(x=>x.status===200));
    assert.equal(sent.length,1);
    assert(!sent[0].body.html.includes('<script>'));
    assert(sent[0].body.html.includes('&lt;script&gt;'));
    assert.match(sent[0].headers['Idempotency-Key'],/^[a-f0-9]{64}$/);
    const response=await feedback(request('feedback',{name:'Private Name',email:'private@example.test',anonymous:true,feedbackType:'session',session:'day2:d2-am-1',rating:'5',comments:'Useful session',locale:'fr'},'readiness-anonymous-001'));
    assert.equal(response.status,200);
    assert(sent[1].body.text.includes('day2:d2-am-1'));
    assert(!JSON.stringify(sent[1].body).includes('Private Name'));
    assert(!JSON.stringify(sent[1].body).includes('private@example.test'));
    global.fetch=async()=>new Response('{}',{status:500});
    const failed=await contact(request('contact',{...body,locale:'fr'},'readiness-failure-001'));
    assert.equal(failed.status,502);
    assert.match((await failed.json()).error,/Impossible/);
  } finally {
    global.fetch=realFetch;
    if(oldKey===undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY=oldKey;
    if(oldRecipient===undefined) delete process.env.FEEDBACK_RECIPIENT_EMAIL; else process.env.FEEDBACK_RECIPIENT_EMAIL=oldRecipient;
  }
});
test('the in-memory throttle stops repeated attempts', () => {
  const old=process.env.VERCEL; process.env.VERCEL='1';
  try {
    const request=new Request('https://example.test/api/contact',{headers:{'x-vercel-forwarded-for':'test-throttle-only'}});
    for(let i=0;i<20;i++)checkFormRate(request);
    assert.throws(()=>checkFormRate(request),e=>e.status===429);
  } finally { if(old===undefined)delete process.env.VERCEL; else process.env.VERCEL=old; }
});

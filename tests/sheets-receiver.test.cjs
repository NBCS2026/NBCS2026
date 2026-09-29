const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {createHmac}=require('node:crypto');
test('receiver authenticates requests, saves once, escapes formula input and rejects failures',()=>{
 const rows=[]; let fail=false, locked=false;
 const secret='local-testing-secret-at-least-32-characters';
 const sheet={getLastRow:()=>rows.length+1,getRange:(r,c,n,w)=>({getValue:()=> 'Submission ID',createTextFinder:id=>({matchEntireCell:()=>({findNext:()=>rows.some(row=>row[1]===id)})}),setValues:values=>{if(fail)throw Error();rows.push(values[0]);},setNumberFormat:()=>{}})};
 const ctx=vm.createContext({console,Date,PropertiesService:{getScriptProperties:()=>({getProperty:()=>secret})},Utilities:{Charset:{UTF_8:'utf8'},computeHmacSha256Signature:(p,s)=>[...createHmac('sha256',s).update(p).digest()]},LockService:{getScriptLock:()=>({tryLock:()=>{locked=true;return true;},hasLock:()=>locked,releaseLock:()=>{locked=false;}})},SpreadsheetApp:{openById:()=>({getSheetByName:()=>sheet}),flush:()=>{}},ContentService:{MimeType:{JSON:'json'},createTextOutput:t=>({setMimeType:()=>JSON.parse(t)})}});
 vm.runInContext(fs.readFileSync(require('node:path').join(__dirname,'../docs/forms-sheets.gs'),'utf8'),ctx);
 const submit=(data,valid=true)=>{const payload=JSON.stringify(data);return ctx.doPost({postData:{contents:JSON.stringify({payload,signature:valid?createHmac('sha256',secret).update(payload).digest('hex'):'0'.repeat(64)})}});};
 const data={id:'a'.repeat(64),timestamp:Date.now(),sheet:'Feedback',values:['en','general','','',5,'=IMPORTXML("https://example.invalid", "x")',true,'','']};
 assert.equal(submit(data,false).ok,false); assert.equal(rows.length,0);
 assert.equal(submit({...data,sheet:'Other'}).ok,false);
 assert.equal(submit({...data,timestamp:0}).ok,false);
 assert.equal(submit({...data,values:[]}).ok,false);
 assert.equal(submit(data).ok,true); assert.equal(rows.length,1);
 assert.equal(rows[0][7][0],"'"); assert.equal(typeof rows[0][0],'number');
 assert.equal(submit(data).ok,true); assert.equal(rows.length,1);
 fail=true; assert.equal(submit({...data,id:'b'.repeat(64)}).ok,false);
 assert.equal(locked,false); assert.equal(rows.length,1);
});


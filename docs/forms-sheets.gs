// Private Google Apps Script receiver for the summit website.
// Required Script Property: FORMS_SHEETS_SECRET (same value as Vercel).
const SPREADSHEET_ID = '1b5NLGPOHRC3W4VLh1Fsv3SEIj87fPNRnmaK9kSl0R0A';
const COLUMN_COUNTS = {'Feedback': 11, 'Survey responses': 16, 'Media submissions': 9};

function doPost(e) {
  let lock;
  try {
    if (!e || !e.postData || e.postData.contents.length > 60000) return reply_({ok: false});
    const envelope = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty('FORMS_SHEETS_SECRET');
    if (!secret || secret.length < 32 || typeof envelope.payload !== 'string' || !/^[a-f0-9]{64}$/.test(envelope.signature || '')) return reply_({ok: false});
    const signature = Utilities.computeHmacSha256Signature(envelope.payload, secret, Utilities.Charset.UTF_8).map(b => ('0' + (b & 255).toString(16)).slice(-2)).join('');
    let difference = 0;
    for (let i = 0; i < 64; i++) difference |= signature.charCodeAt(i) ^ envelope.signature.charCodeAt(i);
    if (difference !== 0) return reply_({ok: false});
    const data = JSON.parse(envelope.payload);
    if (!Number.isFinite(data.timestamp) || Math.abs(Date.now() - data.timestamp) > 300000 || !/^[a-f0-9]{64}$/.test(data.id || '') || !Object.prototype.hasOwnProperty.call(COLUMN_COUNTS, data.sheet) || !Array.isArray(data.values) || data.values.length !== COLUMN_COUNTS[data.sheet] - 2 || data.values.some(v => !['string','number','boolean'].includes(typeof v) || (typeof v === 'number' && !Number.isFinite(v)))) return reply_({ok: false});
    lock = LockService.getScriptLock();
    if (!lock.tryLock(15000)) return reply_({ok: false});
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(data.sheet);
    if (!sheet || sheet.getRange(1,2).getValue() !== 'Submission ID') return reply_({ok: false});
    const lastRow = sheet.getLastRow();
    if (lastRow > 1 && sheet.getRange(2,2,lastRow-1,1).createTextFinder(data.id).matchEntireCell(true).findNext()) return reply_({ok: true, id: data.id});
    const values = data.values.map(v => typeof v === 'string' && /^\s*[=+@-]/.test(v) ? "'" + v : v);
    const row = lastRow + 1;
    // Numeric UTC date serial keeps timestamps sortable regardless of viewer timezone.
    sheet.getRange(row,1,1,COLUMN_COUNTS[data.sheet]).setValues([[Date.now()/86400000+25569, data.id, ...values]]);
    sheet.getRange(row,1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    SpreadsheetApp.flush();
    return reply_({ok: true, id: data.id});
  } catch (_) {
    console.error('Spreadsheet submission save failed');
    return reply_({ok: false});
  } finally {
    if (lock && lock.hasLock()) lock.releaseLock();
  }
}

function reply_(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}


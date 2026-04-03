// ============================================================
// 구찌골프 문의 폼 — Google Apps Script 템플릿
// 사용법:
//   1. 동생 구글 계정으로 script.google.com 접속
//   2. 새 프로젝트 생성 후 이 코드 전체 붙여넣기
//   3. SHEET_ID, NOTIFY_EMAIL 수정
//   4. 배포 → 웹 앱으로 배포 (액세스: 모든 사용자)
//   5. 발급된 웹 앱 URL → index.html의 SCRIPT_URL 교체
// ============================================================

const SHEET_ID      = 'YOUR_GOOGLE_SHEET_ID';   // 시트 URL에서 /d/XXXX/edit 부분
const NOTIFY_EMAIL  = 'YOUR_EMAIL@gmail.com';    // 문의 알림 받을 이메일
const SHEET_NAME    = '문의';                    // 시트 탭 이름

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // 스팸 방지 — 허니팟 필드
    if (data.company) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'spam' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss    = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // 헤더 행 (최초 1회)
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['접수시간', '이름', '연락처', '관심레슨', '문의내용', 'UTM Source', '유입경로']);
    }

    // 데이터 기록
    sheet.appendRow([
      new Date(),
      data.name    || '',
      data.phone   || '',
      data.interest || '',
      data.message || '',
      data.utm_source || '',
      data.referrer   || '',
    ]);

    // 이메일 알림
    GmailApp.sendEmail(
      NOTIFY_EMAIL,
      `[구찌골프] 새 문의 — ${data.name}`,
      `이름: ${data.name}\n연락처: ${data.phone}\n관심레슨: ${data.interest}\n\n문의내용:\n${data.message}`
    );

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

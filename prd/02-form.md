# 02) 문의 폼 요구사항 (v1)

최종 업데이트: 2026-04-02

## 6) 문의 폼 요구사항 (v1)

### 6.1 폼 필드
- 필수:
  - 이름: `name`
  - 연락처(휴대폰): `phone`
  - 개인정보 수집/이용 동의: `privacy_consent` (체크박스 필수)
- 선택:
  - 관심 레슨: `interest` (필드/숏게임/외부/법인·단체)
  - 희망 지역/장소: `location_preference`
  - 메시지: `message`
- 스팸 방지(권장):
  - 허니팟 필드: `company` (보이지 않게)
  - 간단한 레이트 리밋(서버/서드파티 사용 시)

### 6.2 유효성 검증
- name: 1~30자
- phone: 숫자/하이픈 허용, 최소 10자리(국내 번호 기준), 앞뒤 공백 트림
- privacy_consent: 반드시 true

### 6.3 제출 후 UX
- 성공: Thank-you 화면/섹션(“연락드릴게요”) + 대체 CTA(전화/카카오)
- 실패: 오류 메시지 + 재시도, 입력값 유지

### 6.4 운영(수집/알림)
- 수집처:
  - 이메일 알림: `{{LEAD_NOTIFY_EMAIL}}`
  - Google Sheets 적재: `{{GOOGLE_SHEET_URL_OR_ID}}`
- 시트 컬럼(권장):
  - created_at, name, phone, interest, location_preference, message, utm_source, utm_medium, utm_campaign, referrer, page_path

### 6.5 개인정보/법적
- v1 필수:
  - 개인정보처리방침 페이지(또는 최소 텍스트 + 링크)
  - 동의 체크박스 라벨 예시(수정 가능):
    - “개인정보 수집 및 이용에 동의합니다. (필수)”
- 최소 수집 목적/보관 기간/파기 등을 개인정보처리방침에 명시


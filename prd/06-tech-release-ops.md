# 06) 기술/배포 + 릴리즈 범위 + 운영 정책

최종 업데이트: 2026-04-02

## 10) 기술/배포 (권장 스택)

### 10.1 구현 스택
- 프레임워크: Next.js (정적 export 기준)
- 배포: **Netlify** ✅ (확정)
  - `next export` or `output: 'export'` 정적 빌드로 배포
  - Netlify CLI 또는 GitHub 연동 자동 배포

### 10.2 폼 백엔드 (확정)

**Google Sheets + Gmail 알림 (무료, 건수 제한 없음)**
- 폼 제출 → Netlify 서버리스 함수(Function) → Google Sheets API 적재
- 동시에 Gmail 알림 발송 (수신: `{{LEAD_NOTIFY_EMAIL}}`)
- 시트 컬럼: created_at / name / phone / interest / location_preference / message / utm_source / utm_medium / utm_campaign / referrer

### 10.3 주의사항 (Netlify + Next.js)
- Next.js App Router의 Server Actions, Route Handler는 Netlify에서 별도 설정 필요
- v1은 정적 export로 단순하게 가는 것 권장 (`output: 'export'`)

---

## 11) 릴리즈 범위

### 11.1 v1 (주말까지)
- 섹션: Hero / 신뢰 / 프로그램 / 프로세스 / FAQ / 위치·시설 / 문의 / Footer
- CTA: 전화 + 카카오 + 문의 폼 + 모바일 Sticky CTA
- 측정: GA4(필수) + GTM(가능하면)
- 법적: 개인정보처리방침 + 폼 동의 체크
- SEO/OG: 기본 메타 + OG 이미지(임시라도 필수)

### 11.2 v1.1 (이후)
- 법인/단체 전용 섹션 강화(사례/제안서 다운로드 등)
- 후기/사례 확대(콘텐츠 업데이트 프로세스 포함)
- A/B 테스트(카피/CTA 조합)
- 채널별 랜딩(UTM 기반 섹션 강조/카피 분기)

---

## 12) 운영 정책(리드 처리)

### 12.1 리드 알림/처리
- 알림 수신: `{{LEAD_NOTIFY_EMAIL}}`
- 처리 SLA(목표):
  - 1차 응답: `{{SLA_FIRST_RESPONSE}}` (예: 24시간 이내)
  - 운영 시간 외 문의: 다음 영업일 내 응답

### 12.2 리드 품질 기준(운영 정의)
- 유효 리드: 연락처 유효 + 레슨 의향 명확(또는 상담 요청 내용 존재)
- 무효 리드: 스팸/광고/잘못된 번호/의미 없는 메시지


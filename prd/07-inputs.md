# 07) 필수 인풋 체크리스트 ({{PLACEHOLDER}} 교체용)

최종 업데이트: 2026-04-02

## 확정 값 (입력 완료)

| 항목 | 값 |
|------|-----|
| 브랜드명(한) | 구찌골프 |
| 브랜드명(영) | GOODGGOLF |
| 전화번호 | 010-8441-3065 |
| 주소 | 서울특별시 동작구 노량진로 4 대방빌딩 206호 구찌골프스튜디오 |
| 구글맵 | https://www.google.com/maps/place/%EA%B5%AC%EC%B0%8C%EA%B3%A8%ED%94%84%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4/data=!3m1!4b1!4m6!3m5!1s0x357c9f6f67ceccaf:0x17f48fe6e2863dd3!8m2!3d37.5123929!4d126.9262471!16s%2Fg%2F11wg83sdyw?entry=ttu |
| 네이버 플레이스 | https://m.place.naver.com/place/1612034208/location |
| 시설 특징 | 실내 아카데미 스튜디오, 트랙맨(TrackMan) 기반 |

---

> 아래 항목이 채워지면 v1 카피/메타/운영 세팅을 “완료 상태”로 만들 수 있다.

## 13) 필수 인풋 체크리스트

### 13.1 연락/채널
- 전화번호(표기/연결): `010-8441-3065` ✅
- 카카오 채널/상담 링크: `{{KAKAO_URL}}` — 확인 중(동생 연락 후)
- 네이버 톡톡: `https://talk.naver.com/ct/w4590o` ✅ (이미 운영 중, 문의 유입 있음)
- 리드 알림 이메일: `{{LEAD_NOTIFY_EMAIL}}`

### 13.2 프로필/신뢰
- 코치명: `{{COACH_NAME}}`
- 대표 사진/영상: `{{HERO_MEDIA}}`
- 소개문(짧게/길게): `{{COACH_BIO_SHORT}}`, `{{COACH_BIO_LONG}}`
- 경력/자격/성과(최소 3개): `{{COACH_CREDENTIALS}}`
- 후기/사례(선택): `{{TESTIMONIALS}}`
- SNS 링크:
  - YouTube: `https://www.youtube.com/@good_ggolf` ✅
  - Instagram: `https://www.instagram.com/good_ggolf/` ✅
  - Blog: `{{BLOG_URL}}` — 해당 없으면 삭제

### 13.3 프로그램/운영
- 프로그램별 설명/대상/진행 방식:
  - `{{PROGRAM_FIELD_DESC}}`
  - `{{PROGRAM_SHORTGAME_DESC}}`
  - `{{PROGRAM_OUTSIDE_DESC}}`
- 가격/정책 문구:
  - 가격 안내 원칙: `{{PRICING_POLICY_SHORT}}`
  - 변경/환불: `{{REFUND_POLICY_SHORT}}`

### 13.4 위치/시설
- 주소: `서울특별시 동작구 노량진로 4 대방빌딩 206호` ✅
- 운영시간: `{{BUSINESS_HOURS}}` — 확인 필요
- 주차/찾아오는 길: `{{PARKING_INFO}}` — 무료주차 제공(시간 확인 중)
- 구글맵: `https://www.google.com/maps/place/구찌골프스튜디오/...` ✅
- 네이버 플레이스: `https://m.place.naver.com/place/1612034208/location` ✅

### 13.5 측정/메타
- GA4 Measurement ID: `G-LWYRBW4TDB` ✅
  - 환경변수: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-LWYRBW4TDB`
  - Netlify 환경변수에도 동일하게 등록 필요
- GTM Container ID: 패스 (v1.1에서 추가 예정)
- SEO/OG:
  - `{{SEO_TITLE}}`, `{{SEO_DESCRIPTION}}`
  - `{{OG_TITLE}}`, `{{OG_DESCRIPTION}}`, `{{OG_IMAGE_URL}}`

### 13.6 시트/개인정보
- Google Sheet URL/ID: `{{GOOGLE_SHEET_URL_OR_ID}}`
- 개인정보처리방침 텍스트 확정(또는 링크): `{{PRIVACY_URL}}`


# 03) 분석/이벤트 측정 설계 (GA4 + 선택: GTM)

최종 업데이트: 2026-04-02

## 7) 분석/이벤트 측정 설계 (GA4 + 선택: GTM)

### 7.1 필수 세팅
- GA4 Measurement ID: `{{GA4_MEASUREMENT_ID}}` (예: `G-XXXXXXXXXX`)
- GTM Container ID(선택): `{{GTM_CONTAINER_ID}}` (예: `GTM-XXXXXXX`)

### 7.2 이벤트 네이밍(표준)
> 이벤트는 가능한 한 GTM에서 관리(권장). 직접 코드로 보내는 경우에도 동일 이름 유지.

- `cta_call_click`: 전화 링크 클릭
- `cta_kakao_click`: 카카오 채널/상담 링크 클릭
- `cta_form_open`: 폼 열기(섹션 진입/모달 오픈 등)
- `form_submit`: 폼 제출 성공
- `form_error`: 폼 제출 실패(검증/네트워크)
- `map_click`: 지도 열기 클릭
- `scroll_50`: 스크롤 50% 도달(선택)

### 7.3 이벤트 파라미터(권장)
- `cta_location`: hero / mid / footer / sticky
- `program_type`: field / shortgame / outside / corporate
- `error_type`: validation / network / unknown
- `utm_*`: utm_source, utm_medium, utm_campaign, utm_content, utm_term

### 7.4 전환 정의
- Primary conversions:
  - `form_submit`
  - `cta_call_click`
  - `cta_kakao_click`


# 구찌골프 랜딩페이지 — 운영 가이드

최종 업데이트: 2026-04-09

---

## 사이트 정보

| 항목 | 값 |
|---|---|
| 운영 URL | https://goodggolf.com |
| GitHub 저장소 | https://github.com/edd-one-out-sion/goodgi-golf-landing |
| 호스팅 | Netlify (git push → 자동 배포) |

---

## 연결된 서비스 & 계정

| 서비스 | 계정 | ID / URL |
|---|---|---|
| Netlify | 본인 계정 | https://goodggolf.com (자동배포) |
| Cloudinary | 본인 계정 | cloud: `dxgxhzxkx` / preset: `goodgi_upload` |
| GA4 | 동생 개인 계정 | `G-MVYS57N74L` |
| GTM | 동생 개인 계정 | `GTM-K2TSSMZ8` |
| 구글 서치콘솔 | 동생 개인 계정 | goodggolf.com 속성 등록 완료 |
| 네이버 서치어드바이저 | 동생 개인 계정 | goodggolf.com 등록 완료 |
| Railway (백엔드+DB) | 본인 계정 | https://railway-admin-production.up.railway.app |
| Railway GitHub | 본인 계정 | https://github.com/edd-one-out-sion/railway-admin |

---

## 관리자 페이지

- URL: https://goodggolf.com/admin.html
- 계정: `admin` / `admin1234`
- **URL은 공개 노출 금지** — 동생한테 직접 알려주고 북마크 저장

### 기능
- 문의 목록 조회 + 상태 필터 (신규/확인/처리완료)
- 상태 변경 (신규 → 확인 → 처리완료)
- 메모 입력/저장 (확인 시 처리 내용 기록)
- 개별 삭제
- 자동 삭제: 처리완료 후 1년 경과 문의 매일 새벽 3시 자동 파기 (개인정보처리방침 준수)
- PC: 테이블 뷰 / 모바일: 카드 아코디언 + 전화 버튼

---

## 문의 데이터 — Railway DB

- 폼 제출 시 Railway PostgreSQL에 저장
- Railway 프로젝트: `fantastic-kindness`
- 테이블: `inquiries` (id, name, phone, lesson_type, message, referrer, utm_source, status, memo, created_at)
- 상태값: `신규` / `확인` / `처리완료`

---

## GTM에서 추가 태그 붙이는 법

광고 시작 시 (카카오/네이버 픽셀 등):
1. tagmanager.google.com → 컨테이너 클릭
2. 태그 → 새로 만들기 → 광고 픽셀 코드 입력
3. 트리거: All Pages
4. 저장 → 제출(게시)

코드 수정 없이 대시보드에서만 작업 가능.

---

## 이미지 추가/교체 시

1. `assets/images/` 에 원본 파일 추가
2. WebP 변환:
```bash
node scripts/convert-webp.mjs
```
3. HTML에서 `<picture>` 태그로 감싸기:
```html
<picture>
  <source srcset="assets/images/파일명.webp" type="image/webp">
  <img src="assets/images/파일명.jpg" alt="설명" />
</picture>
```

---

## 남은 작업

### 이미지/후기 관리
- [x] 이미지 저장소 결정 — Cloudinary (본인 계정, cloud: dxgxhzxkx, preset: goodgi_upload)
- [x] 현장사진 관리 — Railway DB `photos` 테이블 + 어드민 UI
- [x] 수강생 후기 관리 — Railway DB `reviews` 테이블 + 어드민 UI
- [x] 랜딩페이지 현장사진/후기 섹션 → DB에서 동적으로 불러오도록 수정

### 기타
- [x] 센터 구글 계정 복구 후 GA4/GTM/서치콘솔 관리자 권한 추가 — 동생 본 계정으로 완료
- [x] 도메인 변경 시 → 서치콘솔/어드바이저에 새 속성 추가, sitemap.xml URL 수정 — goodggolf.com 완료

---

## 페이지 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 메인 랜딩페이지 |
| `about.html` | 소개 페이지 |
| `privacy.html` | 개인정보처리방침 |
| `admin.html` | 관리자 페이지 (문의 관리) |
| `sitemap.xml` | 검색엔진 크롤링용 |
| `assets/images/` | 이미지 (JPG/PNG 원본 + WebP) |
| `scripts/` | WebP 변환 스크립트 (개발용) |

# 구찌골프 랜딩페이지 — 운영 가이드

최종 업데이트: 2026-04-04

---

## 사이트 정보

| 항목 | 값 |
|---|---|
| 운영 URL | https://goodgi-golf-landing.netlify.app |
| GitHub 저장소 | https://github.com/edd-one-out-sion/goodgi-golf-landing |
| 호스팅 | Netlify (git push → 자동 배포) |

---

## 연결된 서비스 & 계정

| 서비스 | 계정 | ID / URL |
|---|---|---|
| GA4 | 동생 개인 계정 | `G-MVYS57N74L` |
| GTM | 동생 개인 계정 | `GTM-K2TSSMZ8` |
| 구글 시트 | 동생 개인 계정 | Apps Script URL 별도 보관 |
| 구글 서치콘솔 | 동생 개인 계정 | GTM 소유권 자동 확인 완료 |
| 네이버 서치어드바이저 | 미등록 (예정) | — |

> 센터 구글 계정 살아나면 GA4/GTM/시트/서치콘솔 모두 관리자 권한 추가 가능

---

## 배포 방법

코드 수정 후:
```bash
git add 파일명
git commit -m "변경 내용 설명"
git push origin main
```
Netlify가 자동으로 감지해서 1~2분 내 배포 완료.

---

## 구글 시트 문의 데이터

- 폼 제출 시 자동으로 시트에 저장됨
- 직원 공유: 시트 우상단 **공유** → 이메일 입력 → 편집자 권한
- 컬럼 구조: `타임스탬프 / 이름 / 연락처 / 관심레슨 / 문의내용 / 유입경로 / UTM소스`
- 유입경로: 방문자가 어디서 왔는지 자동 기록 (네이버 검색 → `naver.com` 등)
- UTM소스: 광고 링크에 `?utm_source=instagram` 붙이면 자동 기록

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

- [ ] 배포된 사이트에서 폼 테스트 (로컬 말고 실제 URL에서)
- [ ] 네이버 서치어드바이저 등록
- [ ] 센터 구글 계정 복구 후 GA4/GTM/시트 관리자 권한 추가
- [ ] 도메인 변경 시 → 서치콘솔/어드바이저에 새 속성 추가, sitemap.xml URL 수정

---

## 페이지 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 메인 랜딩페이지 |
| `about.html` | 소개 페이지 |
| `privacy.html` | 개인정보처리방침 |
| `sitemap.xml` | 검색엔진 크롤링용 |
| `assets/images/` | 이미지 (JPG/PNG 원본 + WebP) |
| `scripts/` | WebP 변환 스크립트 (개발용) |

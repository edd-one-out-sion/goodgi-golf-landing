---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments: ['OPERATIONS.md', 'assets/content/coaches.md']
workflowType: 'prd'
classification:
  projectType: web_app
  domain: general
  complexity: low-medium
  projectContext: brownfield
---

# Product Requirements Document - goodgi-golf-landing 관리자 페이지

**Author:** sione
**Date:** 2026-04-07

## Executive Summary

구찌골프스튜디오 운영진(대표·직원·코치)이 개발자 개입 없이 사이트 콘텐츠를 관리하고 신청자를 확인할 수 있는 **웹 기반 관리 콘솔**. 현재 모든 콘텐츠가 HTML에 하드코딩되어 있어 사소한 변경에도 개발자(sione)가 코드를 직접 수정해야 하는 의존 관계를 끊는 것이 핵심 목표.

**대상 사용자:** 구찌골프 운영진 전원 (대표·직원·코치) — 동등 권한

**접근 방식:** 기존 랜딩페이지 푸터 "관리자" 링크 → `/admin` 라우트 → 로그인 후 진입. 미인증 방문자 접근 불가.

**해결하는 문제:** 콘텐츠 변경 시 개발자 연락 → 코드 수정 → 재배포의 비효율 사이클 제거.

### What Makes This Special

기술 언어를 UI 뒤로 완전히 숨긴 **가이드형 관리 UX**. 사용자는 의도만 선택하면 되고 파일 처리·슬롯 배치는 시스템이 처리. 규칙 기반 대화 흐름으로 구현 → API 비용 없음. 외주 클라이언트 대상 재사용 가능한 패턴.

## Project Classification

- **Project Type:** Web App (브라운필드 — 기존 랜딩페이지에 추가)
- **Domain:** General Business
- **Complexity:** Low-Medium
- **Architecture:** Netlify(프론트 `/admin` 포함) ↔ Railway(Node.js 백엔드 + PostgreSQL + Storage)

## Success Criteria

### User Success

- 운영진이 개발자 도움 없이 현장 사진 변경에 **첫 시도에** 독립적으로 성공
- 신청자 목록을 관리자 페이지에서 직접 확인
- UI 언어가 직관적이어서 별도 설명 없이 사용 가능 ("현장 사진", "대문사진" 등 — 기술 용어 없음)

### Business Success

- 운영진이 콘텐츠 변경을 위해 개발자(sione)에게 연락하는 횟수 0
- 신청자 폼 제출 즉시 디스코드 알림 수신

### Technical Success

- Railway 인증 정상 작동 (미인증 접근 차단)
- 폼 제출 데이터 Railway DB 저장 및 디스코드 알림 발송
- 현장 사진 교체 후 랜딩페이지 즉시 반영

## Product Scope

### MVP

- 로그인 (이메일+비밀번호, Railway JWT 인증)
- 폼 제출 → Railway DB 저장 + 디스코드 웹훅 알림
- 신청자 목록 조회
- 현장 사진 변경 (가이드 플로우, Railway Storage)
- 랜딩페이지 폼 엔드포인트 Apps Script → Railway 교체
- 푸터에 관리자 링크 추가

## User Journeys

### Journey 1 — 직원: 신청자 확인

월요일 아침, 직원 지은씨가 주말 동안 들어온 체험수업 신청자를 확인해야 한다. 랜딩페이지 푸터 "관리자" 링크 클릭 → 이메일·비밀번호 로그인 → 신청자 목록 확인(이름·연락처·신청일, 최신순) → 전화로 예약 잡음. sione 개입 없음.

### Journey 2 — 운영진: 현장 사진 교체

새 레슨 현장 사진으로 교체한다. 관리자 접속 → 가이드 플로우: "무엇을 바꿀까요?" → [현장 사진] → "어떤 사진을 바꿀까요?" → [사진 1 / 2 / 3] → 업로드 → 랜딩페이지 즉시 반영. 기술 용어 없이 의도만 선택하면 완료.

### Journey Requirements Summary

- 인증: 이메일+비밀번호, JWT 세션 유지
- 신청자 목록: 이름·연락처·신청일, 최신순 정렬, 구력·특이사항 확장 가능
- 가이드 플로우: 의도 선택 → 슬롯 선택 → 업로드 (운영자 언어)
- 즉시 반영: 저장 후 랜딩페이지 바로 적용

## Web App Specific Requirements

### Technical Architecture

- **프론트엔드:** Netlify 정적 배포, `/admin` 라우트 추가 (Vanilla JS)
- **백엔드:** Railway Node.js — 인증 API + 사진 업로드 + 폼 수신
- **DB:** Railway PostgreSQL — 관리자 계정, 신청자 데이터
- **스토리지:** Railway Storage — 현장 사진 파일
- **알림:** 디스코드 웹훅 — 신청자 폼 제출 시 실시간 알림

### Browser Support

- 모바일 우선 (Chrome / Safari 최신 버전)

### Skip

- SEO (관리자 페이지는 검색 노출 불필요)
- 접근성 (내부 도구)
- 실시간 연결 (디스코드 알림으로 대체)

## Project Scoping

### MVP Strategy

운영 의존성 제거 — 개발자 없이 운영 가능한 최소 시스템. 구글 계정 이슈로 구글 시트 → Railway DB 완전 이전.

### Risk Mitigation

- **디스코드 알림:** 웹훅 URL 환경변수 관리, 알림 실패가 DB 저장에 영향 없음
- **Railway 의존성:** 무료 플랜으로 시작, 월 20건 수준에서 비용 없음
- **플랜B:** Railway 장애 시 폼 데이터 이메일 직접 발송으로 임시 대응

## Functional Requirements

### 인증 (Authentication)

- FR1: 관리자는 이메일과 비밀번호로 로그인할 수 있다
- FR2: 관리자는 로그인 상태를 세션 동안 유지할 수 있다
- FR3: 관리자는 로그아웃할 수 있다
- FR4: 미인증 사용자는 `/admin` 하위 페이지에 접근할 수 없다

### 신청자 관리 (Applicant Management)

- FR5: 관리자는 체험수업 신청자 목록을 조회할 수 있다
- FR6: 신청자 목록은 이름, 연락처, 신청일을 표시한다
- FR7: 신청자 목록은 최신순으로 정렬된다
- FR8: 신청자 상세 정보는 골프 구력, 특이사항 등 추가 필드를 포함할 수 있다
- FR9: 관리자는 신청자별 메모/특이사항을 확인할 수 있다

### 신청 접수 (Form Submission)

- FR10: 방문자는 랜딩페이지에서 체험수업 신청 폼을 제출할 수 있다
- FR11: 폼 제출 시 데이터가 Railway DB에 저장된다
- FR12: 폼 제출 시 디스코드 채널로 알림이 발송된다

### 콘텐츠 관리 (Content Management)

- FR13: 관리자는 가이드 플로우를 통해 현장 사진을 교체할 수 있다
- FR14: 가이드 플로우는 운영자 언어로 단계별 안내를 제공한다
- FR15: 관리자는 현장 사진 슬롯(1·2·3)별로 개별 교체할 수 있다
- FR16: 교체된 사진은 랜딩페이지에 즉시 반영된다

### 접근 진입점 (Access Entry)

- FR17: 랜딩페이지 푸터에 관리자 페이지 링크가 존재한다
- FR18: 관리자 링크는 `/admin` 로그인 화면으로 이동한다

## Non-Functional Requirements

### 보안 (Security)

- 모든 API 통신은 HTTPS로만 허용
- JWT 토큰 만료 시간 24시간
- 비밀번호는 bcrypt 해싱 저장 (평문 저장 금지)
- `/admin` 하위 경로는 유효한 토큰 없이 응답 불가

### 성능 (Performance)

- 신청자 목록 로드: 2초 이내
- 사진 업로드 후 랜딩페이지 반영: 5초 이내

### 통합 (Integration)

- Railway DB 연결 실패 시 사용자에게 명확한 오류 메시지 표시
- 디스코드 웹훅 실패 시 DB 저장 유지 (알림 실패가 데이터 손실로 이어지지 않음)

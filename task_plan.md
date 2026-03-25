# Task Plan: 관리자 페이지 구축 (공지사항·기업뉴스 CMS)

## Goal
공지사항·기업뉴스를 관리자가 CRUD할 수 있는 CMS 구축
- 관리자 페이지: `/admin` (이메일/비밀번호 보호)
- 프론트엔드: `/[lang]/company/news`, `/[lang]/company/press` → DB 연동

---

## 기술 결정 (Architecture Decisions)

### DB & Auth: Supabase 채택
- PostgreSQL + 내장 Auth + Vercel 연동 간단 + 무료 티어 충분
- 대안: Vercel KV(복잡한 쿼리 어려움), JSON 파일(Vercel 서버리스에서 쓰기 불가)

### Admin Auth: Supabase Auth (Email/Password)
- Supabase 대시보드에서 admin 계정 직접 생성 (회원가입 UI 불필요)
- Next.js middleware로 `/admin/**` 경로 보호

### API: Next.js Route Handlers
- `/api/notices` — GET(목록), POST(생성)
- `/api/notices/[id]` — GET, PUT, DELETE
- `/api/press` — GET(목록), POST(생성)
- `/api/press/[id]` — GET, PUT, DELETE

---

## Phases

### Phase 0: Supabase 설정 (사용자 작업) ⬜
- [ ] supabase.com에서 계정 생성 및 새 프로젝트 생성
- [ ] DB 테이블 생성 (SQL 스크립트 제공)
- [ ] Project URL, anon key, service_role key 확인
- [ ] .env.local 파일에 환경변수 입력
- [ ] Vercel 프로젝트에 환경변수 추가

### Phase 1: 패키지 설치 & Supabase 클라이언트 ⬜
- [ ] @supabase/supabase-js, @supabase/ssr 설치
- [ ] src/lib/supabase.ts (브라우저 클라이언트)
- [ ] src/lib/supabase-server.ts (서버 클라이언트)
- [ ] src/lib/supabase-admin.ts (service role 클라이언트)

### Phase 2: API Route Handlers ⬜
- [ ] app/api/notices/route.ts (GET, POST)
- [ ] app/api/notices/[id]/route.ts (GET, PUT, DELETE)
- [ ] app/api/press/route.ts (GET, POST)
- [ ] app/api/press/[id]/route.ts (GET, PUT, DELETE)
- [ ] 관리자 인증 검증 미들웨어

### Phase 3: Admin UI ⬜
- [ ] app/admin/login/page.tsx
- [ ] app/admin/page.tsx (대시보드)
- [ ] app/admin/notices/page.tsx (목록+삭제)
- [ ] app/admin/notices/new/page.tsx (작성)
- [ ] app/admin/notices/[id]/edit/page.tsx (수정)
- [ ] app/admin/press/page.tsx (목록+삭제)
- [ ] app/admin/press/new/page.tsx (작성)
- [ ] app/admin/press/[id]/edit/page.tsx (수정)
- [ ] middleware.ts: /admin 경로 세션 보호

### Phase 4: 프론트엔드 연동 ⬜
- [ ] /[lang]/company/news → DB 연동 (하드코딩 제거)
- [ ] /[lang]/company/news/[id] 상세 페이지 신규 생성
- [ ] /[lang]/company/press → DB 연동
- [ ] /[lang]/company/press/[id] 상세 페이지 신규 생성

### Phase 5: 배포 ⬜
- [ ] Vercel 환경변수 확인
- [ ] GitHub push → 자동 배포
- [ ] 배포 후 동작 테스트

---

## 현재 진행: Phase 0 (사용자 Supabase 설정 대기중)
ko/en/ja 각각 번역 적용.

## Phases

### Phase 1: Research [completed]
- [x] shop 페이지 전체 구조/텍스트 수집
- [x] 모든 이미지 URL 수집
- [x] 비교표 데이터 수집
- [x] findings.md 작성

### Phase 2: Implementation [in_progress]
- [ ] R1Gallery 클라이언트 컴포넌트 생성
- [ ] locale ko/en/ja 전체 업데이트 (17섹션)
- [ ] page.tsx 완전 재작성 (17섹션)

### Phase 3: Build & Deploy [pending]
- [ ] TypeScript 빌드 검증
- [ ] GitHub commit + push
- [ ] Vercel 배포 확인

### Phase 4: Verification [pending]
- [ ] 원본 shop 페이지와 섹션별 비교
- [ ] 3개 언어 페이지 확인

## Key Files
- `src/app/[lang]/neosmartpen/product-r1/page.tsx`
- `src/components/neosmartpen/R1Gallery.tsx` (신규)
- `src/locales/ko.ts`
- `src/locales/en.ts`
- `src/locales/ja.ts`

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| - | - | - |

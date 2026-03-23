# Task Plan: /ja 회사소개 페이지 (neolab.co.jp 복사)

## Goal
1. /ja GNB 회사소개 하위 메뉴(공지사항, 기업뉴스, BI) 모두 삭제
2. 회사소개 클릭 시 내부 `/ja/company` 이동
3. `/ja/company` 페이지는 https://neolab.co.jp/ 를 완전 복사

## Phases

### Phase 1: Research [in_progress]
- [ ] neolab.co.jp 전체 구조/텍스트/이미지 분석
- [ ] Header.tsx ja 처리 확인
- [ ] /[lang]/company/page.tsx 현재 구조 확인

### Phase 2: GNB 수정 [pending]
- [ ] Header.tsx ja일 때 company 하위메뉴 제거
- [ ] ja 회사소개 href → `/${lang}/company`

### Phase 3: company 페이지 구현 [pending]
- [ ] ja 전용 company 페이지 또는 lang 분기 처리
- [ ] neolab.co.jp 콘텐츠 완전 복사

### Phase 4: 검증 [pending]
- [ ] /ja/company 브라우저 확인
- [ ] 원본과 비교

## Errors Encountered
| Error | Attempt | Resolution |
|-------|---------|------------|
| - | - | - |

## Key Files
- `src/components/Header.tsx`
- `src/app/[lang]/company/page.tsx`
- `src/locales/ja.ts`

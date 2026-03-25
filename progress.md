# Progress – 4개 제품 지원 페이지 복사

## Phase 1~4: 리서치 `완료`
- [x] support-sori, mediaplayer, beam, smartpen 크롤링
- [x] 텍스트·링크·이미지 URL 전체 수집
- [x] CDN 이미지는 hotlink 차단 확인 → 내부 이미지 사용

## Phase 5: 이미지 `완료`
- [x] 악세서리 이미지 CDN 차단 → 이모지 아이콘으로 대체
- [x] 제품 영웅 이미지는 /images/customer/ 기존 파일 활용

## Phase 6: 페이지 구현 `완료`
- [x] support-sori/page.tsx
- [x] support-mediaplayer/page.tsx
- [x] support-beam/page.tsx
- [x] support-smartpen/page.tsx
- [x] SupportFaqAccordion 공통 컴포넌트

## Phase 7: 링크 연결 `완료`
- [x] customer/page.tsx 외부 → 내부 링크 교체

## Phase 8: 검증 `완료`
- [x] 4페이지 모두 200 OK
- [x] 소리펜 스냅샷 검증 완료

## Phase 9: 배포 `완료`

## Phase 10: 게시글 마이그레이션 `완료`
- [x] neolab.kr/news/ → Firestore notices 컬렉션 (11개)
- [x] neolab.kr/press/ → Firestore press 컬렉션 (14개)
- [x] neolab.kr/customer/ → Firestore customer_notices 컬렉션 (24개)
- [x] HTML 엔티티 정리 (&#8217; &#039; 등 → 일반 문자)
- [x] 스크립트: scripts/migrate-posts.mjs, scripts/fix-html-entities.mjs

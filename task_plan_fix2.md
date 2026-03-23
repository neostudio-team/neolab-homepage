# Task Plan - 2차 감사 결과 수정

## Goal
2차 전수 점검에서 발견된 모든 문제 수정

## Phase 1: Knowledge Base title + generateMetadata `complete`
- [ ] knowledge-base/page.tsx에 generateMetadata() 추가
- [ ] en.ts에 knowledgeBase.metadata 키 추가
- [ ] ko.ts에 knowledgeBase.metadata override 추가
- [ ] ja.ts에 knowledgeBase.metadata override 추가

## Phase 2: JA 3페이지 일본어 번역 누락 `complete`
- [ ] ja.ts에 hybriddocs 전체 override 추가
- [ ] ja.ts에 ncodePdf 전체 override 추가
- [ ] ja.ts에 knowledgeBase 전체 override 추가

## Phase 3: EN LAMY 누락 섹션 복원 `complete`
- [ ] 원본 사이트에서 Highlights/Package/User Guide 섹션 내용 추출
- [ ] en.ts에 productLamy에 highlights/package/userGuide 키 추가
- [ ] product-lamy/page.tsx에 3개 섹션 추가
- [ ] EN title "LAMY" → "LAMY-2022" 수정

## Phase 4: Customer FAQ/가이드 복원 (KO/JA) `complete`
- [ ] 원본 KO 사이트에서 FAQ/가이드 콘텐츠 추출
- [ ] 원본 JA 사이트에서 FAQ 콘텐츠 추출
- [ ] customer/page.tsx에 가이드/FAQ 섹션 추가
- [ ] ko.ts에 customer FAQ 콘텐츠 추가
- [ ] ja.ts에 customer FAQ 콘텐츠 추가
- [ ] en.ts에 customer 기본 구조 추가

## Phase 5: KO heading 줄바꿈 버그 수정 `resolved - false positive`
NOTE: `<br>` 태그가 브라우저에서 줄바꿈을 정상적으로 제공함. curl 텍스트 추출 시 `<br>` 제거되어 합쳐진 것처럼 보이는 것은 감사 방법의 한계.

- [ ] ko.ts에서 "평행우주처럼디지털에도" → "평행우주처럼 디지털에도" 공백 추가
- [ ] ko.ts에서 "필기하고모바일이나" → "필기하고 모바일이나" 공백 추가
- [ ] 기타 줄바꿈 합쳐짐 확인

## Phase 6: Title 불일치 수정 `complete`
- [ ] EN gridaboard: "그리다-2022" → "Grida board"
- [ ] EN LAMY: "LAMY" → "LAMY-2022"
- [ ] KO neo-studio: "NEOSTUDIO" → "네오스튜디오"
- [ ] KO papertube: "페이퍼튜브_22" → "페이퍼튜브"
- [ ] KO notebooks: "notebook_22" → "N 노트"
- [ ] KO gridaboard: "그리다-2022" → "Grida board"
- [ ] JA notebooks: "notebook_22" → "Nノート"
- [ ] JA ncode-pdf title suffix: "Neo Smartpen Official Site" → "ネオスマートペン"
- [ ] JA papertube: "PaperTube" → "PaperTubeIntro"

## Phase 7: JA 구매 링크 수정 `complete`
- [x] product-m1 빈 링크 → lang별 스토어 URL
- [x] product-reco 한국 스마트스토어 → lang별 스토어 URL
- [x] product-dimo 빈 링크 → lang별 스토어 URL (추가 발견)
- [ ] JA product-m1 빈 링크 수정
- [ ] JA product-reco 한국 스마트스토어 → 적절한 링크로 변경

## Phase 8: 검증 `complete`
- [x] tsc --noEmit 0 에러
- [x] EN 15/15 라우트 200 OK
- [x] KO 15/15 라우트 200 OK
- [x] JA 15/15 라우트 200 OK
- [x] 주요 title 재확인 완료:
  - EN knowledge-base: "Knowledge Base | Neo Smartpen Official Site" ✅
  - EN product-lamy: "LAMY-2022 | Neo Smartpen Official Site" ✅
  - EN gridaboard: "Grida board | Neo Smartpen Official Site" ✅
  - KO neo-studio: "네오스튜디오 | 네오스마트펜 공식 페이지" ✅
  - KO notebooks: "N 노트 | 네오스마트펜 공식 페이지" ✅
  - JA hybriddocs: "HybridDocs | ネオスマートペン" ✅
  - JA ncode-pdf: "Ncode PDF | ネオスマートペン" ✅
  - JA knowledge-base: "ナレッジベース | ネオスマートペン" ✅

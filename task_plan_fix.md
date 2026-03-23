# Task Plan - 전체 페이지 수정

## Goal
findings.md에서 발견된 모든 문제를 수정하여 localhost 페이지를 원본 사이트와 최대한 일치시킴

## Phase 1: Title 메타데이터 추가 (8개 페이지) `complete`
generateMetadata() 추가 + 원본 사이트 타이틀 일치:
- [x] neo-studio: "Neo Studio Introduction | Neo Smartpen Official Site" / "NEOSTUDIO | 네오스마트펜 공식 페이지" / "Neo Studio 2 | ネオスマートペン"
- [x] papertube: "페이퍼튜브_22 | Neo Smartpen Official Site" / "페이퍼튜브_22 | 네오스마트펜 공식 페이지" / "PaperTubeIntro | ネオスマートペン"
- [x] notebooks: "notebook_22 | Neo Smartpen Official Site" / "notebook_22 | 네오스마트펜 공식 페이지" / "notebook_22 | ネオスマートペン"
- [x] gridaboard: "그리다-2022 | Neo Smartpen Official Site" / "그리다-2022 | 네오스마트펜 공식 페이지" / "GridaBoardIntro | ネオスマートペン"
- [x] hybriddocs: "HybridDocs | Neo Smartpen Official Site" / "HybridDocs | 네오스마트펜 공식 페이지"
- [x] penmanager: "penmanager | Neo Smartpen Official Site" / "Pen Manager | 네오스마트펜 공식 페이지"
- [x] ncode-pdf: "Ncode PDF | Neo Smartpen Official Site" / "Ncode PDF | 네오스마트펜 공식 페이지"
- [x] customer: "CS_22 | Neo Smartpen Official Site" / "네오랩 지식인 | 네오스마트펜 공식 페이지"
- [x] product-reco title: RECO → RECO_22

## Phase 2: Critical 페이지 수정 `complete`
### 2a. papertube ✅
- [x] EASY/SHORT/LIGHT/SAVE/SIMPLE/QUICK/FREE 키워드 섹션 복원
- [x] 사용법 단계별 가이드 (❶~❹) 복원
- [x] #Create/#Explainer/#Video/#Like a boss 해시태그 섹션 복원
- [x] PIP 섹션, 컨트롤러 섹션 보완
- [x] JA 서비스 종료 안내 (suspensionNotice) 추가

### 2b. notebooks ✅
- [x] 누락 제품 4종 추가 (N memo, N Blank Planner, N pocket, N Holder)
- [x] iPad vs 디지털노트 비교 섹션 추가
- [x] 편집/공유/검색 이미지 섹션 추가
- [x] 제품별 이미지 10개 추가

### 2c. neo-studio ✅
- [x] 10개 기능 그리드 추가 (Easy Connect, Edit, Video Share, Search 등)
- [x] Supported Languages 섹션 추가
- [x] 데스크톱 기능 (Do more, Pen Mouse) 보완

## Phase 3: Major 페이지 수정 `complete`
### 3a. Home EN ✅
- [x] Highlight heading H2→H1
- [x] 앱 소개 accordion에 H3 태그 추가 (Neo Studio, Grida Board, PaperTube)
- [x] EN 뉴스/블로그 섹션 추가 (HybridDocs, 45% frustrations, Australian market)

### 3b. gridaboard ✅
- [x] "GRIDA BOARD" H1 복원
- [x] 비대면교육 (Remote Education) 섹션 복원
- [x] 대량 구매 문의 (Bulk Purchase) 섹션 복원

### 3c. hybriddocs ✅
- [x] #LIMITELESS / #EFFICIENT / #STORYTELLING 라벨 H5 태그로 복원
- [x] 사용 방법 3단계 H5 태그로 복원

### 3d. product-reco ✅
- [x] Title RECO_22로 수정 (EN/KO)

## Phase 4: 클라이언트 locale redirect `resolved`
- [x] 코드에 클라이언트 사이드 redirect 로직 없음 → 감사 시 오탐

## Phase 5: 검증 `complete`
- [x] tsc 0 에러
- [x] EN 14/14 라우트 200 OK
- [x] KO 9/9 라우트 200 OK
- [x] JA 9/9 라우트 200 OK
- [x] 모든 Title 원본과 일치 확인

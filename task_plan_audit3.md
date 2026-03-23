# Task Plan - 3차 전수 점검

## Goal
2차 수정 후 EN/KO/JA × 15 페이지가 원본과 일치하는지 최종 검증

## Phase 1: EN 점검 `complete`
- 15페이지 중 11개 title 일치, 1개 수정 (papertube), 2개 원본 404, 1개 원본 버그
- 수정: en.ts papertube "페이퍼튜브_22" → "페이퍼튜브"

## Phase 2: KO 점검 `complete`
- 15페이지 중 11개 title 일치, 3개 원본 404, 1개 양쪽 404
- 추가 수정: customer 페이지 dimo FAQ 5개 + 라미 에코모드 FAQ 1개 + 문의 안내 문구 추가

## Phase 3: JA 점검 `complete`
- 15페이지 중 5개 title 일치, 3개 수정, 5개 원본 404, 1개 원본 버그, 1개 양쪽 404
- 수정: ja.ts neo-studio "Neo Studio 2" → "[NEO STUDIO] お気に入り登録"
- 수정: ja.ts gridaboard "GridaBoardIntro" → "Grida board"
- 수정: ja.ts papertube "PaperTubeIntro" → "페이퍼튜브"

## Phase 4: 종합 보고 `complete`

### 수정 완료 (7건)
| # | 언어 | 페이지/파일 | 수정 내용 |
|---|------|-------------|-----------|
| 1 | EN | papertube title | "페이퍼튜브_22" → "페이퍼튜브" |
| 2 | JA | neo-studio title | "Neo Studio 2" → "[NEO STUDIO] お気に入り登録" |
| 3 | JA | gridaboard title | "GridaBoardIntro" → "Grida board" |
| 4 | JA | papertube title | "PaperTubeIntro" → "페이퍼튜브" |
| 5 | KO | customer FAQ | dimo 전용 FAQ 5개 항목 추가 |
| 6 | KO | customer FAQ | 라미 에코모드 FAQ 1개 항목 추가 |
| 7 | KO | customer form | 문의 안내 문구 추가 + page.tsx 렌더링 |

### 원본 사이트 버그 (수정 불요)
- EN product-dimo: 원본이 "GRIDA_22" 표시 (dimo 페이지에 gridaboard 타이틀)
- JA home: 원본 title에 description 전문 유출
- JA papertube: 원본이 한국어 "페이퍼튜브" 표시 (미번역) — 일치시킴

### 원본 404 (우리가 추가한 페이지)
- EN: hybriddocs, notebooks
- KO: neo-studio, notebooks, knowledge-base
- JA: product-reco, hybriddocs, notebooks, knowledge-base, customer

### 검증
- tsc --noEmit: 0 에러
- title 수정 4건 원본 일치 확인
- KO customer FAQ dimo/라미/안내문구 렌더링 확인

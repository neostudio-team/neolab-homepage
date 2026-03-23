# 2차 전수 점검 종합 보고서

**점검일**: 2026-03-11
**범위**: EN/KO/JA × 15개 페이지 = 45개 페이지 점검

---

## 전체 요약

| 언어 | ✅ 양호 | ⚠️ 경미 | ❌ 심각 | N/A(원본없음/404) |
|------|---------|---------|--------|-------------------|
| EN   | 3       | 7       | 3      | 2                 |
| KO   | 2       | 9       | 3      | 1                 |
| JA   | 7       | 5       | 3      | 0*                |

*JA는 원본 없는 3개(HybridDocs, RECO, Knowledge Base) 중 HybridDocs/Knowledge Base가 영어로 표시되어 ❌로 분류

---

## 🔴 즉시 수정 필요 (CRITICAL)

### 1. Knowledge Base - title 미설정 (EN/KO/JA 공통)
- **현재**: `"Home - NeoLAB Convergence Inc."` (기본 fallback)
- **원본 EN**: `"Knowledge Base | Neo Smartpen Official Site"`
- **수정**: generateMetadata() 추가 필요

### 2. JA 경로에서 영어로 표시되는 3개 페이지
| 페이지 | localhost JA 언어 | 필요 조치 |
|--------|------------------|-----------|
| HybridDocs | EN ❌ | JA 번역 추가 (ja.ts에 hybriddocs 키 override) |
| Ncode PDF | EN ❌ | JA 번역 추가 (ja.ts에 ncodePdf 키 override) |
| Knowledge Base | EN ❌ | JA 번역 추가 (ja.ts에 knowledgeBase 키 override) |

### 3. EN LAMY 페이지 - 원본 대비 주요 콘텐츠 누락
- 원본 H1 `"LAMY meets digital"` → localhost `"A wave of thought"`로 변경됨
- 누락 섹션: **Highlights**, **What's in the package**, **Lamy User Guide Download**, 다국어 가이드(Espanol/Italiano/Francais/Nederlandse)
- title: 원본 `"LAMY-2022"` vs localhost `"LAMY"` (EN만)

### 4. Customer 페이지 - FAQ/가이드 콘텐츠 대량 누락 (KO/JA)
- **KO 원본**: 유저 가이드 16종, 제품별 FAQ, 사용법, 구매방법 → localhost는 단순 문의 폼만
- **JA 원본**: 제품별 FAQ 9개 카테고리 → localhost는 단순 문의 폼만
- EN은 원본도 단순 구조여서 차이 적음

---

## 🟡 수정 권장 (HIGH)

### 5. Heading 줄바꿈 합쳐짐 버그 (KO product-n2, product-m1, product-dimo)
- `"아날로그 기록이 평행우주처럼디지털에도 그대로 남겨져요"` ← 공백 누락
- `"필기하고모바일이나 PC에서"` ← 공백 누락
- 원인: `<br>` 태그 제거 시 공백 미삽입

### 6. Title 불일치 목록

| 페이지 | 언어 | 원본 title | localhost title | 심각도 |
|--------|------|-----------|----------------|--------|
| Knowledge Base | EN | Knowledge Base \| Neo Smartpen Official Site | Home - NeoLAB Convergence Inc. | 🔴 |
| Knowledge Base | KO | (404) | Home - NeoLAB Convergence Inc. | 🔴 |
| Knowledge Base | JA | (404) | Home - NeoLAB Convergence Inc. | 🔴 |
| LAMY | EN | LAMY-2022 \| Neo Smartpen Official Site | LAMY \| Neo Smartpen Official Site | 🟡 |
| Gridaboard | EN | Grida board \| Neo Smartpen Official Site | 그리다-2022 \| Neo Smartpen Official Site | 🟡 |
| Dimo | EN | GRIDA_22 \| Neo Smartpen Official Site | Dimo_22 \| Neo Smartpen Official Site | 🟡* |
| Neo Studio | KO | 네오스튜디오 | NEOSTUDIO | ⚠️ |
| PaperTube | KO | 페이퍼튜브 | 페이퍼튜브_22 | ⚠️ |
| Notebooks | KO | N 노트 | notebook_22 | ⚠️ |
| Gridaboard | KO | Grida board | 그리다-2022 | ⚠️ |
| Notebooks | JA | N 노트(KO) | notebook_22 | ⚠️ |
| Ncode PDF | JA | Ncode PDF \| ネオスマートペン | Ncode PDF \| Neo Smartpen Official Site | ⚠️ |
| PaperTube | JA | PaperTubeIntro \| ネオスマートペン | PaperTube \| ネオスマートペン | ⚠️ |

\* Dimo EN: 원본 title "GRIDA_22"가 오류로 보임, localhost "Dimo_22"가 올바를 가능성 높음

### 7. JA Product M1 구매 링크 빈 상태
- `"詳細はこちら => #"` (빈 링크)

### 8. JA Product RECO 구매 링크가 한국 네이버 스마트스토어
- JA 사용자에게 부적절한 한국 쇼핑몰 링크

---

## ⚠️ 경미한 차이 (의도적 리뉴얼/개선 포함)

### Heading 레벨 변경 (공통 패턴)
WordPress → Next.js 마이그레이션에서 heading 계층 구조 개편됨. 대부분 의도적 개선으로 보임.
- 원본의 과다한 H1 → localhost에서 H2/H3으로 적절히 배분
- EN: Home, Neo Studio, Penmanager, Ncode PDF, Customer, Product RECO
- KO: Home, Pen Manager, Ncode PDF
- JA: Product M1, Product Dimo

### 콘텐츠 리뉴얼 (의도적 변경)
- **Neo Studio** (EN/KO): Key Features 10개 그리드, Supported Languages 등 새 섹션 추가
- **Notebooks** (EN/KO/JA): 완전 리뉴얼 - iPad 비교, 편집/공유/검색 섹션, 10종 라인업
- **Product M1/Dimo**: 문구 표현 변경 (의미 동일), 공통 제품 섹션 추가

### EN PaperTube 원본 언어 문제
- 원본 `neosmartpen.com/papertube/`가 한국어 콘텐츠를 반환 (원본 사이트 버그)
- localhost EN은 영어로 정상 제공

### 원본 404 페이지
| 페이지 | EN | KO | JA |
|--------|----|----|-----|
| Notebooks | 404 | ✅ | ✅(KO) |
| HybridDocs | 404 | ✅ | 404 |
| Knowledge Base | ✅ | 404 | 404 |
| Product RECO | ✅ | ✅ | 404 |

---

## 수정 우선순위 정리

| 순위 | 항목 | 영향 범위 | 난이도 |
|------|------|----------|--------|
| 1 | Knowledge Base title (generateMetadata 추가) | EN/KO/JA | 쉬움 |
| 2 | JA HybridDocs/Ncode PDF/Knowledge Base 일본어 번역 | JA 3페이지 | 중간 |
| 3 | EN LAMY 누락 섹션 복원 | EN 1페이지 | 중간 |
| 4 | Customer FAQ/가이드 콘텐츠 복구 | KO/JA | 높음 |
| 5 | KO heading 줄바꿈 버그 수정 | KO 3페이지 | 쉬움 |
| 6 | Title 불일치 수정 (Gridaboard EN, LAMY EN 등) | 다수 | 쉬움 |
| 7 | JA 구매 링크 수정 (M1, RECO) | JA 2페이지 | 쉬움 |

---

## 상세 결과 파일
- EN: `findings_en.md`
- KO: `findings_ko.md`
- JA: `findings_ja.md`

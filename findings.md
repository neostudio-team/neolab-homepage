# Findings - EN/KO/JA 전수 점검 종합 보고서

> 점검일: 2026-03-11
> 방법: curl (서버사이드) HTML 추출 → heading/image 수, title, 콘텐츠 구조 비교

## 페이지 매핑

### Localhost 라우트 (15개)
| # | localhost path | EN original | KO original | JA original |
|---|---------------|-------------|-------------|-------------|
| 1 | /neosmartpen | / | / | / |
| 2 | /neosmartpen/product-n2 | /product-n2/ | /product-n2/ | /product-n2/ |
| 3 | /neosmartpen/product-m1 | /product-m1/ | /product-m1/ | /product-m1/ |
| 4 | /neosmartpen/product-dimo | /product-dimo/ | /product-dimo/ | /product-dimo/ |
| 5 | /neosmartpen/product-lamy | /product-lamy/ | /product-lamy/ | /product-lamy/ |
| 6 | /neosmartpen/product-reco | /product-reco/ | /product-reco/ | ❌ 없음 |
| 7 | /neosmartpen/neo-studio | /neo-studio-introduction/ | /app-neostudio/ | /neo-studio-2/ |
| 8 | /neosmartpen/gridaboard | /app-gridaboard/ | /app-gridaboard/ | /gridaboard-2/ |
| 9 | /neosmartpen/papertube | /app-papertube/ | /app-papertube/ | /papertube-2/ |
| 10 | /neosmartpen/penmanager | /penmanager/ | /penmanager/ | ❌ 없음 |
| 11 | /neosmartpen/hybriddocs | /solutions-hybriddocs/ | /hybriddocs/ | ❌ 없음 |
| 12 | /neosmartpen/notebooks | /paper-digitalnote/ | /paper-digitalnote/ | /paper-digitalnote/ |
| 13 | /neosmartpen/ncode-pdf | /ncode-pdf/ | /ncode-pdf/ | ❌ 없음 |
| 14 | /neosmartpen/customer | /customer/ | /customer/ | ❌ 없음 |
| 15 | /neosmartpen/knowledge-base | /knowledge-base/ | ❌ 없음 | ❌ 없음 |

### 원본에만 있는 페이지 (localhost에 없음)
- EN: /neoblog/ (블로그)
- KO: /a1/ (A1 제품 페이지)
- JA: /neo-smartpen-a1/, /faq/, /information-sub/*

---

## 크로스 언어 종합 매트릭스

| # | 페이지 | EN | KO | JA | 종합 |
|---|--------|:--:|:--:|:--:|:----:|
| 1 | Home | ❌ Major | ⚠️ Minor | ⚠️ Minor | ❌ Major |
| 2 | product-n2 | ⚠️ Minor | ⚠️ Minor | ⚠️ Minor | ⚠️ Minor |
| 3 | product-m1 | ⚠️ Minor | ❌ Major | 🔴 Major | ❌ Major |
| 4 | product-dimo | ⚠️ Minor | ❌ Major | 🔴 Major | ❌ Major |
| 5 | product-lamy | ⚠️ Minor | ⚠️ Minor | ⚠️ Minor | ⚠️ Minor |
| 6 | product-reco | ❌ Major | ❌ Major | N/A | ❌ Major |
| 7 | neo-studio | ❌ Major | ❌ Major | 🔴 Critical | 🔴 Critical |
| 8 | gridaboard | ❌ Major | ❌ Major | 🔴 Major | ❌ Major |
| 9 | papertube | 🔴 Critical | ❌ Major | 🔴 Critical | 🔴 Critical |
| 10 | penmanager | ⚠️ Minor | ⚠️ Minor | N/A | ⚠️ Minor |
| 11 | hybriddocs | ⚠️ Minor | ❌ Major | N/A | ❌ Major |
| 12 | notebooks | ❌ Major | ❌ Major | 🔴 Critical | 🔴 Critical |
| 13 | ncode-pdf | ⚠️ Minor | ⚠️ Minor | N/A | ⚠️ Minor |
| 14 | customer | ⚠️ Minor | N/A | N/A | ⚠️ Minor |

---

## 심각도별 분류

### 🔴 Critical (3 페이지) — 콘텐츠 자체가 크게 다름
| 페이지 | 핵심 이슈 |
|--------|-----------|
| **neo-studio** | Title 미설정, 이미지 -15~17개, 완전히 재설계된 콘텐츠 구조 |
| **papertube** | Title 미설정, 이미지 -8~9개, EASY/SHORT/LIGHT 등 키워드 섹션 전체 누락, 사용법 가이드 누락 |
| **notebooks** | Title 미설정, 이미지 -11~12개, heading -9~10개, 제품 4종 누락 (N memo, DIGITAL NOTEBOOK B5, N pocket, NEO SMART HOLDER) |

### ❌ Major (6 페이지) — 구조적 차이 있음
| 페이지 | 핵심 이슈 |
|--------|-----------|
| **Home** | EN: 6 heading 누락 (Neo Studio/Grida Board/PaperTube/뉴스 섹션 제거) |
| **product-m1** | 빈 heading 정리로 -5~7, 구성품 heading 병합 |
| **product-dimo** | 빈 heading 정리로 -5, localhost가 원본보다 콘텐츠 많음 (JA) |
| **product-reco** | Title 부분 변경, 이미지 +9~11, 사용법 step→spec grid 교체 |
| **gridaboard** | Title 미설정, "GRIDA BOARD" H1 누락, -2~3 heading |
| **hybriddocs** | Title 미설정, heading 계층 대폭 재구성, 사용 방법 섹션 축소 |

### ⚠️ Minor (5 페이지) — 경미한 차이
| 페이지 | 핵심 이슈 |
|--------|-----------|
| **product-n2** | 빈 heading 정리, `<br>` 제거로 heading 병합 (의도적) |
| **product-lamy** | +1~4 heading (#SMART WRITING 추가), heading level 변경 |
| **penmanager** | Title만 미설정, 콘텐츠 구조 동일 |
| **ncode-pdf** | Title만 미설정, 콘텐츠 구조 동일 |
| **customer** | Title만 미설정, subtitle 1개 누락 |

---

## 공통 이슈 (Cross-Language)

### 이슈 1: Title 미설정 (시스템 버그)
**영향 범위**: neo-studio, gridaboard, papertube, penmanager, hybriddocs, notebooks, ncode-pdf (+ customer EN)
**증상**: `<title>`이 "Home - NeoLAB Convergence Inc."로 표시
**원인**: 해당 페이지들의 `generateMetadata()`에서 locale dictionary의 title을 읽지 못하거나, metadata 설정 자체가 누락
**심각도**: 높음 (SEO에 직접 영향)

### 이슈 2: 이미지 대량 누락 (3개 페이지)
| 페이지 | EN 차이 | KO 차이 | JA 차이 |
|--------|---------|---------|---------|
| neo-studio | -1 | -15 | -17 |
| papertube | -8 | -9 | -8 |
| notebooks | -5 | -11 | -12 |

### 이슈 3: 클라이언트 사이드 locale redirect
**증상**: 브라우저에서 `/en/` 또는 `/ja/` URL 접근 시 브라우저 언어 설정에 따라 `/ko/`로 redirect
**영향**: EN/JA 실사용자가 KO 페이지로 강제 이동
**원인**: JavaScript 기반 locale detection (서버사이드 curl은 정상 200)

### 이슈 4: Heading Level 불일치
원본 사이트의 빈 `<h1>`, `<h2>` 태그와 `<br>`로 분리된 heading을 localhost에서 정리하면서 heading 수 차이 발생. 이는 대부분 **의도적 구조 개선**으로 판단.

---

## 우선 수정 권장 순서

1. **Title 메타데이터 설정** — 7개 페이지 (빠른 수정, 높은 SEO 효과)
2. **papertube 콘텐츠 보완** — 이미지 +8, 키워드 섹션 복원, 사용법 가이드 추가
3. **notebooks 제품 라인업 보완** — 누락 4종 추가, 이미지 +11
4. **neo-studio 이미지 마이그레이션** — 이미지 +15~17
5. **Home EN 섹션 복원** — Neo Studio/Grida Board/PaperTube/뉴스 섹션
6. **클라이언트 locale redirect 수정** — 미들웨어/클라이언트 로직 점검

상세: `findings_en.md`, `findings_ko.md`, `findings_ja.md` 참조

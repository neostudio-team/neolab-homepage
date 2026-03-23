# Task Plan - 2차 전수 점검 감사

## Goal
localhost와 원본 사이트 간 EN/KO/JA 3개 언어 × 15개 페이지 전수 비교 점검

## 원본 사이트
- EN: https://neosmartpen.com/
- KO: https://neosmartpen.co.kr/
- JA: https://neosmartpen.jp/

## localhost 라우트 (15개)
1. `/neosmartpen/` (Home)
2. `/neosmartpen/neo-studio`
3. `/neosmartpen/papertube`
4. `/neosmartpen/notebooks`
5. `/neosmartpen/gridaboard`
6. `/neosmartpen/hybriddocs`
7. `/neosmartpen/penmanager`
8. `/neosmartpen/ncode-pdf`
9. `/neosmartpen/customer`
10. `/neosmartpen/product-n2`
11. `/neosmartpen/product-m1`
12. `/neosmartpen/product-lamy`
13. `/neosmartpen/product-dimo`
14. `/neosmartpen/product-reco`
15. `/neosmartpen/knowledge-base`

## 점검 항목 (각 페이지별)
- [ ] `<title>` 태그 일치
- [ ] H1~H6 heading 구조 일치
- [ ] 주요 섹션 존재 여부
- [ ] 텍스트 콘텐츠 일치
- [ ] 이미지 존재/누락
- [ ] 링크/CTA 존재
- [ ] 언어별 차이점 (KO/JA 특수 콘텐츠)

## Phase 1: EN 페이지 점검 `complete`
원본 https://neosmartpen.com/ vs localhost:3000/en/neosmartpen/
→ findings_en.md 저장 완료

## Phase 2: KO 페이지 점검 `complete`
원본 https://neosmartpen.co.kr/ vs localhost:3000/ko/neosmartpen/
→ findings_ko.md 저장 완료

## Phase 3: JA 페이지 점검 `complete`
원본 https://neosmartpen.jp/ vs localhost:3000/ja/neosmartpen/
→ findings_ja.md 저장 완료

## Phase 4: 결과 종합 및 보고 `complete`
→ findings_audit2.md 종합 보고서 작성 완료

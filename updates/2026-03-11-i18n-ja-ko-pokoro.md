# 일본어 전체 번역 및 Pokoro 페이지 다국어 지원

## 변경 일자
2026-03-11

## 변경 요약
일본어(`ja`) 로케일에 누락된 모든 섹션의 번역을 추가하고, Pokoro 페이지의 하드코딩된 영어 텍스트를 dictionary 기반 다국어 시스템으로 리팩토링하여 한국어/일본어 번역을 적용했습니다.

## 변경된 파일
- `src/locales/ja.ts`: 일본어 번역 대폭 추가 (+472줄) — common, home, company, technology, soundpen, partnership, pokoro 섹션 전체 번역
- `src/locales/ko.ts`: Pokoro 페이지 한국어 번역 추가 (+128줄)
- `src/locales/en.ts`: Pokoro 페이지 텍스트를 dictionary 키로 추출 (+128줄)
- `src/app/[lang]/pokoro/page.tsx`: 하드코딩된 영어 텍스트를 `dict.pokoro` 기반으로 리팩토링

## 상세 내용

### 일본어 번역 추가 (ja.ts)
기존에 `...en` spread로 영어 텍스트를 그대로 상속받던 다음 섹션들을 일본어로 번역:
- `common.header` — 네비게이션 라벨 (会社紹介, 技術, スマートペン 등)
- `common.contactForm` — 폼 라벨 (お名前, メールアドレス 등)
- `common` 공통 문자열 — creatingNewValue, contactUsAt 등
- `home` — 메인 홈페이지 전체 콘텐츠
- `company` — 회사 소개 페이지
- `technology` — 기술 페이지
- `soundpen` — 소리펜 페이지
- `partnership` — 파트너십 페이지 (24개 파트너 항목 포함)
- `pokoro` — POKORO 제품 페이지

### Pokoro 페이지 다국어 지원
- 기존: 모든 텍스트가 TSX 파일에 영어로 하드코딩
- 변경: `dict.pokoro` dictionary 시스템을 통해 en/ko/ja 3개 언어 지원
- hero, sec01~sec06 전체 섹션의 텍스트를 dictionary 키로 변환

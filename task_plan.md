# Task Plan: 4개 제품 지원 페이지 복사

## 목표
neolab.kr의 지원 페이지 4개를 내부 Next.js 페이지로 완벽히 복사하고
/ko/customer의 "자세히 알아보기" 버튼과 연결

## 대상 페이지
1. 소리펜: https://www.neolab.kr/support-sori/
2. 미디어플레이어: https://www.neolab.kr/support-mediaplayer/
3. 빔프로젝터: https://www.neolab.kr/support-beam/
4. 네오스마트펜: https://www.neolab.kr/support-smartpen/

## 내부 경로
- /[lang]/customer/support-sori
- /[lang]/customer/support-mediaplayer
- /[lang]/customer/support-beam
- /[lang]/customer/support-smartpen

## Phases

### Phase 1: 소리펜 페이지 리서치 [ ]
- [ ] support-sori 크롤링 (섹션 구조, 이미지, 링크, 텍스트)
- [ ] findings.md에 기록

### Phase 2: 미디어플레이어 페이지 리서치 [ ]
- [ ] support-mediaplayer 크롤링

### Phase 3: 빔프로젝터 페이지 리서치 [ ]
- [ ] support-beam 크롤링

### Phase 4: 네오스마트펜 페이지 리서치 [ ]
- [ ] support-smartpen 크롤링

### Phase 5: 이미지 다운로드 [ ]
- [ ] 각 페이지 이미지 public/images/support/ 에 저장

### Phase 6: 페이지 구현 [ ]
- [ ] /[lang]/customer/support-sori/page.tsx
- [ ] /[lang]/customer/support-mediaplayer/page.tsx
- [ ] /[lang]/customer/support-beam/page.tsx
- [ ] /[lang]/customer/support-smartpen/page.tsx

### Phase 7: 링크 연결 [ ]
- [ ] customer/page.tsx 버튼 href → 내부 경로로 변경

### Phase 8: 검증 [ ]
- [ ] 각 페이지 로컬 프리뷰 확인
- [ ] 원본과 비교
- [ ] commit & push

## 현재 단계: Phase 1

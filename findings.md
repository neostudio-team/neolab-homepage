# Findings – 고객지원 제품군 섹션 복사

## 원본 (www.neolab.kr/customer/) 조사 결과

### 각 제품군의 상세 설명 섹션

| 순서 | 제품명 | 이미지 URL | 링크 URL | 버튼 |
|------|--------|-----------|---------|------|
| 1 | 소리펜 | https://www.neolab.kr/wp-content/uploads/2022/02/Neo-soripen.png | https://www.neolab.kr/support-sori | 자세히 알아보기 |
| 2 | 미디어플레이어 | https://www.neolab.kr/wp-content/uploads/2022/02/Neo-mediaplayer.png | https://www.neolab.kr/support-mediaplayer | 자세히 알아보기 |
| 3 | 빔프로젝터 | https://www.neolab.kr/wp-content/uploads/2022/02/Neo-beam.png | https://www.neolab.kr/support-beam | 자세히 알아보기 |
| 4 | 네오스마트펜 | https://www.neolab.kr/wp-content/uploads/2022/02/Neo-smartpen.png | https://www.neolab.kr/support-smartpen | 자세히 알아보기 |

### 레이아웃
- 4컬럼 그리드 (각 25%)
- 이미지 크기: 150px, border-radius: 0px (직사각형, 원형 아님)
- 배경: 흰색 (#fff) 아님 → 원본은 연한 회색빛 배경 (현재 코드는 bg-[#F5F8F8])
- 이미지 아래 제목(h4), 그 아래 링크 버튼

## 현재 코드의 문제점 (customer/page.tsx)

| 제품 | 현재 이미지 | 현재 링크 | 상태 |
|------|-----------|---------|------|
| 소리펜 | /images/soundpen/poppen_soundpen_001.png (제품 사진) | /{lang}/soundpen | ❌ 둘다 틀림 |
| 미디어플레이어 | /images/pokoro/sec01-img01.png | /{lang}/pokoro | ❌ 둘다 틀림 |
| 빔프로젝터 | /images/technology/Neo-02.png | neolab.kr/customer/ | ❌ 이미지 틀림, 링크 틀림 |
| 네오스마트펜 | /images/neosmartpen/main/hero_bg.jpg | /{lang}/neosmartpen | ❌ 둘다 틀림 |

또한 현재 이미지가 원형(rounded-full)으로 표시되고 있어서 원본과 다름.

## 수정 계획
1. 원본 이미지 4개를 public/images/customer/ 에 다운로드
2. 이미지 원형 → 직사각형으로 변경
3. 링크를 원본 외부 링크로 교체

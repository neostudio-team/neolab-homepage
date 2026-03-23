# KO 전수 점검 결과

비교 일시: 2026-03-11 (2차 정밀 점검)

## 요약
- 점검 페이지: 15/15
- 콘텐츠 거의 동일: 6개 (Home, HybridDocs, Pen Manager, Ncode PDF, Product LAMY, Product N2)
- 차이점 발견 (리뉴얼/변경): 7개 (Neo Studio, PaperTube, Notebooks, Gridaboard, Product M1, Product Dimo, Product RECO)
- 대량 콘텐츠 누락: 1개 (Customer)
- 원본 없음: 1개 (Knowledge Base)

## 요약 테이블

| # | 페이지 | Title 일치 | Heading 일치 | Image 수 (원본/로컬) | 종합 |
|---|--------|-----------|-------------|---------------------|------|
| 1 | Home | ✅ | ⚠️ h1->h2 변경 1건 | 17/19 | ⚠️ |
| 2 | Neo Studio | ❌ | ❌ 완전 리뉴얼 | 48/34 | ❌ |
| 3 | PaperTube | ❌ "_22" 추가 | ⚠️ 확장 | 4/6 | ⚠️ |
| 4 | Notebooks | ❌ | ❌ 완전 리뉴얼 | 2/24 | ❌ |
| 5 | Gridaboard | ❌ | ⚠️ 재구성 | 4/9 | ⚠️ |
| 6 | HybridDocs | ✅ | ✅ 레벨 개선 | 12/10 | ✅ |
| 7 | Pen Manager | ✅ | ⚠️ 문구 변경 | 8/8 | ⚠️ |
| 8 | Ncode PDF | ✅ | ⚠️ 문구 변경 | 22/22 | ⚠️ |
| 9 | Customer | ✅ | ❌ 대량 누락 | 2/2 | ❌ |
| 10 | Product N2 | ✅ | ⚠️ 줄바꿈 버그 | 17/17 | ⚠️ |
| 11 | Product M1 | ✅ | ⚠️ 줄바꿈 버그 | 15/15 | ⚠️ |
| 12 | Product LAMY | ✅ | ✅ 구조 개선 | 24/24 | ✅ |
| 13 | Product Dimo | ✅ | ⚠️ 줄바꿈 버그 | 13/15 | ⚠️ |
| 14 | Product RECO | ✅ | ⚠️ 확장/개선 | 13/24 | ⚠️ |
| 15 | Knowledge Base | N/A | N/A | -/2 | 원본 없음 |

---

## 페이지별 상세 결과

### 1. Home (/)
- **원본 URL**: https://neosmartpen.co.kr/ (200 OK)
- **원본 title**: "네오스마트펜 공식 페이지 | 필기구에 디지털의 편리함을 더해서"
- **localhost title**: "네오스마트펜 공식 페이지 | 필기구에 디지털의 편리함을 더해서"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 h1: "네오스마트펜 하이라이트", "네오스마트펜 지원 노트"
  - localhost h1: "네오스마트펜 하이라이트" (일치)
  - localhost h2: "네오스마트펜 지원 노트" (원본은 h1, localhost는 h2로 변경됨)
  - 나머지 headings(#digital writing, #Utilize, #자유자재, Neo Studio, 그리다 보드, 페이퍼튜브, 쉬운 조작) 모두 일치
- **이미지 수**: 원본 17개 / localhost 19개 (+2)
- **누락 섹션**: 없음
- **차이점**:
  - "네오스마트펜 지원 노트" heading 레벨 차이 (h1 -> h2)
  - 원본에 있던 WordPress 관련 외부 링크 정리됨
  - localhost footer에 SNS 링크(Facebook, Instagram, YouTube) 추가
- **종합 평가**: ⚠️ (heading 레벨 차이, 이미지 수 미세 차이)

---

### 2. Neo Studio (/neo-studio)
- **원본 URL**: https://neosmartpen.co.kr/neostudio/ (200 OK, /neo-studio/는 404)
- **원본 title**: "네오스튜디오 | 네오스마트펜 공식 페이지"
- **localhost title**: "NEOSTUDIO | 네오스마트펜 공식 페이지"
- **Title 일치**: ❌ ("네오스튜디오" vs "NEOSTUDIO" - 한글 vs 영문 대문자)
- **Heading 비교**:
  - 원본: "'네오스마트펜'으로 기록해보세요", "Features", 기능 14개(h5: 손쉬운 연결, 필기편집, 미디어 공유, 타임라인, 디지털 필기, 녹음 재생, 즐겨찾기, 태그, 검색, 파일 공유, 테마변경, 캘린더 등록, 네오노트 데이터 가져오기, 동기화)
  - localhost: "Neo Studio"(h1), "펜과 종이의 우아함을 디지털 세계와 융합", "크로스 플랫폼 접근", "창의력 공유", "아이디어에서 완성까지", "더 큰 화면", "간편한 편집", "검색 및 찾기", "주요 기능"(h2), 기능 10개(h4: 손쉬운 연결, 필기 편집, 미디어 공유, 검색, 간편 공유, 보이스 북마크, 태그, 북마크, 텍스트 변환, 자동 동기화)
- **이미지 수**: 원본 48개 / localhost 34개 (-14)
- **차이점**:
  - localhost는 **완전히 리뉴얼된 페이지** - 새로운 섹션 구성
  - 기능 목록: 14개 -> 10개로 재구성
  - localhost에 추가된 섹션: "크로스 플랫폼 접근", PDF/벡터/PNG 변환 기능, "지원 언어", "이제 PC에서도 네오스튜디오를 즐기세요", "펜 마우스"
  - 원본의 "타임라인", "디지털 필기", "녹음 재생", "캘린더 등록" 등이 제거/대체됨
  - 원본의 "구매하기" 섹션 -> localhost에서 제거
  - localhost에 App Store/Google Play 다운로드 링크 추가
- **종합 평가**: ❌ (의도적 리뉴얼이나, 콘텐츠가 크게 다름)

---

### 3. PaperTube (/papertube)
- **원본 URL**: https://neosmartpen.co.kr/papertube/ (200 OK)
- **원본 title**: "페이퍼튜브 | 네오스마트펜 공식 페이지"
- **localhost title**: "페이퍼튜브_22 | 네오스마트펜 공식 페이지"
- **Title 일치**: ❌ (localhost에 "_22" 접미사)
- **Heading 비교**:
  - 공통: h1 "페이퍼튜브", "다양한 배경서식으로 제작이 가능한 손안의 스튜디오, 페이퍼튜브", "배경화면 색상변경 (블랙/화이트)", "Ncode A4", "컨트롤러", "스탠드", "업그레이드된 영상제작을 위한 종이 리모콘, 페이퍼튜브 컨트롤러"
  - localhost 추가: "페이퍼튜브로 간단한 설명 비디오를 만들어 보세요", EASY/SHORT/LIGHT/SAVE/SIMPLE/QUICK/FREE, "Picture in Picture", "PIP", "MP4 저장", "간편한 공유"
  - 원본에만: h4 "SHOWCASE YOUR STORY!"
- **이미지 수**: 원본 4개 / localhost 6개 (+2)
- **차이점**:
  - title에 "_22" 접미사 (2022 리뉴얼 표시)
  - localhost가 더 풍부한 기능 소개
  - YouTube 채널 링크가 PaperTube 전용으로 변경
- **종합 평가**: ⚠️ (리뉴얼 확장판, 핵심 콘텐츠 포함)

---

### 4. Notebooks (/notebooks)
- **원본 URL**: https://neosmartpen.co.kr/notebook/ (200 OK, /notebooks/는 404)
- **원본 title**: "N 노트 | 네오스마트펜 공식 페이지"
- **localhost title**: "notebook_22 | 네오스마트펜 공식 페이지"
- **Title 일치**: ❌ ("N 노트" vs "notebook_22")
- **Heading 비교**:
  - 원본: h1 "N 노트", N 플래너 2019, 구글 캘린더 연동 가이드, N 캘린더 2019, 다양한 N 노트(14종), N 프로페셔널 노트/N 아이디어 패드/N 컬리지 노트 상세, 구매하기
  - localhost: h1 "여러분은 이미 매력적인 DIGITAL NOTEBOOK을 들이셨습니다", "손필기를 디지털로 저장", 아이패드 프로 비교, 편집/공유/검색, "DIGITAL PAPER 그냥 노트가 아니예요!", 노트북 라인업 10종
- **이미지 수**: 원본 2개 / localhost 24개 (+22)
- **차이점**:
  - **완전히 리뉴얼된 페이지**
  - 원본의 2019 플래너/캘린더 가이드 제거
  - 노트 라인업 14종 -> 10종 (N 플래너, N 캘린더, N 플레인노트, N 홀더(네이비) 등 제거)
  - localhost에 새 콘텐츠: 아이패드 프로 비교, 디지털 변환 기능 소개
- **종합 평가**: ❌ (완전 리뉴얼, 구 콘텐츠 대량 변경)

---

### 5. Grida Board (/gridaboard)
- **원본 URL**: https://neosmartpen.co.kr/gridaboard/ (200 OK)
- **원본 title**: "Grida board | 네오스마트펜 공식 페이지"
- **localhost title**: "그리다-2022 | 네오스마트펜 공식 페이지"
- **Title 일치**: ❌ ("Grida board" vs "그리다-2022")
- **Heading 비교**:
  - 공통: "학생", "선생님", "직장인" 대상 섹션, 화상 솔루션 화면 공유, "대량 구매 문의"
  - 원본: "가장 쉽고 빠른 강의 저작 도구", 6단계 사용법
  - localhost: "GRIDA BOARD", "생각을 공유하는 가장 빠른 방법", "스마트클래스키트" 인용구 추가
- **이미지 수**: 원본 4개 / localhost 9개 (+5)
- **차이점**:
  - title 변경 (2022 리뉴얼)
  - localhost에 "비대면교육" + "스마트클래스키트" 콘텐츠 추가
  - 원본의 상세 6단계 사용법 -> localhost에서 간소화
  - 핵심 콘텐츠(학생/선생님/직장인, 대량 구매 문의)는 유지
- **종합 평가**: ⚠️ (리뉴얼 버전, 핵심 내용 유지)

---

### 6. HybridDocs (/hybriddocs)
- **원본 URL**: https://neosmartpen.co.kr/hybriddocs/ (200 OK)
- **원본 title**: "HybridDocs | 네오스마트펜 공식 페이지"
- **localhost title**: "HybridDocs | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 콘텐츠 모두 일치: "템플릿 보다 자유롭게 생각한 그대로 빠르게", "하이브리드 독스™란?", "자유도", "키보드, 마우스 그리고 스마트펜", "효율성", "필기 따로 정리 따로 하지 마세요", "당신의 필기 그대로 문서가 됩니다", "스토리텔링", "지원 프로그램", "사용 방법", "활용사례", "DIY NCODE 노트북"
  - heading 레벨 변경: 원본의 과다한 h1 -> localhost에서 h4/h5로 의미론적 개선
- **이미지 수**: 원본 12개 / localhost 10개 (-2)
- **차이점**:
  - heading 레벨만 변경, 텍스트 콘텐츠 동일
  - 사용 방법 단계 번호 공백 추가 ("1.네오스튜디오" -> "1. 네오스튜디오")
- **종합 평가**: ✅ (콘텐츠 동일, heading 구조 개선)

---

### 7. Pen Manager (/penmanager)
- **원본 URL**: https://neosmartpen.co.kr/penmanager/ (200 OK)
- **원본 title**: "Pen Manager | 네오스마트펜 공식 페이지"
- **localhost title**: "Pen Manager | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 공통 구조: EASY CONNECT, PC-스마트펜 연결, 도구 소개, 구매
  - 문구 변경: "쉽고 효과적으로 생각을 전달하는 도구" -> "아이디어와 스케치를 즉시 공유하는 도구"
  - 문구 변경: "구매하기" -> "구매 방법"
  - 원본의 "Pen Manager 도움말 바로가기>" -> localhost에서 제거
  - heading 레벨 통일 (원본 h1/h2/h3 혼재 -> localhost h2 통일)
- **이미지 수**: 원본 8개 / localhost 8개 (일치)
- **차이점**:
  - 일부 문구 변경, heading 레벨 통일
  - localhost에 Windows/Mac 다운로드 링크 포함
- **종합 평가**: ⚠️ (구조 개선, 일부 문구 변경)

---

### 8. Ncode PDF (/ncode-pdf)
- **원본 URL**: https://neosmartpen.co.kr/ncode-pdf/ (200 OK)
- **원본 title**: "Ncode PDF | 네오스마트펜 공식 페이지"
- **localhost title**: "Ncode PDF | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 구조 유사, 문구 일부 변경:
    - "넉넉한 페이지" -> "충분한 페이지"
    - "Ncode 노트 용지" -> "다운로드"
    - "이건 꼭 알아 두세요" + "시험 인쇄를 먼저!" -> "인쇄하기 전에" + "먼저 테스트"
    - "스마트펜 입력 활성/비활성" -> "펜 입력 활성화/비활성화"
- **이미지 수**: 원본 22개 / localhost 22개 (일치)
- **차이점**:
  - 문구 변경 (의미는 동일)
  - heading 레벨 일부 조정
  - localhost에 Google Drive/ZIP 다운로드 링크 포함
- **종합 평가**: ⚠️ (구조 유사, 문구 일부 변경)

---

### 9. Customer (/customer)
- **원본 URL**: https://neosmartpen.co.kr/customer/ (200 OK)
- **원본 title**: "네오랩 지식인 | 네오스마트펜 공식 페이지"
- **localhost title**: "네오랩 지식인 | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본: h2 "유저 가이드"(2026/2025 플래너, 클라우드, R1, A1, 펜매니저, 그리다보드, 네오스튜디오, Lamy, dimo 등 16종 가이드), h2 "네오 스마트펜 사용법"(M1/N2, dimo), h2 "네오스튜디오 사용법", h2 "라미 사파리 올블랙 엔코드", h2 "네오노트 사용법", h2 "구매방법", h2 "문의", h1 "네오스마트펜을 찾아주셔서 감사합니다..." + 아코디언 형태 FAQ 다수
  - localhost: h1 "고객지원" (단일 heading) + "How Can We Help?" + 이름/이메일/제목/내용/보내기 문의 폼만 존재
- **이미지 수**: 원본 2개 / localhost 2개 (일치)
- **누락 콘텐츠**:
  - 유저 가이드 16종 전체
  - 제품별 FAQ/사용법 (M1, N2, dimo 등)
  - 네오스튜디오/라미/네오노트 사용법
  - 구매방법 안내
  - 문의 안내 상세 내용
- **종합 평가**: ❌ (가장 심각한 콘텐츠 누락 - FAQ, 가이드, 사용법 전부 없음. 단순 문의 폼으로 대체)

---

### 10. Product N2 (/product-n2)
- **원본 URL**: https://neosmartpen.co.kr/product-n2/ (200 OK)
- **원본 title**: "N2-2022 | 네오스마트펜 공식 페이지"
- **localhost title**: "N2-2022 | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 콘텐츠 대부분 일치
  - **줄바꿈 합쳐짐 버그**: "아날로그 기록이 평행우주처럼디지털에도 그대로 남겨져요" (공백 누락)
  - 같은 버그: "필기하고모바일이나 PC에서" (공백 누락)
  - 공통: BODY/PROCESSOR/GRIP 스펙, 터치한번으로 공유, 기록은 쉽게/저장은 빠르게 등
- **이미지 수**: 원본 17개 / localhost 17개 (일치)
- **종합 평가**: ⚠️ (콘텐츠 동일, heading 줄바꿈 합쳐짐 버그)

---

### 11. Product M1 (/product-m1)
- **원본 URL**: https://neosmartpen.co.kr/product-m1/ (200 OK)
- **원본 title**: "M1+2022 | 네오스마트펜 공식 페이지"
- **localhost title**: "M1+2022 | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 콘텐츠 대부분 일치
  - **줄바꿈 합쳐짐 버그**: "아날로그 기록이 평행우주처럼디지털에도 그대로 남겨져요"
  - 띄어쓰기 차이: 원본 "일반펜" vs localhost "일반 펜"
  - 구성품 차이: "볼펜심" -> "볼펜 펜심", "설명서" -> "사용 설명서", 유니코드 기호 변경(➊ -> ❶)
- **이미지 수**: 원본 15개 / localhost 15개 (일치)
- **종합 평가**: ⚠️ (콘텐츠 거의 동일, 줄바꿈 버그 + 미세 텍스트 차이)

---

### 12. Product LAMY (/product-lamy)
- **원본 URL**: https://neosmartpen.co.kr/product-lamy/ (200 OK)
- **원본 title**: "LAMY-2022 | 네오스마트펜 공식 페이지"
- **localhost title**: "LAMY-2022 | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 콘텐츠 모두 일치
  - 원본의 분할된 heading들이 localhost에서 적절히 합쳐짐 (개선):
    - "라미 사파리 그대로" + "디지털과 연결하다" -> 단일 h1
    - "생각을 만들고 기록하기에" + "가장 이상적인 도구" -> 단일 h2
    - "라미사파리 스마트펜의" + "특별함" -> 단일 h2
    - "필요한 것은" + "단 세가지" -> 단일 h2
  - localhost에 h1 "A wave of thought" 추가
  - 공통: Collaboration, Slogan, #THINKING TOOL, #POINTS OF SPECIAL, Write and Go, LAMY digital paper/Safari grip/special theme, #JUST THE THREE OF US, #SMART WRITING, 하단 4개 사용법 카드
- **이미지 수**: 원본 24개 / localhost 24개 (일치)
- **종합 평가**: ✅ (콘텐츠 동일, heading 구조 개선)

---

### 13. Product Dimo (/product-dimo)
- **원본 URL**: https://neosmartpen.co.kr/product-dimo/ (200 OK)
- **원본 title**: "Dimo_22 | 네오스마트펜 공식 페이지"
- **localhost title**: "Dimo_22 | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 콘텐츠 대부분 일치
  - **줄바꿈 합쳐짐 버그**: "아날로그 기록이 평행우주처럼디지털에도 그대로 남겨져요"
  - 구성품 목록 공백 차이 (기호 사이에 공백 추가)
- **이미지 수**: 원본 13개 / localhost 15개 (+2)
- **종합 평가**: ⚠️ (콘텐츠 거의 동일, 줄바꿈 버그)

---

### 14. Product RECO (/product-reco)
- **원본 URL**: https://neosmartpen.co.kr/product-reco/ (200 OK)
- **원본 title**: "RECO_22 | 네오스마트펜 공식 페이지"
- **localhost title**: "RECO_22 | 네오스마트펜 공식 페이지"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 h2 "네오스마트펜 RECO" -> localhost h1 (레벨 변경)
  - **오타 수정**: 원본 "멀티미이더을" -> localhost "멀티미디어를" (개선)
  - localhost 추가 섹션: "손글씨에 목소리를 저장해 보세요", "RECO 데이터 전송 및 재생", "펜 매니저에서 RECO 녹음 재생 방법", "구매 방법"
  - 공통: 메모리/고음질/초경량/배터리, 펜 매니저 다운로드, 해외 영업사원 필수템
- **이미지 수**: 원본 13개 / localhost 24개 (+11)
- **차이점**:
  - 원본의 오타 수정됨
  - localhost에 새 섹션 추가 (콘텐츠 확장)
  - heading 레벨 정리 (원본의 과다한 h1 -> 적절 배분)
  - 이미지 대폭 증가
  - localhost에 네이버 스마트스토어 링크 추가
- **종합 평가**: ⚠️ (콘텐츠 확장 및 개선)

---

### 15. Knowledge Base (/knowledge-base)
- **원본 URL**: https://neosmartpen.co.kr/knowledge-base/ (404 Not Found)
- **대체 URL 시도**: /knowledgebase/ (404), /faq/ (404)
- **원본 존재 여부**: 원본 없음 (404)
- **localhost title**: "Home - NeoLAB Convergence Inc." (⚠️ title 미설정 - 기본값 표시)
- **localhost Heading**: h1 "지식 베이스", h3 "시작하기"/"문제 해결"/"호환성"/"자주 묻는 질문"
- **이미지 수**: localhost 2개
- **종합 평가**: 원본 없음 (신규 페이지). **title이 "Home - NeoLAB Convergence Inc."로 설정되어 있어 수정 필요.**

---

## 공통 이슈

### 1. Heading 줄바꿈 합쳐짐 버그 (중요)
제품 페이지에서 원본의 `<br>` 태그로 분리된 heading이 localhost에서 공백 없이 합쳐짐:
- "아날로그 기록이 평행우주처럼**디지털에도 그대로 남겨져요**"
- "필기하고**모바일이나 PC에서 저장된 내용을**"

**해당 페이지**: product-n2, product-m1, product-dimo (product-lamy는 적절히 합쳐짐)

**수정 방안**: `<br>` 태그가 제거될 때 공백(스페이스) 또는 줄바꿈을 삽입해야 함.

### 2. Title 불일치 (5개 페이지)
| 페이지 | 원본 title | localhost title |
|--------|-----------|----------------|
| Neo Studio | 네오스튜디오 | NEOSTUDIO |
| PaperTube | 페이퍼튜브 | 페이퍼튜브_22 |
| Notebooks | N 노트 | notebook_22 |
| Gridaboard | Grida board | 그리다-2022 |
| Knowledge Base | (404) | Home - NeoLAB Convergence Inc. |

### 3. Customer 페이지 콘텐츠 손실 (가장 심각)
원본의 풍부한 FAQ/가이드/사용법 콘텐츠가 localhost에서 단순 문의 폼으로 대체됨:
- 유저 가이드 16종 (2026/2025 플래너, R1, A1, 펜매니저, 그리다보드, 네오스튜디오 등)
- 제품별 FAQ (M1/N2, dimo 포함)
- 네오스튜디오/라미/네오노트 사용법
- 구매방법 안내

**이 콘텐츠는 사용자 지원에 핵심적이므로 복구 또는 대체 방안 검토 필요.**

### 4. 이전 점검 대비 개선 사항
이전 점검에서 7개 페이지(neo-studio, gridaboard, papertube, penmanager, hybriddocs, notebooks, ncode-pdf)의 title이 "Home - NeoLAB Convergence Inc."로 표시되던 문제가 현재 점검에서는 **대부분 수정됨**. Knowledge Base 페이지만 아직 기본 title 사용 중.

### 5. 리뉴얼 페이지 (의도적 변경)
Neo Studio, Notebooks는 완전히 새로 디자인된 페이지로, 원본과의 차이가 의도적 리뉴얼에 의한 것으로 판단됨.

## 분류 요약

| 상태 | 수 | 페이지 |
|------|---|--------|
| ✅ 양호 | 2 | HybridDocs, Product LAMY |
| ⚠️ 경미한 차이 | 9 | Home, PaperTube, Gridaboard, Pen Manager, Ncode PDF, Product N2, Product M1, Product Dimo, Product RECO |
| ❌ 주요 차이 | 3 | Neo Studio(리뉴얼), Notebooks(리뉴얼), Customer(콘텐츠 누락) |
| 원본 없음 | 1 | Knowledge Base(신규, title 수정 필요) |

## 우선 수정 권장 사항
1. **[긴급]** Customer 페이지: FAQ/가이드/사용법 콘텐츠 복구 또는 대체 방안
2. **[높음]** Heading 줄바꿈 버그: product-n2, product-m1, product-dimo의 `<br>` -> 공백 처리
3. **[중간]** Knowledge Base title 수정: "Home - NeoLAB Convergence Inc." -> 적절한 title 설정
4. **[낮음]** Title 정리: Neo Studio, PaperTube, Notebooks, Gridaboard의 title 원본 대비 확인

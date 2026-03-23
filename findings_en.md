# EN 전수 점검 결과

> 점검일: 2026-03-11
> 방법: curl로 원본(neosmartpen.com)과 localhost:3000의 HTML을 가져와 title, heading, 이미지, 주요 텍스트를 비교

## 요약
- 점검 페이지: 15/15
- 일치: 3개 (penmanager, ncode-pdf, product-n2)
- 경미한 차이: 6개 (home, neo-studio, customer, product-m1, product-dimo, product-reco)
- 주요 차이: 3개 (papertube, product-lamy, knowledge-base)
- 원본 접근불가 (404): 2개 (notebooks, hybriddocs)
- gridaboard는 경미한 차이 + title 한국어 문제

## 페이지별 상세 결과

### 1. Home (/)
- **원본 title**: "Neo Smartpen Official Site | Digital writing next level"
- **localhost title**: "Neo Smartpen Official Site | Digital writing next level"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "Neo Smartpen Highlight", "Neo Smartpen Compatible Notebooks"
  - localhost H1: "Neo Smartpen Highlight" (H1 1개만 있음)
  - "Neo Smartpen Compatible Notebooks"는 localhost에서 H2로 이동됨
  - 일치: ⚠️ heading 레벨 차이
- **localhost 추가 H2**: "Meet HybridDocs...", "45% of frustrations", "Neo smartpen reaches the Australian market" (뉴스/블로그 섹션 추가)
- **누락 섹션**: 없음 (핵심 콘텐츠 모두 존재)
- **누락 콘텐츠**: 없음
- **이미지 수**: 원본 19개 / localhost 21개
- **종합 평가**: ⚠️ 경미한 차이 - heading 레벨 변경, 뉴스 섹션 추가

---

### 2. Neo Studio (/neo-studio)
- **원본 title**: "Neo Studio Introduction | Neo Smartpen Official Site"
- **localhost title**: "Neo Studio Introduction | Neo Smartpen Official Site"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "Neo Studio", "Share Creativity", "Bigger screen", "Edit with Ease", "Find & Retrieve", "Do more", "Pen Mouse"
  - localhost H1: "Neo Studio" (1개만)
  - 원본의 H1 항목들이 localhost에서 H2로 이동됨
  - 일치: ⚠️ heading 레벨 변경 (콘텐츠 자체는 존재)
- **localhost 추가 콘텐츠**:
  - H2: "From Ideation to Finalization", "Key Features" (원본에 없음)
  - H4: "Easy Connection", "Edit", "Video Sharing", "Search", "Easy Share", "Voice Playback", "Tag", "Bookmark", "Text Conversion", "Auto Sync" (Key Features 상세 항목, 원본에 없음)
- **누락 섹션**: 없음
- **누락 콘텐츠**: 없음
- **이미지 수**: 원본 15개 / localhost 34개 (Key Features 섹션 추가로 대폭 증가)
- **종합 평가**: ⚠️ 경미한 차이 - heading 구조 개편, Key Features 섹션 추가 (콘텐츠 개선)

---

### 3. PaperTube (/papertube)
- **원본 title**: "페이퍼튜브 | Neo Smartpen Official Site" (한국어)
- **localhost title**: "페이퍼튜브_22 | Neo Smartpen Official Site"
- **Title 일치**: ❌ 원본이 한국어 콘텐츠를 반환함
- **Heading 비교**:
  - 원본 H1: "페이퍼튜브" (한국어)
  - localhost H1: "PaperTube" (영어)
  - 원본 페이지가 한국어로 되어 있어 직접 비교 불가
- **언어 문제**: 원본 `https://neosmartpen.com/papertube/`가 한국어 페이지를 반환함 (lang=en-US이지만 콘텐츠가 한국어). localhost는 영어 콘텐츠를 정상적으로 표시
- **localhost 콘텐츠**: "Create an explainer video", "Picture in Picture", "A studio in your hand", "Save as MP4", "Ncode A4", "Controller", "Stand" 등 영어 콘텐츠 완비
- **이미지 수**: 원본 4개 / localhost 6개
- **종합 평가**: ❌ 주요 차이 - 원본이 한국어 페이지를 반환하여 EN 비교 불가. localhost는 영어 번역 완료

---

### 4. Notebooks (/notebooks)
- **원본 title**: "404 Not Found | Neo Smartpen Official Site"
- **localhost title**: "notebook_22 | Neo Smartpen Official Site"
- **Title 일치**: N/A (원본 404)
- **원본 상태**: ❌ 404 Not Found ("Upgrade in progress" 메시지)
- **localhost 상태**: ✅ 정상 작동
- **localhost 콘텐츠**:
  - H1: "Highlight of DIGITAL NOTEBOOK"
  - H2: "A cost effective way to utilize your handwriting notes", "DIGITAL PAPER is one of a kind notebook!", "Notebook lineup"
  - H3: iPad, digital notebook, Edit, Share, Search, N memo notebook 등 14개 노트북 제품
- **이미지 수**: 원본 1개 (404 페이지) / localhost 24개
- **종합 평가**: N/A - 원본이 404이므로 비교 불가. localhost는 콘텐츠 완비

---

### 5. Grida Board (/gridaboard)
- **원본 title**: "Grida board | Neo Smartpen Official Site"
- **localhost title**: "그리다-2022 | Neo Smartpen Official Site" (한국어 title)
- **Title 일치**: ❌ localhost title이 한국어
- **Heading 비교**:
  - 원본 H1: "GRIDA   BOARD", "Add Grida board to your Zoom..."
  - localhost H1: "GRIDA BOARD", "A must-have teaching tool for remote education | Smart Class Kit", "Add Grida board to your Zoom...", "Bulk Purchase Inquiry"
  - 일치: ⚠️ 핵심 동일, localhost에 추가 콘텐츠
- **localhost 추가 콘텐츠**:
  - "A must-have teaching tool for remote education | Smart Class Kit" (H1)
  - "Bulk Purchase Inquiry" (H1)
  - "GridaGuide" (H2, 원본은 "Grida Guide"로 공백 있음)
- **누락 섹션**: 없음
- **누락 콘텐츠**: 없음
- **이미지 수**: 원본 9개 / localhost 9개
- **종합 평가**: ⚠️ 경미한 차이 - title이 한국어("그리다-2022"), localhost에 Smart Class Kit/Bulk Purchase 추가

---

### 6. HybridDocs (/hybriddocs)
- **원본 title**: "404 Not Found | Neo Smartpen Official Site"
- **localhost title**: "HybridDocs | Neo Smartpen Official Site"
- **Title 일치**: N/A (원본 404)
- **원본 상태**: ❌ 404 Not Found ("Upgrade in progress" 메시지)
- **localhost 상태**: ✅ 정상 작동
- **localhost 콘텐츠**:
  - H1: "Visualize Faster, Deliver Better HybridDocs", "DIY NCODE Template"
  - H2: "What is HybridDocs?", "COMPATIBLE WITH", "How To Use", "Use Cases"
  - H4: "Keyboard, Mouse and Smartpen", "Write down what you think and just paste into your document", "Your mind map and Excel graph on 1 slide"
  - H5: "#LIMITELESS", "#EFFICIENT", "#STORYTELLING", 사용 단계 안내
- **이미지 수**: 원본 1개 (404 페이지) / localhost 10개
- **종합 평가**: N/A - 원본이 404이므로 비교 불가. localhost는 콘텐츠 완비

---

### 7. Pen Manager (/penmanager)
- **원본 title**: "penmanager | Neo Smartpen Official Site"
- **localhost title**: "penmanager | Neo Smartpen Official Site"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "A tool that share your ideas and sketch instantly"
  - localhost H1: (없음)
  - 원본의 H1이 localhost에서 H2로 이동됨
  - 원본 H2: "Convenient PC - Smartpen Connection", "How to Purchase"
  - localhost H2: "EASY-to-CONNECT devices to PC", "Convenient PC - Smartpen Connection", "A tool that share your ideas and sketch instantly", "How to Purchase"
  - 원본 H3: "EASY-to-CONNECT devices to PC" → localhost에서 H2로 승격
  - 일치: ⚠️ heading 레벨 변경 (콘텐츠 동일)
- **누락 섹션**: 없음
- **누락 콘텐츠**: 없음
- **이미지 수**: 원본 8개 / localhost 8개
- **종합 평가**: ✅ 일치 - heading 레벨만 변경, 콘텐츠 동일

---

### 8. Ncode PDF (/ncode-pdf)
- **원본 title**: "Ncode PDF | Neo Smartpen Official Site"
- **localhost title**: "Ncode PDF | Neo Smartpen Official Site"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "DIY NCode Printables" / localhost H1: "DIY NCode Printables" ✅
  - 원본 H2: "Printables" / localhost H2: "Printables" ✅
  - 원본 H3: "Test first", "Enable or Disable pen input" → localhost H4로 이동
  - 원본 H4: "DIY Printing", "Enough pages", "Various Formats", "Before you print", "Neo Studio" → localhost H3으로 승격
  - 일치: ⚠️ H3↔H4 레벨 교차 (콘텐츠 동일)
- **누락 섹션**: 없음
- **누락 콘텐츠**: 없음
- **이미지 수**: 원본 22개 / localhost 22개
- **종합 평가**: ✅ 일치 - heading 레벨만 교차 변경, 콘텐츠 및 이미지 수 동일

---

### 9. Customer (/customer)
- **원본 title**: "CS_22 | Neo Smartpen Official Site"
- **localhost title**: "CS_22 | Neo Smartpen Official Site"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "Thank you for reaching out to us. Please choose from the following options..."
  - localhost H1: "Enquiry"
  - 원본 H2: "Enquiry"
  - localhost H2: (없음)
  - 일치: ⚠️ heading 구조 변경
- **콘텐츠 비교**:
  - "Thank you for reaching out" 문구: 원본 H1 → localhost에 텍스트로 존재 (heading은 아님)
  - "Enquiry": 원본 H2 → localhost H1
  - 문의 폼: 원본 WordPress Contact Form / localhost 자체 폼
- **누락 섹션**: 없음
- **누락 콘텐츠**: 없음 (핵심 문구 모두 존재)
- **이미지 수**: 원본 2개 / localhost 2개
- **종합 평가**: ⚠️ 경미한 차이 - heading 구조 변경, 폼 구현 방식 다름

---

### 10. Product N2 (/product-n2)
- **원본 title**: "N2-2022 | Neo Smartpen Official Site"
- **localhost title**: "N2-2022 | Neo Smartpen Official Site"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "Neo standard for premium digital writing", "First class passengers do not borrow pens", "Just like the parallel universe Your writing has a digital twin"
  - localhost H1: "Neo standard for premium digital writing", "First class passengers do not borrow pens", "Just like the parallel universe Your writing has a digital twin"
  - 일치: ✅
  - H2, H4 동일
- **localhost 추가 H3**: "Share with one touch", "Easy to store, quick to save", "Authentic pen-like convenience and familiarity.", "How to make collaboration more efficient?"
- **누락 섹션**: 없음
- **누락 콘텐츠**: 없음
- **이미지 수**: 원본 16개 / localhost 17개 (1개 차이)
- **종합 평가**: ✅ 일치 - 핵심 콘텐츠 동일, 일부 H3 추가

---

### 11. Product M1+ (/product-m1)
- **원본 title**: "M1+2022 | Neo Smartpen Official Site"
- **localhost title**: "M1+2022 | Neo Smartpen Official Site"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "Reasonable performance", "Have you ever taken pictures of your notes and kept them?", "Don't get your memo photo-framed, make it digitally enabled.", "Just like the parallel universe Your writing has a digital twin"
  - localhost H1: "Reasonable performance", "Still taking photos of your handwriting to keep them?", "Manage your paper notes with just one app.", "The same light ballpoint pen feel", "Save / Search / Share digitally", "Just like the parallel universe Your writing has a digital twin"
  - 일치: ⚠️ H1 문구가 다름 (의미는 유사하지만 표현 변경)
- **localhost 추가 H3**: "Share with one touch", "Easy to store, quick to save", "Authentic pen-like convenience and familiarity.", "How to make collaboration more efficient?" (원본에 없음)
- **누락 섹션**: 없음
- **누락 콘텐츠**: 없음 (의미적으로 동등)
- **이미지 수**: 원본 11개 / localhost 15개
- **종합 평가**: ⚠️ 경미한 차이 - H1 문구 표현 변경 (리뉴얼), 공통 제품 섹션 추가

---

### 12. Product LAMY (/product-lamy)
- **원본 title**: "LAMY-2022 | Neo Smartpen Official Site"
- **localhost title**: "LAMY | Neo Smartpen Official Site"
- **Title 일치**: ❌ localhost에서 "-2022" 제거됨
- **Heading 비교**:
  - 원본 H1: "LAMY meets digital", "Your ideal writing instrument", "Lamy User Guide Download"
  - localhost H1: "A wave of thought" (원본과 완전히 다른 메인 헤딩)
  - 일치: ❌ 메인 H1 완전히 변경
- **원본에만 있는 콘텐츠**:
  - "LAMY meets digital" (H1)
  - "Your ideal writing instrument" (H1)
  - "Lamy User Guide Download" (H1)
  - "Highlights" (H2 섹션)
  - "What's in the package" (H2 섹션)
  - "Espanol / Italiano / Francais / Nederlandse" (다국어 가이드 링크)
- **localhost에만 있는 콘텐츠**:
  - "A wave of thought" (H1)
  - "#SMART WRITING" (H3)
  - "Share with one touch", "Easy to store, quick to save", "Authentic pen-like convenience and familiarity", "How to make collaboration more efficient?" (H3)
  - "Smart pen - LAMY safari smart pen", "Paper - Digital paper" (H4, 원본은 "Pen - LAMY Safari all black Ncode", "Notebook - LAMY digital notebook")
- **공통 콘텐츠**: "Thinking tool on the digital flow", "#THINKING TOOL", "#POINTS OF SPECIAL", "#JUST THE THREE OF US", "Write and Go", "LAMY digital paper", "LAMY Safari grip", "LAMY special theme"
- **이미지 수**: 원본 24개 / localhost 24개
- **종합 평가**: ❌ 주요 차이 - 메인 헤딩 완전 변경, Highlights/Package/User Guide/다국어 가이드 섹션 누락

---

### 13. Product Dimo (/product-dimo)
- **원본 title**: "GRIDA_22 | Neo Smartpen Official Site"
- **localhost title**: "Dimo_22 | Neo Smartpen Official Site"
- **Title 일치**: ❌ 원본 "GRIDA_22" vs localhost "Dimo_22"
- **Heading 비교**:
  - 원본 H1: "The reasonable choice for beginners", "Just like the parallel universe Your writing has a digital twin"
  - localhost H1: "The most reasonable choice for smart pen beginners", "Just like the parallel universe Your writing has a digital twin"
  - 일치: ⚠️ 문구 약간 변경 ("The reasonable" -> "The most reasonable", "beginners" -> "smart pen beginners")
  - 원본 H2: "Do you often take notes?", "Can you easily locate your note when you look back?", "handwriting can be searchable and shareable and so much more."
  - localhost H2: "Do you take notes often?", "Can't find important notes when you need them?", "Save, search, and share your handwriting in digital, just as you write."
  - 일치: ⚠️ 의미 유사하나 표현 변경
- **원본에만 있는 콘텐츠**:
  - H4: "AUTO ON/OFF" (localhost에 없음)
- **localhost에만 있는 콘텐츠**:
  - H4: "D1 type refill compatible" (원본에 없음)
  - H3: "Share with one touch", "Easy to write, fast to save", "As convenient as an analog pen", "How to work more efficiently?"
- **이미지 수**: 원본 9개 / localhost 15개
- **종합 평가**: ⚠️ 경미한 차이 - 문구 리뉴얼, AUTO ON/OFF -> D1 type refill 사양 변경, 공통 섹션 추가

---

### 14. Product RECO (/product-reco)
- **원본 title**: "RECO_22 | Neo Smartpen Official Site"
- **localhost title**: "RECO_22 | Neo Smartpen Official Site"
- **Title 일치**: ✅
- **Heading 비교**:
  - 원본 H1: "When you turn on RECO...", "Plays multimedia...", "With the RECO voice bookmark function..."
  - localhost H1: "Neo smartpen RECO" (1개만)
  - 원본의 H1들이 localhost에서 H3으로 이동됨
  - 원본 H2: "Neo smartpen RECO", "RECO Data Transfer & Replay", "How to play RECO recordings on Pen Manager", "How to Purchase"
  - localhost H2: "< Pen Manager Download >", "Save your voice in handwriting"
  - localhost H3: 원본 H1/H2 콘텐츠 + "Essential tool for overseas sales reps", "How to Purchase"
  - 일치: ⚠️ heading 구조 대폭 변경
- **localhost 추가 콘텐츠**:
  - H2: "Save your voice in handwriting", "< Pen Manager Download >"
  - H3: "Essential tool for overseas sales reps"
  - H4: "Memory", "High quality", "Ultralight", "Battery" (사양 섹션)
  - 원본의 H4 "step 1~4" 구조 -> localhost에서 다른 형식으로 변경
- **누락 콘텐츠**: 없음 (핵심 문구 모두 존재, voice bookmark 포함)
- **이미지 수**: 원본 15개 / localhost 24개 (대폭 증가)
- **종합 평가**: ⚠️ 경미한 차이 - heading 구조 재편, 사양 섹션 및 해외영업 활용 섹션 추가, 이미지 대폭 증가

---

### 15. Knowledge Base (/knowledge-base)
- **원본 title**: "Knowledge Base | Neo Smartpen Official Site"
- **localhost title**: "Home - NeoLAB Convergence Inc." (완전히 다른 title)
- **Title 일치**: ❌
- **Heading 비교**:
  - 원본 H1: (없음)
  - localhost H1: "How Can We Help?"
  - 원본 H2: "Download User Guide", "App", "Neo smartpen"
  - localhost H2: (없음)
  - localhost H3: "Getting Started", "Troubleshooting", "Compatibility", "FAQ"
  - 일치: ❌ 완전히 다른 구조와 콘텐츠
- **원본에만 있는 콘텐츠**:
  - "Download User Guide" 섹션
  - "App" 섹션
  - "Neo smartpen" 섹션
- **localhost에만 있는 콘텐츠**:
  - "How Can We Help?" (헬프센터 형식)
  - "Getting Started", "Troubleshooting", "Compatibility", "FAQ" (카테고리)
- **이미지 수**: 원본 2개 / localhost 2개
- **종합 평가**: ❌ 주요 차이 - 페이지 구조와 콘텐츠가 완전히 다름. 원본은 다운로드 가이드 중심, localhost는 헬프센터(Knowledge Base) 형식으로 전면 재구성

---

## 종합 분석

### 카테고리별 분류

#### ✅ 일치 (3개)
| # | 페이지 | 비고 |
|---|--------|------|
| 7 | Pen Manager | heading 레벨만 변경, 콘텐츠 동일, 이미지 동일 |
| 8 | Ncode PDF | H3<->H4 레벨 교차, 콘텐츠/이미지 완전 동일 |
| 10 | Product N2 | 핵심 동일, H3 추가, 이미지 1개 차이 |

#### ⚠️ 경미한 차이 (7개)
| # | 페이지 | 주요 차이 |
|---|--------|-----------|
| 1 | Home | heading 레벨 변경, 뉴스 섹션 추가 |
| 2 | Neo Studio | heading 구조 개편, Key Features 섹션 추가 (이미지 +19) |
| 5 | Grida Board | title 한국어("그리다-2022"), Smart Class Kit/Bulk Purchase 추가 |
| 9 | Customer | heading 구조 변경, 폼 구현 방식 다름 |
| 11 | Product M1+ | H1 문구 리뉴얼, 공통 제품 섹션 추가 |
| 13 | Product Dimo | 문구 리뉴얼, AUTO ON/OFF -> D1 type refill, 공통 섹션 추가 |
| 14 | Product RECO | heading 구조 재편, 사양/해외영업 섹션 추가, 이미지 +9 |

#### ❌ 주요 차이 (3개)
| # | 페이지 | 주요 차이 |
|---|--------|-----------|
| 3 | PaperTube | 원본이 한국어 페이지 반환, EN 비교 불가 |
| 12 | Product LAMY | 메인 헤딩 완전 변경, Highlights/Package/UserGuide/다국어 섹션 누락 |
| 15 | Knowledge Base | 페이지 구조/콘텐츠 완전히 다름 (title도 generic fallback) |

#### N/A 원본 404 (2개)
| # | 페이지 | 상태 |
|---|--------|------|
| 4 | Notebooks | 원본 404 ("Upgrade in progress"), localhost 정상 |
| 6 | HybridDocs | 원본 404 ("Upgrade in progress"), localhost 정상 |

### 공통 패턴

1. **Heading 레벨 변경**: 대부분의 페이지에서 원본의 H1이 localhost에서 H2/H3으로, 또는 반대로 변경됨. WordPress -> Next.js 마이그레이션 과정에서 의도적 구조 개편으로 보임.

2. **공통 제품 섹션 추가**: product-n2, product-m1, product-lamy, product-dimo에 "Share with one touch", "Easy to store, quick to save" 등 공통 H3 섹션이 추가됨 (product-reco 제외).

3. **콘텐츠 리뉴얼**: 일부 페이지에서 문구가 의미는 같지만 표현이 다르게 변경됨 (예: M1+, Dimo).

4. **이미지 증가 추세**: 대부분의 localhost 페이지에서 이미지 수가 같거나 증가함.

5. **Title 불일치 목록**:
   - gridaboard: "Grida board" -> "그리다-2022" (한국어)
   - product-lamy: "LAMY-2022" -> "LAMY"
   - product-dimo: "GRIDA_22" -> "Dimo_22"
   - knowledge-base: "Knowledge Base | Neo Smartpen Official Site" -> "Home - NeoLAB Convergence Inc."
   - papertube: "페이퍼튜브" -> "페이퍼튜브_22"

### 주요 액션 아이템

1. **[CRITICAL] Knowledge Base 페이지**: title이 "Home - NeoLAB Convergence Inc."로 잘못됨. 페이지 구조/콘텐츠가 원본과 완전히 다름 -- 의도적 재구성인지 확인 필요
2. **[HIGH] LAMY 페이지**: "Highlights", "What's in the package", "Lamy User Guide Download", 다국어 가이드(Espanol 등) 섹션 localhost에 추가 필요. 메인 헤딩 "LAMY meets digital" 누락 확인
3. **[HIGH] PaperTube**: 원본 URL(`/papertube/`)이 한국어를 반환하는 문제 -- 원본 EN PaperTube URL 확인 필요
4. **[MEDIUM] Gridaboard title**: "그리다-2022" -> 영어 title로 변경 필요 (예: "Grida board")
5. **[LOW] Product Dimo title**: 원본 "GRIDA_22" vs localhost "Dimo_22" -- 원본 title이 잘못된 것으로 보이므로 localhost가 올바를 수 있음

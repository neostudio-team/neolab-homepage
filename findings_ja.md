# JA 전수 점검 결과

**점검일**: 2026-03-11
**비교 대상**: neosmartpen.jp (원본 WordPress) vs localhost:3000/ja/neosmartpen (Next.js)

---

## 요약
- 점검 페이지: 15/15
- 콘텐츠 양호 (✅): 7개 (#2 Neo Studio, #3 PaperTube, #5 Gridaboard, #7 PenManager, #10 Product N2, #12 Product LAMY, #14 Product RECO)
- 차이점 발견 (⚠️): 5개 (#1 Home, #4 Notebooks, #9 Customer, #11 Product M1, #13 Product Dimo)
- 심각한 문제 (❌): 3개 (#6 HybridDocs, #8 Ncode PDF, #15 Knowledge Base)
- 원본 없음: 3개 (#6 HybridDocs, #14 Product RECO, #15 Knowledge Base)

### 핵심 발견사항
1. **localhost JA 경로에서 영어로 표시되는 페이지 3개**: HybridDocs, Ncode PDF, Knowledge Base
2. **원본이 한국어(KO)인 페이지 3개**: Notebooks, PenManager, Ncode PDF (원본 JA 사이트의 기존 문제)
3. **PaperTube 서비스 종료 안내**: 원본/localhost 모두 올바르게 포함 ✅
4. **Title 불일치**: Notebooks("notebook_22"), Ncode PDF("Neo Smartpen Official Site"), Knowledge Base("Home - NeoLAB Convergence Inc.")

---

## 페이지별 상세 결과

### 1. Home (/)
- **원본 URL**: https://neosmartpen.jp/
- **원본 title**: "ネオスマートペン | Open your pen From Paper to Digital, Two Worlds in One Pen. ネオスマートペンN2はごく普通のペンの使いやすさを基本にデザインされています..." (긴 버전)
- **localhost title**: "ネオスマートペン | Open your pen From Paper to Digital, Two Worlds in One Pen."
- **Title 일치**: ⚠️ localhost는 간결한 버전 (SEO 관점에서 적절할 수 있음)
- **Heading 비교**:

| 구분 | 원본 | localhost |
|------|------|----------|
| 제품 슬라이더 | LAMY safari スマートペン, Neo smartpen A1, M1+, dimo | LAMY safari all star スマートペン (h4), Neo smartpen A1 (h4), M1+ (h4), dimo (h4) |
| 특징 섹션 | #digital writing, スマートペンの特徴, #Utilize, #自由自在 | 동일 |
| 앱 소개 | NEO STUDIO とは (h3), Grida board とは (h3), PaperTube とは (h3) | 동일 (h3) |
| 노트 섹션 | 紙にタッチして簡単操作, Nノートシリーズ | 동일 |

- **차이점**:
  - LAMY 모델명: "LAMY safari スマートペン" → "LAMY safari all star スマートペン" (localhost에 "all star" 추가)
  - 원본에 Amazon 링크 있음, localhost에 없음
  - 원본에 NEWS(最新情報/お知らせ/メディア掲載/プレスリリース) 메뉴 있음, localhost에 없음
- **이미지 수**: 원본 20개 / localhost 23개
- **종합 평가**: ⚠️ 핵심 콘텐츠 일치, LAMY 모델명 차이 및 일부 메뉴/링크 차이

---

### 2. Neo Studio (/neo-studio)
- **원본 URL**: https://neosmartpen.jp/neo-studio-2/ (neo-studio/는 FAQ로 redirect)
- **원본 title**: "Neo Studio 2 | ネオスマートペン"
- **localhost title**: "Neo Studio 2 | ネオスマートペン"
- **Title 일치**: ✅
- **Heading 비교**:

| 원본 | localhost |
|------|----------|
| Neo Studio 2 | Neo Studio (h1) |
| PC版webブラウザバージョン | PC版webブラウザバージョン (h2) ✅ |
| 簡単接続, 編集, 動画で共有, 検索, 簡単シェア, 書きながら録音を再生, タグ, ブックマーク, テキスト変換, 自動同期 | 동일 기능 목록 (h4) ✅ |
| - | ペンと紙の優雅さをデジタルの世界と融合 (h2) 추가 |
| - | クロスプラットフォーム対応 (h2) 추가 |
| - | さらに多くの機能 (h2), ペンマウス (h2) 추가 |

- **이미지 수**: 원본 31개 / localhost 34개
- **종합 평가**: ✅ localhost가 원본보다 더 풍부한 콘텐츠, 핵심 기능 목록 완전 일치

---

### 3. PaperTube (/papertube)
- **원본 URL**: https://neosmartpen.jp/papertube-2/
- **원본 title**: "PaperTubeIntro | ネオスマートペン"
- **localhost title**: "PaperTube | ネオスマートペン"
- **Title 일치**: ⚠️ 미세 차이 (PaperTubeIntro vs PaperTube)
- **서비스 종료(一時休止) 안내**:
  - 원본: "※PaperTubeアプリは2024年7月末よりアプリ新規ダウンロードを一時休止いたします。" ✅
  - localhost: 동일 문구 포함 ✅ (bg-red-600 배경의 경고 박스)
- **Heading 비교**:

| 원본 | localhost |
|------|----------|
| PaperTube | PaperTube (h1) ✅ |
| 書いて撮るだけプレゼン上手！ | 書いて撮るだけプレゼン上手！(h2) ✅ |
| EASY~FREE (7개) | EASY~FREE (h3, 7개) ✅ |
| Picture in Picture | Picture in Picture (h2) ✅ |
| ①~④ 사용 단계 | ❶~❹ 사용 단계 ✅ |
| - | PaperTubeパッケージ, Ncode A4 (h2/h3) 추가 |
| - | 様々なテーマのPaperTube動画 (h2) 추가 |

- **이미지 수**: 원본 13개 / localhost 6개 (localhost가 적음)
- **외부 링크**: localhost에 YouTube PaperTubeチャンネル 링크 추가
- **종합 평가**: ✅ 핵심 콘텐츠 + 서비스 종료 안내 모두 포함, 이미지 수는 적으나 구조 양호

---

### 4. Notebooks (/notebooks)
- **원본 URL**: https://neosmartpen.jp/notebook/
- **원본 title**: "N 노트 | ネオスマートペン" (한국어 title)
- **localhost title**: "notebook_22 | ネオスマートペン"
- **Title 일치**: ⚠️ 양쪽 모두 부적절 (원본은 한국어, localhost는 코드명)
- **원본 언어 문제**: ❌ **원본 콘텐츠가 한국어(KO)**
  - "N 플래너 2019", "구글 캘린더와 연동하기", "N 메모노트", "구매하기" 등 전부 한국어
  - 구매 링크가 한국 store.neosmartpen.com으로 연결
- **localhost 콘텐츠 (일본어)**: ✅
  - 紙に書いたそのままをデジタル化 (h1), 手書きをそのままデジタル化 (h2)
  - Nノートの豊富なラインナップ (h2): N memo notebook, DIGITAL NOTEBOOK B5, N Moleskine notebook, N idea pad mini, N college notebook, N pocket notebook, N ring notebook, N professional notebook, N idea pad, NEO SMART HOLDER
- **이미지 수**: 원본 2개 / localhost 24개
- **종합 평가**: ⚠️ localhost가 원본보다 대폭 개선됨 (한국어→일본어). **title "notebook_22" 수정 필요**

---

### 5. Gridaboard (/gridaboard)
- **원본 URL**: https://neosmartpen.jp/gridaboard-2/
- **원본 title**: "GridaBoardIntro | ネオスマートペン"
- **localhost title**: "GridaBoardIntro | ネオスマートペン"
- **Title 일치**: ✅
- **Heading 비교**:

| 원본 | localhost |
|------|----------|
| GRIDA BOARD (h1) | GRIDA BOARD (h1) ✅ |
| 手軽でスピーディーな"遠隔板書ツール" | 手軽でスピーディーな"遠隔板書ツール" (h2) ✅ |
| Grida Boardの使い方 (h2) | Gridaガイド ⚠️ |
| 生徒, 先生, ビジネスマン | 学生 (h4), 教師 (h4), ビジネスプロフェッショナル (h4) ⚠️ |
| - | リモート教育に欠かせない授業ツール (h1) 추가 |
| - | Zoom、Google Meet、TeamsでGrida Boardを活用 (h1) 추가 |
| - | 大量購入のお問い合わせ (h1) 추가 |

- **이미지 수**: 원본 10개 / localhost 9개
- **외부 링크**: 양쪽 모두 gridaboard.io 링크 포함 ✅
- **종합 평가**: ✅ 핵심 콘텐츠 일치, localhost에 추가 섹션 있음

---

### 6. HybridDocs (/hybriddocs)
- **원본 URL**: https://neosmartpen.jp/hybriddocs/ → **HTTP 404 (원본 없음)**
- **localhost title**: "HybridDocs | Neo Smartpen Official Site"
- **원본 존재 여부**: 원본 없음
- **localhost 콘텐츠 언어**: ❌ **영어(EN)**
  - "What is HybridDocs?", "Keyboard, Mouse and Smartpen", "#LIMITELESS", "#EFFICIENT", "#STORYTELLING"
  - "How To Use": 1. Go To Neo Studio Web, 2. Execute Pen Manager, 3. Use Handwriting Data
  - "Use Cases", "DIY NCODE Template"
- **이미지 수**: localhost 10개
- **종합 평가**: ❌ 원본 JA 사이트에 없음 + localhost에서 일본어 번역 미적용 (영어 표시)

---

### 7. PenManager (/penmanager)
- **원본 URL**: https://neosmartpen.jp/penmanager/
- **원본 title**: "Pen Manager | ネオスマートペン"
- **localhost title**: "Pen Manager | ネオスマートペン"
- **Title 일치**: ✅
- **원본 언어 문제**: ❌ **원본 콘텐츠가 한국어(KO)**
  - "PC에서도 EASY CONNECT!", "PC-스마트펜 연결로 편리하게", "RECO 데이터 전송 및 재생", "구매하기" 등
  - 구매 링크가 한국 사이트로 연결
- **localhost 콘텐츠 (일본어)**: ✅
  - PCでも簡単接続！(h2), 便利なPC – スマートペン接続 (h2)
  - アイデアやスケッチを即座に共有するツール (h2), 購入方法 (h2)
- **이미지 수**: 원본 6개 / localhost 8개
- **외부 링크**: localhost에 Windows/Mac 다운로드 링크 포함 ✅
- **종합 평가**: ✅ localhost가 원본보다 개선됨 (한국어→일본어)

---

### 8. Ncode PDF (/ncode-pdf)
- **원본 URL**: https://neosmartpen.jp/ncode-pdf/
- **원본 title**: "Ncode PDF | ネオスマートペン"
- **localhost title**: "Ncode PDF | Neo Smartpen Official Site"
- **Title 일치**: ⚠️ 원본 "ネオスマートペン" vs localhost "Neo Smartpen Official Site"
- **원본 언어 문제**: ❌ **원본 콘텐츠가 한국어(KO)**
  - "당신의 기록을 더욱 편리하게 담을 수 있도록", "다양한 종류의 페이퍼", "최적화된 삼성 레이저 프린터 3종"
- **localhost 콘텐츠 언어**: ❌ **영어(EN)**
  - "DIY NCode Printables" (h1), "DIY Printing" (h3), "Enough pages" (h3), "Various Formats" (h3)
  - "Printables" (h2), "Before you print" (h3), "Neo Studio" (h3)
- **이미지 수**: 원본 3개 / localhost 22개
- **다운로드 링크**: localhost에 A4 템플릿 zip 다운로드 링크 다수 포함 ✅
- **종합 평가**: ❌ 원본은 한국어, localhost는 영어 — 양쪽 모두 일본어 번역 없음. localhost title도 "Neo Smartpen Official Site"로 부적절

---

### 9. Customer/FAQ (/customer)
- **원본 URL**: https://neosmartpen.jp/faq/ (/customer/는 404)
- **원본 title**: "FAQ | ネオスマートペン"
- **localhost title**: "FAQ | ネオスマートペン"
- **Title 일치**: ✅
- **Heading 비교**:

| 원본 카테고리 (h2/h3) | localhost |
|----------------------|----------|
| Neo smartpen (N2/dimo/M1/M1+/A1/R1) | 없음 ❌ |
| Neo Studio 2 (PCバージョン) | 없음 ❌ |
| Neo Studio 2022 | 없음 ❌ |
| LAMY safari スマートペン | 없음 ❌ |
| Grida Board | 없음 ❌ |
| ノート | 없음 ❌ |
| PaperTubeアプリ（新規ダウンロード停止中） | 없음 ❌ |
| ユーザーガイド | 없음 ❌ |
| 購入方法 | 없음 ❌ |
| お問合せ | お問い合わせ폼 있음 ✅ |

- **localhost 구조**: FAQ (h1) + 문의 폼 (お名前, メールアドレス, 件名, お問い合わせ内容, 送信 버튼)
- **이미지 수**: 원본 5개 / localhost 2개
- **종합 평가**: ⚠️ 원본의 상세 FAQ 카테고리/항목이 localhost에 전부 누락. 문의 폼은 일본어로 올바르게 제공

---

### 10. Product N2 (/product-n2)
- **원본 URL**: https://neosmartpen.jp/product-n2/
- **원본 title**: "N2 | ネオスマートペン"
- **localhost title**: "N2 | ネオスマートペン"
- **Title 일치**: ✅
- **Heading 비교**:

| 원본 | localhost |
|------|----------|
| プレミアムモデル | プレミアム (h1) + モデル (h1) |
| 紙からデジタルの世界へ | 紙からデジタルの世界へ (h1) ✅ |
| BODY, PROCESSOR, GRIP | BODY (h4), PROCESSOR (h4), GRIP (h4) ✅ |
| 簡単共有 | 簡単共有 (h3) ✅ |
| 紙に書いたままがデジタル化 | 紙に書いたままがデジタル化 (h3) ✅ |
| アナログ to デジタルをシームレスに | アナログ to デジタルをシームレスに (h3) ✅ |
| 仕事効率化 | 仕事効率化 (h3) ✅ |

- **이미지 수**: 원본 17개 / localhost 17개 ✅
- **종합 평가**: ✅ 콘텐츠 완전 일치

---

### 11. Product M1 (/product-m1)
- **원본 URL**: https://neosmartpen.jp/product-m1/
- **원본 title**: "M1+ | ネオスマートペン"
- **localhost title**: "M1+ | ネオスマートペン"
- **Title 일치**: ✅
- **Heading 비교**:

| 원본 | localhost |
|------|----------|
| 今話題の最新モデル | 今話題の最新モデル (h1) ✅ |
| 充電長持ち, オート ON / OFF, ペンキャップ | BATTERY (h4), AUTO ON/OFF (h4), CLIP (h4) ⚠️ |
| ①~⑤ パッケージ내용 | ❶~❺ 패키지 내용 ✅ |
| 簡単共有 | 簡単共有 (h3) ✅ |
| - | 手書きメモをいちいち写真に撮って保存していませんか？(h1) 추가 |
| - | 紙に書いたメモ、アプリひとつで管理しましょう。(h1) 추가 |

- **이미지 수**: 원본 14개 / localhost 15개
- **차이점**:
  - 스펙 라벨이 일본어→영어로 변경 (充電長持ち→BATTERY, ペンキャップ→CLIP)
  - localhost에 마케팅 문구 추가
  - 원본에 공식 스토어/Amazon 구매 링크 있음, localhost에는 "詳細はこちら => #" (빈 링크)
- **종합 평가**: ⚠️ 콘텐츠 대체로 일치, 구매 링크가 작동하지 않음

---

### 12. Product LAMY (/product-lamy)
- **원본 URL**: https://neosmartpen.jp/product-lamy/
- **원본 title**: "LAMY-2022 | ネオスマートペン"
- **localhost title**: "LAMY-2022 | ネオスマートペン"
- **Title 일치**: ✅
- **Heading 비교**:

| 원본 | localhost |
|------|----------|
| Thinking Tools | A wave of thought (h1) ⚠️ |
| Thinking tool on the digital flow (h2) | Thinking tool on the digital flow (h2) ✅ |
| #THINKING TOOL (h3) | #THINKING TOOL (h3) ✅ |
| #POINTS OF SPECIAL (h3) | #POINTS OF SPECIAL (h3) ✅ |
| Write and Go, LAMY digital paper, LAMY Safari grip, LAMY special theme | 동일 (h4) ✅ |
| #JUST THE THREE OF US (h3) | #JUST THE THREE OF US (h3) ✅ |
| アプリ–NEO STUDIO, スマートペン–LAMY safari, ノート–デジタルペーパー | 동일 (h4) ✅ |
| - | Collaboration (h3), Slogan (h3), #SMART WRITING (h3) 추가 |

- **이미지 수**: 원본 24개 / localhost 24개 ✅
- **종합 평가**: ✅ 콘텐츠 매우 잘 일치, localhost에 약간의 추가 섹션

---

### 13. Product Dimo (/product-dimo)
- **원본 URL**: https://neosmartpen.jp/product-dimo/
- **원본 title**: "dimo | ネオスマートペン"
- **localhost title**: "dimo | ネオスマートペン"
- **Title 일치**: ✅
- **Heading 비교**:

| 원본 | localhost |
|------|----------|
| 乾電池式 (h2), グリップ (h2), ペンキャップ (h2) | BATTERY (h4), D1タイプ替え芯対応 (h4), CLIP (h4) ⚠️ |
| 簡単共有 | ワンタッチで共有 (h3) ⚠️ |
| 紙に書いたままがデジタル化 | 記録は簡単に、保存は素早く (h3) ⚠️ |
| アナログ to デジタルをシームレスに | アナログペンと同じ便利さ (h3) ⚠️ |
| 仕事効率化 | 業務をより効率的にする方法は？(h3) ⚠️ |
| - | スマートペン初心者の最もリーズナブルな選択 (h1) 추가 |
| - | よくメモを取りますか？등 마케팅 문구 (h2) 추가 |

- **이미지 수**: 원본 13개 / localhost 15개
- **차이점**: 하단 4기능 문구가 원본과 다른 일본어 표현 사용 (다른 제품 페이지와의 통일성 문제)
- **종합 평가**: ⚠️ 동일 기능 소개이나 표현이 다름, localhost에 마케팅 문구 추가

---

### 14. Product RECO (/product-reco)
- **원본 URL**: https://neosmartpen.jp/product-reco/ → **HTTP 404 (원본 없음)**
- **localhost title**: "RECO | ネオスマートペン"
- **원본 존재 여부**: 원본 없음
- **localhost 콘텐츠 언어**: 일본어 ✅
  - Neo smartpen RECO (h1), ペンマネージャー ダウンロード (h2)
  - RECOとネオスマートペンの電源を入れると、自動的に接続されます (h3)
  - 手書きに声を保存してみましょう (h2)
  - メモリ (h4), 高音質 (h4), 超軽量 (h4), バッテリー (h4)
  - 購入方法 (h3)
- **이미지 수**: localhost 24개
- **문제점**: 購入する 링크가 한국 네이버 스마트스토어 (https://smartstore.naver.com/neosmartpen) — JA 사이트에 부적절
- **종합 평가**: ⚠️ 원본 없음, localhost에 일본어로 제공되나 구매 링크가 한국 사이트

---

### 15. Knowledge Base (/knowledge-base)
- **원본 URL**: https://neosmartpen.jp/knowledge-base/ → **HTTP 404 (원본 없음)**
- **localhost title**: "Home - NeoLAB Convergence Inc." (부적절)
- **원본 존재 여부**: 원본 없음
- **localhost 콘텐츠 언어**: ❌ **영어(EN)**
  - "How Can We Help?" (h1)
  - "Getting Started" (h3), "Troubleshooting" (h3), "Compatibility" (h3), "FAQ" (h3)
- **이미지 수**: localhost 2개
- **종합 평가**: ❌ 원본 없음 + title 부적절 + 일본어 번역 미적용

---

## 종합 분석표

| # | 페이지 | Title 일치 | 콘텐츠 | 언어(JA) | 이미지 | 종합 |
|---|--------|-----------|--------|---------|--------|------|
| 1 | Home | ⚠️ | ✅ | ✅ | 20→23 | ⚠️ |
| 2 | Neo Studio | ✅ | ✅ 풍부 | ✅ | 31→34 | ✅ |
| 3 | PaperTube | ⚠️ | ✅ | ✅ | 13→6 | ✅ |
| 4 | Notebooks | ⚠️ | 개선됨 | 원본KO→localhost JA ✅ | 2→24 | ⚠️ |
| 5 | Gridaboard | ✅ | ✅ 풍부 | ✅ | 10→9 | ✅ |
| 6 | HybridDocs | - | 원본없음 | localhost EN ❌ | -→10 | ❌ |
| 7 | PenManager | ✅ | 개선됨 | 원본KO→localhost JA ✅ | 6→8 | ✅ |
| 8 | Ncode PDF | ⚠️ | 원본KO | 원본KO/localhost EN ❌ | 3→22 | ❌ |
| 9 | Customer/FAQ | ✅ | ⚠️ 축소 | ✅ | 5→2 | ⚠️ |
| 10 | Product N2 | ✅ | ✅ | ✅ | 17→17 | ✅ |
| 11 | Product M1 | ✅ | ✅ | ✅ | 14→15 | ⚠️ |
| 12 | Product LAMY | ✅ | ✅ | ✅ | 24→24 | ✅ |
| 13 | Product Dimo | ✅ | ⚠️ 표현 다름 | ✅ | 13→15 | ⚠️ |
| 14 | Product RECO | - | 원본없음 | localhost JA ✅ | -→24 | ⚠️ |
| 15 | Knowledge Base | - | 원본없음 | localhost EN ❌ | -→2 | ❌ |

---

## 조치 필요 항목 (우선순위순)

### 높음 — 즉시 수정 필요
| # | 항목 | 설명 |
|---|------|------|
| 1 | **Ncode PDF JA 번역** | localhost `/ja/neosmartpen/ncode-pdf`에서 영어로 표시됨. 일본어 번역 필요 |
| 2 | **HybridDocs JA 번역** | localhost `/ja/neosmartpen/hybriddocs`에서 영어로 표시됨. 일본어 번역 필요 |
| 3 | **Knowledge Base JA 번역 + title** | 영어로 표시 + title이 "Home - NeoLAB Convergence Inc."로 부적절 |

### 중간 — 수정 권장
| # | 항목 | 설명 |
|---|------|------|
| 4 | **Notebooks title** | "notebook_22" → 적절한 일본어 제목 (예: "Nノート \| ネオスマートペン") |
| 5 | **Ncode PDF title** | "Neo Smartpen Official Site" → "Ncode PDF \| ネオスマートペン" |
| 6 | **Customer/FAQ 카테고리** | 원본의 상세 FAQ 카테고리(제품별, 앱별, 구매 등) 목록 추가 검토 |
| 7 | **Product RECO 구매 링크** | 한국 네이버 스마트스토어 → JA 사이트에 적합한 링크로 변경 |
| 8 | **Product M1 구매 링크** | "詳細はこちら => #" 빈 링크 → 실제 구매 페이지로 연결 |

### 낮음 — 선택 사항
| # | 항목 | 설명 |
|---|------|------|
| 9 | Home LAMY 모델명 | "LAMY safari スマートペン" vs "LAMY safari all star スマートペン" 확인 |
| 10 | Product Dimo 기능 문구 | 하단 4기능 문구가 원본과 다른 표현 사용 (의도적 개선일 수 있음) |
| 11 | Home Amazon 링크 | 원본에 있는 Amazon 구매 링크가 localhost에 없음 |

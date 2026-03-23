# pokoro.co 페이지 구조 분석 리포트

## 전역 설정 (Global)

| 항목 | 값 |
|------|-----|
| **Title** | Pokoro - Ignite creative thinking with an Interactive learning mate |
| **Font Family** | Montserrat, sans-serif (Google Fonts) |
| **Body Font Size** | 20px |
| **Body Line Height** | 20px |
| **Body Color** | rgb(0, 0, 0) (#000000) |
| **Body Background** | transparent (rgba(0,0,0,0)) |
| **Viewport** | width=device-width, initial-scale=1.0 |
| **Animation Library** | WOW.js (fadeInDown, fadeInLeft, fadeInRight, slideInLeft, slideInRight) |
| **Stylesheets** | 8개 |
| **Scripts** | 3개 |

### .inner 클래스 (공통 컨텐츠 래퍼)

| 항목 | 값 |
|------|-----|
| max-width | 1400px |
| margin | 0 auto (자동 가운데 정렬) |

### .highlight 클래스 (텍스트 하이라이트)

| 항목 | 값 |
|------|-----|
| background-image | linear-gradient(rgba(0,0,0,0) 50%, rgb(248, 229, 129) 50%) |
| display | inline |
| 효과 | 텍스트 하단 50%에 노란색 형광펜 효과 |

### 주요 색상 팔레트

| 이름 | 값 | 용도 |
|------|-----|------|
| **Yellow** | rgb(248, 229, 129) / #F8E581 | 주요 브랜드 컬러, Hero BG, highlight |
| **Purple** | rgb(167, 129, 248) / #A781F8 | About NEOLAB 섹션 BG |
| **Black** | rgb(0, 0, 0) / #000000 | 텍스트, 버튼, Footer BG |
| **White** | rgb(255, 255, 255) / #FFFFFF | 버튼 텍스트, Footer 텍스트 |
| **Light Gray** | rgb(245, 245, 245) / #F5F5F5 | sec04 cont02 BG |

---

## 타이포그래피 시스템

| 용도 | Tag | Font Size | Font Weight | Line Height | Color |
|------|-----|-----------|-------------|-------------|-------|
| **Hero 로고 (POKORO)** | H1 | 48px | 700 | 67.2px | #000 |
| **H1 (대제목)** | H1 | 48px | 700 | 67.2px | #000 |
| **H2 (섹션 제목)** | H2 | 40px | 700 | 56px | #000 |
| **H3 (소제목)** | H3 | 34px | 700 | 47.6px | #000 |
| **본문 (Body)** | span/div | 24px | 400 | 33.6px | #000 |
| **설명 텍스트** | span/div | 20px | 400 | 28px | #000 |
| **Footer 텍스트** | li/p | 16px | 400 | - | #FFF |
| **Footer 라벨 (Q&A)** | label | 16px | 700 | - | #FFF |

---

## 섹션별 상세 분석

---

### SECTION 0: #main (Hero Section)

| 항목 | 값 |
|------|-----|
| **Height** | 900px |
| **Background Color** | rgb(248, 229, 129) / #F8E581 |
| **Background Image** | url("https://pokoro.co/image/main_bg.png") |
| **Background Size** | cover |
| **Background Position** | 70% 50% |
| **Background Repeat** | no-repeat |
| **Padding** | 160px 0px 160px 0px |
| **Display** | flex |
| **Flex Direction** | row |
| **Align Items** | center |
| **Overflow** | hidden |
| **Position** | relative |
| **Font Size (container)** | 120px |

#### Hero 내부 구조

```
<section id="main">
  <div class="main-tit">                     // fontSize: 120px, display: flex
    <h1 class="tm-title wow fadeInDown">      // fontSize: 48px, fontWeight: 700
      POKORO <sup>TM</sup>
    </h1>
    <div class="sub-tit wow fadeInDown">      // "Ignite creative thinking"
      <span>with an Interactive learning mate</span>
    </div>
  </div>
  <button class="contact-btn">CONTACT US</button>
  <button class="close-btn"></button>         // 모달 닫기 버튼
  <form>                                      // Contact 폼 (모달)
    ...
  </form>
</section>
```

#### CONTACT US 버튼 스타일

| 항목 | 값 |
|------|-----|
| Background | rgb(0, 0, 0) / #000 |
| Color | rgb(255, 255, 255) / #FFF |
| Font Size | 20px |
| Font Weight | 400 |
| Padding | 20px 24px 20px 24px |
| Border Radius | 999px (pill shape) |
| Border | none |

---

### SECTION 1: #sec01 (Hands on Learning Meets AI)

| 항목 | 값 |
|------|-----|
| **Background** | transparent |
| **Padding** | 160px 0px 160px 0px |
| **Max Width** | 1400px |
| **Display** | flex |
| **Flex Direction** | column |
| **Align Items** | center |
| **Gap** | 80px |
| **Class** | inner |

#### 구조

```
<section id="sec01" class="inner">
  <div>
    <h3>Hands on Learning Meets AI</h3>           // 34px, 700
    <h2>DIGITAL LEARNING 2.0 POKORO<sup>TM</sup></h2>  // 40px, 700
    <div class="pokoro_img">
      <img src="sec01-img01.png" />                // 500x657 display
    </div>
  </div>
  <ul>                                              // flex, gap: 40px, wrap, center
    <li>                                            // flex column, gap: 8px, items: center
      <img src="sec01-ico01.png" /> (120x120)
      <span>Interactive Learning</span>             // 16px, 700
    </li>
    <!-- ... 9 items total ... -->
  </ul>
</section>
```

#### Feature List (UL) 스타일

| 항목 | 값 |
|------|-----|
| Display | flex |
| Gap | 40px |
| Flex Wrap | wrap |
| Justify Content | center |

#### Feature Item (LI) 스타일

| 항목 | 값 |
|------|-----|
| Display | flex |
| Flex Direction | column |
| Gap | 8px |
| Align Items | center |
| Width | 120px |
| Font Size | 16px |
| Font Weight | 700 |
| Text Align | center |
| Border Radius | 16px |

#### sec01 이미지 목록

| 파일명 | Natural Size | Display Size | 용도 |
|--------|-------------|--------------|------|
| sec01-img01.png | 456x599 | 500x657 | POKORO 디바이스 이미지 |
| sec01-ico01.png | 100x100 | 120x120 | Interactive Learning 아이콘 |
| sec01-ico02.png | 100x100 | 120x120 | GPT-4.0 아이콘 |
| sec01-ico03.png | 100x100 | 120x120 | Card Based Learning 아이콘 |
| sec01-ico04.png | 100x101 | 120x121 | No Screens 아이콘 |
| sec01-ico05.png | 100x101 | 120x121 | Learning Analytics 아이콘 |
| sec01-ico06.png | 100x101 | 120x121 | Speaks 5 Languages 아이콘 |
| sec01-ico07.png | 100x100 | 120x120 | AI Guidance Engine 아이콘 |
| sec01-ico08.png | 100x100 | 120x120 | User Data Protection 아이콘 |
| sec01-ico09.png | 100x100 | 120x120 | Portable 아이콘 |

---

### SECTION 2: #sec02 (Screen Problem & Answer)

| 항목 | 값 |
|------|-----|
| **Background** | transparent |
| **Padding** | 160px 0px 160px 0px |
| **Max Width** | 1400px |
| **Display** | flex |
| **Flex Direction** | column |
| **Gap** | 160px |
| **Align Items** | center |
| **Class** | inner |

#### 구조

```
<section id="sec02" class="inner">
  <!-- 상단: 텍스트 + 이미지 (가로 배치) -->
  <div class="contents">                          // flex, row, gap: 40px
    <div class="img wow fadeInDown">
      <img src="sec02-img01.png" />                // 680x480
    </div>
    <div class="contents-txt">                     // fontSize: 24px, lineHeight: 33.6px
      <span>"Children are exposed to screens..."</span>
      <span>"And in the classroom..."</span>
      <h3>"How can we nurture <span class="highlight">a child's creative growth</span>
           without relying on screens?"</h3>       // 34px, 700
    </div>
  </div>
  <!-- 하단: THE ANSWER IS POKORO -->
  <div class="inner pokoro-answer">                // flex, column, gap: 80px, text-align: center
    <h1>THE ANSWER IS <span class="highlight">POKORO</span><sup>TM</sup></h1>  // 48px, 700
  </div>
</section>
```

#### sec02 이미지

| 파일명 | Natural Size | Display Size |
|--------|-------------|--------------|
| sec02-img01.png | 680x480 | 680x480 |

---

### SECTION 3: #sec03 (Product Features - Yellow BG)

| 항목 | 값 |
|------|-----|
| **Background** | rgb(248, 229, 129) / #F8E581 |
| **Padding** | 160px 0px 160px 0px |
| **Display** | flex |
| **Flex Direction** | column |
| **Gap** | 160px |
| **Max Width** | none (full width) |

#### Article 1: cont01 (With POKORO, Foster creativity)

| 항목 | 값 |
|------|-----|
| Class | inner cont01 |
| Max Width | 1400px |
| Display | flex, column |
| Gap | 24px |
| Align Items | center |

```
<article class="inner cont01">
  <h1>With <span class="highlight">POKORO,</span><sup>TM</sup></h1>       // 48px, 700
  <h2><span class="highlight">Foster creativity</span> beyond traditional reading</h2>  // 40px, 700
  <p>Help children to develop independent thinking...</p>                  // 24px, 400
</article>
```

#### Article 2: cont02 (Screen free smart AI)

| 항목 | 값 |
|------|-----|
| Class | inner cont02 |
| Max Width | 1400px |
| Display | flex |

```
<article class="inner cont02">
  <div class="description">                      // flex, column, gap: 16px, w: 935px
    <h2>POKORO, <span class="highlight">Screen free smart AI</span> device for kids.</h2>
    <p>POKORO's educational guidance engine offers...</p>
  </div>
  <img class="img-desc wow fadeInDown" src="Group 39.png" />   // 1400x903
  <img class="img-desc wow fadeInDown" src="Group 39_mo.png" /> // mobile only (0x0)
</article>
```

#### Article 3: cont03 (Remote-sized Friend)

| 항목 | 값 |
|------|-----|
| Display | flex |

```
<article class="cont03">
  <h2><span class="highlight">Friend</span> for chit & chat</h2>
  <h3>Any subject. anywhere. anytime.</h3>
  <p>POKORO listens and offer a judgment-free conversation...</p>
  <!-- Sub-sections -->
  <h3>Child's Boundless Energy? Met!</h3>
  <p>Supercharge conversation with a Welcoming Face & Friendly Voice.</p>
  <h3>Cute Cases</h3>
  <p>Minimize damages & Maximize cuteness</p>
  <img src="sec03-cont03-img01.png" />            // 660x694
  <img src="sec03-cont03-img02.png" />            // 201x557
  <img src="sec03-cont03-img03.png" />            // 304x355
</article>
```

#### Article 4: cont04 (When do you need Pokoro?)

| 항목 | 값 |
|------|-----|
| Display | flex, column |
| Gap | 80px |

```
<article class="cont04">
  <div class="description wow fadeInDown">         // flex, column, gap: 16px, w: ~580px
    <h2>When do you need Pokoro?</h2>              // 40px, 700
  </div>
  <div>
    <h3>When your child studies foreign language</h3>   // 34px, 700
    <p>Practice foreign languages without help...</p>
    <h3>When the child studies STEM</h3>
    <h3>as a replacement for Smartphone</h3>
    <h3>When the child reads a book</h3>
  </div>
</article>
```

#### Article 5: cont05 (Built with Hands-On learning)

| 항목 | 값 |
|------|-----|
| Class | inner cont05 |
| Max Width | 1400px |
| Display | flex, column |
| Gap | 80px |

```
<article class="inner cont05">
  <h2>Built with <span class="highlight">Hands-On learning</span> in mind</h2>  // 40px, 700
  <p>POKORO makes learning more engaging through touch, speech and even sight.</p>
  <!-- 3-column grid -->
  <div>
    <div>
      <img src="sec03-cont05-img01.png" />    // 430x432 - TAP.
      <h3>TAP.</h3>
    </div>
    <div>
      <img src="sec03-cont05-img02.png" />    // 430x432 - TALK.
      <h3>TALK.</h3>
    </div>
    <div>
      <img src="sec03-cont05-img03.png" />    // 430x432 - CONNECT.
      <h3>CONNECT.</h3>
    </div>
  </div>
</article>
```

#### Article 6: cont06 (Family friendly fun)

| 항목 | 값 |
|------|-----|
| Class | inner cont06 |
| Max Width | 1400px |
| Display | flex, column |
| Gap | 80px |

```
<article class="inner cont06">
  <h2>POKORO is for family friendly fun</h2>
  <p>Pokoro operates within an child-friendly context for kids...</p>
  <p>Equipped with GPT-4o, POKORO is excellent at talking to adults, too...</p>
  <img src="sec03-cont06-img01.png" />        // 971x466
  <img src="sec03-cont06-img02.png" />        // 971x433
</article>
```

#### sec03 이미지 목록

| 파일명 | Natural Size | Display Size | 용도 |
|--------|-------------|--------------|------|
| Group 39.png | 1200x774 | 1400x903 | POKORO 기능 다이어그램 |
| Group 39_mo.png | 1024x786 | 0x0 (mobile) | 모바일 버전 |
| sec03-cont03-img01.png | 600x631 | 660x694 | Remote-sized Friend |
| sec03-cont03-img01_mo.png | 720x725 | 0x0 (mobile) | 모바일 버전 |
| sec03-cont03-img02.png | 324x896 | 201x557 | 디바이스 사이드뷰 |
| sec03-cont03-img03.png | 278x325 | 304x355 | 케이스 이미지 |
| sec03-cont05-img01.png | 448x450 | 430x432 | TAP |
| sec03-cont05-img02.png | 448x450 | 430x432 | TALK |
| sec03-cont05-img03.png | 448x450 | 430x432 | CONNECT |
| sec03-cont06-img01.png | 977x469 | 971x466 | Family - Kids |
| sec03-cont06-img02.png | 960x428 | 971x433 | Family - Adults |

---

### SECTION 4: #sec04 (Educational Features - White BG)

| 항목 | 값 |
|------|-----|
| **Background** | transparent (white) |
| **Padding** | 160px 0px 160px 0px |
| **Display** | flex |
| **Flex Direction** | column |
| **Gap** | 160px |
| **Max Width** | none (full width) |

#### Article 1: cont01 (Well-Read, Understands Better)

| 항목 | 값 |
|------|-----|
| Class | inner cont01 |
| Max Width | 1400px |
| Display | block |

```
<article class="inner cont01">
  <h2>"Child who is Well-Read, Understands Better."</h2>    // 40px, 700
  <p>POKORO guides children to deepen their understanding...</p>
</article>
```

#### Article 2: cont02 (Learn how to ask questions)

| 항목 | 값 |
|------|-----|
| Class | cont02 wow fadeInDown |
| Background | rgb(245, 245, 245) / #F5F5F5 |
| Max Width | none (full width, 2155px) |
| Display | block |

```
<article class="cont02 wow fadeInDown">
  <div class="inner">                              // maxW: 1400px
    <h2>Learn how to <span class="highlight">ask questions</span>
        <span class="highlight">find answers</span></h2>
    <p>Children can have meaningful conversations...</p>
  </div>
  <img src="sec04-cont02-img01.png" />              // 680x651
</article>
```

#### Article 3: cont03 (POKORO Flashcards)

| 항목 | 값 |
|------|-----|
| Class | inner cont03 |
| Max Width | 1400px |
| Display | flex, column |
| Gap | 80px |

```
<article class="inner cont03">
  <h2>POKORO Flashcards <span class="highlight">to Jump Start Creativity Engine</span></h2>
  <p>Channel children's endless curiosity into learning opportunity.</p>
  <div>
    <img src="sec04-cont03-img01.png" />          // 692x587
    <div>
      <h3>Turn <span class="highlight">Every 'Why?'</span>
          <span class="highlight">into 'Aha!'</span> and more.</h3>
      <p>POKORO's guided question cards encourage children to ask and learn more.</p>
    </div>
  </div>
  <div>
    <img src="sec04-cont03-img02.png" />          // 692x465
    <div>
      <h3>Extra Curious Minds? <span class="highlight">POKORO got you covered!</span></h3>
      <p>From STEM to bedtime stories, POKORO Flashcard is packed with topics...</p>
    </div>
  </div>
</article>
```

#### Article 4: cont04 (Language Practice)

| 항목 | 값 |
|------|-----|
| Class | cont04 |
| Background | rgb(245, 245, 245) / #F5F5F5 |
| Padding | 80px |
| Border Radius | 40px |
| Max Width | none |

```
<article class="cont04">
  <h2>Language Practice</h2>                       // 40px, 700
  <p>Kids can practice full conversations...</p>
  <span>Supports multiple languages and more are coming!</span>
  <img src="sec04-cont04-img01.png" />            // 600x695
  <img src="sec04-cont04-img02.png" />            // 600x695
</article>
```

#### Article 5: cont04-2 (Privacy & Engaging experience)

| 항목 | 값 |
|------|-----|
| Class | inner cont03 cont04-2 |
| Max Width | 1400px |
| Display | flex, column |
| Gap | 160px |

```
<article class="inner cont03 cont04-2">
  <div>
    <h3>Designed with <span class="highlight">Privacy</span> in Mind</h3>  // 34px, 700
    <p>We know how important it is to protect children's privacy...</p>
    <img src="sec04-cont04_2-img01.png" />        // 680x481
  </div>
  <div>
    <h3>For engaging experience <span class="highlight">with ease</span></h3>
    <p>Small and lightweight, the device is easy for kids to hold...</p>
    <img src="sec04-cont04_2-img03.png" />        // 680x751
  </div>
</article>
```

#### Article 6: cont05 (Parental Guidance Tool)

| 항목 | 값 |
|------|-----|
| Class | inner cont03 cont05 |
| Max Width | 1400px |
| Display | flex, column |

```
<article class="inner cont03 cont05">
  <h2><span class="highlight">Equipped with</span> Parental Guidance Tool</h2>
  <p>Customized Analysis on Child's learning activity.</p>
  <p>By analyzing the activities, PoKoro offers insights...</p>
  <img src="sec04-cont05.png" />                  // 1400x700
</article>
```

#### sec04 이미지 목록

| 파일명 | Natural Size | Display Size | 용도 |
|--------|-------------|--------------|------|
| sec04-cont02-img01.png | 680x651 | 680x651 | Ask questions 이미지 |
| sec04-cont03-img01.png | 850x721 | 692x587 | Flashcard Why->Aha |
| sec04-cont03-img02.png | 850x571 | 692x465 | Flashcard Topics |
| sec04-cont04-img01.png | 692x801 | 600x695 | Language Practice 1 |
| sec04-cont04-img02.png | 692x801 | 600x695 | Language Practice 2 |
| sec04-cont04_2-img01.png | 680x481 | 680x481 | Privacy |
| sec04-cont04_2-img03.png | 680x751 | 680x751 | Engaging experience |
| sec04-cont05.png | 908x454 | 1400x700 | Parental Guidance |

---

### SECTION 5: #sec05 (Reviews - Yellow BG)

| 항목 | 값 |
|------|-----|
| **Background** | rgb(248, 229, 129) / #F8E581 |
| **Padding** | 160px 0px 160px 0px |
| **Display** | flex |
| **Flex Direction** | column |
| **Gap** | 80px |
| **Width** | full width |

```
<section id="sec05">
  <h2>Reviews <span class="highlight">from POKORO Beta Testers</span></h2>  // 40px, 700
  <div>
    <!-- Desktop images -->
    <img src="sec05-img01.png" />                  // 1200x291
    <img src="sec05-img02.png" />                  // 1200x289
    <img src="sec05-img03.png" />                  // 1200x291
    <!-- Mobile images (hidden on desktop) -->
    <img src="sec05-img01_mo.png" />               // 0x0 (hidden)
    <img src="sec05-img02_mo.png" />               // 0x0 (hidden)
    <img src="sec05-img03_mo.png" />               // 0x0 (hidden)
  </div>
</section>
```

#### sec05 이미지

| 파일명 | Natural Size | Display Size | 용도 |
|--------|-------------|--------------|------|
| sec05-img01.png | 1205x292 | 1200x291 | Review 1 (Desktop) |
| sec05-img02.png | 1215x293 | 1200x289 | Review 2 (Desktop) |
| sec05-img03.png | 1205x292 | 1200x291 | Review 3 (Desktop) |
| sec05-img01_mo.png | 526x494 | 0x0 | Review 1 (Mobile) |
| sec05-img02_mo.png | 526x509 | 0x0 | Review 2 (Mobile) |
| sec05-img03_mo.png | 526x509 | 0x0 | Review 3 (Mobile) |

---

### SECTION 6: #sec06 (About NEOLAB - Purple BG)

| 항목 | 값 |
|------|-----|
| **Background** | rgb(167, 129, 248) / #A781F8 |
| **Padding** | 160px 0px 160px 0px |
| **Display** | block |
| **Width** | full width |

#### Inner Container

| 항목 | 값 |
|------|-----|
| Display | flex |
| Flex Direction | row |
| Gap | 40px |
| Max Width | 1400px |

#### 2-Column Layout

| Column | Class | Width | Flex | Display |
|--------|-------|-------|------|---------|
| Left (Text) | des-wrap | 680px | 1 0 0px | flex, column, gap: 80px |
| Right (Image) | img | 680px | 1 1 0% | flex, column, gap: 40px |

```
<section id="sec06">
  <div class="inner">                              // flex, row, gap: 40px, maxW: 1400px
    <div class="des-wrap">                          // flex: 1 0 0, 680px
      <div class="description">                     // flex, column; fontSize: 20px, lineHeight: 28px
        <h2>About NEOLAB</h2>                       // 40px, 700
        <span>Since 2009, Neolab Convergence has been...</span>
      </div>
      <div class="description">
        <h2>Why we made POKORO?</h2>                // 40px, 700
        <span>In 2015, Neolab launched N2...</span>
        <span>During COVID-19...</span>
        <span>Determined to find a solution...</span>
      </div>
    </div>
    <div class="img">                               // flex: 1 1 0%, 680px
      <img src="sec06-img.png" />                   // 680x596
    </div>
  </div>
  <a href="mailto:leocho@neolab.net">
    <button>For B2B Inquiry, Please Contact leocho@neolab.net</button>
  </a>
</section>
```

#### B2B 문의 버튼 스타일

| 항목 | 값 |
|------|-----|
| Background | transparent |
| Color | rgb(255, 255, 255) / #FFF |
| Font Size | 24px |
| Padding | 16px |
| Border | 0.625px solid #FFF |
| Border Radius | 16px |
| Width | 1400px |
| Display | flex |

#### sec06 이미지

| 파일명 | Natural Size | Display Size |
|--------|-------------|--------------|
| sec06-img.png | 1360x1193 | 680x596 |

---

### FOOTER (Black BG)

| 항목 | 값 |
|------|-----|
| **Background** | rgb(0, 0, 0) / #000 |
| **Color** | rgb(255, 255, 255) / #FFF |
| **Font Family** | Montserrat, sans-serif |

#### Inner Container

| 항목 | 값 |
|------|-----|
| Max Width | 1400px |
| Padding Top | 160px |

#### Footer Top (2-Column)

| Column | Class | Width | Display | Flex | Gap |
|--------|-------|-------|---------|------|-----|
| Left | qa | 664px | flex, column | 1 1 0% | 24px |
| Right | techSpecs | 664px | flex, column | 1 1 0% | 24px |

##### Q&A (Accordion)

```
<div class="qa">
  <h4>Q&A</h4>
  <article class="accordion">
    <input type="checkbox" />
    <label>What makes Pokoro special?</label>       // 16px, 700, pointer
    <div>answer text...</div>                       // 16px, 400
    <!-- ... 5 Q&A items ... -->
  </article>
</div>
```

**Q&A Label 스타일:**
- Font Size: 16px
- Font Weight: 700
- Color: #FFF
- Padding: 16px
- Cursor: pointer
- Display: flex

##### Tech Specs

```
<div class="techSpecs">
  <h4>Tech Specs</h4>
  <h4>Battery and Charging</h4>
  <ul>
    <li>500 cycle (0.2C charge and discharge at 23+-2 deg C)</li>
    <li>Rechargeable Battery(Li-polymer) 3.7V / 1100mAh</li>
    <li>DC 5V / 2A (USB Type-C)</li>
  </ul>
  <h4>Dimensions and Weight</h4>
  <ul>
    <li>1.76x4.88x0.93 inch / 2.3 oz</li>
    <li>44.8x124x23.6mm / 65 gram</li>
  </ul>
  <h4>Connectivity</h4>
  <ul>
    <li>Wi-Fi 2.4GHz 802.11 b/g/n</li>
    <li>BLE 5 1Mbps</li>
    <li>Wi-Fi & BLE co-existence Antenna</li>
  </ul>
  <h4>Material</h4>
  <ul>
    <li>Body: Flame Retardant ABS</li>
    <li>Speaker: Mesh Fabric</li>
  </ul>
</div>
```

#### Footer Bottom

```
<div class="ft_bottom">                             // flex, column, gap: 16px, pt: 16px
  <div>
    <span>Privacy Policy</span>
    <span>Terms of use</span>
  </div>
  <ul class="copy">                                 // flex
    <li>Customer Support : support_pokoro@neolab.net</li>
    <li>Address : #1501, Mario Tower, Guro-Dong 222-12, Guro-Gu, Seoul, Korea 08389</li>
  </ul>
  <p>Copyright (c) 2024 NeoLAB Convergence Inc.</p>
</div>
```

#### Scroll to Top 버튼

```
<button>Up Arrow</button>                            // fixed position
```

---

## 전체 이미지 URL 목록

### Background Images

| URL | Element | Size | Position |
|-----|---------|------|----------|
| https://pokoro.co/image/main_bg.png | #main (section) | cover | 70% 50% |

### Content Images (IMG tags)

| # | Section | URL | Natural | Display |
|---|---------|-----|---------|---------|
| 0 | sec01 | https://pokoro.co/image/sec01-img01.png | 456x599 | 500x657 |
| 1 | sec01 | https://pokoro.co/image/sec01-ico01.png | 100x100 | 120x120 |
| 2 | sec01 | https://pokoro.co/image/sec01-ico02.png | 100x100 | 120x120 |
| 3 | sec01 | https://pokoro.co/image/sec01-ico03.png | 100x100 | 120x120 |
| 4 | sec01 | https://pokoro.co/image/sec01-ico04.png | 100x101 | 120x121 |
| 5 | sec01 | https://pokoro.co/image/sec01-ico05.png | 100x101 | 120x121 |
| 6 | sec01 | https://pokoro.co/image/sec01-ico06.png | 100x101 | 120x121 |
| 7 | sec01 | https://pokoro.co/image/sec01-ico07.png | 100x100 | 120x120 |
| 8 | sec01 | https://pokoro.co/image/sec01-ico08.png | 100x100 | 120x120 |
| 9 | sec01 | https://pokoro.co/image/sec01-ico09.png | 100x100 | 120x120 |
| 10 | sec02 | https://pokoro.co/image/sec02-img01.png | 680x480 | 680x480 |
| 11 | sec03 | https://pokoro.co/image/Group%2039.png | 1200x774 | 1400x903 |
| 12 | sec03 | https://pokoro.co/image/Group%2039_mo.png | 1024x786 | 0x0 (mobile) |
| 13 | sec03 | https://pokoro.co/image/sec03-cont03-img01.png | 600x631 | 660x694 |
| 14 | sec03 | https://pokoro.co/image/sec03-cont03-img01_mo.png | 720x725 | 0x0 (mobile) |
| 15 | sec03 | https://pokoro.co/image/sec03-cont03-img02.png | 324x896 | 201x557 |
| 16 | sec03 | https://pokoro.co/image/sec03-cont03-img03.png | 278x325 | 304x355 |
| 17 | sec03 | https://pokoro.co/image/sec03-cont05-img01.png | 448x450 | 430x432 |
| 18 | sec03 | https://pokoro.co/image/sec03-cont05-img02.png | 448x450 | 430x432 |
| 19 | sec03 | https://pokoro.co/image/sec03-cont05-img03.png | 448x450 | 430x432 |
| 20 | sec03 | https://pokoro.co/image/sec03-cont06-img01.png | 977x469 | 971x466 |
| 21 | sec03 | https://pokoro.co/image/sec03-cont06-img02.png | 960x428 | 971x433 |
| 22 | sec04 | https://pokoro.co/image/sec04-cont02-img01.png | 680x651 | 680x651 |
| 23 | sec04 | https://pokoro.co/image/sec04-cont03-img01.png | 850x721 | 692x587 |
| 24 | sec04 | https://pokoro.co/image/sec04-cont03-img02.png | 850x571 | 692x465 |
| 25 | sec04 | https://pokoro.co/image/sec04-cont04-img01.png | 692x801 | 600x695 |
| 26 | sec04 | https://pokoro.co/image/sec04-cont04-img02.png | 692x801 | 600x695 |
| 27 | sec04 | https://pokoro.co/image/sec04-cont04_2-img01.png | 680x481 | 680x481 |
| 28 | sec04 | https://pokoro.co/image/sec04-cont04_2-img03.png | 680x751 | 680x751 |
| 29 | sec04 | https://pokoro.co/image/sec04-cont05.png | 908x454 | 1400x700 |
| 30 | sec05 | https://pokoro.co/image/sec05-img01.png | 1205x292 | 1200x291 |
| 31 | sec05 | https://pokoro.co/image/sec05-img02.png | 1215x293 | 1200x289 |
| 32 | sec05 | https://pokoro.co/image/sec05-img03.png | 1205x292 | 1200x291 |
| 33 | sec05 | https://pokoro.co/image/sec05-img01_mo.png | 526x494 | 0x0 (mobile) |
| 34 | sec05 | https://pokoro.co/image/sec05-img02_mo.png | 526x509 | 0x0 (mobile) |
| 35 | sec05 | https://pokoro.co/image/sec05-img03_mo.png | 526x509 | 0x0 (mobile) |
| 36 | sec06 | https://pokoro.co/image/sec06-img.png | 1360x1193 | 680x596 |

---

## 전체 페이지 레이아웃 요약

```
Body
  |-- #main          (Hero)          h:900px    BG: #F8E581 + main_bg.png
  |-- #sec01.inner   (Features)      h:1172px   BG: transparent
  |-- #sec02.inner   (Problem)       h:1903px   BG: transparent
  |-- #sec03         (Product)       h:varies   BG: #F8E581 (yellow)
  |   |-- .cont01    (Foster creativity)
  |   |-- .cont02    (Screen free AI)
  |   |-- .cont03    (Remote-sized Friend)
  |   |-- .cont04    (When do you need)
  |   |-- .cont05    (Hands-On TAP/TALK/CONNECT)
  |   |-- .cont06    (Family friendly)
  |-- #sec04         (Education)     h:varies   BG: transparent
  |   |-- .cont01    (Well-Read)
  |   |-- .cont02    (Ask questions)            BG: #F5F5F5
  |   |-- .cont03    (Flashcards)
  |   |-- .cont04    (Language Practice)        BG: #F5F5F5, radius: 40px
  |   |-- .cont04-2  (Privacy & Ease)
  |   |-- .cont05    (Parental Guidance)
  |-- #sec05         (Reviews)       h:varies   BG: #F8E581 (yellow)
  |-- #sec06         (About)         h:varies   BG: #A781F8 (purple)
  |-- footer         (Footer)        h:varies   BG: #000000 (black)
      |-- .top       (Q&A + Tech Specs 2-col)
      |-- .ft_bottom (Copyright, links)
```

## 공통 패턴 정리

### Padding 패턴
- 모든 섹션: padding-top/bottom = **160px**
- 좌우 padding: **0px** (inner 클래스로 max-width 제어)

### 간격 (Gap) 패턴
- 섹션 내 article 간: **160px**
- article 내 콘텐츠 블록 간: **80px**
- 텍스트 요소 간: **16px ~ 24px**
- feature 아이콘 간: **40px**

### Inner Container
- max-width: **1400px**
- margin: **0 auto**

### 반응형 (Mobile)
- `_mo.png` 접미사 이미지가 있음 (모바일용)
- Desktop에서는 display:none (width/height = 0)

### 애니메이션 클래스 (WOW.js)
- `wow fadeInDown` - 위에서 아래로 페이드인
- `wow fadeInLeft` - 왼쪽에서 페이드인
- `wow fadeInRight` - 오른쪽에서 페이드인
- `wow slideInLeft` - 왼쪽에서 슬라이드인
- `wow slideInRight` - 오른쪽에서 슬라이드인

### Navigation
- 별도의 고정 네비게이션 바 없음
- Hero 섹션에 CONTACT US 버튼 (모달 팝업)
- Scroll-to-top 버튼 (하단 고정)

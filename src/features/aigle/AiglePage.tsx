import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import RevealHeadingBody from "@/components/common/RevealHeadingBody";
import Section from "@/components/common/Section";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  IntroTwoCol,
  ModalArea,
  ModalWrap,
  ModalImg,
  IntroRight,
  IntroAboutBlock,
  IntroLabel,
  IntroDesc,
  IntroHighlight,
  IntroHighlightText,
  BlueCta,
  BlueCtaLabel,
  BlueCtaCircle,
  BlueCtaCircleText,
  BlueCtaArrow,
  FeatureCardsGrid,
  FeatureCard,
  FeatureIconImg,
  FeatureTitle,
  FeatureDesc,
  ProcessFlow,
  ProcessStepsRow,
  StepCircle,
  StepLine,
  ProcessTextsRow,
  StepTextBlock,
  StepTitle,
  StepDesc,
  UsageTable,
  UsageTh,
  UsageTd,
  PricingWrap,
  PricingTable,
  PTh,
  PTd,
  PricingNotes,
  PricingTwoCol,
  MiniTableWrap,
  MiniTable,
  MiniTh,
  MiniTd,
  PricingSubHead,
  PricingSubDesc,
  S2BBtn,
  CtaInner,
  CtaHeadingGroup,
  CtaTitle,
  CtaDesc,
  CtaBtnRow,
  CtaBtnBlue,
  CtaBtnOutline,
  ArrowImg,
} from "./AiglePage.styles";

export const metadata: Metadata = {
  title: "AiGLE (아이글) - 손글씨로 작성하는 서·논술 AI 평가 지원 서비스",
  description:
    "네오랩컨버전스가 개발한 종이 기반 서·논술형 AI 평가 및 피드백 서비스. 스마트펜으로 글쓰기 전 과정을 기록하고 AI가 분석합니다.",
};

const AIGLE_URL = "https://aigle.neolab.net";

/* ── AiGLE wordmark (CSS-masked vector logo) ──── */
function AiGLEWordmark() {
  const letters = [
    {
      innerInset: "33.52% 77.6% 0.27% 0",
      maskSrc: "/images/aigle/logo-a-mask.png",
      fillSrc: "/images/aigle/logo-a-fill.png",
      maskSize: "44.803px 44.368px",
      maskPos: "0px -0.011px",
    },
    {
      innerInset: "33.54% 68.55% 0.27% 25.78%",
      maskSrc: "/images/aigle/logo-i-mask.png",
      fillSrc: "/images/aigle/logo-i-fill.png",
      maskSize: "11.34px 44.336px",
      maskPos: "0px 0px",
    },
    {
      innerInset: "0 66.48% 70.77% 23.7%",
      maskSrc: "/images/aigle/logo-dot-mask.png",
      fillSrc: "/images/aigle/logo-dot-fill.png",
      maskSize: "19.397px 19.451px",
      maskPos: "0.123px 0px",
    },
    {
      innerInset: "33.51% 42.7% 0 34.82%",
      maskSrc: "/images/aigle/logo-G-mask.png",
      fillSrc: "/images/aigle/logo-G-fill.png",
      maskSize: "44.963px 44.54px",
      maskPos: "-0.01px 0.011px",
    },
    {
      innerInset: "33.54% 21.41% 0.27% 60.6%",
      maskSrc: "/images/aigle/logo-L-mask.png",
      fillSrc: "/images/aigle/logo-L-fill.png",
      maskSize: "35.963px 44.346px",
      maskPos: "0px 0px",
    },
    {
      innerInset: "33.51% -0.01% 0.27% 82%",
      maskSrc: "/images/aigle/logo-E-mask.png",
      fillSrc: "/images/aigle/logo-E-fill.png",
      maskSize: "36.005px 44.357px",
      maskPos: "-0.012px 0.011px",
    },
  ];

  return (
    <div style={{ height: 67, position: "relative", flexShrink: 0, width: 200 }}>
      {letters.map((l, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: l.innerInset,
            WebkitMaskImage: `url(${l.maskSrc})`,
            maskImage: `url(${l.maskSrc})`,
            WebkitMaskSize: l.maskSize,
            maskSize: l.maskSize,
            WebkitMaskPosition: l.maskPos,
            maskPosition: l.maskPos,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <img
            src={l.fillSrc}
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
          />
        </div>
      ))}
    </div>
  );
}

/* ── Feature cards (핵심 기능) ─────────────────── */
const FEATURES = [
  {
    icon: "/images/aigle/icon-feature-1.png",
    title: "스마트펜 연결만으로 AI 채점 완료",
    desc: "학생은 평소처럼 종이에 손글씨로 답안을 작성합니다. 선생님은 스마트펜을 연결하기만 하면, 여러 명의 필기\n데이터가 자동으로 업로드되고 AI 채점까지 완료됩니다.",
  },
  {
    icon: "/images/aigle/icon-feature-2.png",
    title: "AI가 평가 기준표를 즉시 설계",
    desc: "선생님이 문제를 입력하면 AI가 최적화된 평가 기준을\n즉시 제안합니다. 채점 준비에 드는 시간을 압도적으로 줄여 수업에 더 집중할 수 있습니다.",
  },
  {
    icon: "/images/aigle/icon-feature-3.png",
    title: "과정 중심 평가",
    desc: "단순한 결과 채점을 넘어, 필기 속도·획순·압력 등 글쓰기 전 과정을 분석합니다. 학생의 사고 흐름과 고민의\n흔적까지 입체적으로 파악할 수 있습니다.",
  },
];

/* ── Process steps ───────────────────────────── */
const STEPS = [
  {
    num: "01",
    title: "손글씨 답안 작성",
    desc: "학생은 평소처럼 종이에 펜으로\n서·논술형 답안을 작성합니다.",
  },
  {
    num: "02",
    title: "스마트펜 연결 및 자동 업로드",
    desc: "스마트펜을 PC에 연결하면 전체 필기 데이터가\n아이글로 자동 전송됩니다.",
  },
  {
    num: "03",
    title: "AI 채점 및 맞춤 피드백",
    desc: "AI가 즉시 채점하고, 교사는 결과를 검토하여\n학생별 맞춤 피드백을 제공합니다.",
  },
];

/* ── Pricing data ────────────────────────────── */
const PRICING_ROWS = [
  { name: "아이글 30", price: "3,700,000원", pen: "30", credit1: "1,500", price2: "1,000,000원", credit2: "1,500" },
  { name: "아이글 60", price: "7,300,000원", pen: "60", credit1: "3,000", price2: "1,500,000원", credit2: "3,000" },
  { name: "아이글 100", price: "10,600,000원", pen: "100", credit1: "5,000", price2: "2,000,000원", credit2: "4,500" },
  { name: "아이글 150", price: "16,400,000원", pen: "150", credit1: "7,500", price2: "3,000,000원", credit2: "7,500" },
];

const CREDIT_ROWS = [
  { price: "1,000,000원", credit: "1,500" },
  { price: "1,500,000원", credit: "2,500" },
  { price: "2,000,000원", credit: "4,000" },
  { price: "2,500,000원", credit: "6,000" },
];

/* ── Page ────────────────────────────────────── */
export default async function AiglePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        {/* Hero */}
        <PageHero title="아이글" backgroundImage="/images/aigle/hero-bg.jpg" />

        {/* Intro */}
        <RevealHeadingBody
          title={"아이글(AiGLE),\n손글씨로 작성하는 서·논술 AI 평가지원 서비스."}
          description={
            "학생들의 손글씨 답안을 즉시 디지털화하여 실시간 학습 상태를 체계적으로 관리하세요.\n아이글(AiGLE)은 서·논술형 평가의 물리적 한계를 극복하고 번거로운 행정 부담을 혁신적으로 줄여, 오직 교육에만 집중할 수 있는 환경을 만듭니다."
          }
          paddingBottom={false}
          contents={
            <IntroTwoCol>
              {/* Modal screenshots */}
              <ModalArea>
                <ModalWrap>
                  <ModalImg
                    src="/images/aigle/modal-1.png"
                    alt=""
                    $left="0" $top="0" $width="75.8%"
                  />
                  <ModalImg
                    src="/images/aigle/modal-2.png"
                    alt=""
                    $left="57.2%" $top="26.8%" $width="40.5%"
                  />
                  <ModalImg
                    src="/images/aigle/modal-3.png"
                    alt=""
                    $left="51.7%" $top="69.7%" $width="40.5%"
                  />
                </ModalWrap>
              </ModalArea>

              {/* Right info card */}
              <IntroRight>
                <IntroAboutBlock>
                  <IntroLabel>아이글(AiGLE)이란?</IntroLabel>
                  <IntroDesc>
                    {`네오랩컨버전스가 개발한 종이 기반의 서·논술형 AI 평가 및 피드백 서비스입니다. \n스마트펜을 활용해 필기 속도, 획순, 압력 등 글쓰기 전 과정을 디지털 데이터로 기록하고, AI가 이를 분석하여 결과뿐 아니라 생각의 흐름과 고민의 흔적까지 파악합니다.`}
                  </IntroDesc>
                  <IntroHighlight>
                    <IntroHighlightText>
                      {`교사는 학생의 사고력을 입체적으로 이해하며, 신뢰도 높은\n과정 중심 평가와 맞춤형 성장 피드백을 제공할 수 있습니다.`}
                    </IntroHighlightText>
                  </IntroHighlight>
                </IntroAboutBlock>
                <BlueCta href={AIGLE_URL} target="_blank" rel="noopener noreferrer">
                  <BlueCtaLabel>아이글 시작하기</BlueCtaLabel>
                  <BlueCtaCircle>
                    <BlueCtaCircleText>바로가기</BlueCtaCircleText>
                    <BlueCtaArrow src="/images/aigle/cta-vector.png" alt="" />
                  </BlueCtaCircle>
                </BlueCta>
              </IntroRight>
            </IntroTwoCol>
          }
        />

        {/* 핵심 기능 */}
        <Section
          title="핵심 기능"
          background="#f4f8fb"
          contained={false}
        >
          <FeatureCardsGrid>
            {FEATURES.map((f) => (
              <FeatureCard key={f.title}>
                <FeatureIconImg src={f.icon} alt="" />
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeatureCardsGrid>
        </Section>

        {/* 서비스 활용 프로세스 */}
        <Section
          title="서비스 활용 프로세스 및 가이드"
          background="#0f2235"
          tone="light"
          contained={false}
        >
          <ProcessFlow>
            {/* Step circles */}
            <ProcessStepsRow>
              {STEPS.map((s, i) => (
                <>
                  <StepCircle key={s.num}>{s.num}</StepCircle>
                  {i < STEPS.length - 1 && <StepLine key={`line-${i}`} />}
                </>
              ))}
            </ProcessStepsRow>
            {/* Step texts */}
            <ProcessTextsRow>
              {STEPS.map((s) => (
                <StepTextBlock key={s.num}>
                  <StepTitle>{s.title}</StepTitle>
                  <StepDesc>{s.desc}</StepDesc>
                </StepTextBlock>
              ))}
            </ProcessTextsRow>
          </ProcessFlow>

          {/* Usage table */}
          <UsageTable>
            <tbody>
              <tr>
                <UsageTh as="th">도입 대상</UsageTh>
                <UsageTd>초등학교, 중학교, 고등학교</UsageTd>
              </tr>
              <tr>
                <UsageTh as="th">활용 교과목</UsageTh>
                <UsageTd>국어, 영어, 수학, 사회, 과학, 기타 과목</UsageTd>
              </tr>
              <tr>
                <UsageTh as="th">시스템 환경</UsageTh>
                <UsageTd>Window PC, Chrome 브라우저</UsageTd>
              </tr>
            </tbody>
          </UsageTable>
        </Section>

        {/* 이용 요금 */}
        <Section title="이용 요금" contained={false}>
          <PricingWrap>
            {/* Description */}
            <p style={{ textAlign: "center", fontSize: "clamp(14px,1.3vw,24px)", color: "#000", lineHeight: 1.4 }}>
              학교 인원에 관계없이, 각 학교별 계획에 따라 원하시는 상품을 선택하여 이용하실 수 있습니다.
            </p>

            <div>
              {/* Main pricing table */}
              <div style={{ overflowX: "auto" }}>
                <PricingTable>
                  <thead>
                    <tr>
                      <PTh rowSpan={2}>상품명</PTh>
                      <PTh rowSpan={2}>요금제(원)</PTh>
                      <PTh $bg="#dae9ff" colSpan={2}>1년차 서비스(기본)</PTh>
                      <PTh $bg="#b3d1ff" colSpan={2}>2년차부터 지불하는 요금</PTh>
                    </tr>
                    <tr>
                      <PTh $bg="#ecf4ff">스마트펜 지급 수량</PTh>
                      <PTh $bg="#ecf4ff">크레딧 제공량</PTh>
                      <PTh $bg="#e0ecff">요금제</PTh>
                      <PTh $bg="#e0ecff">크레딧 제공량</PTh>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_ROWS.map((row) => (
                      <tr key={row.name}>
                        <PTd>{row.name}</PTd>
                        <PTd $strong>{row.price}</PTd>
                        <PTd>{row.pen}</PTd>
                        <PTd>{row.credit1}</PTd>
                        <PTd $strong $blue>{row.price2}</PTd>
                        <PTd>{row.credit2}</PTd>
                      </tr>
                    ))}
                  </tbody>
                </PricingTable>
              </div>
              <PricingNotes>
                <p>• 1년차에는 <strong>스마트펜이 포함된 가격</strong>입니다.</p>
                <p>• 2년차부터는 스마트펜을 제외한 <strong>순수 서비스 가격</strong>으로 책정됩니다.</p>
              </PricingNotes>
            </div>

            {/* Sub tables */}
            <PricingTwoCol>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <PricingSubHead>크레딧 추가 구매</PricingSubHead>
                <PricingSubDesc>기본 제공 크레딧 소진 후, 추가 크레딧을 구매하여 계속 이용할 수 있습니다.</PricingSubDesc>
                <MiniTableWrap>
                  <MiniTable>
                    <thead>
                      <tr>
                        <MiniTh>추가 크레딧 제공가격</MiniTh>
                        <MiniTh>추가 크레딧 제공량</MiniTh>
                      </tr>
                    </thead>
                    <tbody>
                      {CREDIT_ROWS.map((row) => (
                        <tr key={row.price}>
                          <MiniTd $strong>{row.price}</MiniTd>
                          <MiniTd>{row.credit}</MiniTd>
                        </tr>
                      ))}
                    </tbody>
                  </MiniTable>
                </MiniTableWrap>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                <PricingSubHead>스마트펜 &amp; 크래들 단독 구매</PricingSubHead>
                <PricingSubDesc>
                  스마트펜과 크래들을 별도로 구매하실 경우, 1세트당{" "}
                  <strong>990,000원</strong>(부가세 포함)입니다.
                </PricingSubDesc>
                <S2BBtn
                  href="https://www.s2b.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S2B에서 구매하기
                  <ArrowImg src="/images/aigle/arrow-right.png" alt="" />
                </S2BBtn>
              </div>
            </PricingTwoCol>
          </PricingWrap>
        </Section>

        {/* Bottom CTA */}
        <Section background="#fcfcfc" contained={false}>
          <CtaInner>
            <AiGLEWordmark />
            <CtaHeadingGroup>
              <CtaTitle>지금 바로 시작하세요</CtaTitle>
              <CtaDesc>도입 문의 및 시연 신청은 아래로 연락해 주세요.</CtaDesc>
            </CtaHeadingGroup>
            <CtaBtnRow>
              <CtaBtnBlue href={AIGLE_URL} target="_blank" rel="noopener noreferrer">
                아이글 시작하기
                <ArrowImg src="/images/aigle/arrow-right.png" alt="" />
              </CtaBtnBlue>
              <CtaBtnOutline href="/partnership">
                도입 문의
                <ArrowImg src="/images/aigle/arrow-right-dark.png" alt="" />
              </CtaBtnOutline>
            </CtaBtnRow>
          </CtaInner>
        </Section>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

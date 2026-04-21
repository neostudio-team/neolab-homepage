import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { LazySection } from "@/components/home";
import ContactModalTrigger from "@/components/common/ContactModalTrigger";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  AboutLabel,
  Body,
  CardBody,
  CardTitle,
  Chip,
  ChipBlue,
  ChipWrap,
  ContactLink,
  ContactRow,
  Container,
  CtaBox,
  CtaDesc,
  CtaHeading,
  DarkCtaSection,
  DarkHeading,
  Dot,
  EnvItem,
  EnvList,
  FeatureCard,
  Grid2,
  Grid3,
  Heading,
  HeroAccent,
  HeroBtnRow,
  HeroInner,
  HeroPattern,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  HighlightBox,
  HighlightText,
  IntroImageWrap,
  IntroTextWrap,
  IntroWrap,
  Label,
  MiniTable,
  MiniTableWrap,
  MiniTd,
  MiniTh,
  NoticeList,
  NumBadge,
  PrimaryLink,
  SectionBlue,
  SectionDark,
  SectionWhite,
  SmallBody,
  Split3,
  StepBubble,
  StepCard,
  SubHeading,
  Table,
  TableWrap,
  Td,
  TdBlue,
  TdStrong,
  Th,
  ThBlue,
  ThSubBlue,
  ThSubYellow,
  ThYellow,
  WorkFlowWrap,
  WorkLine,
  CenterHead,
} from "./AiglePage.styles";

export const metadata: Metadata = {
  title: "AiGLE (아이글) - 손글씨로 작성하는 서·논술 AI 평가 지원 서비스",
  description: "네오랩컨버전스가 개발한 종이 기반 서·논술형 AI 평가 및 피드백 서비스. 스마트펜으로 글쓰기 전 과정을 기록하고 AI가 분석합니다.",
};

const AIGLE_URL = "https://aigle.neolab.net";

export default async function AiglePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.aigle;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        <HeroSection>
          <HeroPattern />
          <HeroInner>
            <Label>{t.hero.label}</Label>
            <HeroTitle>Ai<HeroAccent>GLE</HeroAccent></HeroTitle>
            <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
            <HeroBtnRow>
              <PrimaryLink href={AIGLE_URL} target="_blank" rel="noopener noreferrer">{t.hero.cta}</PrimaryLink>
              <ContactModalTrigger buttonText={t.hero.ctaSub} variant="pill" defaultCategory="아이글 문의" />
            </HeroBtnRow>
          </HeroInner>
        </HeroSection>

        <LazySection>
          <SectionWhite>
            <Container>
              <IntroWrap>
                <IntroImageWrap><Image src="/images/home/aigle-service.jpg" alt="AiGLE 서비스 화면" width={600} height={420} /></IntroImageWrap>
                <IntroTextWrap>
                  <AboutLabel>About AiGLE</AboutLabel>
                  <Heading>{t.intro.heading}</Heading>
                  <Body>{t.intro.desc}</Body>
                  <HighlightBox><HighlightText>{t.intro.highlight}</HighlightText></HighlightBox>
                </IntroTextWrap>
              </IntroWrap>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <SectionBlue>
            <Container>
              <CenterHead>
                <Label>Key Features</Label>
                <Heading>{t.features.heading}</Heading>
              </CenterHead>
              <Grid3>
                {t.features.items.map((item, i) => (
                  <FeatureCard key={item.title}>
                    <NumBadge>{String(i + 1).padStart(2, "0")}</NumBadge>
                    <CardTitle>{item.title}</CardTitle>
                    <CardBody>{item.desc}</CardBody>
                  </FeatureCard>
                ))}
              </Grid3>
            </Container>
          </SectionBlue>
        </LazySection>

        <LazySection>
          <SectionWhite>
            <Container>
              <CenterHead>
                <Label>How It Works</Label>
                <Heading>{t.howItWorks.heading}</Heading>
              </CenterHead>
              <WorkFlowWrap>
                <WorkLine />
                <Grid3>
                  {t.howItWorks.steps.map((step) => (
                    <StepCard key={step.step}>
                      <StepBubble>{step.step}</StepBubble>
                      <CardTitle>{step.title}</CardTitle>
                      <CardBody>{step.desc}</CardBody>
                    </StepCard>
                  ))}
                </Grid3>
              </WorkFlowWrap>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <SectionDark>
            <Container>
              <CenterHead>
                <Label>Target Users</Label>
                <DarkHeading>{t.target.heading}</DarkHeading>
              </CenterHead>
              <Split3>
                <div>
                  <Label>학교급</Label>
                  <ChipWrap>{t.target.grades.map((g) => <Chip key={g}>{g}</Chip>)}</ChipWrap>
                </div>
                <div>
                  <Label>활용 교과목</Label>
                  <ChipWrap>{t.target.subjects.map((s) => <ChipBlue key={s}>{s}</ChipBlue>)}</ChipWrap>
                </div>
                <div>
                  <Label>지원 환경</Label>
                  <EnvList>
                    {t.target.env.map((e, i) => (
                      <EnvItem key={e} $main={i === 0}><Dot $main={i === 0} />{e}</EnvItem>
                    ))}
                  </EnvList>
                </div>
              </Split3>
            </Container>
          </SectionDark>
        </LazySection>

        <LazySection>
          <SectionBlue>
            <Container>
              <CenterHead>
                <Label>Pricing</Label>
                <Heading>{t.pricing.heading}</Heading>
                <SmallBody>학교 인원에 관계없이, 각 학교별 계획에 따라 원하시는 상품을 선택하여 이용하실 수 있습니다.</SmallBody>
              </CenterHead>

              <NoticeList>
                <p>• 1년차에는 <strong>스마트펜이 포함된 가격</strong>입니다.</p>
                <p>• 2년차부터는 스마트펜을 제외한 <strong>순수 서비스 가격</strong>으로 책정됩니다.</p>
              </NoticeList>

              <TableWrap>
                <Table>
                  <thead>
                    <tr>
                      <Th rowSpan={2}>상품명</Th>
                      <Th rowSpan={2}>요금제(원)</Th>
                      <ThYellow colSpan={2}>1년차 서비스(기본)</ThYellow>
                      <ThBlue colSpan={2}>2년차부터 지불하는 요금</ThBlue>
                    </tr>
                    <tr>
                      <ThSubYellow>스마트펜 지급 수량</ThSubYellow>
                      <ThSubYellow>크레딧 제공량</ThSubYellow>
                      <ThSubBlue>요금제</ThSubBlue>
                      <ThSubBlue>크레딧 제공량</ThSubBlue>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "아이글 30", price: "3,700,000원", pen: "30", credit1: "1,500", price2: "1,000,000원", credit2: "1,500" },
                      { name: "아이글 60", price: "7,300,000원", pen: "60", credit1: "3,000", price2: "1,500,000원", credit2: "3,000" },
                      { name: "아이글 100", price: "10,600,000원", pen: "100", credit1: "5,000", price2: "2,000,000원", credit2: "4,500" },
                      { name: "아이글 150", price: "16,400,000원", pen: "150", credit1: "7,500", price2: "3,000,000원", credit2: "7,500" },
                    ].map((row) => (
                      <tr key={row.name}>
                        <TdStrong>{row.name}</TdStrong>
                        <TdStrong>{row.price}</TdStrong>
                        <Td>{row.pen}</Td>
                        <Td>{row.credit1}</Td>
                        <TdBlue>{row.price2}</TdBlue>
                        <Td>{row.credit2}</Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableWrap>

              <Grid2>
                <div>
                  <SubHeading>크레딧 추가 구매</SubHeading>
                  <SmallBody>기본 제공 크레딧 소진 후, 추가 크레딧을 구매하여 계속 이용할 수 있습니다.</SmallBody>
                  <MiniTableWrap>
                    <MiniTable>
                      <thead><tr><MiniTh>추가 크레딧 제공가격</MiniTh><MiniTh>추가 크레딧 제공량</MiniTh></tr></thead>
                      <tbody>
                        {[{ price: "1,000,000원", credit: "1,500" }, { price: "1,500,000원", credit: "2,500" }, { price: "2,000,000원", credit: "4,000" }, { price: "2,500,000원", credit: "6,000" }].map((row) => (
                          <tr key={row.price}><MiniTd>{row.price}</MiniTd><MiniTd>{row.credit}</MiniTd></tr>
                        ))}
                      </tbody>
                    </MiniTable>
                  </MiniTableWrap>
                </div>
                <div>
                  <SubHeading>스마트펜 &amp; 크래들 단독 구매</SubHeading>
                  <SmallBody>스마트펜과 크래들을 별도로 구매하실 경우, 1세트당 <strong>990,000원</strong>(부가세 포함)입니다.</SmallBody>
                  <PrimaryLink href="https://www.s2b.kr/S2BNCustomer/S2B/scrweb/remu/rema/searchengine/s2bCustomerSearch.jsp?actionType=MAIN_SEARCH&searchField=&startIndex=&viewCount=50&viewType=LIST&sortField=RANK&priceMin=0&priceMax=0&priceMinSet=0&priceMaxSet=0&categoryLevel1Code=&categoryLevel2Code=&categoryLevel3Code=&categoryLevel3Name=&areaCode=&categoryWinStatus=none&companyCodeParam=&priceNewSet=true&publicPurchaseCode=&f_edufine_code=&submit_yn=Y&searchQuery=202603107261750&searchRequery=&locationGbn=all" target="_blank" rel="noopener noreferrer">S2B에서 구매하기 -&gt;</PrimaryLink>
                </div>
              </Grid2>
            </Container>
          </SectionBlue>
        </LazySection>

        <DarkCtaSection>
          <CtaBox>
            <CtaHeading>{t.cta.heading}</CtaHeading>
            <CtaDesc>{t.cta.desc}</CtaDesc>
            <HeroBtnRow>
              <PrimaryLink href={AIGLE_URL} target="_blank" rel="noopener noreferrer">{t.cta.btn}</PrimaryLink>
              <ContactModalTrigger buttonText={t.cta.btnSub} variant="pill" defaultCategory="아이글 문의" />
            </HeroBtnRow>
            <ContactRow>
              <ContactLink href={`tel:${t.cta.phone}`}>Phone {t.cta.phone}</ContactLink>
              <ContactLink href={`mailto:${t.cta.email}`}>Email {t.cta.email}</ContactLink>
            </ContactRow>
          </CtaBox>
        </DarkCtaSection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

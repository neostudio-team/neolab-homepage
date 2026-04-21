import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { LazySection } from "@/components/home";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  AnswerBox,
  AnswerHeading,
  BodyLg,
  BodyMd,
  BuyBtn,
  Card,
  CardDesc,
  CardGrid3,
  CardTitle,
  Center,
  Container,
  CtaBox,
  CtaSection,
  DesktopOnly,
  DeviceImage,
  FeatureIcon,
  FeatureItem,
  FeatureLabel,
  FeaturesList,
  Half,
  Heading,
  HeroInner,
  HeroSection,
  HeroSub1,
  HeroSub2,
  HeroTitle,
  Highlight,
  Label,
  Main,
  MobileOnly,
  Num,
  NumText,
  PairImage,
  PairImages,
  RoundedImg,
  SectionGray,
  SectionStack,
  SectionWhite,
  SectionYellow,
  Split,
  SplitReverse,
  Sup,
  TapGrid,
  TapLabel,
} from "./PokoroPage.styles";

export const metadata: Metadata = {
  title: "Pokoro - Ignite creative thinking with an Interactive learning mate",
  description: "POKORO - Digital Learning 2.0, Screen free smart AI device for kids",
};

const STORE_URL = "https://smartstore.naver.com/pokoro?n_media=27758&n_query=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_rank=1&n_ad_group=grp-a001-04-000000057244674&n_ad=nad-a001-04-000000479444805&n_keyword_id=nkw-a001-04-000007651633461&n_keyword=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_campaign_type=4&n_contract=tct-a001-04-000000001228285&n_ad_group_type=5&NaPm=ct%3Dmn2obx2f%7Cci%3DER1927f3db%2D266f%2D11f1%2D952e%2D3ac0aae6ed3f%7Ctr%3Dbrnd%7Chk%3D3ed989dad874bfc1fe716527012b0a5af32115ba%7Cnacn%3DMJuAB0AtEIMQ";
const featureIcons = ["/images/pokoro/sec01-ico01.png", "/images/pokoro/sec01-ico02.png", "/images/pokoro/sec01-ico03.png", "/images/pokoro/sec01-ico04.png", "/images/pokoro/sec01-ico05.png", "/images/pokoro/sec01-ico06.png", "/images/pokoro/sec01-ico07.png", "/images/pokoro/sec01-ico08.png", "/images/pokoro/sec01-ico09.png"];

export default async function PokoroPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.pokoro;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Main>
        <HeroSection>
          <HeroInner>
            <HeroTitle>POKORO<Sup>TM</Sup></HeroTitle>
            <HeroSub1>{t.hero.subtitle1}</HeroSub1>
            <HeroSub2>{t.hero.subtitle2}</HeroSub2>
            <BuyBtn href={STORE_URL} target="_blank" rel="noopener noreferrer">포코로 구입하기</BuyBtn>
          </HeroInner>
        </HeroSection>

        <LazySection>
          <SectionWhite>
            <Container>
              <Center>
                <Label>{t.sec01.heading}</Label>
                <Heading>{t.sec01.subheading}<Sup>TM</Sup></Heading>
              </Center>
              <Center><DeviceImage src="/images/pokoro/sec01-img01.png" alt="POKORO Device" /></Center>
              <FeaturesList>
                {t.sec01.features.map((f, i) => (
                  <FeatureItem key={f.label}><FeatureIcon src={featureIcons[i]} alt={f.label} /><FeatureLabel>{f.label}</FeatureLabel></FeatureItem>
                ))}
              </FeaturesList>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <SectionGray>
            <Container>
              <Split>
                <Half><RoundedImg src="/images/pokoro/sec02-img01.png" alt="Child with tablet" /></Half>
                <Half><BodyLg>{t.sec02.p1}</BodyLg><BodyMd>{t.sec02.p2}</BodyMd></Half>
              </Split>
              <AnswerBox>
                <AnswerHeading>{t.sec02.question}</AnswerHeading>
                <Heading><Highlight>{t.sec02.answer}<Sup>TM</Sup></Highlight></Heading>
              </AnswerBox>
            </Container>
          </SectionGray>
        </LazySection>

        <LazySection>
          <SectionYellow>
            <Container>
              <Center><Heading>{t.sec03.creativity.heading}</Heading></Center>
              <CardGrid3>
                <Card><Num><NumText>1</NumText></Num><CardTitle>{t.sec03.screenFree.heading}</CardTitle><CardDesc>{t.sec03.screenFree.description}</CardDesc></Card>
                <Card><Num><NumText>2</NumText></Num><CardTitle>{t.sec03.handsOn.heading}</CardTitle><CardDesc>{t.sec03.handsOn.description}</CardDesc></Card>
                <Card><Num><NumText>3</NumText></Num><CardTitle>{t.sec03.remoteFriend.heading}</CardTitle><CardDesc>{t.sec03.remoteFriend.description}</CardDesc></Card>
              </CardGrid3>

              <TapGrid>
                {[{ img: "/images/pokoro/sec03-cont05-img01.png", label: "TAP." }, { img: "/images/pokoro/sec03-cont05-img02.png", label: "TALK." }, { img: "/images/pokoro/sec03-cont05-img03.png", label: "CONNECT." }].map((item) => (
                  <Center key={item.label}><RoundedImg src={item.img} alt={item.label} /><TapLabel>{item.label}</TapLabel></Center>
                ))}
              </TapGrid>

              <DesktopOnly src="/images/pokoro/Group39.png" alt="POKORO Device Features" />
              <MobileOnly src="/images/pokoro/Group39_mo.png" alt="POKORO Device Features" />
            </Container>
          </SectionYellow>
        </LazySection>

        <LazySection>
          <SectionWhite>
            <Container>
              <SectionStack>
                <Split>
                  <Half><RoundedImg src="/images/pokoro/sec04-cont02-img01.png" alt="POKORO Ask Questions" /></Half>
                  <Half><Heading>{t.sec04.askQuestions.heading}</Heading><BodyMd>{t.sec04.askQuestions.description}</BodyMd></Half>
                </Split>
                <SplitReverse>
                  <Half><PairImages><PairImage src="/images/pokoro/sec04-cont04-img01.png" alt="Language Practice 1" /><PairImage src="/images/pokoro/sec04-cont04-img02.png" alt="Language Practice 2" /></PairImages></Half>
                  <Half><Heading>{t.sec04.languagePractice.heading}</Heading><BodyMd>{t.sec04.languagePractice.p1}</BodyMd><BodyMd>{t.sec04.languagePractice.p2}</BodyMd><BodyMd>{t.sec04.languagePractice.p3}</BodyMd></Half>
                </SplitReverse>
                <Split>
                  <Half><RoundedImg src="/images/pokoro/sec04-cont03-img01.png" alt="POKORO Flashcard" /></Half>
                  <Half><Heading>{t.sec04.flashcards.heading}</Heading><BodyMd>{t.sec04.flashcards.description}</BodyMd><CardTitle>{t.sec04.turnWhy.heading}</CardTitle><BodyMd>{t.sec04.turnWhy.description}</BodyMd></Half>
                </Split>
              </SectionStack>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <SectionGray>
            <Container>
              <Split>
                <Half><Heading>{t.sec04.parentalGuidance.heading}</Heading><BodyMd>{t.sec04.parentalGuidance.p1}</BodyMd><BodyMd>{t.sec04.parentalGuidance.p2}</BodyMd></Half>
                <Half><RoundedImg src="/images/pokoro/sec04-cont05.png" alt="Parental Guidance Tool" /></Half>
              </Split>
            </Container>
          </SectionGray>
        </LazySection>

        <CtaSection>
          <CtaBox>
            <Heading>POKORO<Sup>TM</Sup></Heading>
            <HeroSub1>{t.hero.subtitle2}</HeroSub1>
            <BuyBtn href={STORE_URL} target="_blank" rel="noopener noreferrer">포코로 구입하기</BuyBtn>
          </CtaBox>
        </CtaSection>
      </Main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

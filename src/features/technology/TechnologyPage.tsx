import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { LazySection } from "@/components/home";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  AppCard,
  AppCardDesc,
  AppCardTitle,
  AppFieldsTitle,
  AppGrid,
  AppIcon,
  Body,
  BodyNoMargin,
  CenterIntro,
  CenterWrap,
  Col37,
  Col50,
  Col50FlexCenter,
  Col58,
  Col58FlexCenter,
  Container,
  DevDesc,
  DevSection,
  DevTitle,
  FeatureIcon,
  FeatureRow,
  FeatureTitle,
  FullImage,
  GithubLink,
  HardwareCard,
  HardwareGrid,
  HardwareIntroBody,
  HeroContainer,
  HeroDesc,
  HeroLabel,
  HeroSection,
  HeroTitle,
  HwDesc,
  HwIcon,
  HwTitle,
  IconWrap,
  ImageStack,
  PatentsContainer,
  PatentsDesc,
  PatentsTitle,
  PatternImage,
  SectionDark,
  SectionGray,
  SectionTitle,
  SectionTitleSm,
  SectionWhite,
  ShopLink,
  ShopWrap,
  Stack,
  SubTitle,
  TwoCol,
  WideImage,
} from "./TechnologyPage.styles";

export const metadata: Metadata = {
  title: "Technology - NeoLAB Convergence Inc.",
  description: "Ncode Technology - The core technology behind NeoLAB products",
};

const ncodeIcons = [
  "/images/technology/icon-Ncode_1.png",
  "/images/technology/icon-Ncode_2.png",
];

const hwIcons = [
  "/images/technology/icon-Ncode_3-1.png",
  "/images/technology/icon-Ncode_4.png",
  "/images/technology/icon-Ncode_05-1.png",
];

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.technology;

  const shopUrl =
    lang === "ko"
      ? "https://store.neosmartpen.com/"
      : lang === "ja"
        ? "https://neosmartpenjp.com/"
        : "https://shop.neosmartpen.com/";

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        <HeroSection>
          <HeroContainer>
            <HeroLabel>{t.hero.label}</HeroLabel>
            <HeroTitle>{t.hero.title}</HeroTitle>
            <HeroDesc>{t.hero.description}</HeroDesc>
          </HeroContainer>
        </HeroSection>

        <SectionWhite>
          <Container>
            <TwoCol>
              <Col37>
                <SectionTitle>{t.whatIsNcode.title}</SectionTitle>
                <Body>{t.whatIsNcode.p1}</Body>
                <Body>{t.whatIsNcode.p2}</Body>
              </Col37>
              <Col58FlexCenter>
                <PatternImage src="/images/technology/Neo-05_2.png" alt="Ncode Pattern" width={500} height={400} />
              </Col58FlexCenter>
            </TwoCol>
          </Container>
        </SectionWhite>

        <SectionGray>
          <Container>
            <TwoCol>
              <Col50FlexCenter>
                <PatternImage src="/images/technology/Neo-02.png" alt="Ncode Detail" width={500} height={400} />
              </Col50FlexCenter>
              <Col50>
                <Stack>
                  {t.ncodeFeatures.map((feature, i) => (
                    <FeatureRow key={feature.title}>
                      <FeatureIcon src={ncodeIcons[i]} alt={feature.title} width={48} height={48} />
                      <div>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <BodyNoMargin>{feature.description}</BodyNoMargin>
                      </div>
                    </FeatureRow>
                  ))}
                </Stack>
              </Col50>
            </TwoCol>
          </Container>
        </SectionGray>

        <LazySection>
          <SectionWhite>
            <Container>
              <TwoCol>
                <Col37>
                  <SectionTitleSm>{t.printing.title}</SectionTitleSm>
                  <Body>{t.printing.p1}</Body>
                  <SubTitle>{t.printing.printAtHome}</SubTitle>
                  <Body>{t.printing.p2}</Body>
                </Col37>
                <Col58>
                  <ImageStack>
                    <FullImage src="/images/technology/Neo-02_2.png" alt="Offset Printing" width={500} height={300} />
                    <FullImage src="/images/technology/Neo-02_3.png" alt="Home Printing" width={500} height={300} />
                  </ImageStack>
                </Col58>
              </TwoCol>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <SectionGray>
            <Container>
              <CenterIntro>
                <SectionTitle>{t.hardware.title}</SectionTitle>
                <HardwareIntroBody>{t.hardware.description}</HardwareIntroBody>
              </CenterIntro>
            </Container>
            <Container>
              <HardwareGrid>
                {t.hardware.features.map((feature, i) => (
                  <HardwareCard key={feature.title}>
                    <IconWrap>
                      <HwIcon src={hwIcons[i]} alt={feature.title} width={64} height={64} />
                    </IconWrap>
                    <HwTitle>{feature.title}</HwTitle>
                    <HwDesc>{feature.description}</HwDesc>
                  </HardwareCard>
                ))}
              </HardwareGrid>
              <CenterWrap>
                <WideImage src="/images/technology/Neo-02_4-1.png" alt="Hardware Technology" width={800} height={400} />
              </CenterWrap>
              <ShopWrap>
                <ShopLink href={shopUrl} target="_blank" rel="noopener noreferrer">
                  {t.hardware.visitNeoSmartpen}
                </ShopLink>
              </ShopWrap>
            </Container>
          </SectionGray>
        </LazySection>

        <LazySection>
          <SectionDark>
            <PatentsContainer>
              <PatentsTitle>{t.patents.title}</PatentsTitle>
              <PatentsDesc>{t.patents.description}</PatentsDesc>
            </PatentsContainer>
          </SectionDark>
        </LazySection>

        <LazySection>
          <SectionWhite>
            <Container>
              <CenterIntro>
                <AppFieldsTitle>{t.applicationFields.title}</AppFieldsTitle>
              </CenterIntro>
            </Container>
            <Container>
              <AppGrid>
                <AppCard>
                  <AppIcon src="/images/technology/icon-smartpen.png" alt="Neo smartpen" width={80} height={80} />
                  <div>
                    <AppCardTitle>{t.applicationFields.neoSmartpen}</AppCardTitle>
                    <AppCardDesc>{t.applicationFields.neoSmartpenDesc}</AppCardDesc>
                  </div>
                </AppCard>
                <AppCard>
                  <AppIcon src="/images/technology/icon-soripen.png" alt="Sound pen" width={80} height={80} />
                  <div>
                    <AppCardTitle>{t.applicationFields.soundPen}</AppCardTitle>
                    <AppCardDesc>{t.applicationFields.soundPenDesc}</AppCardDesc>
                  </div>
                </AppCard>
              </AppGrid>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <DevSection>
            <Container>
              <DevTitle>{dict.common.designedForDevelopers}</DevTitle>
              <DevDesc>{dict.common.developersDescAlt}</DevDesc>
              <GithubLink href="https://github.com/NeoSmartpen" target="_blank" rel="noopener noreferrer">
                {dict.common.openSourceCode}
              </GithubLink>
            </Container>
          </DevSection>
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

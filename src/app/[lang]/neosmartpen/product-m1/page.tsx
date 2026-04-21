import { Metadata } from "next";
import { Fragment } from "react";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  CompImg,
  CompList,
  Container,
  CtaButton,
  CtaRow,
  DigitalTwinH1,
  DigitalTwinH2,
  DigitalTwinInner,
  DimImg,
  DimImgWrap,
  DividerImage,
  DividerSection,
  HeroBottom,
  HeroH1Muted,
  HeroH1MutedSpaced,
  HeroH1Strong,
  HeroH1StrongSpaced,
  HeroLogo,
  HeroStatusImg,
  HeroSubtitle,
  Half,
  HeroTop,
  IconsImg,
  RowLg,
  SectionComposition,
  SectionDigitalTwin,
  SectionDimWarm,
  SectionHeroWarm,
  SectionSpecs,
  SectionWhite,
  SpecCell,
  SpecDesc,
  SpecImg,
  SpecsGrid,
  SpecTitle,
  Spacer80,
  UseCaseDesc,
  UseCaseDescSpaced,
  UseCaseGrid,
  UseCaseImg,
  UseCaseTag,
  UseCaseTitle,
} from "./ProductM1Page.styles";

const IMG = "/images/neosmartpen/products/m1";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productM1.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductM1Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productM1;

  const storeUrl =
    lang === "ko"
      ? "https://store.neosmartpen.com/"
      : lang === "ja"
        ? "https://neosmartpenjp.com/"
        : "https://shop.neosmartpen.com/";

  return (
    <>
      <SectionHeroWarm>
        <Container>
          <HeroTop>
            <HeroLogo src={`${IMG}/M1LOGO.png`} alt="M1+" width={200} height={60} />
            <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
            <HeroStatusImg src={`${IMG}/M1_status-1-3.png`} alt="M1+" width={600} height={300} />
          </HeroTop>
          <HeroBottom>
            <HeroH1Muted>{t.hero.photoQuestion}</HeroH1Muted>
            <HeroH1MutedSpaced>{t.hero.appManage}</HeroH1MutedSpaced>
            <HeroH1Strong>{t.hero.penFeel}</HeroH1Strong>
            <HeroH1StrongSpaced>{t.hero.digitalAction}</HeroH1StrongSpaced>
            <IconsImg src={`${IMG}/M1threeIcons.png`} alt="M1+ icons" width={300} height={60} />
          </HeroBottom>
        </Container>
      </SectionHeroWarm>

      <SectionDigitalTwin $bg={`${IMG}/BG-second03.jpg`}>
        <DigitalTwinInner>
          <DigitalTwinH1>
            {t.digitalTwin.h1line1}
            <br />
            <br />
            {t.digitalTwin.h1line2}
          </DigitalTwinH1>
          <DigitalTwinH2>
            {t.digitalTwin.h2line1}
            <br />
            {t.digitalTwin.h2line2}
          </DigitalTwinH2>
        </DigitalTwinInner>
      </SectionDigitalTwin>

      <SectionWhite>
        <Container>
          <CtaRow>
            <CtaButton href={storeUrl} target="_blank" rel="noopener noreferrer">
              {t.findOutMore}
            </CtaButton>
          </CtaRow>
        </Container>
      </SectionWhite>

      <DividerSection>
        <DividerImage src={`${IMG}/Layer-593.jpg`} alt="" width={1920} height={600} />
      </DividerSection>

      <SectionSpecs>
        <Container>
          <SpecsGrid>
            <SpecCell>
              <SpecImg src={`${IMG}/N2-exp02.png`} alt={t.specs3col.battery} width={300} height={300} />
              <SpecTitle>{t.specs3col.battery}</SpecTitle>
              <SpecDesc>{t.specs3col.batteryDesc1}</SpecDesc>
              <SpecDesc>{t.specs3col.batteryDesc2}</SpecDesc>
            </SpecCell>
            <SpecCell>
              <SpecImg src={`${IMG}/N2-exp03.png`} alt={t.specs3col.autoOnOff} width={300} height={300} />
              <SpecTitle>{t.specs3col.autoOnOff}</SpecTitle>
              <SpecDesc>{t.specs3col.autoOnOffDesc1}</SpecDesc>
              <SpecDesc>{t.specs3col.autoOnOffDesc2}</SpecDesc>
            </SpecCell>
            <SpecCell>
              <SpecImg src={`${IMG}/N2-exp01.png`} alt={t.specs3col.clip} width={300} height={300} />
              <SpecTitle>{t.specs3col.clip}</SpecTitle>
              <SpecDesc>{t.specs3col.clipDesc}</SpecDesc>
            </SpecCell>
          </SpecsGrid>
        </Container>
      </SectionSpecs>

      <SectionComposition>
        <Container>
          <RowLg>
            <Half>
              <CompImg src={`${IMG}/구성품.jpg`} alt="M1+ Composition" width={540} height={400} />
            </Half>
            <Half>
              <CompList>
                {t.composition.map((item: string, i: number) => (
                  <Fragment key={`${i}-${item}`}>
                    {item}
                    {i < t.composition.length - 1 && <br />}
                  </Fragment>
                ))}
              </CompList>
            </Half>
          </RowLg>
        </Container>
      </SectionComposition>

      <SectionDimWarm>
        <Container>
          <DimImgWrap>
            <DimImg src={`${IMG}/M1size01.png`} alt="M1+ Dimensions" width={600} height={300} />
          </DimImgWrap>
        </Container>
      </SectionDimWarm>

      <Spacer80 />

      <SectionWhite>
        <Container>
          <UseCaseGrid>
            <div>
              <UseCaseImg src={`${IMG}/showtell01.jpg`} alt={t.useCases.touch.title} width={340} height={250} />
              <UseCaseTag>{t.useCases.touch.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.touch.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.touch.desc}</UseCaseDesc>
            </div>
            <div>
              <UseCaseImg src={`${IMG}/N2_promo01.jpg`} alt={t.useCases.store.title} width={340} height={250} />
              <UseCaseTag>{t.useCases.store.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.store.title}</UseCaseTitle>
              <UseCaseDescSpaced>{t.useCases.store.desc}</UseCaseDescSpaced>
              <UseCaseImg src={`${IMG}/showtell02.jpg`} alt={t.useCases.convenience.title} width={340} height={250} />
              <UseCaseTag>{t.useCases.convenience.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.convenience.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.convenience.desc}</UseCaseDesc>
            </div>
            <div>
              <UseCaseImg src={`${IMG}/grida_13.jpg`} alt={t.useCases.smartwork.title} width={340} height={250} />
              <UseCaseTag>{t.useCases.smartwork.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.smartwork.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.smartwork.desc}</UseCaseDesc>
            </div>
          </UseCaseGrid>
        </Container>
      </SectionWhite>
    </>
  );
}

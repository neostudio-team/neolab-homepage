import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  BlackHalf,
  BlackHalfText,
  Container,
  DigitalTwinH1,
  DigitalTwinH2,
  DigitalTwinInner,
  DimImg,
  DimImgWrap,
  FirstClassHeading,
  FirstClassImg,
  FirstClassSub,
  Half,
  HalfCenter,
  HeroLineBold,
  HeroLineLight,
  HeroLogo,
  HeroProductImg,
  IconsImg,
  ProductStripInner,
  SectionBlack,
  SectionBlackInner,
  SectionDigitalTwin,
  SectionHero,
  SectionProductStrip,
  SectionWarm,
  SectionWhite,
  SectionWhitePadded,
  SpecCell,
  SpecDesc,
  SpecImg,
  SpecsGrid,
  SpecTitle,
  StripImg,
  UseCaseDesc,
  UseCaseDescSpaced,
  UseCaseGrid,
  UseCaseImg,
  UseCaseTag,
  UseCaseTitle,
  RowLg,
} from "./ProductN2Page.styles";

const IMG = "/images/neosmartpen/products/n2";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productN2.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductN2Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.productN2;

  return (
    <>
      <SectionHero $bg={`${IMG}/N2_header_BG.jpg`}>
        <Container>
          <RowLg>
            <Half>
              <HeroLogo src={`${IMG}/N2.png`} alt="N2" width={200} height={60} />
              <HeroLineLight>{t.hero.line1}</HeroLineLight>
              <HeroLineBold>{t.hero.line2}</HeroLineBold>
            </Half>
            <HalfCenter>
              <HeroProductImg src={`${IMG}/img-copy.png`} alt="Neo smartpen N2" width={500} height={400} />
            </HalfCenter>
          </RowLg>
        </Container>
      </SectionHero>

      <SectionBlack>
        <SectionBlackInner>
          <BlackHalf>
            <FirstClassImg src={`${IMG}/airplaneWindow01.jpg`} alt="First class" width={540} height={360} />
          </BlackHalf>
          <BlackHalfText>
            <IconsImg src={`${IMG}/icons-n2.png`} alt="N2 icons" width={300} height={80} />
            <FirstClassHeading>{t.firstClass.heading}</FirstClassHeading>
            <FirstClassSub>{t.firstClass.sub}</FirstClassSub>
          </BlackHalfText>
        </SectionBlackInner>
      </SectionBlack>

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

      <SectionProductStrip $bg={`${IMG}/Rectangle-4.jpg`}>
        <ProductStripInner>
          <StripImg src={`${IMG}/New-Normal-.png`} alt="New Normal" width={267} height={37} />
          <StripImg src={`${IMG}/N2-purple.png`} alt="N2 Purple" width={110} height={53} />
        </ProductStripInner>
      </SectionProductStrip>

      <SectionWhite>
        <Container>
          <SpecsGrid>
            {[
              { img: "N2-exp02.png", title: t.specs3col.body, desc: t.specs3col.bodyDesc },
              { img: "N2-exp03.png", title: t.specs3col.processor, desc: t.specs3col.processorDesc },
              { img: "N2-exp01.png", title: t.specs3col.grip, desc: t.specs3col.gripDesc },
            ].map((item) => (
              <SpecCell key={item.title}>
                <SpecImg src={`${IMG}/${item.img}`} alt={item.title} width={300} height={300} />
                <SpecTitle>{item.title}</SpecTitle>
                <SpecDesc>{item.desc}</SpecDesc>
              </SpecCell>
            ))}
          </SpecsGrid>
        </Container>
      </SectionWhite>

      <SectionWarm>
        <Container>
          <DimImgWrap>
            <DimImg src={`${IMG}/n2_dimension.png`} alt="N2 Dimensions" width={841} height={157} />
          </DimImgWrap>
        </Container>
      </SectionWarm>

      <SectionWhitePadded>
        <Container>
          <DimImgWrap>
            <StripImg src={`${IMG}/N2-purple.png`} alt="N2 Purple accessories" width={110} height={53} />
          </DimImgWrap>
        </Container>
      </SectionWhitePadded>

      <SectionWhite>
        <Container>
          <UseCaseGrid>
            <div>
              <UseCaseImg src={`${IMG}/showtell01.jpg`} alt="Share with one touch" width={340} height={250} />
              <UseCaseTag>{t.useCases.touch.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.touch.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.touch.desc}</UseCaseDesc>
            </div>
            <div>
              <UseCaseImg src={`${IMG}/N2_promo01.jpg`} alt="Easy to store" width={340} height={250} />
              <UseCaseTag>{t.useCases.store.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.store.title}</UseCaseTitle>
              <UseCaseDescSpaced>{t.useCases.store.desc}</UseCaseDescSpaced>
              <UseCaseImg src={`${IMG}/showtell02.jpg`} alt="Convenience" width={340} height={250} />
              <UseCaseTag>{t.useCases.convenience.tag}</UseCaseTag>
              <UseCaseTitle>{t.useCases.convenience.title}</UseCaseTitle>
              <UseCaseDesc>{t.useCases.convenience.desc}</UseCaseDesc>
            </div>
            <div>
              <UseCaseImg src={`${IMG}/grida_13.jpg`} alt="Smart work" width={340} height={250} />
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

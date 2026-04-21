import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  CompImg,
  CompText,
  Container,
  CtaButton,
  CtaRow,
  DigitalTwinH1,
  DigitalTwinH2,
  DigitalTwinInner,
  DimImg,
  DimImgWrap,
  GalleryImg,
  GalleryStack,
  Half,
  HeroBottom,
  HeroH1Light,
  HeroH1Spaced,
  HeroH2Muted,
  HeroH2Spaced,
  HeroH2Strong,
  HeroH2StrongSpaced,
  HeroLogo,
  HeroTop,
  IconsImg,
  RowLg,
  SectionComposition,
  SectionDigitalTwin,
  SectionDimWarm,
  SectionGrayGallery,
  SectionHero,
  SectionSpecsGray,
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
} from "./ProductDimoPage.styles";

const IMG = "/images/neosmartpen/products/dimo";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productDimo.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductDimoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productDimo;

  const storeUrl =
    lang === "ko"
      ? "https://store.neosmartpen.com/"
      : lang === "ja"
        ? "https://neosmartpenjp.com/"
        : "https://shop.neosmartpen.com/";

  return (
    <>
      <SectionHero $bg={`${IMG}/m1_bg01.png`}>
        <Container>
          <HeroTop>
            <HeroLogo src={`${IMG}/Dimo_letter.png`} alt="dimo" width={200} height={60} />
            <HeroH1Light>{t.hero.subtitleLine1}</HeroH1Light>
            <HeroH1Spaced>{t.hero.subtitleLine2}</HeroH1Spaced>
          </HeroTop>
          <HeroBottom>
            <HeroH2Muted>{t.hero.descLine1}</HeroH2Muted>
            <HeroH2Spaced>{t.hero.descLine2}</HeroH2Spaced>
            <HeroH2Strong>{t.hero.descLine3}</HeroH2Strong>
            <HeroH2StrongSpaced>{t.hero.descLine4}</HeroH2StrongSpaced>
            <IconsImg src={`${IMG}/M1threeIcons.png`} alt="dimo icons" width={300} height={60} />
          </HeroBottom>
        </Container>
      </SectionHero>

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

      <SectionGrayGallery>
        <Container>
          <GalleryStack>
            <GalleryImg src={`${IMG}/dimo_display.jpg`} alt="dimo display" width={1000} height={622} />
            <GalleryImg src={`${IMG}/dimo_image02.jpg`} alt="dimo image" width={1000} height={622} />
          </GalleryStack>
        </Container>
      </SectionGrayGallery>

      <SectionSpecsGray>
        <Container>
          <SpecsGrid>
            {[
              { img: `${IMG}/건전지.png`, title: t.specs3col.battery, desc: t.specs3col.batteryDesc },
              { img: `${IMG}/펜심.png`, title: t.specs3col.refill, desc: t.specs3col.refillDesc },
              { img: `${IMG}/그립.png`, title: t.specs3col.grip, desc: t.specs3col.gripDesc },
            ].map((item) => (
              <SpecCell key={item.title}>
                <SpecImg src={item.img} alt={item.title} width={205} height={205} />
                <SpecTitle>{item.title}</SpecTitle>
                <SpecDesc>{item.desc}</SpecDesc>
              </SpecCell>
            ))}
          </SpecsGrid>
        </Container>
      </SectionSpecsGray>

      <SectionComposition>
        <Container>
          <RowLg>
            <Half>
              <CompImg src={`${IMG}/dimo_inside.png`} alt="dimo components" width={868} height={792} />
            </Half>
            <Half>
              <CompText>{t.composition}</CompText>
            </Half>
          </RowLg>
        </Container>
      </SectionComposition>

      <SectionDimWarm>
        <Container>
          <DimImgWrap>
            <DimImg src={`${IMG}/dimo_size.png`} alt="dimo Dimensions" width={1000} height={200} />
          </DimImgWrap>
        </Container>
      </SectionDimWarm>

      <Spacer80 />

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

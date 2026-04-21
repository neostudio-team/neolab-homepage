import { Metadata } from "next";
import Image from "next/image";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { LazySection } from "@/components/home";
import HeroSlider from "./HeroSlider";
import {
  BenefitImg,
  BodyText,
  BorderTop,
  BorderTopBottom,
  ChevronIcon,
  Container,
  EasyMediaCol,
  EasyTextCol,
  FallbackHeroImage,
  FallbackHeroLink,
  FallbackHeroSection,
  FeatureGrid2,
  FullWidthImg,
  GallerySection,
  GridaLink,
  Grid4,
  Half,
  HalfCenter,
  Heading23,
  Heading26,
  Heading26Center,
  HighlightTitle,
  JaProductCard,
  JaProductDesc,
  JaProductImg,
  JaProductsSection,
  JaProductThumb,
  JaProductTitle,
  KoHeroCta,
  KoHeroImage,
  KoHeroImageCol,
  KoHeroInner,
  KoHeroSection,
  KoHeroSubtitle,
  KoHeroTextCol,
  KoHeroTitle,
  NewsCard,
  NewsGrid,
  NewsImage,
  NewsTitle,
  NotebookGalleryGrid,
  NotebookThumb,
  NotebooksPara,
  OneThirdCenter,
  RowGapSm,
  RowLg,
  RowLgCenter,
  RowLgStart,
  SectionDigital,
  SectionEasy,
  SectionFeatureGrid,
  SectionHighlightTitleOnly,
  SectionNews,
  SectionNotebooksBody,
  SectionNotebooksHeading,
  SectionUtilize,
  TwoThirds,
  UtilizeBody,
  UtilizeBodyBlock,
  UtilizeCenterCol,
  UtilizeDetails,
  UtilizeLayersImg,
  UtilizeLine1,
  UtilizeLine2,
  UtilizeSideCol,
  UtilizeSummary,
  UtilizeSummaryTitle,
  UtilizeRow,
} from "./NeoSmartpenHomePage.styles";

const IMG = "/images/neosmartpen/main";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.home.metadata;
  return { title: t.title, description: t.description };
}

const heroSlides: Record<string, string[]> = {
  ko: [`${IMG}/ko/hero_slide1.jpg`, `${IMG}/ko/hero_slide2.jpg`],
  ja: [`${IMG}/ja/hero_slide1.jpg`, `${IMG}/ja/hero_slide2.jpg`, `${IMG}/ja/hero_slide3.jpg`],
};

const benefitImg: Record<string, string> = {
  en: `${IMG}/benefit02.png`,
  ko: `${IMG}/ko/benefit.png`,
  ja: `${IMG}/ja/benefit.png`,
};

const usecaseImg: Record<string, { src: string; unoptimized: boolean }> = {
  en: { src: `${IMG}/usecase_01.gif`, unoptimized: true },
  ko: { src: `${IMG}/usecase_01.gif`, unoptimized: true },
  ja: { src: `${IMG}/ja/usecase.jpg`, unoptimized: false },
};

const featureGrid: Record<string, string[]> = {
  en: [
    `${IMG}/smartpenFeaturePressure.jpg`,
    `${IMG}/smartpenFeatureAuto.jpg`,
    `${IMG}/smartpenFeatureBattery.jpg`,
    `${IMG}/smartpenFeatureOffline.jpg`,
  ],
  ko: [
    `${IMG}/ko/feature1.jpg`,
    `${IMG}/ko/feature2.jpg`,
    `${IMG}/ko/feature3.jpg`,
    `${IMG}/ko/feature4.jpg`,
  ],
  ja: [
    `${IMG}/ja/feature1.jpg`,
    `${IMG}/ja/feature2.jpg`,
    `${IMG}/ja/feature3.jpg`,
    `${IMG}/ja/feature4.jpg`,
  ],
};

const puiImg: Record<string, { src: string; unoptimized: boolean }> = {
  en: { src: `${IMG}/email_pui.gif`, unoptimized: true },
  ko: { src: `${IMG}/email_pui.gif`, unoptimized: true },
  ja: { src: `${IMG}/ja/pui.jpg`, unoptimized: false },
};

const notebookImgs = (lang: string) => {
  const base = [
    { src: `${IMG}/note05-1.jpg`, alt: "Notebook 5" },
    { src: `${IMG}/note04-1.jpg`, alt: "Notebook 4" },
    { src: lang === "ja" ? `${IMG}/ja/notebook_square.jpg` : `${IMG}/note01-1.jpg`, alt: "Notebook 3" },
    { src: `${IMG}/note03-1.jpg`, alt: "Notebook 2" },
    { src: `${IMG}/note02-1.jpg`, alt: "Notebook 1" },
  ];
  return base;
};

const jaProductCards = [
  { img: `${IMG}/ja/product_lamy.png`, title: "LAMY safari all star スマートペン", desc: "ドイツLAMY社のロングセラーモデル「safari」がスマートペンになって登場！", href: "/ja/neosmartpen/product-lamy" },
  { img: `${IMG}/ja/product_a1.png`, title: "Neo smartpen A1", desc: "ゲルインキで最上の書き心地", href: "/ja/neosmartpen/product-n2" },
  { img: `${IMG}/ja/product_m1.png`, title: "Neo smartpen M1+", desc: "フルスペックモデル", href: "/ja/neosmartpen/product-m1" },
  { img: `${IMG}/ja/product_dimo.png`, title: "Neo smartpen dimo", desc: "一番お手頃なスマートペン", href: "/ja/neosmartpen/product-dimo" },
];

export default async function NeoSmartpenHome({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.home;

  const storeUrl =
    lang === "ko"
      ? "https://store.neosmartpen.com/"
      : lang === "ja"
        ? "https://neosmartpenjp.com/"
        : "https://shop.neosmartpen.com/";

  const slides = heroSlides[lang];
  const features = featureGrid[lang] || featureGrid.en;
  const pui = puiImg[lang] || puiImg.en;
  const benefit = benefitImg[lang] || benefitImg.en;
  const usecase = usecaseImg[lang] || usecaseImg.en;
  const notes = notebookImgs(lang);

  return (
    <>
      {lang === "ko" ? (
        <KoHeroSection>
          <KoHeroInner>
            <KoHeroTextCol>
              <KoHeroTitle>모든 특별함이 하나로</KoHeroTitle>
              <KoHeroSubtitle>Neo smartpen A1</KoHeroSubtitle>
              <KoHeroCta href="https://store.neosmartpen.com/goods/goods_view.php?goodsNo=454" target="_blank" rel="noopener noreferrer">
                공식몰 가기
              </KoHeroCta>
            </KoHeroTextCol>
            <KoHeroImageCol>
              <KoHeroImage src={`${IMG}/ja/product_a1.png`} alt="Neo smartpen A1" width={520} height={520} priority />
            </KoHeroImageCol>
          </KoHeroInner>
        </KoHeroSection>
      ) : slides ? (
        <HeroSlider slides={slides} />
      ) : (
        <FallbackHeroSection>
          <FallbackHeroLink href={storeUrl} target="_blank" rel="noopener noreferrer">
            <FallbackHeroImage src={`${IMG}/hero_bg.jpg`} alt="Neo Smartpen Hero" fill priority />
          </FallbackHeroLink>
        </FallbackHeroSection>
      )}

      {lang === "ja" && (
        <JaProductsSection>
          <Container>
            <Grid4>
              {jaProductCards.map((card) => (
                <JaProductCard key={card.title} href={card.href}>
                  <JaProductThumb>
                    <JaProductImg src={card.img} alt={card.title} width={300} height={300} />
                  </JaProductThumb>
                  <JaProductTitle>{card.title}</JaProductTitle>
                  <JaProductDesc>{card.desc}</JaProductDesc>
                </JaProductCard>
              ))}
            </Grid4>
          </Container>
        </JaProductsSection>
      )}

      <SectionDigital>
        <Container>
          <RowLg>
            <Half>
              <Heading26>
                <strong>{t.digitalWriting.title}</strong>
              </Heading26>
              <BenefitImg src={benefit} alt="benefit" width={400} height={316} />
            </Half>
            <HalfCenter>
              <FullWidthImg
                src={usecase.src}
                alt="Neo Smartpen in action"
                width={800}
                height={450}
                unoptimized={usecase.unoptimized}
              />
            </HalfCenter>
          </RowLg>
        </Container>
      </SectionDigital>

      <LazySection>
        <SectionHighlightTitleOnly>
          <Container>
            <HighlightTitle>
              <strong>{t.highlight.title}</strong>
            </HighlightTitle>
          </Container>
        </SectionHighlightTitleOnly>
      </LazySection>

      <LazySection>
        <SectionFeatureGrid>
          <Container>
            <RowGapSm>
              <Half>
                <FullWidthImg src={`${IMG}/smartpenFeature00.jpg`} alt="Neo Smartpen Feature" width={900} height={900} />
              </Half>
              <Half>
                <FeatureGrid2>
                  {features.map((src, i) => (
                    <FullWidthImg key={src} src={src} alt={`Feature ${i + 1}`} width={450} height={450} />
                  ))}
                </FeatureGrid2>
              </Half>
            </RowGapSm>
          </Container>
        </SectionFeatureGrid>
      </LazySection>

      <LazySection>
        <SectionUtilize>
          <Container>
            <UtilizeRow>
              <UtilizeSideCol>
                <UtilizeLine1>
                  <strong>{t.utilize.title1}</strong>
                </UtilizeLine1>
                <UtilizeLine2>
                  <strong>{t.utilize.title2}</strong>
                </UtilizeLine2>
              </UtilizeSideCol>
              <UtilizeCenterCol>
                <UtilizeLayersImg src={`${IMG}/neostudio_layers03.png`} alt="Neo Studio layers" width={800} height={800} />
              </UtilizeCenterCol>
              <UtilizeSideCol>
                <BorderTop>
                  <UtilizeDetails open>
                    <UtilizeSummary>
                      <UtilizeSummaryTitle>{t.utilize.neoStudio}</UtilizeSummaryTitle>
                      <ChevronIcon fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </ChevronIcon>
                    </UtilizeSummary>
                    <UtilizeBody>{t.utilize.neoStudioDesc}</UtilizeBody>
                  </UtilizeDetails>
                </BorderTop>
                <BorderTop>
                  <UtilizeDetails>
                    <UtilizeSummary>
                      <UtilizeSummaryTitle>{t.utilize.gridaBoard}</UtilizeSummaryTitle>
                      <ChevronIcon fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </ChevronIcon>
                    </UtilizeSummary>
                    <UtilizeBodyBlock>
                      <p>{t.utilize.gridaBoardDesc}</p>
                      <GridaLink href="https://gridaboard.io/" target="_blank" rel="noopener noreferrer">
                        {lang === "ko" ? "그리다보드로 이동 →" : lang === "ja" ? "Grida board へ →" : "Go to Grida Board →"}
                      </GridaLink>
                    </UtilizeBodyBlock>
                  </UtilizeDetails>
                </BorderTop>
                <BorderTopBottom>
                  <UtilizeDetails>
                    <UtilizeSummary>
                      <UtilizeSummaryTitle>{t.utilize.paperTube}</UtilizeSummaryTitle>
                      <ChevronIcon fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </ChevronIcon>
                    </UtilizeSummary>
                    <UtilizeBody>{t.utilize.paperTubeDesc}</UtilizeBody>
                  </UtilizeDetails>
                </BorderTopBottom>
              </UtilizeSideCol>
            </UtilizeRow>
          </Container>
        </SectionUtilize>
      </LazySection>

      <LazySection>
        <SectionEasy>
          <Container>
            <RowLgCenter>
              <EasyMediaCol>
                <FullWidthImg
                  src={pui.src}
                  alt="Easy to Use PUI"
                  width={800}
                  height={450}
                  unoptimized={pui.unoptimized}
                />
              </EasyMediaCol>
              <EasyTextCol>
                <Heading23>
                  <strong>{t.easyToUse.title}</strong>
                </Heading23>
                <BodyText>{t.easyToUse.p1}</BodyText>
                <BodyText>{t.easyToUse.p2}</BodyText>
              </EasyTextCol>
            </RowLgCenter>
          </Container>
        </SectionEasy>
      </LazySection>

      <LazySection>
        <SectionNotebooksHeading>
          <Container>
            <Heading26Center>
              <strong>{t.notebooks.title}</strong>
            </Heading26Center>
          </Container>
        </SectionNotebooksHeading>

        {lang !== "ja" && (
          <SectionNotebooksBody>
            <Container>
              <RowLgStart>
                <TwoThirds>
                  <NotebooksPara>
                    <strong>{t.notebooks.p1}</strong>
                  </NotebooksPara>
                  <NotebooksPara>{t.notebooks.p2}</NotebooksPara>
                  <NotebooksPara>{t.notebooks.p3}</NotebooksPara>
                </TwoThirds>
                <OneThirdCenter>
                  <Image
                    src={`${IMG}/Screen-Shot-2022-02-09-at-11.09.44-PM.png`}
                    alt="Ncode certification mark"
                    width={156}
                    height={180}
                  />
                </OneThirdCenter>
              </RowLgStart>
            </Container>
          </SectionNotebooksBody>
        )}

        {lang === "en" && (
          <SectionNews>
            <Container>
              <NewsGrid>
                <NewsCard href="https://neosmartpen.com/meet-hybriddocs/" target="_blank" rel="noopener noreferrer">
                  <NewsImage src={`${IMG}/news_hybriddocs.jpg`} alt="HybridDocs" width={400} height={250} />
                  <NewsTitle>Meet HybridDocs™, Neo Studio&apos;s new copy &amp; paste feature.</NewsTitle>
                </NewsCard>
                <NewsCard href="https://neosmartpen.com/45-of-frustrations/" target="_blank" rel="noopener noreferrer">
                  <NewsImage src={`${IMG}/news_frustrations.jpg`} alt="45% of frustrations" width={400} height={250} />
                  <NewsTitle>45% of frustrations</NewsTitle>
                </NewsCard>
                <NewsCard href="https://neosmartpen.com/neo-smartpen-reaches-the-australian-market/" target="_blank" rel="noopener noreferrer">
                  <NewsImage src={`${IMG}/news_australian.jpg`} alt="Australian market" width={400} height={250} />
                  <NewsTitle>Neo smartpen reaches the Australian market</NewsTitle>
                </NewsCard>
              </NewsGrid>
            </Container>
          </SectionNews>
        )}
      </LazySection>

      <LazySection>
        <GallerySection $paddingTop={lang === "ja" ? 16 : 0} $paddingBottom={30}>
          <Container>
            <NotebookGalleryGrid>
              {notes.map((note) => (
                <NotebookThumb key={note.src} src={note.src} alt={note.alt} width={450} height={450} />
              ))}
            </NotebookGalleryGrid>
          </Container>
        </GallerySection>
      </LazySection>
    </>
  );
}

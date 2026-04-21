import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { LazySection } from "@/components/home";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  CenterBody,
  CenterTitle,
  Container,
  FeatureDesc,
  FeatureImg,
  FeatureStack,
  FeatureTitle,
  GreenBtn,
  HeroBtnRow,
  HeroDesc,
  HeroImage,
  HeroImageWrap,
  HeroInner,
  HeroLabel,
  HeroOverlay,
  HeroSection,
  HeroText,
  HeroTitle,
  OutlineBtn,
  ProductCard,
  ProductGrid,
  ProductImage,
  ProductImageWrap,
  ProductName,
  SectionGray,
  SectionWhite,
  Split,
  SplitLeft45,
  SplitRight55,
} from "./SoundPenPage.styles";

export const metadata: Metadata = {
  title: "Sound Pen - NeoLAB Convergence Inc.",
  description: "Sound Pen, THE ULTIMATE WAY TO LISTEN TO BOOKS",
};

const productImages = [
  "/images/soundpen/Neo_poppen.png",
  "/images/soundpen/Neo_poppen_prime.png",
  "/images/soundpen/Neo_poppen_video.png",
  "/images/soundpen/Neo_c72nc.png",
];

export default async function SoundPenPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.soundpen;

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        <HeroSection>
          <HeroOverlay />
          <HeroInner>
            <HeroText>
              <HeroLabel>{t.hero.label}</HeroLabel>
              <HeroTitle>{t.hero.title}</HeroTitle>
              <HeroDesc>{t.hero.description}</HeroDesc>
              <HeroBtnRow>
                <OutlineBtn href="https://smartstore.naver.com/neolab" target="_blank" rel="noopener noreferrer">팝펜 공식몰</OutlineBtn>
                <GreenBtn href="https://cafe.naver.com/dotcotory" target="_blank" rel="noopener noreferrer">팝펜 팩토리</GreenBtn>
              </HeroBtnRow>
            </HeroText>
            <HeroImageWrap>
              <HeroImage src="/images/soundpen/poppen_soundpen_001.png" alt="NeoLAB Sound Pen" width={400} height={400} />
            </HeroImageWrap>
          </HeroInner>
        </HeroSection>

        <SectionWhite>
          <Container>
            <CenterTitle>{t.funWithBooks.title}</CenterTitle>
            <CenterBody>{t.funWithBooks.p1}</CenterBody>
            <CenterBody>{t.funWithBooks.p2}</CenterBody>
          </Container>
        </SectionWhite>

        <LazySection>
          <SectionGray>
            <Container>
              <ProductGrid>
                {t.products.map((product, i) => (
                  <ProductCard key={product.name}>
                    <ProductImageWrap>
                      <ProductImage src={productImages[i]} alt={product.name} width={200} height={200} />
                    </ProductImageWrap>
                    <ProductName>{product.name}</ProductName>
                  </ProductCard>
                ))}
              </ProductGrid>
            </Container>
          </SectionGray>
        </LazySection>

        <LazySection>
          <SectionWhite>
            <Container>
              <CenterTitle>{t.stickerBooks.title}</CenterTitle>
              <CenterBody>{t.stickerBooks.subtitle}</CenterBody>
              <Split>
                <SplitLeft45>
                  <FeatureImg src="/images/soundpen/Neo-04_03-1.png" alt="Pop Pen Stickers and Books" width={490} height={508} />
                </SplitLeft45>
                <SplitRight55>
                  <FeatureStack>
                    <div><FeatureTitle>{t.stickerBooks.sticker}</FeatureTitle><FeatureDesc>{t.stickerBooks.stickerDesc}</FeatureDesc></div>
                    <div><FeatureTitle>{t.stickerBooks.video}</FeatureTitle><FeatureDesc>{t.stickerBooks.videoDesc}</FeatureDesc></div>
                    <div><FeatureTitle>{t.stickerBooks.books}</FeatureTitle><FeatureDesc>{t.stickerBooks.booksDesc}</FeatureDesc></div>
                  </FeatureStack>
                </SplitRight55>
              </Split>
            </Container>
          </SectionWhite>
        </LazySection>

        <LazySection>
          <SectionWhite>
            <Container>
              <Split>
                <SplitLeft45>
                  <FeatureImg src="/images/soundpen/Neo-04_02.png" alt="Smart Reader Partners" width={490} height={508} />
                </SplitLeft45>
                <SplitRight55>
                  <CenterTitle>{t.smartReaderFriends.title}</CenterTitle>
                  <FeatureDesc>{t.smartReaderFriends.p1}</FeatureDesc>
                  <FeatureDesc>{t.smartReaderFriends.p2}</FeatureDesc>
                </SplitRight55>
              </Split>
            </Container>
          </SectionWhite>
        </LazySection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

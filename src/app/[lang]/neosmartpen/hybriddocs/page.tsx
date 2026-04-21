import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  CenterDesc,
  CenterSection,
  CenterTitle,
  Container,
  DarkBtn,
  FeatureSection,
  Half,
  HalfImage,
  HalfImageRound,
  HalfImageWrap,
  HeroDesc,
  HeroHalf,
  HeroImage,
  HeroImageWrap,
  HeroInner,
  HeroSection,
  HeroSub,
  HeroTitle,
  MidDesc,
  MidTitle,
  OutlineBtn,
  PurchaseDesc,
  PurchaseSection,
  RouteBtn,
  SectionGray,
  SectionWhite,
  Split,
  SplitReverse,
  StepCard,
  StepDesc,
  StepsGrid,
  StepTitle,
  Tag,
  TealBtn,
} from "./HybridDocsPage.styles";

const IMG = "/images/neosmartpen/solutions/hybriddocs";

const NEO_STUDIO_URL = "https://app.neostudio.io/";
const STORE_URL = "https://store.neosmartpen.com/goods/goods_list.php?NbParam=576c6f3d&cateCd=008";
const GITBOOK_URL = "https://neolabdev.gitbook.io/pen-manager/help/neostudio-web/Hybrid-Docs";
const BLOG_URL = "https://blog.naver.com/neosmartpen/222812826868";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.hybriddocs.metadata;
  return { title: t.title, description: t.description };
}

export default async function HybridDocsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.hybriddocs;

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroHalf>
            <HeroTitle>
              {t.hero.subtitle}
              <br />
              <HeroSub>{t.hero.title}&trade;</HeroSub>
            </HeroTitle>
            <HeroDesc>{t.hero.desc}</HeroDesc>
            <TealBtn href={NEO_STUDIO_URL} target="_blank" rel="noopener noreferrer">{t.hero.cta}</TealBtn>
          </HeroHalf>
          <HeroImageWrap>
            <HeroImage src={`${IMG}/hybriddocs_hero.png`} alt="HybridDocs" width={520} height={400} priority />
          </HeroImageWrap>
        </HeroInner>
      </HeroSection>

      <CenterSection>
        <Container>
          <CenterTitle>{t.about.title}</CenterTitle>
          <CenterDesc>{t.about.desc}</CenterDesc>
        </Container>
      </CenterSection>

      <FeatureSection>
        <Container>
          <Split>
            <HalfImageWrap><HalfImage src={`${IMG}/03_자유도.png`} alt={t.features.bridge} width={480} height={360} /></HalfImageWrap>
            <Half>
              <Tag>{t.features.bridge}</Tag>
              <MidTitle>{t.features.bridgeTitle}</MidTitle>
              <MidDesc>{t.features.bridgeDesc}</MidDesc>
            </Half>
          </Split>
        </Container>
      </FeatureSection>

      <SectionWhite>
        <Container>
          <SplitReverse>
            <HalfImageWrap><HalfImage src={`${IMG}/04_CnAezs.png`} alt={t.features.productivity} width={480} height={360} /></HalfImageWrap>
            <Half>
              <Tag>{t.features.productivity}</Tag>
              <MidTitle>{t.features.productivityTitle}</MidTitle>
              <MidTitle>{t.features.productivitySubtitle}</MidTitle>
              <MidDesc>{t.features.productivityDesc}</MidDesc>
            </Half>
          </SplitReverse>
        </Container>
      </SectionWhite>

      <FeatureSection>
        <Container>
          <Split>
            <HalfImageWrap><HalfImage src={`${IMG}/05-胶配府炮傅-角荤抗矫-1.png`} alt={t.storytelling.tag} width={480} height={360} /></HalfImageWrap>
            <Half>
              <Tag>{t.storytelling.tag}</Tag>
              <MidTitle>{t.storytelling.title}</MidTitle>
              <MidDesc>{t.storytelling.desc}</MidDesc>
            </Half>
          </Split>
        </Container>
      </FeatureSection>

      <PurchaseSection>
        <Container>
          <PurchaseDesc>{t.purchase.desc}</PurchaseDesc>
          <DarkBtn href={STORE_URL} target="_blank" rel="noopener noreferrer">{t.purchase.button}</DarkBtn>
        </Container>
      </PurchaseSection>

      <FeatureSection>
        <Container>
          <Split>
            <HalfImageWrap><HalfImageRound src={`${IMG}/Screen-Shot-2022-07-15-at-2.08.29-PM-1-1.png`} alt={t.supported.title} width={480} height={300} /></HalfImageWrap>
            <Half>
              <MidTitle>{t.supported.title}</MidTitle>
              <MidDesc>{t.supported.desc}</MidDesc>
              <OutlineBtn href={GITBOOK_URL} target="_blank" rel="noopener noreferrer">{t.supported.link}</OutlineBtn>
            </Half>
          </Split>
        </Container>
      </FeatureSection>

      <SectionWhite>
        <Container>
          <Split>
            <HalfImageWrap><HalfImage src={`${IMG}/사용방법_투명.png`} alt={t.howToUse.title} width={480} height={400} /></HalfImageWrap>
            <Half>
              <CenterTitle>{t.howToUse.title}</CenterTitle>
              <MidDesc>{t.howToUse.desc}</MidDesc>
              <TealBtn href={NEO_STUDIO_URL} target="_blank" rel="noopener noreferrer">{t.howToUse.cta}</TealBtn>
            </Half>
          </Split>
          <StepsGrid>
            {[{ title: t.howToUse.step1title, desc: t.howToUse.step1desc }, { title: t.howToUse.step2title, desc: t.howToUse.step2desc }, { title: t.howToUse.step3title, desc: t.howToUse.step3desc }].map((step) => (
              <StepCard key={step.title}><StepTitle>{step.title}</StepTitle><StepDesc>{step.desc}</StepDesc></StepCard>
            ))}
          </StepsGrid>
        </Container>
      </SectionWhite>

      <FeatureSection>
        <Container>
          <Split>
            <HalfImageWrap><HalfImage src={`${IMG}/07-활용사례.png`} alt={t.useCases.title} width={480} height={360} /></HalfImageWrap>
            <Half>
              <MidTitle>{t.useCases.title}</MidTitle>
              <MidDesc>{t.useCases.desc}</MidDesc>
              <OutlineBtn href={BLOG_URL} target="_blank" rel="noopener noreferrer">{t.useCases.link}</OutlineBtn>
            </Half>
          </Split>
        </Container>
      </FeatureSection>

      <SectionWhite>
        <Container>
          <SplitReverse>
            <HalfImageWrap><HalfImage src={`${IMG}/NcodeStoryBD_A4_ver1.png`} alt={t.diyNcode.title} width={400} height={300} /></HalfImageWrap>
            <Half>
              <MidTitle>{t.diyNcode.title}</MidTitle>
              <MidDesc>{t.diyNcode.desc}</MidDesc>
              <RouteBtn href={`/${lang}/neosmartpen/ncode-pdf`}>{t.diyNcode.link}</RouteBtn>
            </Half>
          </SplitReverse>
        </Container>
      </SectionWhite>
    </>
  );
}

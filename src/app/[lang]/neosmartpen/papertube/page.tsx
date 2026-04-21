import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  ActionBtn,
  CtaWrap,
  DarkSubtitle,
  DarkTitle,
  CenterDesc,
  CenterDescSmall,
  CenterTitle,
  Container,
  Hashtag,
  HashtagRow,
  HashtagWrap,
  HeroDesc,
  HeroDescSub,
  HeroInner,
  HeroLogo,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  KeywordCard,
  KeywordDesc,
  KeywordGrid,
  KeywordTitle,
  NoticeBox,
  NoticeText,
  PackageCard,
  PackageGrid,
  PackageTitle,
  Placeholder,
  PlaceholderText,
  SectionDark,
  SectionGray,
  SectionPad,
  SectionWhite,
  StepCard,
  StepGrid,
  StepLabel,
  StepNum,
  StoreBadge,
  StoreRow,
  SubBody,
  SubTitle,
  ThreeCard,
  ThreeDesc,
  ThreeGrid,
  ThreeTitle,
  Split,
  Half,
  HalfImage,
  FullImg,
} from "./PaperTubePage.styles";

const IMG = "/images/neosmartpen/apps/papertube";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.papertube.metadata;
  return { title: t.title, description: t.description };
}

export default async function PaperTubePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.papertube;

  const keywordItems = [
    { keyword: t.keywords.easy, desc: t.keywords.easyDesc },
    { keyword: t.keywords.short, desc: t.keywords.shortDesc },
    { keyword: t.keywords.light, desc: t.keywords.lightDesc },
    { keyword: t.keywords.save, desc: t.keywords.saveDesc },
    { keyword: t.keywords.simple, desc: t.keywords.simpleDesc },
    { keyword: t.keywords.quick, desc: t.keywords.quickDesc },
    { keyword: t.keywords.free, desc: t.keywords.freeDesc },
  ];

  const stepItems = [
    { num: "\u2776", label: t.steps.step1 },
    { num: "\u2777", label: t.steps.step2 },
    { num: "\u2778", label: t.steps.step3 },
    { num: "\u2779", label: t.steps.step4 },
  ];

  const hashtagItems = [t.hashtags.tag1, t.hashtags.tag2, t.hashtags.tag3, t.hashtags.tag4].filter(Boolean);

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroLogo src={`${IMG}/papertube_hero.png`} alt="PaperTube" width={300} height={100} />
          <HeroTitle>{t.hero.title}</HeroTitle>
          <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
          {t.suspensionNotice && (
            <NoticeBox>
              <NoticeText>{t.suspensionNotice}</NoticeText>
            </NoticeBox>
          )}
          <HeroDesc>{t.hero.desc}</HeroDesc>
          <HeroDescSub>{t.hero.descSub}</HeroDescSub>
        </HeroInner>
      </HeroSection>

      <SectionWhite>
        <SectionPad>
          <StoreRow>
            <a href="https://play.google.com/store/apps/details?id=kr.neolab.papertube" target="_blank" rel="noopener noreferrer">
              <StoreBadge src={`${IMG}/btn_googleplay.png`} alt="Google Play" width={180} height={54} />
            </a>
            <a href="https://itunes.apple.com/app/papertube/id1317169114" target="_blank" rel="noopener noreferrer">
              <StoreBadge src={`${IMG}/btn_appstore.png`} alt="App Store" width={180} height={54} />
            </a>
          </StoreRow>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <KeywordGrid>
            {keywordItems.map((item) => (
              <KeywordCard key={item.keyword}>
                <KeywordTitle>{item.keyword}</KeywordTitle>
                <KeywordDesc>{item.desc}</KeywordDesc>
              </KeywordCard>
            ))}
          </KeywordGrid>
        </SectionPad>
      </SectionGray>

      <SectionWhite>
        <SectionPad>
          <CenterTitle>{t.pip.title}</CenterTitle>
          <CenterDesc>{t.pip.desc}</CenterDesc>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <CenterDesc>{t.content.desc}</CenterDesc>
          <CenterDescSmall>{t.content.descDetail}</CenterDescSmall>
        </SectionPad>
      </SectionGray>

      {hashtagItems.length > 0 && (
        <SectionDark>
          <HashtagWrap>
            <HashtagRow>
              {hashtagItems.map((tag) => (
                <Hashtag key={tag}>{tag}</Hashtag>
              ))}
            </HashtagRow>
          </HashtagWrap>
        </SectionDark>
      )}

      <SectionWhite>
        <SectionPad>
          <StepGrid>
            {stepItems.map((step) => (
              <StepCard key={step.num}>
                <StepNum>{step.num}</StepNum>
                <StepLabel>{step.label}</StepLabel>
              </StepCard>
            ))}
          </StepGrid>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <CenterTitle>{t.s1.title}</CenterTitle>
          <CenterDesc>{t.s1.desc}</CenterDesc>
          <CenterDescSmall>{t.s1.note}</CenterDescSmall>
          <CenterDescSmall>{t.s1.bgNote}</CenterDescSmall>
        </SectionPad>
      </SectionGray>

      <SectionWhite>
        <SectionPad>
          <SubTitle>{t.s2.bgChangeTitle}</SubTitle>
          <SubBody>{t.s2.bgChangeDesc}</SubBody>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <CenterTitle>{t.s3.title}</CenterTitle>
          <ThreeGrid>
            {[
              { title: t.s3.pip, desc: t.s3.pipDesc },
              { title: t.s3.mp4, desc: t.s3.mp4Desc },
              { title: t.s3.share, desc: t.s3.shareDesc },
            ].map((feat) => (
              <ThreeCard key={feat.title}>
                <ThreeTitle>{feat.title}</ThreeTitle>
                <ThreeDesc>{feat.desc}</ThreeDesc>
              </ThreeCard>
            ))}
          </ThreeGrid>
        </SectionPad>
      </SectionGray>

      <SectionWhite>
        <SectionPad>
          <CenterTitle>{t.s4.title}</CenterTitle>
          <CenterDesc>{t.s4.desc}</CenterDesc>
          <PackageGrid>
            {[{ label: t.s4.ncodeA4 }, { label: t.s4.controller }, { label: t.s4.stand }].map((item) => (
              <PackageCard key={item.label}>
                <Placeholder>
                  <PlaceholderText>{item.label}</PlaceholderText>
                </Placeholder>
                <PackageTitle>{item.label}</PackageTitle>
              </PackageCard>
            ))}
          </PackageGrid>
        </SectionPad>
      </SectionWhite>

      <SectionGray>
        <SectionPad>
          <Split>
            <HalfImage>
              <FullImg src={`${IMG}/controller.png`} alt="PaperTube Controller" width={818} height={601} />
            </HalfImage>
            <Half>
              <SubTitle>{t.s5.title}</SubTitle>
              <CenterDescSmall>{t.s5.desc}</CenterDescSmall>
              <CenterDescSmall>{t.s5.note}</CenterDescSmall>
              <CenterDescSmall>{t.s5.printerNote}</CenterDescSmall>
              <CenterDescSmall>{t.s5.deviceNote}</CenterDescSmall>
            </Half>
          </Split>
        </SectionPad>
      </SectionGray>

      <SectionDark>
        <SectionPad>
          <DarkTitle>{t.s6.title}</DarkTitle>
          <DarkSubtitle>{t.s6.subtitle}</DarkSubtitle>
          <CtaWrap>
            <ActionBtn href="https://www.youtube.com/@PaperTube" target="_blank" rel="noopener noreferrer">{t.s6.cta}</ActionBtn>
          </CtaWrap>
        </SectionPad>
      </SectionDark>
    </>
  );
}

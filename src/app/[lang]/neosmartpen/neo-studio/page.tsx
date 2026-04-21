import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  Block,
  BlockDesc,
  BlockTitle,
  Container,
  CtaInner,
  CtaLink,
  CtaSection,
  CtaText,
  DesktopIcon,
  DesktopLabel,
  DesktopLink,
  DesktopRow,
  DesktopShot,
  DesktopShotGrid,
  DesktopText,
  Details,
  DetailsBody,
  DetailsText,
  DetailsWrap,
  FeatureDesc,
  FeatureItem,
  FeatureSection,
  FeatureStack,
  FeatureTextWrap,
  FeatureTitle,
  GifImage,
  Half,
  HalfImg,
  HalfText,
  HeroInner,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
  Icon,
  IntroInner,
  IntroSection,
  IntroText,
  MainImage,
  Note,
  SectionGray,
  SectionWhite,
  Shot,
  ShotWrap,
  Split,
  SplitDesc,
  SplitReverse,
  SplitTitle,
  StoreBadge,
  StoreRow,
  Summary,
  SummaryTitle,
  TripleCard,
  TripleDesc,
  TripleGrid,
  TripleTitle,
} from "./NeoStudioPage.styles";

const IMG = "/images/neosmartpen/apps/neo-studio";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.neoStudio.metadata;
  return { title: t.title, description: t.description };
}

const featureImages: Record<string, { img1: string; img2: string }> = {
  easyConnect: { img1: `${IMG}/easy-connect-ja.png`, img2: `${IMG}/easy-connect-ja-2.png` },
  edit: { img1: `${IMG}/edit-ja.png`, img2: `${IMG}/edit-ja-2.png` },
  videoShare: { img1: `${IMG}/video-share-ja.png`, img2: `${IMG}/video-share-ja-2.png` },
  search: { img1: `${IMG}/search-ja.png`, img2: `${IMG}/search-ja-2.png` },
  mediaShare: { img1: `${IMG}/media-share-ja.png`, img2: `${IMG}/media-share-ja-2.png` },
  voicePlayback: { img1: `${IMG}/voice-playback-ja.png`, img2: `${IMG}/voice-playback-ja-2.png` },
  tag: { img1: `${IMG}/tag-ja.png`, img2: `${IMG}/tag-ja-2.png` },
  bookmark: { img1: `${IMG}/bookmark-ja.png`, img2: `${IMG}/bookmark-ja-2.png` },
  textConvert: { img1: `${IMG}/text-convert-ja.png`, img2: `${IMG}/text-convert-ja-2.png` },
  autoSync: { img1: `${IMG}/auto-sync-ja.png`, img2: `${IMG}/auto-sync-ja-2.png` },
};

export default async function NeoStudioPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.neoStudio;

  const features = [
    { key: "easyConnect", title: t.s2.featureEasyConnect, desc: t.s2.featureEasyConnectDesc },
    { key: "edit", title: t.s2.featureEdit, desc: t.s2.featureEditDesc },
    { key: "videoShare", title: t.s2.featureVideoShare, desc: t.s2.featureVideoShareDesc },
    { key: "search", title: t.s2.featureSearch, desc: t.s2.featureSearchDesc },
    { key: "mediaShare", title: t.s2.featureMediaShare, desc: t.s2.featureMediaShareDesc },
    { key: "voicePlayback", title: t.s2.featureVoicePlayback, desc: t.s2.featureVoicePlaybackDesc },
    { key: "tag", title: t.s2.featureTag, desc: t.s2.featureTagDesc },
    { key: "bookmark", title: t.s2.featureBookmark, desc: t.s2.featureBookmarkDesc },
    { key: "textConvert", title: t.s2.featureTextConvert, desc: t.s2.featureTextConvertDesc },
    { key: "autoSync", title: t.s2.featureAutoSync, desc: t.s2.featureAutoSyncDesc },
  ];

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroTitle>{t.hero.title}</HeroTitle>
          <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
        </HeroInner>
      </HeroSection>

      <IntroSection>
        <IntroInner>
          <IntroText>{t.s1.desc}</IntroText>
        </IntroInner>
      </IntroSection>

      <SectionWhite>
        <Container>
          <Block>
            <BlockTitle>{t.s2.crossPlatform}</BlockTitle>
            <BlockDesc>{t.s2.crossPlatformDesc}</BlockDesc>
            <MainImage src={`${IMG}/NeoStudio_landing01.jpg`} alt="Neo Studio Cross Platform" width={1080} height={600} />
            <StoreRow>
              <a href="https://apps.apple.com/app/neo-studio/id1483403928" target="_blank" rel="noopener noreferrer"><StoreBadge src={`${IMG}/btn_appstore.png`} alt="App Store" width={160} height={48} /></a>
              <a href="https://play.google.com/store/apps/details?id=kr.neolab.neostudio" target="_blank" rel="noopener noreferrer"><StoreBadge src={`${IMG}/btn_googleplay.png`} alt="Google Play" width={160} height={48} /></a>
            </StoreRow>
            <DesktopLabel>{t.s2.downloadForDesktop}</DesktopLabel>
            <DesktopRow>
              <DesktopLink href="https://www.neosmartpen.com/neo-studio-download/" target="_blank" rel="noopener noreferrer">
                <DesktopIcon src={`${IMG}/donwload_icon_windows.png`} alt="Windows" width={40} height={40} />
                <DesktopText>Windows</DesktopText>
              </DesktopLink>
              <DesktopLink href="https://www.neosmartpen.com/neo-studio-download/" target="_blank" rel="noopener noreferrer">
                <DesktopIcon src={`${IMG}/donwload_icon_mac.png`} alt="Mac" width={40} height={40} />
                <DesktopText>Mac</DesktopText>
              </DesktopLink>
            </DesktopRow>
          </Block>

          <TripleGrid>
            {[{ title: t.s2.createPdf, desc: t.s2.createPdfDesc }, { title: t.s2.createSvg, desc: t.s2.createSvgDesc }, { title: t.s2.createPng, desc: t.s2.createPngDesc }].map((item) => (
              <TripleCard key={item.title}><TripleTitle>{item.title}</TripleTitle><TripleDesc>{item.desc}</TripleDesc></TripleCard>
            ))}
          </TripleGrid>

          <Block>
            <BlockTitle>{t.s2.shareCreativity}</BlockTitle>
            <BlockDesc>{t.s2.shareCreativityDesc}</BlockDesc>
          </Block>

          <Block>
            <BlockTitle>{t.s2.ideationHeading}</BlockTitle>
            <BlockDesc>{t.s2.ideationDesc}</BlockDesc>
            <GifImage src={`${IMG}/ideation-min.gif`} alt="Ideation to Finalization" />
            <Note>{t.s2.ideationNote}</Note>
          </Block>

          <Block>
            <BlockTitle>{t.s2.biggerScreen}</BlockTitle>
            <BlockDesc>{t.s2.biggerScreenDesc}</BlockDesc>
            <MainImage src={`${IMG}/NS-web.png`} alt="Neo Studio Web" width={1080} height={600} />
          </Block>

          <Split>
            <Half>
              <HalfImg src={`${IMG}/필기편집02.png`} alt="Edit with Ease" width={540} height={400} />
            </Half>
            <HalfText>
              <SplitTitle>{t.s2.editWithEase}</SplitTitle>
              <SplitDesc>{t.s2.editWithEaseDesc}</SplitDesc>
            </HalfText>
          </Split>

          <SplitReverse>
            <Half>
              <HalfImg src={`${IMG}/Neostudio_검색.png`} alt="Find and Retrieve" width={540} height={400} />
            </Half>
            <HalfText>
              <SplitTitle>{t.s2.findRetrieve}</SplitTitle>
              <SplitDesc>{t.s2.findRetrieveDesc}</SplitDesc>
              <Note>{t.s2.languages30}</Note>
            </HalfText>
          </SplitReverse>

          <DetailsWrap>
            <Details>
              <Summary><SummaryTitle>{t.s2.supportedLanguagesTitle}</SummaryTitle></Summary>
              <DetailsBody><DetailsText>{t.s2.supportedLanguagesList}</DetailsText></DetailsBody>
            </Details>
          </DetailsWrap>
        </Container>
      </SectionWhite>

      <FeatureSection>
        <Container>
          <BlockTitle>{t.s2.featureGridTitle}</BlockTitle>
          <FeatureStack>
            {features.map((feature, idx) => {
              const imgs = featureImages[feature.key];
              return (
                <FeatureItem key={feature.key} $reverse={idx % 2 === 1}>
                  <ShotWrap><Shot src={imgs.img1} alt={feature.title} width={480} height={720} /></ShotWrap>
                  <FeatureTextWrap>
                    <Icon src={imgs.img2} alt={`${feature.title} icon`} width={56} height={56} />
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDesc>{feature.desc}</FeatureDesc>
                  </FeatureTextWrap>
                </FeatureItem>
              );
            })}
          </FeatureStack>
        </Container>
      </FeatureSection>

      <SectionGray>
        <Container>
          <Block>
            <BlockTitle>{t.s3.desktopTitle}</BlockTitle>
            <BlockDesc>{t.s3.desktopDesc}</BlockDesc>
            <DesktopShotGrid>
              <DesktopShot src={`${IMG}/Screenshot-2023-04-07-at-4.43.47-PM-1.png`} alt="Neo Studio Desktop screenshot 1" width={350} height={220} />
              <DesktopShot src={`${IMG}/Screenshot-2023-04-07-at-5.06.02-PM.png`} alt="Neo Studio Desktop screenshot 2" width={350} height={220} />
              <DesktopShot src={`${IMG}/Screenshot-2023-04-07-at-5.29.48-PM.png`} alt="Neo Studio Desktop screenshot 3" width={350} height={220} />
            </DesktopShotGrid>
          </Block>
          <Block>
            <BlockTitle>{t.s3.doMore}</BlockTitle>
            <BlockDesc>{t.s3.doMoreDesc}</BlockDesc>
            <Note>{t.s2.doMoreNote}</Note>
          </Block>
          <Block>
            <BlockTitle>{t.s3.penMouse}</BlockTitle>
            <BlockDesc>{t.s3.penMouseDesc}</BlockDesc>
            <Note>{t.s2.penMouseNote}</Note>
          </Block>
        </Container>
      </SectionGray>

      <CtaSection>
        <CtaInner>
          <CtaText>{t.s4.cta}</CtaText>
          <CtaLink href="https://shop.neosmartpen.com" target="_blank" rel="noopener noreferrer">{t.s4.shopLink}</CtaLink>
        </CtaInner>
      </CtaSection>
    </>
  );
}

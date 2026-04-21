import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  CenterDesc,
  CenterSection,
  CenterSub,
  CenterTitle,
  Container,
  CtaDesc,
  CtaImage,
  CtaImageWrap,
  CtaSection,
  CtaSplit,
  CtaText,
  CtaTitle,
  DarkBtn,
  DownloadIcon,
  DownloadLabel,
  DownloadLink,
  DownloadRow,
  GifImage,
  GraySection,
  Half,
  HeroDesc,
  HeroInner,
  HeroLogo,
  HeroSection,
  HeroTitle,
  Note,
  Screenshot,
  ScreenshotSection,
  Split,
  SplitSub,
  SplitTitle,
  SysReq,
} from "./PenManagerPage.styles";

const IMG = "/images/neosmartpen/apps/penmanager";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.penmanager.metadata;
  return { title: t.title, description: t.description };
}

export default async function PenManagerPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.penmanager;

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroLogo src={`${IMG}/penmanager-logo-500x131-1.png`} alt="Pen Manager" width={300} height={79} />
          <HeroTitle>{t.hero.subtitle}</HeroTitle>
          <HeroDesc>{t.hero.desc}</HeroDesc>
          <DownloadRow>
            <DownloadLink href="https://storage.googleapis.com/neolab_common/PenManager_Setup.exe" target="_blank" rel="noopener noreferrer">
              <DownloadIcon src={`${IMG}/donwload_icon_windows.png`} alt="Windows" width={60} height={60} />
              <DownloadLabel>Windows</DownloadLabel>
            </DownloadLink>
            <DownloadLink href="https://storage.googleapis.com/neolab_common/PenManager.dmg" target="_blank" rel="noopener noreferrer">
              <DownloadIcon src={`${IMG}/donwload_icon_mac.png`} alt="Mac" width={60} height={60} />
              <DownloadLabel>Mac</DownloadLabel>
            </DownloadLink>
          </DownloadRow>
          <SysReq>{t.hero.sysReq}</SysReq>
        </HeroInner>
      </HeroSection>

      <ScreenshotSection>
        <Container>
          <Screenshot src={`${IMG}/Pen_Manager_Slide_03-1-1024x725-1.jpg`} alt="Pen Manager Screenshot" width={1024} height={725} />
        </Container>
      </ScreenshotSection>

      <CenterSection>
        <Container>
          <CenterTitle>{t.s1.title}</CenterTitle>
          <CenterDesc>{t.s1.desc}</CenterDesc>
          <CenterSub>{t.s1.descSub}</CenterSub>
        </Container>
      </CenterSection>

      <GraySection>
        <Container>
          <Split>
            <Half>
              <GifImage src={`${IMG}/gridaboard_usage_01.gif`} alt="Grida board usage" />
            </Half>
            <Half>
              <SplitTitle>{t.s2.title}</SplitTitle>
              <SplitSub>{t.s2.subtitle}</SplitSub>
              <DarkBtn href="https://gridaboard.io/" target="_blank" rel="noopener noreferrer">
                {t.s2.cta}
              </DarkBtn>
              <Note>{t.s2.note}</Note>
            </Half>
          </Split>
        </Container>
      </GraySection>

      <CtaSection>
        <Container>
          <CtaSplit>
            <CtaImageWrap>
              <CtaImage src={`${IMG}/Pen_Manager_Slide_09_Transparent_Background-768x768-1.png`} alt="Neo Smartpen products" width={400} height={400} />
            </CtaImageWrap>
            <CtaText>
              <CtaTitle>{t.s3.title}</CtaTitle>
              <CtaDesc>{t.s3.desc}</CtaDesc>
              <DarkBtn href="https://shop.neosmartpen.com" target="_blank" rel="noopener noreferrer">{t.s3.cta}</DarkBtn>
            </CtaText>
          </CtaSplit>
        </Container>
      </CtaSection>
    </>
  );
}

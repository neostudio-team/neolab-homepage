import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  BiSection,
  CiSection,
  ColorCard,
  ColorRow,
  ColorText,
  ColorTextDark,
  Container,
  HeroBg,
  HeroBlurBottom,
  HeroBlurTop,
  HeroInner,
  HeroSection,
  HeroTitle,
  LogoCell,
  LogoGrid4,
  LogoImg,
  LogoStack,
  LogoStrip,
  Page,
  Palette,
  PaletteItem,
  PaletteText,
  SectionTitle,
  StoryImg,
  StoryWrap,
  SubTitle,
  SymbolBar,
  SymbolImages,
  SymbolLabel,
  WaveSvg,
  WaveWrap,
} from "./BiPage.styles";

export const metadata: Metadata = {
  title: "CI/BI (브랜드 가이드라인) | 네오스마트펜",
  description: "네오랩 컨버전스의 브랜드 가이드라인",
};

export default async function BiPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        <HeroSection>
          <HeroBg><HeroBlurTop /><HeroBlurBottom /></HeroBg>
          <HeroInner><HeroTitle>브랜드 가이드 라인</HeroTitle></HeroInner>
          <WaveWrap>
            <WaveSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.37,20.44,151.72,42.71,213.9,50.75,249.23,55.33,285.4,59.35,321.39,56.44Z" fill="#fff" />
            </WaveSvg>
          </WaveWrap>
        </HeroSection>

        <CiSection>
          <SectionTitle>네오랩 컨버전스 Corporate Identity</SectionTitle>
          <div>
            <SubTitle>COLOR SYSTEM</SubTitle>
            <ColorRow>
              <ColorCard $bg="#ff6720" $shadow="0 15px 30px rgba(255,103,32,0.3)"><ColorText>Pantone 165 C<br />/ #ff6720</ColorText></ColorCard>
              <ColorCard $bg="#53565A" $shadow="0 15px 30px rgba(83,86,90,0.3)"><ColorText>Pantone<br />COOL GRAY<br />11 / #53565A</ColorText></ColorCard>
            </ColorRow>
          </div>
          <div>
            <SubTitle>LOGO</SubTitle>
            <LogoGrid4>
              <LogoCell><LogoImg src="/images/bi/NeoLAB-CI-2.png" alt="NeoLAB Logo Gray" /></LogoCell>
              <LogoCell><LogoImg src="/images/bi/NeoLAB-CI-4.png" alt="NeoLAB Logo Dark" /></LogoCell>
              <LogoCell><LogoImg src="/images/bi/NeoLAB-CI-3.png" alt="NeoLAB Logo Color" /></LogoCell>
              <LogoCell $bg="#53565A"><LogoImg src="/images/bi/NeoLAB-CI-1.png" alt="NeoLAB Logo White" /></LogoCell>
            </LogoGrid4>
          </div>
        </CiSection>

        <BiSection>
          <SectionTitle>네오 스마트펜 Brand Identity</SectionTitle>
          <div>
            <SubTitle>브랜드 스토리</SubTitle>
            <StoryWrap><StoryImg src="/images/bi/bi01.jpg" alt="브랜드 스토리" /></StoryWrap>
          </div>
          <div>
            <SubTitle>COLOR SYSTEM</SubTitle>
            <Palette>
              <PaletteItem $bg="#48a9c5"><PaletteText>PANTON<br />7702C /<br />#48a9c5</PaletteText></PaletteItem>
              <PaletteItem $bg="#00778b"><PaletteText>PANTON<br />3145C /<br />#00778b</PaletteText></PaletteItem>
              <PaletteItem $bg="#1d252d"><PaletteText>PANTON<br />433C /<br />#1d252d</PaletteText></PaletteItem>
              <PaletteItem $bg="#9ea2a2"><PaletteText>PANTON<br />422C /<br />#9ea2a2</PaletteText></PaletteItem>
              <PaletteItem $bg="#dbe2e9"><PaletteText $dark>PANTON<br />649C /<br />#dbe2e9</PaletteText></PaletteItem>
            </Palette>
          </div>
          <div>
            <SubTitle>LOGO</SubTitle>
            <LogoStack>
              <LogoStrip>
                <div><LogoImg src="/images/bi/logo_01.png" alt="NEO SMARTPEN grey 01" /></div><div><LogoImg src="/images/bi/logo_02.png" alt="NEO SMARTPEN grey 02" /></div><div><LogoImg src="/images/bi/logo_03.png" alt="NEO SMARTPEN grey 03" /></div><div><LogoImg src="/images/bi/logo_04.png" alt="NEO SMARTPEN grey 04" /></div>
              </LogoStrip>
              <LogoStrip $bg="#53565A">
                <div><LogoImg src="/images/bi/logo_05.png" alt="NEO SMARTPEN white 01" /></div><div><LogoImg src="/images/bi/logo_06.png" alt="NEO SMARTPEN white 02" /></div><div><LogoImg src="/images/bi/logo_07.png" alt="NEO SMARTPEN white 03" /></div><div><LogoImg src="/images/bi/logo_08.png" alt="NEO SMARTPEN white 04" /></div>
              </LogoStrip>
              <SymbolBar>
                <SymbolLabel>Symbol</SymbolLabel>
                <SymbolImages><LogoImg src="/images/bi/logo_09.png" alt="Symbol grey 02" /><LogoImg src="/images/bi/logo_10.png" alt="Symbol grey 01" /></SymbolImages>
              </SymbolBar>
              <SymbolBar $bg="#53565A">
                <SymbolLabel $dark>Symbol</SymbolLabel>
                <SymbolImages><LogoImg src="/images/bi/logo_11.png" alt="Symbol white 02" /><LogoImg src="/images/bi/logo_12.png" alt="Symbol white 01" /></SymbolImages>
              </SymbolBar>
            </LogoStack>
          </div>
        </BiSection>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

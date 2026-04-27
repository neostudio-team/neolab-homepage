import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import TechTabs from "./components/TechTabs";
import {
  HeroSection,
  HeroBgImg,
  HeroTitle,
  MainContent,
  IntroSection,
  IntroHead,
  IntroTitle,
  IntroDesc,
  IntroImgWrap,
  IntroImg,
  AppSection,
  AppHead,
  AppTitle,
  AppDesc,
  AppCards,
  AppCard,
  AppCardBgImg,
  AppCardLabel,
  DevSection,
  DevBgOverlay,
  DevBgImg,
  DevInner,
  DevTitle,
  DevDesc,
  DevBtn,
  OrangeDot,
} from "./TechnologyPage.styles";

export const metadata: Metadata = {
  title: "기술/솔루션 | 네오랩컨버전스",
  description:
    "Ncode와 닷코드, 전자펜에 이르는 원천·기반·응용 기술 전반을 자체 개발한 네오랩컨버전스의 독자적 기술력",
};

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <HeroSection>
          <HeroBgImg src="/images/technology/hero-bg.jpg" alt="" />
          <HeroTitle>기술/솔루션</HeroTitle>
        </HeroSection>

        {/* ── Intro + Tabs ──────────────────────────── */}
        <MainContent>
          <IntroSection>
            <IntroHead>
              <IntroTitle>세상을 잇는 독자적 기술력.</IntroTitle>
              <IntroDesc>
                Ncode와 닷코드, 전자펜에 이르는 원천·기반·응용 기술 전반을
                자체 개발하였으며,{"\n"}전 세계 100여 건의 특허를 통해 독보적인
                기술 리더십을 확보하고 있습니다.
              </IntroDesc>
            </IntroHead>
            <IntroImgWrap>
              <IntroImg src="/images/technology/intro.jpg" alt="기술 소개" />
            </IntroImgWrap>
          </IntroSection>

          {/* ── Tab section ───────────────────────── */}
          <TechTabs />
        </MainContent>

        {/* ── 응용 분야 ─────────────────────────────── */}
        <AppSection>
          <AppHead>
            <OrangeDot />
            <AppTitle>응용 분야</AppTitle>
            <AppDesc>
              Ncode 기술은 지면의 위치 정보를 실시간으로 데이터화하여,{"\n"}
              활용 목적에 따라 스마트펜과 소리펜 두 가지 혁신적인 솔루션으로
              구현됩니다.
            </AppDesc>
          </AppHead>
          <AppCards>
            <AppCard>
              <AppCardBgImg
                src="/images/technology/card-neosmartpen.jpg"
                alt="네오스마트펜"
              />
              <AppCardLabel>네오스마트펜</AppCardLabel>
            </AppCard>
            <AppCard>
              <AppCardBgImg
                src="/images/technology/card-soripen.jpg"
                alt="팝펜(소리펜)"
              />
              <AppCardLabel>팝펜(소리펜)</AppCardLabel>
            </AppCard>
          </AppCards>
        </AppSection>

        {/* ── Developer section ─────────────────────── */}
        <DevSection>
          <DevBgOverlay />
          <DevBgImg src="/images/technology/dev-bg.jpg" alt="" />
          <DevInner>
            <DevTitle>Designed for Developers</DevTitle>
            <DevDesc>
              누구나 네오스마트펜 응용 어플리케이션을 개발할 수 있습니다.{"\n"}
              Github를 통해 SDK 소스코드와 예제 코드를 내려받을 수 있습니다.
            </DevDesc>
            <DevBtn
              href="https://github.com/NeoSmartpen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github로 이동하기
              <img
                src="/images/technology/arrow-right.png"
                alt=""
                width={32}
                height={32}
              />
            </DevBtn>
          </DevInner>
        </DevSection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

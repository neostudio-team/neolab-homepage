import { Metadata } from "next";
import { Icon } from "@iconify/react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import RevealHeadingBody from "@/components/common/RevealHeadingBody";
import Section from "@/components/common/Section";
import ExternalLinkButton from "@/components/common/ExternalLinkButton";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import TechTabs from "./components/TechTabs";
import {
  Page,
  IntroImg,
  AppCards,
  AppCard,
  AppCardBgImg,
  AppCardLabel,
  AppCardLabelTitle,
  AppCardLabelDesc,
  AppCardLabelCta,
  AppCardOverlay,
  AppCardOverlayBody,
  AppCardOverlayTitle,
  AppCardOverlayDesc,
  AppCardCta,
  DevSection,
  DevTitle,
  DevDesc,
  TitleWrap,
} from "./TechnologyPage.styles";

type AppCardItem = {
  title: string;
  description: string;
  bgImage: string;
  href: string;
};

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

  const appCards: AppCardItem[] = [
    {
      title: "네오스마트펜",
      description:
        "종이에 적는 필기 궤적을 메타 정보와 함께 정밀하게 인식하여 실시간 디지털 데이터로 전환합니다. 단순한 메모부터 복잡한 수식, 도형, 창의적인 스케치까지 사용자의 모든 아이디어를 기록 즉시 스마트 기기로 보관하고 공유할 수 있습니다.",
      bgImage: "/images/technology/card-neosmartpen.jpg",
      href: `/${lang}/neosmartpen`,
    },
    {
      title: "팝펜(소리펜)",
      description:
        "종이 위의 위치 정보를 인식하여 연결된 멀티미디어 콘텐츠를 즉각 재생합니다. 책 속의 글자나 그림을 터치하는 것만으로 생생한 내레이션, 효과음, 영상 콘텐츠를 경험할 수 있어 아이들에게 몰입감 넘치는 학습 환경과 독서의 재미를 선사합니다.",
      bgImage: "/images/technology/card-soripen.jpg",
      href: `/${lang}/soundpen`,
    },
  ];

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        {/* HERO */}
        <PageHero
          title="기술/솔루션"
          backgroundImage="/images/technology/hero-bg.jpg"
        />

        {/* INTRO */}
        <RevealHeadingBody
          title="세상을 잇는 독자적 기술력."
          description={
            "Ncode와 닷코드, 전자펜에 이르는 원천·기반·응용 기술 전반을 자체 개발하였으며,\n전 세계 100여 건의 특허를 통해 독보적인 기술 리더십을 확보하고 있습니다."
          }
          contents={
            <IntroImg src="/images/technology/intro.jpg" alt="기술 소개" />
          }
          paddingBottom={false}
        />

        {/* TABS */}
        <TechTabs />

        {/* 응용 분야 */}
        <Section
          title="응용 분야"
          desc={
            "Ncode 기술은 지면의 위치 정보를 실시간으로 데이터화하여,\n활용 목적에 따라 스마트펜과 소리펜 두 가지 혁신적인 솔루션으로 구현됩니다."
          }
          background="#fcfcfc"
          tone="dark"
        >
          <AppCards>
            {appCards.map((card) => (
              <AppCard
                key={card.title}
                href={card.href}
                aria-label={`${card.title} 페이지로 이동`}
              >
                <AppCardBgImg src={card.bgImage} alt="" />
                <AppCardLabel>
                  <AppCardLabelTitle>{card.title}</AppCardLabelTitle>
                  <AppCardLabelDesc>{card.description}</AppCardLabelDesc>
                  <AppCardLabelCta>
                    바로가기
                    <Icon icon="cil:arrow-right" fontSize={24} />
                  </AppCardLabelCta>
                </AppCardLabel>
                <AppCardOverlay aria-hidden>
                  <AppCardOverlayBody>
                    <AppCardOverlayTitle>{card.title}</AppCardOverlayTitle>
                    <AppCardOverlayDesc>{card.description}</AppCardOverlayDesc>
                  </AppCardOverlayBody>
                  <AppCardCta>
                    <span>바로가기</span>
                    <Icon icon="cil:arrow-right" fontSize={28} />
                  </AppCardCta>
                </AppCardOverlay>
              </AppCard>
            ))}
          </AppCards>
        </Section>

        {/* DEVELOPER */}
        <DevSection>
          <TitleWrap>
            <DevTitle>Designed for Developers</DevTitle>
            <DevDesc>
              누구나 네오스마트펜 응용 어플리케이션을 개발할 수 있습니다.<br />Github를 통해 SDK 소스코드와 예제 코드를 내려받을 수 있습니다.
            </DevDesc>
          </TitleWrap>
          <ExternalLinkButton
            href="https://github.com/NeoSmartpen"
            target="_blank"
            rel="noopener noreferrer"
            label="Github로 이동하기"
          />
        </DevSection>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

import { Metadata } from "next";
import { Icon } from "@iconify/react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import { RevealGroup, RevealItem } from "@/components/common/Reveal";
import RevealHeadingBody from "@/components/common/RevealHeadingBody";
import Section from "@/components/common/Section";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import StickerTabs from "./components/StickerTabs";
import {
  Page,
  CtaRow,
  CtaCard,
  CtaLabel,
  CtaCircle,
  CtaProductImg,
  LineupCards,
  LineupCard,
  LineupCardImg,
  LineupCardName,
} from "./SoundPenPage.styles";

const IMG = "/images/soundpen/figma";

export const metadata: Metadata = {
  title: "소리펜:팝펜 | 네오랩컨버전스",
  description:
    "책을 듣는 가장 훌륭한 방법. 팝펜은 종이 위 텍스트와 이미지를 소리 및 영상으로 연결하는 혁신적인 소리펜입니다.",
};

const LINEUP = [
  { src: `${IMG}/lineup-1.png`, name: "팝펜" },
  { src: `${IMG}/lineup-2.png`, name: "팝펜 프라임" },
  { src: `${IMG}/lineup-3.png`, name: "팝펜 비디오" },
  { src: `${IMG}/lineup-4.png`, name: "팝펜 라이트" },
];

const FACTORY_URL = "https://cafe.naver.com/dotcotory";
const STORE_URL = "https://smartstore.naver.com/neolab";

export default async function SoundPenPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        {/* HERO */}
        <PageHero title="소리펜:팝펜" backgroundImage={`${IMG}/hero-bg.png`} />

        {/* INTRO + CTA ROW */}
        <RevealHeadingBody
          title="책을 듣는 가장 훌륭한 방법."
          description={
            "팝펜은 종이 위 텍스트와 이미지를 소리 및 영상으로 연결하는 혁신적인 소리펜입니다.\n책을 터치해 생생한 내레이션을 듣거나 연동된 멀티미디어를 시청할 수 있어 아이들에게 몰입감 넘치는 독서 경험을 선사합니다.\n\n전용 스티커를 활용해 맞춤형 음원이나 유튜브 리스트를 담는 차별화된 기능도 제공합니다.\n국내 시장 점유율 1위를 기록 중인 팝펜은 대한민국 대표 교육·출판사가 선택한 가장 검증된 솔루션입니다."
          }
          contents={
            <CtaRow>
              <CtaCard
                href={FACTORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="팝펜 팩토리 바로가기"
              >
                <CtaLabel>팝펜 팩토리</CtaLabel>
                <CtaCircle>
                  <span>바로가기</span>
                  <Icon icon="cil:arrow-right" fontSize={24} />
                </CtaCircle>
              </CtaCard>

              <CtaProductImg
                src={`${IMG}/main-product.png`}
                alt="팝펜"
              />

              <CtaCard
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="팝펜 공식몰 바로가기"
                $filled
              >
                <CtaLabel $filled>팝펜 공식몰</CtaLabel>
                <CtaCircle $filled>
                  <span>바로가기</span>
                  <Icon icon="cil:arrow-right" fontSize={24} />
                </CtaCircle>
              </CtaCard>
            </CtaRow>
          }
        />

        {/* 라인업 */}
        <Section
          title="라인업"
          desc={
            "15종의 엄격한 자체 테스트와 국내외 안전 인증을 통과하여 아이들이 안심하고 사용할 수 있습니다.\n용도별로 준비된 다양한 라인업으로 스마트한 독서 환경을 경험해 보세요."
          }
          background="#fcfcfc"
          tone="dark"
        >
          <RevealGroup stagger={0.12} amount={0.2}>
            <LineupCards>
              {LINEUP.map(({ src, name }) => (
                <RevealItem key={name} y={28} duration={0.85}>
                  <LineupCard>
                    <LineupCardImg src={src} alt={name} />
                    <LineupCardName>{name}</LineupCardName>
                  </LineupCard>
                </RevealItem>
              ))}
            </LineupCards>
          </RevealGroup>
        </Section>

        {/* 스티커 & 패밀리 도서 */}
        <Section title="스티커 & 패밀리 도서" tone="dark">
          <RevealItem y={28} duration={0.9}>
            <StickerTabs />
          </RevealItem>
        </Section>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

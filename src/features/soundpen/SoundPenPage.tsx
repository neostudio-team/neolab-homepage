import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import StickerTabs from "./components/StickerTabs";
import {
  HeroSection,
  HeroBgImg,
  HeroTitle,
  IntroSection,
  IntroText,
  IntroTitle,
  IntroDesc,
  CtaRow,
  CtaCard,
  CtaLabel,
  CtaCircle,
  CtaCircleText,
  CtaArrow,
  CtaProductImg,
  LineupSection,
  LineupHead,
  LineupOrangeDot,
  LineupTitle,
  LineupDesc,
  LineupCards,
  LineupCard,
  LineupCardImg,
  LineupCardName,
  StickerSection,
  StickerHead,
  StickerOrangeDot,
  StickerTitle,
} from "./SoundPenPage.styles";

export const metadata: Metadata = {
  title: "소리펜:팝펜 | 네오랩컨버전스",
  description:
    "책을 듣는 가장 훌륭한 방법. 팝펜은 종이 위 텍스트와 이미지를 소리 및 영상으로 연결하는 혁신적인 소리펜입니다.",
};

const LINEUP = [
  { src: "/images/soundpen/lineup-1.png", name: "팝펜" },
  { src: "/images/soundpen/lineup-2.png", name: "팝펜 프라임" },
  { src: "/images/soundpen/lineup-3.png", name: "팝펜 비디오" },
  { src: "/images/soundpen/lineup-4.png", name: "팝펜 라이트" },
];

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
      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <HeroSection>
          <HeroBgImg src="/images/soundpen/hero-bg.jpg" alt="" />
          <HeroTitle>소리펜:팝펜</HeroTitle>
        </HeroSection>

        {/* ── Intro + CTA ───────────────────────────── */}
        <IntroSection>
          <IntroText>
            <IntroTitle>책을 듣는 가장 훌륭한 방법.</IntroTitle>
            <IntroDesc>
              팝펜은 종이 위 텍스트와 이미지를 소리 및 영상으로 연결하는
              혁신적인 소리펜입니다.{" "}
              책을 터치해 생생한 내레이션을 듣거나 연동된 멀티미디어를 시청할
              수 있어 아이들에게 몰입감 넘치는 독서 경험을 선사합니다.
              {"\n\n"}
              전용 스티커를 활용해 맞춤형 음원이나 유튜브 리스트를 담는
              차별화된 기능도 제공합니다.{" "}
              국내 시장 점유율 1위를 기록 중인 팝펜은 대한민국 대표 교육·출판사가
              선택한 가장 검증된 솔루션입니다.
            </IntroDesc>
          </IntroText>

          <CtaRow>
            {/* 팝펜 팩토리 */}
            <CtaCard
              href="https://cafe.naver.com/dotcotory"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CtaLabel>팝펜 팩토리</CtaLabel>
              <CtaCircle style={{ position: "relative" }}>
                <CtaCircleText>바로가기</CtaCircleText>
                <CtaArrow src="/images/soundpen/vector-orange.png" alt="" />
              </CtaCircle>
            </CtaCard>

            <CtaProductImg
              src="/images/soundpen/main-product.png"
              alt="팝펜"
            />

            {/* 팝펜 공식몰 */}
            <CtaCard
              href="https://smartstore.naver.com/neolab"
              target="_blank"
              rel="noopener noreferrer"
              $filled
            >
              <CtaLabel $filled>팝펜 공식몰</CtaLabel>
              <CtaCircle $filled style={{ position: "relative" }}>
                <CtaCircleText $filled>바로가기</CtaCircleText>
                <CtaArrow src="/images/soundpen/vector-white.png" alt="" />
              </CtaCircle>
            </CtaCard>
          </CtaRow>
        </IntroSection>

        {/* ── 라인업 ───────────────────────────────── */}
        <LineupSection>
          <LineupHead>
            <LineupOrangeDot />
            <LineupTitle>라인업</LineupTitle>
            <LineupDesc>
              15종의 엄격한 자체 테스트와 국내외 안전 인증을 통과하여 아이들이
              안심하고 사용할 수 있습니다.{"\n"}
              용도별로 준비된 다양한 라인업으로 스마트한 독서 환경을 경험해
              보세요.
            </LineupDesc>
          </LineupHead>
          <LineupCards>
            {LINEUP.map(({ src, name }) => (
              <LineupCard key={name}>
                <LineupCardImg src={src} alt={name} />
                <LineupCardName>{name}</LineupCardName>
              </LineupCard>
            ))}
          </LineupCards>
        </LineupSection>

        {/* ── 스티커 & 패밀리 도서 ─────────────────── */}
        <StickerSection>
          <StickerHead>
            <StickerOrangeDot />
            <StickerTitle>스티커 &amp; 패밀리 도서</StickerTitle>
          </StickerHead>
          <StickerTabs />
        </StickerSection>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

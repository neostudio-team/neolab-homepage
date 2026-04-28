import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import RevealHeadingBody from "@/components/common/RevealHeadingBody";
import Reveal, { RevealGroup, RevealItem } from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import ExternalLinkButton from "@/components/common/ExternalLinkButton";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  Page,
  IntroCard,
  IntroBgImg,
  IntroOverlay,
  IntroContent,
  IntroBlock,
  IntroTitle,
  IntroDesc,
  Subsection,
  SubsectionTitle,
  CardGrid,
  EventGrid,
  PartnerCard,
  PartnerImg,
  PartnerLabel,
  EventCard,
  EventImgWrap,
  EventImg,
  EventImgOverlay,
  EventBody,
  EventTitle,
  EventDesc,
} from "./PartnershipPage.styles";

const IMG = "/images/partnership";

export const metadata: Metadata = {
  title: "사업제휴 | 네오랩컨버전스",
  description:
    "기획에서 제조까지 올인원 서비스를 제공하는 글로벌 유일의 스마트펜 전문 기업, 네오랩컨버전스의 사업 제휴 안내",
};

type PartnerGroup = {
  title: string;
  partners: { name: string; img: string }[];
};

const PARTNERSHIP_GROUPS: PartnerGroup[] = [
  {
    title: "스마트 러닝 / 에듀테크",
    partners: [
      { name: "교원구몬", img: `${IMG}/edu-1-kyowon.png` },
      { name: "엠베스트", img: `${IMG}/edu-2-mbest.png` },
      { name: "스마트스터디", img: `${IMG}/edu-3-smartstudy.png` },
      { name: "잉글리시에그", img: `${IMG}/edu-4-englishegg.png` },
      { name: "한솔교육", img: `${IMG}/edu-5-hansol.png` },
      { name: "Learn Korean with BTS", img: `${IMG}/edu-6-bts.png` },
      { name: "좋은책신사고", img: `${IMG}/edu-7-shinsago.png` },
      { name: "에슐런", img: `${IMG}/edu-8-eshulun.png` },
      { name: "충남교육청", img: `${IMG}/edu-9-cn.png` },
      { name: "전북교육청", img: `${IMG}/edu-10-jb.png` },
    ],
  },
  {
    title: "문구 브랜드 DX",
    partners: [
      { name: "몰스킨", img: `${IMG}/stat-1-moleskine.png` },
      { name: "모나미", img: `${IMG}/stat-2-monami.png` },
      { name: "라미", img: `${IMG}/stat-3-lamy.png` },
      { name: "라인프렌즈", img: `${IMG}/stat-4-linefriends.png` },
      { name: "양지사", img: `${IMG}/stat-5-yangji.png` },
    ],
  },
  {
    title: "스마트 문서 솔루션",
    partners: [
      { name: "산림청", img: `${IMG}/doc-1-forest.png` },
      { name: "InformDS (인도)", img: `${IMG}/doc-2-informds.png` },
      { name: "LG화학", img: `${IMG}/doc-3-lgchem.png` },
      { name: "현대자동차", img: `${IMG}/doc-4-hyundai.png` },
    ],
  },
  {
    title: "멀티미디어 도서 & 가이드",
    partners: [
      { name: "국립문화재연구소", img: `${IMG}/media-1-cha.png` },
      { name: "주손지(中尊寺)", img: `${IMG}/media-2-chusonji.png` },
      { name: "장애인 소비자 연합", img: `${IMG}/media-3-disabled.png` },
    ],
  },
  {
    title: "브랜드 제휴",
    partners: [
      { name: "서울대학교", img: `${IMG}/brand-1-snu.png` },
      { name: "고려대학교", img: `${IMG}/brand-2-korea.png` },
      { name: "김정기", img: `${IMG}/brand-3-kim.png` },
      { name: "존 메이어", img: `${IMG}/brand-4-mayer.png` },
    ],
  },
  {
    title: "콜라보레이션",
    partners: [
      { name: "tvN 뇌섹시대", img: `${IMG}/collab-1-tvn1.png` },
      { name: "tvN 곽승준의 쿨까당", img: `${IMG}/collab-2-tvn2.png` },
      { name: "채널A 하트시그널2", img: `${IMG}/collab-3-channela.png` },
      { name: "JTBC 히트맨2", img: `${IMG}/collab-4-jtbc1.png` },
      { name: "JTBC 비밀연애", img: `${IMG}/collab-5-jtbc2.png` },
      { name: "SPOTV Star K 아이돌리그", img: `${IMG}/collab-6-spotv.png` },
    ],
  },
];

const EVENTS = [
  {
    name: "피스마이너스원",
    img: `${IMG}/event-1-pma1.png`,
    desc: "빅뱅의 지드래곤(G-Dragon)과 국내외 아티스트들이\n현대미술과 대중문화의 접점을 만들기 위해 기획한\n프로젝트로 네오스마트펜과 Ncode 기술을 접목한 시크릿룸을 오픈했습니다.",
  },
  {
    name: "현대카드 슈퍼토크",
    img: `${IMG}/event-2-supertalk.png`,
    desc: "다양한 분야에서 정점에 선 사람들과 생각을 나누는 자리.\n소리펜과 Ncode가 인쇄된 책자를 비치해 행사와\n연사 정보를 제공했습니다.",
  },
  {
    name: "세계지식포럼",
    img: `${IMG}/event-3-forum.png`,
    desc: "매일경제신문사에서 주최하는 아시아 최대 비즈니스 포럼.\n모니터와 Ncode가 인쇄된 책자, 소리펜이 놓여진\n특별 안내데스크를 설치했습니다.",
  },
];

export default async function PartnershipPage({
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
        <PageHero title="사업제휴" backgroundImage={`${IMG}/hero-bg.png`} />

        {/* INTRO + IMAGE CARD */}
        <RevealHeadingBody
          title="기술 기반의 혁신적인 비즈니스 기회 창출."
          description={
            "기획에서 제조까지 올인원 서비스를 제공하는 글로벌 유일의 스마트펜 전문 기업입니다.\n검증된 기술력과 디자인력을 바탕으로 국내외 시장 점유율 1위를 달성하며 소리펜과 스마트펜의 표준을 제시합니다."
          }
          contents={
            <IntroCard>
              <IntroBgImg src={`${IMG}/intro.png`} alt="" />
              <IntroOverlay aria-hidden />
              <IntroContent>
                <IntroBlock>
                  <IntroTitle>무궁무진한 Ncode 기술</IntroTitle>
                  <IntroDesc>
                    {
                      "교육, 출판, 문구류, 의료, 산업, 금융 등 여러 사업분야에\n네오랩컨버전스의 기술과 제품, 서비스가 활용될 수 있습니다."
                    }
                  </IntroDesc>
                </IntroBlock>
                <ExternalLinkButton
                  href="mailto:study@neolab.net"
                  label="제휴문의"
                />
              </IntroContent>
            </IntroCard>
          }
        />

        {/* 파트너십 */}
        <Section title="파트너십" background="#fcfcfc" tone="dark">
          {PARTNERSHIP_GROUPS.map((group) => (
            <Reveal key={group.title} y={28} amount={0.1} duration={0.85}>
              <Subsection>
                <SubsectionTitle>{group.title}</SubsectionTitle>
                <RevealGroup stagger={0.06} amount={0.1}>
                  <CardGrid>
                    {group.partners.map((p) => (
                      <RevealItem key={p.name} y={20} duration={0.7}>
                        <PartnerCard>
                          <PartnerImg src={p.img} alt={p.name} loading="lazy" />
                          <PartnerLabel>{p.name}</PartnerLabel>
                        </PartnerCard>
                      </RevealItem>
                    ))}
                  </CardGrid>
                </RevealGroup>
              </Subsection>
            </Reveal>
          ))}
        </Section>

        {/* 전시·이벤트 */}
        <Section
          title="전시・이벤트"
          desc={
            "방명록과 관람평을 적는 공간을 마련해 관람객과 인터렉티브한 이벤트를 즐기거나\n전시나 이벤트 안내 시스템을 도입해 관람객에게 오디오 가이드를 제공할 수 있습니다."
          }
          tone="dark"
        >
          <RevealGroup stagger={0.12} amount={0.15}>
            <EventGrid>
              {EVENTS.map((e) => (
                <RevealItem key={e.name} y={32} duration={0.9}>
                  <EventCard>
                    <EventImgWrap>
                      <EventImg src={e.img} alt={e.name} loading="lazy" />
                      <EventImgOverlay aria-hidden />
                    </EventImgWrap>
                    <EventBody>
                      <EventTitle>{e.name}</EventTitle>
                      <EventDesc>{e.desc}</EventDesc>
                    </EventBody>
                  </EventCard>
                </RevealItem>
              ))}
            </EventGrid>
          </RevealGroup>
        </Section>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

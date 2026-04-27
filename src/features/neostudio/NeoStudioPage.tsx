import { Metadata } from "next";
import { Icon } from "@iconify/react";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Reveal, { RevealGroup, RevealItem } from "@/components/common/Reveal";
import {
  CardGrid,
  DownloadCard,
  DownloadGroup,
  DownloadInfo,
  DownloadLabel,
  DownloadVisual,
  DownloadVisualImg,
  ExperienceCard,
  ExperienceCardBody,
  ExperienceCardDesc,
  ExperienceCardImg,
  ExperienceCardMedia,
  ExperienceCardTitle,
  HeadingDesc,
  HeadingTitle,
  HeadingWrap,
  HeroOverlay,
  HeroSection,
  HeroTitle,
  IntroBlock,
  IntroDesc,
  IntroTitle,
  Page,
  Section,
  SectionInner,
  SiteLinkButton,
  SmartFeatureDesc,
  SmartFeatureIcon,
  SmartFeatureItem,
  SmartFeatureList,
  SmartFeatureText,
  SmartFeatureTitle,
  SmartLayout,
  SmartMockup,
  SmartMockupImg,
  StoreBadge,
  StoreBadgeText,
  StoreRow,
  WebCenter,
  WebVisual,
  WebVisualImg,
} from "./NeoStudioPage.styles";

const IMG = "/images/neosmartpen/apps/neo-studio/figma";

const APP_STORE_URL = "https://apps.apple.com/app/neo-studio/id1483403928";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=kr.neolab.neostudio";
const WEB_APP_URL = "https://web.neostudio.io";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.neoStudio.metadata;
  return { title: t.title, description: t.description };
}

const coreExperiences = [
  {
    key: "realtime",
    img: `${IMG}/core-realtime.png`,
    title: "실시간 동기화",
    desc: "종이에 적는 모든 내용이 실시간으로\n스마트폰과 태블릿에 기록됩니다.",
  },
  {
    key: "smart",
    img: `${IMG}/core-smart.png`,
    title: "스마트 검색 및 관리",
    desc: "키워드 검색, 태그 관리, 캘린더 뷰를 통해\n방대한 기록을 체계적으로 관리하세요.",
  },
  {
    key: "share",
    img: `${IMG}/core-share.png`,
    title: "자유로운 공유 및 편집",
    desc: "PDF, 이미지, SVG는 물론 녹음 기능과 결합하여\n생생한 기록을 공유하세요.",
  },
];

const smartFeatures = [
  {
    key: "edit",
    icon: "streamline-ultimate:content-pen-write",
    title: "Edit & Color",
    desc: "필기 후 색상 변경 및 선 굵기 조절",
  },
  {
    key: "voice",
    icon: "fluent:mic-record-24-regular",
    title: "Voice Recording",
    desc: "필기와 동시에 녹음하는 생생한 기록 (리플레이 기능)",
  },
  {
    key: "search",
    icon: "stash:search-box",
    title: "Search",
    desc: "손글씨를 텍스트로 인식하여 검색 (OCR)",
  },
  {
    key: "auto",
    icon: "fluent:cloud-flow-24-regular",
    title: "Auto Save",
    desc: "클라우드 연동으로 기기 간 끊김 없는 작업",
  },
];

export default async function NeoStudioPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  await params;

  return (
    <Page>
      {/* HERO */}
      <HeroSection $bg={`${IMG}/hero-bg.png`}>
        <HeroOverlay aria-hidden />
        <Reveal y={40} duration={1.1} once amount={0.1}>
          <HeroTitle>네오스튜디오 2</HeroTitle>
        </Reveal>
      </HeroSection>

      {/* INTRO + DOWNLOAD */}
      <Section>
        <SectionInner>
          <Reveal y={40} once amount={0.2}>
            <IntroBlock>
              <IntroTitle>아날로그의 감성, 디지털의 완성.</IntroTitle>
              <IntroDesc>
                {
                  "종이 위에 머무는 펜촉의 우아함을 디지털 세상으로 연결하세요.\nNeo Studio 2는 아날로그 필기의 따뜻한 질감을 그대로 보존하면서, 당신의 기록을 즉시 디지털로 변화시킵니다.\nNeoLAB만의 정교한 Ncode 기술이 선사하는 가장 진보된 필기 경험을 지금 바로 만나보세요."
                }
              </IntroDesc>
            </IntroBlock>
          </Reveal>

          <Reveal y={50} once amount={0.15} duration={1.0}>
            <DownloadCard>
              <DownloadVisual>
                <DownloadVisualImg
                  src={`${IMG}/intro-pen.png`}
                  alt="Neo Studio 2 디지털 필기 경험"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </DownloadVisual>

              <DownloadInfo>
                <DownloadGroup>
                  <DownloadLabel>
                    <Icon icon="gg:square" width={28} height={28} />앱 다운로드
                  </DownloadLabel>
                  <StoreRow>
                    <StoreBadge
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="App Store"
                    >
                      <Icon icon="ri:apple-fill" width={28} height={28} />
                      <StoreBadgeText>
                        <small>Download on the</small>
                        <strong>App Store</strong>
                      </StoreBadgeText>
                    </StoreBadge>
                    <StoreBadge
                      href={PLAY_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Google Play"
                    >
                      <Icon icon="ri:google-play-fill" width={28} height={28} />
                      <StoreBadgeText>
                        <small>GET IT ON</small>
                        <strong>Google Play</strong>
                      </StoreBadgeText>
                    </StoreBadge>
                  </StoreRow>
                </DownloadGroup>

                <DownloadGroup>
                  <DownloadLabel>
                    <Icon icon="gg:square" width={28} height={28} />
                    웹사이트
                  </DownloadLabel>
                  <SiteLinkButton
                    href={WEB_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    사이트 바로가기
                    <Icon icon="ei:arrow-right" width={28} height={28} />
                  </SiteLinkButton>
                </DownloadGroup>
              </DownloadInfo>
            </DownloadCard>
          </Reveal>
        </SectionInner>
      </Section>

      {/* CORE EXPERIENCE */}
      <Section style={{ background: "#ffffff" }}>
        <SectionInner>
          <Reveal y={40} once amount={0.3}>
            <HeadingWrap>
              <HeadingTitle>핵심 경험</HeadingTitle>
            </HeadingWrap>
          </Reveal>

          <RevealGroup stagger={0.14} delay={0.1}>
            <CardGrid>
              {coreExperiences.map((card) => (
                <RevealItem key={card.key} y={36} duration={0.9}>
                  <ExperienceCard>
                    <ExperienceCardMedia>
                      <ExperienceCardImg
                        src={card.img}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </ExperienceCardMedia>
                    <ExperienceCardBody>
                      <ExperienceCardTitle>{card.title}</ExperienceCardTitle>
                      <ExperienceCardDesc>{card.desc}</ExperienceCardDesc>
                    </ExperienceCardBody>
                  </ExperienceCard>
                </RevealItem>
              ))}
            </CardGrid>
          </RevealGroup>
        </SectionInner>
      </Section>

      {/* SMART FEATURES */}
      <Section>
        <SectionInner>
          <SmartLayout>
            <Reveal y={40} once amount={0.2} duration={1.0}>
              <SmartMockup>
                <SmartMockupImg
                  src={`${IMG}/smart-features-mockup.png`}
                  alt="Neo Studio 2 스마트 기능 미리보기"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </SmartMockup>
            </Reveal>

            <div>
              <Reveal y={32} once amount={0.3}>
                <HeadingWrap
                  style={{ alignItems: "flex-start", textAlign: "left" }}
                >
                  <HeadingTitle>스마트 기능</HeadingTitle>
                  <HeadingDesc style={{ textAlign: "left" }}>
                    당신의 기록에 가치를 더하는 Neo Studio 2만의 특별한 기능입니다.
                  </HeadingDesc>
                </HeadingWrap>
              </Reveal>

              <RevealGroup stagger={0.1} delay={0.05}>
                <SmartFeatureList>
                  {smartFeatures.map((feat) => (
                    <RevealItem key={feat.key} y={20} duration={0.7}>
                      <SmartFeatureItem>
                        <SmartFeatureIcon>
                          <Icon icon={feat.icon} />
                        </SmartFeatureIcon>
                        <SmartFeatureText>
                          <SmartFeatureTitle>{feat.title}</SmartFeatureTitle>
                          <SmartFeatureDesc>{feat.desc}</SmartFeatureDesc>
                        </SmartFeatureText>
                      </SmartFeatureItem>
                    </RevealItem>
                  ))}
                </SmartFeatureList>
              </RevealGroup>
            </div>
          </SmartLayout>
        </SectionInner>
      </Section>

      {/* WEB */}
      <Section style={{ background: "#fcfcfc" }}>
        <SectionInner>
          <WebCenter>
            <Reveal y={40} once amount={0.3}>
              <HeadingWrap>
                <HeadingTitle>Neo Studio 2 웹</HeadingTitle>
                <HeadingDesc>
                  {
                    "Neo Studio 2 웹에서 더 큰 화면으로 노트를 즐기세요.\n모든 동기화된 노트를 어떤 브라우저에서든 접근할 수 있습니다."
                  }
                </HeadingDesc>
              </HeadingWrap>
            </Reveal>

            <Reveal y={50} once amount={0.15} duration={1.0}>
              <WebVisual>
                <WebVisualImg
                  src={`${IMG}/web-main.png`}
                  alt="Neo Studio 2 웹 화면"
                  fill
                  sizes="(max-width: 1280px) 100vw, 1314px"
                />
              </WebVisual>
            </Reveal>

            <Reveal y={20} once amount={0.5}>
              <SiteLinkButton
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                사이트 바로가기
                <Icon icon="ei:arrow-right" width={28} height={28} />
              </SiteLinkButton>
            </Reveal>
          </WebCenter>
        </SectionInner>
      </Section>
    </Page>
  );
}

import { Metadata } from "next";
import { Icon } from "@iconify/react";
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
  IntroLayout,
  IntroLeft,
  IntroScreenshot,
  IntroRight,
  DownloadCard,
  HelpCard,
  PenManagerLogo,
  CardHeader,
  CardHeaderTitle,
  DownloadBtnRow,
  DownloadOsBtn,
  SystemReqLink,
  HelpLink,
  SupportedNote,
  FeatureCards,
  FeatureCard,
  FeatureImg,
  FeatureBody,
  FeatureTitle,
  FeatureDesc,
  FeatureSubDesc,
  ServiceCard,
  ServiceImg,
  ServiceBody,
  ServiceTitle,
  ServiceDesc,
} from "./PenManagerPage.styles";

const IMG = "/images/penmanager";

export const metadata: Metadata = {
  title: "펜 매니저 | 네오랩컨버전스",
  description:
    "Pen Manager를 통해 네오 스마트펜을 비롯한 네오랩의 모든 디바이스를 체계적으로 관리해 보세요.",
};

const FEATURES = [
  {
    img: `${IMG}/feature-1.png`,
    title: "스마트펜 관리",
    desc: "연결된 스마트펜의 속성을 확인하거나 변경할 수 있습니다.",
    sub: "(펜 잔여 배터리, 사용 가능 저장공간, 펌웨어 버전, 펜이름 및 비밀번호 설정 및 변경)",
  },
  {
    img: `${IMG}/feature-2.png`,
    title: "RECO 관리, 데이터 이동",
    desc: "연결된 RECO의 속성을 확인하거나 변경할 수 있으며\nRECO에 저장되어 있는 녹음과 필기 데이터를 PC로 이동할 수 있습니다.",
    sub: "(잔여 배터리, 사용 가능 저장공간, 펌웨어 버전, 녹음 재생, 녹음&필기데이터 PC로 이동, 데이터 초기화)",
  },
];

export default async function PenManagerPage({
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
        <PageHero title="펜 매니저" backgroundImage={`${IMG}/hero-bg.png`} />

        {/* INTRO + DOWNLOAD/HELP CARDS */}
        <RevealHeadingBody
          title="PC에서도 EASY CONNECT."
          description={
            "Pen Manager를 통해 네오 스마트펜을 비롯한 네오랩의 모든 디바이스를 체계적으로 관리해 보세요.\n연결된 기기의 통합 제어는 물론, 사용자님의 기록 가치를 더해주는 다채로운 전용 서비스까지 한곳에서 편리하게 경험하실 수 있습니다."
          }
          contents={
            <>
              <IntroLayout>
                <IntroLeft>
                  <IntroScreenshot
                    src={`${IMG}/screenshot.png`}
                    alt="펜 매니저 화면"
                  />
                </IntroLeft>

                <IntroRight>
                  {/* Download card */}
                  <DownloadCard>
                    <PenManagerLogo
                      src={`${IMG}/logo.png`}
                      alt="Pen Manager"
                    />
                    <CardHeader>
                      <Icon icon="gg:square" fontSize={20} aria-hidden />
                      <CardHeaderTitle>데스크톱용 앱 다운로드</CardHeaderTitle>
                    </CardHeader>
                    <DownloadBtnRow>
                      <DownloadOsBtn
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon icon="bi:windows" fontSize={20} aria-hidden />
                        Windows
                      </DownloadOsBtn>
                      <DownloadOsBtn
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon icon="bi:apple" fontSize={20} aria-hidden />
                        Mac OS
                      </DownloadOsBtn>
                    </DownloadBtnRow>
                    <SystemReqLink href="#">
                      시스템 권장사양 확인하기
                      <Icon icon="iconamoon:arrow-right-2-thin" aria-hidden />
                    </SystemReqLink>
                  </DownloadCard>

                  {/* Help card */}
                  <HelpCard>
                    <CardHeader>
                      <Icon icon="gg:square" fontSize={20} aria-hidden />
                      <CardHeaderTitle>펜 매니저 도움말</CardHeaderTitle>
                    </CardHeader>
                    <HelpLink
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      펜 매니저 도움말 바로가기
                      <Icon icon="ei:arrow-right" aria-hidden />
                    </HelpLink>
                  </HelpCard>
                </IntroRight>
              </IntroLayout>

              <SupportedNote>
                이용 가능 제품: 라미사파리 올블랙, 네오스마트펜 dimo, M1, M1+, N2 (일부
                모델 미지원 - NWP-F110), 라인프렌즈 에디션, 모나미 에디션
              </SupportedNote>
            </>
          }
        />

        {/* 핵심 기능 */}
        <Section title="핵심 기능" background="#fcfcfc" tone="dark">
          <RevealGroup stagger={0.12} amount={0.2}>
            <FeatureCards>
              {FEATURES.map((f) => (
                <RevealItem key={f.title} y={28} duration={0.85}>
                  <FeatureCard>
                    <FeatureImg src={f.img} alt={f.title} />
                    <FeatureBody>
                      <FeatureTitle>{f.title}</FeatureTitle>
                      <FeatureDesc>{f.desc}</FeatureDesc>
                      <FeatureSubDesc>{f.sub}</FeatureSubDesc>
                    </FeatureBody>
                  </FeatureCard>
                </RevealItem>
              ))}
            </FeatureCards>
          </RevealGroup>
        </Section>

        {/* 연동 서비스 */}
        <Section
          title="연동 서비스"
          desc="Pen Manager에 스마트펜을 연결하여, 네오랩에서 제공하는 서비스를 이용해보세요. Pen Manager를 통해, 아래 서비스를 PC에서 바로 이용하실 수 있습니다."
          tone="dark"
        >
          <Reveal y={28} duration={0.9}>
            <ServiceCard>
              <ServiceImg
                src={`${IMG}/gridaboard-thumb.png`}
                alt="그리다보드"
              />
              <ServiceBody>
                <ServiceTitle>그리다보드</ServiceTitle>
                <ServiceDesc>
                  아이디어와 스케치를 즉시 공유하는 온라인 화이트 보드
                </ServiceDesc>
                <ExternalLinkButton
                  href={`/${lang}/neosmartpen/gridaboard`}
                  label="그리다보드 바로가기"
                />
              </ServiceBody>
            </ServiceCard>
          </Reveal>
        </Section>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

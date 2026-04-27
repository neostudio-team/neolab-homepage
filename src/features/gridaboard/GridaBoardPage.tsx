import { Metadata } from "next";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHero from "@/components/common/PageHero";
import RevealHeadingBody from "@/components/common/RevealHeadingBody";
import Section from "@/components/common/Section";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  IntroContents,
  UseCaseRow,
  UseCaseCard,
  UseCaseTitle,
  UseCaseDesc,
  UseCaseNote,
  IntroCta,
  GridaBoardStartBtn,
  StartBtnLabel,
  StartBtnCircle,
  StartBtnCircleText,
  StartBtnArrow,
  IntroNote,
  ScreenshotWrap,
  ScreenshotImg,
  StepsRow,
  StepItem,
  StepImgWrap,
  StepMainImg,
  StepTextBlock,
  StepNum,
  StepDesc,
  VideoWrap,
  VideoImg,
  ControllerBox,
  ControllerImgWrap,
  ControllerImg,
  ControllerRight,
  ControllerHead,
  ControllerIconImg,
  ControllerTitle,
  ControllerList,
  ControllerRow,
  ControllerBadge,
  ControllerKey,
  ControllerVal,
  ControllerBottom,
  DownloadBtn,
  DownloadBtnLabel,
  DownloadNote,
  CtaInner,
  CtaLogo,
  CtaTitle,
  CtaDesc,
  CtaBtn,
  CtaArrow,
} from "./GridaBoardPage.styles";

export const metadata: Metadata = {
  title: "그리다보드 | 네오랩컨버전스",
  description:
    "그리다보드™는 네오스마트펜으로 종이에 쓴 내용을 웹 브라우저에 실시간으로 구현하는 가장 쉬운 화상 공유 툴입니다.",
};

const GRIDA_URL = "https://gridaboard.io/";

const CONTROLLER_FEATURES = [
  { num: 1, key: "펜 굵기", val: "얇게 / 중간 / 두껍게" },
  { num: 2, key: "펜 종류", val: "볼펜 / 형광펜 / 지우개" },
  { num: 3, key: "펜 색상", val: "" },
  { num: 4, key: "포인터", val: "" },
  { num: 5, key: "모두 지우기", val: "" },
  { num: 6, key: "메뉴 숨기기", val: "" },
  { num: 7, key: "스크린 설정", val: "페이지 세로 맞춤 / 가로 맞춤 / 축소 / 확대" },
  { num: 8, key: "페이지 이동", val: "이전 / 다음" },
];

export default async function GridaBoardPage({
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
        {/* Hero */}
        <PageHero title="그리다보드" backgroundImage="/images/gridaboard/hero-bg.jpg" />

        {/* Intro */}
        <RevealHeadingBody
          title="쉽고 효과적으로 생각을 전달하는 도구."
          description={`어려운 화상 솔루션 사용법을 익히느라 더 이상 힘들어하지 마세요. 그리다보드™는 네오스마트펜으로 종이에 쓴 내용을 웹 브라우저에 실시간으로 구현하는 가장 쉬운 화상 공유 툴입니다. 지금 바로 접속하여 당신의 익숙한 필기를 스마트한 강의와 회의로 바꿔 보세요.`}
          paddingBottom={false}
          contents={
            <IntroContents>
              {/* 업무용 / 교육용 */}
              <UseCaseRow>
                <UseCaseCard>
                  <UseCaseTitle>업무용</UseCaseTitle>
                  <UseCaseDesc>
                    {`스마트펜으로 작성한 아이디어를 실시간으로 공유할 수 있어 팀원들과 효과적인 회의를 진행할 수 있습니다.\n회의 후 작성 내용을 그대로 저장해 빠르게 공유할 수도 있습니다.`}
                  </UseCaseDesc>
                  <UseCaseNote>* Zoom, Google Meet 등 다양한 화상회의 서비스에 사용 가능</UseCaseNote>
                </UseCaseCard>
                <UseCaseCard>
                  <UseCaseTitle>교육용</UseCaseTitle>
                  <UseCaseDesc>
                    {`그리다보드에서 출력한 종이로 기록하여 빠르게 수업을 진행할 수 있습니다.\n수업 후 수업 내용을 저장해 손쉽게 공유할 수 있도록 지원합니다.`}
                  </UseCaseDesc>
                  <UseCaseNote>* Zoom, Google Meet 등 다양한 화상회의 서비스에 사용 가능</UseCaseNote>
                </UseCaseCard>
              </UseCaseRow>

              {/* CTA */}
              <IntroCta>
                <GridaBoardStartBtn href={GRIDA_URL} target="_blank" rel="noopener noreferrer">
                  <StartBtnLabel>그리다보드 시작하기</StartBtnLabel>
                  <StartBtnCircle>
                    <StartBtnCircleText>바로가기</StartBtnCircleText>
                    <StartBtnArrow src="/images/gridaboard/arrow-right.png" alt="" />
                  </StartBtnCircle>
                </GridaBoardStartBtn>
                <IntroNote>
                  그리다보드는 블루투스(BLE)가 지원되는 PC 환경의 크롬 웹브라우저에서 사용할 수 있습니다.
                </IntroNote>
              </IntroCta>

              {/* GridaBoard screenshot */}
              <ScreenshotWrap>
                <ScreenshotImg src="/images/gridaboard/screenshot.jpg" alt="그리다보드 화면" />
              </ScreenshotWrap>
            </IntroContents>
          }
        />

        {/* 사용법 */}
        <Section title="사용법" background="#fcf9ff" contained={false}>
          {/* 3 Steps */}
          <StepsRow>
            <StepItem>
              <StepImgWrap>
                <StepMainImg src="/images/gridaboard/step1-laptop.png" alt="Step 1" />
              </StepImgWrap>
              <StepTextBlock>
                <StepNum>01</StepNum>
                <StepDesc>
                  연결할 PC의 <strong>블루투스</strong>{"\n"}기능을 켜세요.
                </StepDesc>
              </StepTextBlock>
            </StepItem>

            <StepItem>
              <StepImgWrap>
                <StepMainImg src="/images/gridaboard/step2-smartpen.png" alt="Step 2" />
              </StepImgWrap>
              <StepTextBlock>
                <StepNum>02</StepNum>
                <StepDesc>
                  스마트펜의 <strong>전원</strong>을{"\n"}켜세요.
                </StepDesc>
              </StepTextBlock>
            </StepItem>

            <StepItem>
              <StepImgWrap style={{ background: "#f0e8fb", borderRadius: "50%" }}>
                <StepMainImg
                  src="/images/gridaboard/step-circle.png"
                  alt=""
                  style={{ objectFit: "contain", padding: "20%" }}
                />
              </StepImgWrap>
              <StepTextBlock>
                <StepNum>03</StepNum>
                <StepDesc>
                  펜 연결하기 버튼을 누르고{"\n"}스마트펜을 PC에 <strong>페어링</strong>하세요.
                </StepDesc>
              </StepTextBlock>
            </StepItem>
          </StepsRow>

          {/* Video screenshot */}
          <VideoWrap>
            <VideoImg src="/images/gridaboard/video.jpg" alt="그리다보드 영상" />
          </VideoWrap>

          {/* Controller */}
          <ControllerBox>
            <ControllerImgWrap>
              <ControllerImg src="/images/gridaboard/controller.jpg" alt="그리다보드 컨트롤러" />
            </ControllerImgWrap>
            <ControllerRight>
              <ControllerHead>
                <ControllerIconImg src="/images/gridaboard/controller-icon.png" alt="" />
                <ControllerTitle>컨트롤러</ControllerTitle>
              </ControllerHead>
              <ControllerList>
                {CONTROLLER_FEATURES.map((f) => (
                  <ControllerRow key={f.num}>
                    <ControllerBadge>{f.num}</ControllerBadge>
                    <ControllerKey>{f.key}</ControllerKey>
                    {f.val && <ControllerVal>{f.val}</ControllerVal>}
                  </ControllerRow>
                ))}
              </ControllerList>
              <ControllerBottom>
                <DownloadBtn href={GRIDA_URL} target="_blank" rel="noopener noreferrer">
                  <DownloadBtnLabel>그리다보드 컨트롤러 다운받기</DownloadBtnLabel>
                  <img src="/images/gridaboard/download-icon.png" alt="" style={{ width: 28, height: 28 }} />
                </DownloadBtn>
                <DownloadNote>
                  * 컬러 레이저 프린터 및 Adobe Acrobat Reader를 이용하여 출력하실 때, 인쇄 품질을 보증할 수 있습니다.
                </DownloadNote>
              </ControllerBottom>
            </ControllerRight>
          </ControllerBox>
        </Section>

        {/* 대량 구매 문의 */}
        <Section contained={false}>
          <CtaInner>
            <CtaLogo src="/images/gridaboard/logo.png" alt="GRIDA BOARD" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
              <CtaTitle>대량 구매 문의</CtaTitle>
              <CtaDesc>학교 및 관공서, 회사의 대량 주문에 대해 할인 혜택을 제공합니다.</CtaDesc>
            </div>
            <CtaBtn href="/partnership">
              문의하기
              <CtaArrow src="/images/gridaboard/arrow-right.png" alt="" />
            </CtaBtn>
          </CtaInner>
        </Section>
      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";
import {
  Body,
  PenDesc,
  CtaButton,
  CtaDesc,
  CtaImageCol,
  CtaProductImg,
  CtaRow,
  CtaSection,
  CtaTextCol,
  CtaTitle,
  DarkPadded,
  DownloadIcon,
  DownloadInner,
  DownloadLabel,
  DownloadLink,
  DownloadRow,
  DownloadSection,
  DownloadTitle,
  FeatureHeading,
  FeatureRow,
  GifImg,
  GifImgRounded,
  GifImgUseCase,
  Half,
  HalfFlexCenter,
  HeroDesc,
  HeroEyebrow,
  HeroInner,
  HeroLogo,
  HeroProductImg,
  HeroSection,
  HeroTitle,
  HowToBlock,
  HowToDesc,
  HowToTitle,
  IconRow,
  PaddedBlock,
  PenLogo,
  PenTitle,
  PenTopRow,
  RecoImageBeforeTextMobile,
  RecoSplitRow,
  RecoTextAfterImageMobile,
  ScreenshotImg,
  SectionDark,
  SectionGray,
  SectionWhite,
  SmallDlIcon,
  SpecCell,
  SpecDesc,
  SpecIcon,
  SpecsGrid,
  SpecTitle,
  StepCell,
  StepImg,
  StepLabel,
  StepText,
  StepsGrid,
  SysReqLink,
  UseCaseCell,
  UseCaseGrid,
  UseCaseTag,
  UseCaseTitle,
  VoiceDesc,
  VoiceTextCol,
  VoiceTitle,
} from "./ProductRecoPage.styles";

const IMG = "/images/neosmartpen/products/reco";

const WIN_DOWNLOAD = "https://storage.googleapis.com/neolab_common/PenManager_Setup.exe";
const MAC_DOWNLOAD = "https://storage.googleapis.com/neolab_common/PenManager.dmg";
const SYS_REQ_URL = "https://neolabdev.gitbook.io/pen-manager/help/penmanager/system-requirements";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productReco.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductRecoPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productReco;

  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroLogo src={`${IMG}/h1_white-1.png`} alt="RECO" width={200} height={60} />
          <HeroEyebrow>{t.hero.subtitle}</HeroEyebrow>
          <HeroTitle>{t.hero.title}</HeroTitle>
          <HeroDesc>{t.hero.desc}</HeroDesc>
          <HeroProductImg src={`${IMG}/reco.png`} alt="RECO product" width={600} height={400} priority />
        </HeroInner>
      </HeroSection>

      <DownloadSection>
        <DownloadInner>
          <DownloadTitle>{t.download.title}</DownloadTitle>
          <DownloadRow>
            <DownloadLink href={WIN_DOWNLOAD} target="_blank" rel="noopener noreferrer">
              <DownloadIcon src={`${IMG}/donwload_icon_windows.png`} alt="Windows" width={60} height={60} />
              <DownloadLabel>[{t.download.windows}]</DownloadLabel>
            </DownloadLink>
            <DownloadLink href={MAC_DOWNLOAD} target="_blank" rel="noopener noreferrer">
              <DownloadIcon src={`${IMG}/donwload_icon_mac.png`} alt="Mac" width={60} height={60} />
              <DownloadLabel>[{t.download.mac}]</DownloadLabel>
            </DownloadLink>
          </DownloadRow>
        </DownloadInner>
      </DownloadSection>

      <SectionGray>
        <PaddedBlock>
          <RecoSplitRow>
            <RecoTextAfterImageMobile>
              <FeatureHeading>{t.features.autoConnect}</FeatureHeading>
              <Body>{t.features.autoConnectDesc}</Body>
            </RecoTextAfterImageMobile>
            <RecoImageBeforeTextMobile>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <GifImg src={`${IMG}/쓰고.gif`} alt="Writing with RECO" />
            </RecoImageBeforeTextMobile>
          </RecoSplitRow>
        </PaddedBlock>
      </SectionGray>

      <SectionWhite>
        <PaddedBlock>
          <FeatureRow>
            <HalfFlexCenter>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <GifImg src={`${IMG}/터치하면.gif`} alt="Touch to play" />
            </HalfFlexCenter>
            <Half>
              <FeatureHeading>{t.features.timestamp}</FeatureHeading>
              <Body>{t.features.timestampDesc}</Body>
            </Half>
          </FeatureRow>
        </PaddedBlock>
      </SectionWhite>

      <SectionDark>
        <DarkPadded>
          <FeatureRow>
            <HalfFlexCenter>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <GifImgRounded src={`${IMG}/음성이재생.gif`} alt="Voice playback" />
            </HalfFlexCenter>
            <VoiceTextCol>
              <VoiceTitle>{t.voiceBookmark.title}</VoiceTitle>
              <VoiceDesc>{t.voiceBookmark.desc}</VoiceDesc>
            </VoiceTextCol>
          </FeatureRow>
        </DarkPadded>
      </SectionDark>

      <SectionWhite>
        <PaddedBlock>
          <PenTopRow>
            <Half>
              <PenLogo src={`${IMG}/penmanager-logo-500x131-1.png`} alt="Pen Manager" width={300} height={79} />
              <PenTitle>{t.penManager.title}</PenTitle>
              <PenDesc>{t.penManager.desc}</PenDesc>
              <SysReqLink href={SYS_REQ_URL} target="_blank" rel="noopener noreferrer">
                {t.penManager.sysReq}
              </SysReqLink>
              <IconRow>
                <a href={WIN_DOWNLOAD} target="_blank" rel="noopener noreferrer">
                  <SmallDlIcon src={`${IMG}/donwload_icon_windows.png`} alt="Windows" width={40} height={40} />
                </a>
                <a href={MAC_DOWNLOAD} target="_blank" rel="noopener noreferrer">
                  <SmallDlIcon src={`${IMG}/donwload_icon_mac.png`} alt="Mac" width={40} height={40} />
                </a>
              </IconRow>
            </Half>
            <Half>
              <ScreenshotImg src={`${IMG}/Pen_Manager_Slide_05-1.jpg`} alt="Pen Manager screenshot" width={540} height={414} />
            </Half>
          </PenTopRow>

          <HowToBlock>
            <HowToTitle>{t.penManager.howTo}</HowToTitle>
            <HowToDesc>{t.penManager.howToDesc}</HowToDesc>
          </HowToBlock>

          <StepsGrid>
            {[
              { img: "Pen_Manager_Slide_06_01-300x300-1.jpg", step: "step 1", text: t.penManager.step1 },
              { img: "Pen_Manager_Slide_06_02-1-300x300-1.jpg", step: "step 2", text: t.penManager.step2 },
              { img: "Pen_Manager_Slide_06_03-1-300x300-1.jpg", step: "step 3", text: t.penManager.step3 },
              { img: "Pen_Manager_Slide_06_04-300x300-1.jpg", step: "step 4", text: t.penManager.step4 },
            ].map((item) => (
              <StepCell key={item.step}>
                <StepImg src={`${IMG}/${item.img}`} alt={item.step} width={250} height={250} />
                <StepLabel>{item.step}</StepLabel>
                <StepText>{item.text}</StepText>
              </StepCell>
            ))}
          </StepsGrid>
        </PaddedBlock>
      </SectionWhite>

      <SectionGray>
        <PaddedBlock>
          <UseCaseTag>{t.useCases.tag1}</UseCaseTag>
          <UseCaseTitle>{t.useCases.useCase1}</UseCaseTitle>
          <UseCaseGrid>
            <UseCaseCell>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <GifImgUseCase src={`${IMG}/해외영업1.gif`} alt="Conference call" />
            </UseCaseCell>
            <UseCaseCell>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <GifImgUseCase src={`${IMG}/해외영업2.gif`} alt="Customer notes" />
            </UseCaseCell>
          </UseCaseGrid>
        </PaddedBlock>
      </SectionGray>

      <SectionWhite>
        <PaddedBlock>
          <SpecsGrid>
            {[
              { icon: `${IMG}/장점1.png`, title: t.specs.memory, desc: t.specs.memoryDesc },
              { icon: `${IMG}/장점2.png`, title: t.specs.quality, desc: t.specs.qualityDesc },
              { icon: `${IMG}/장점4.png`, title: t.specs.weight, desc: t.specs.weightDesc },
              { icon: `${IMG}/장점4.png`, title: t.specs.battery, desc: t.specs.batteryDesc },
            ].map((spec) => (
              <SpecCell key={spec.title}>
                <SpecIcon src={spec.icon} alt={spec.title} width={60} height={60} />
                <SpecTitle>{spec.title}</SpecTitle>
                <SpecDesc>{spec.desc}</SpecDesc>
              </SpecCell>
            ))}
          </SpecsGrid>
        </PaddedBlock>
      </SectionWhite>

      <CtaSection>
        <CtaRow>
          <CtaImageCol>
            <CtaProductImg
              src={`${IMG}/Pen_Manager_Slide_09_Transparent_Background-768x768-1.png`}
              alt="RECO product"
              width={400}
              height={400}
            />
          </CtaImageCol>
          <CtaTextCol>
            <CtaTitle>{t.purchase.title}</CtaTitle>
            <CtaDesc>{t.purchase.desc}</CtaDesc>
            <CtaButton
              href={
                lang === "ko"
                  ? "https://smartstore.naver.com/neosmartpen"
                  : lang === "ja"
                    ? "https://neosmartpenjp.com/"
                    : "https://shop.neosmartpen.com/"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.purchase.button}
            </CtaButton>
          </CtaTextCol>
        </CtaRow>
      </CtaSection>
    </>
  );
}

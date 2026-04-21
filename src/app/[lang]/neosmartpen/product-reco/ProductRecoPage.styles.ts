import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

const text = "#333";
const muted = "#666";
const teal = "#39d2cc";

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const HeroSection = styled.section`
  background: #1a1a1a;
  min-height: 600px;
`;

export const HeroInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroLogo = styled(Image)`
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const HeroEyebrow = styled.p`
  font-size: 14px;
  color: #aaa;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const HeroTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;

  ${media.lg} {
    font-size: 44px;
  }
`;

export const HeroDesc = styled.p`
  font-size: 15px;
  color: #ccc;
  line-height: 1.625;
  max-width: 600px;
  margin-bottom: 2.5rem;
`;

export const HeroProductImg = styled(Image)`
  object-fit: contain;
`;

export const DownloadSection = styled.section`
  background: #fff;
  min-height: 250px;
`;

export const DownloadInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 3.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
`;

export const DownloadTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: ${text};
  margin-bottom: 2rem;

  ${media.lg} {
    font-size: 26px;
  }
`;

export const DownloadRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
`;

export const DownloadLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.7;
  }
`;

export const DownloadIcon = styled(Image)`
  object-fit: contain;
`;

export const DownloadLabel = styled.span`
  font-size: 13px;
  color: ${text};
  font-weight: 500;
`;

export const SectionGray = styled.section`
  background: #f5f5f5;
`;

export const SectionWhite = styled.section`
  background: #fff;
`;

export const SectionDark = styled.section`
  background: #1a1a1a;
`;

export const DarkPadded = styled(Container)`
  padding: 6rem 1rem;
`;

export const PaddedBlock = styled(Container)`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const FeatureRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

/** 모바일: 이미지 먼저 · 데스크톱: 텍스트 왼쪽 */
export const RecoSplitRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const RecoTextAfterImageMobile = styled.div`
  width: 100%;
  order: 2;

  ${media.lg} {
    order: 1;
    width: 50%;
  }
`;

export const RecoImageBeforeTextMobile = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  justify-content: center;

  ${media.lg} {
    order: 2;
    width: 50%;
  }
`;

export const Half = styled.div`
  width: 100%;

  ${media.lg} {
    width: 50%;
  }
`;

export const HalfFlexCenter = styled(Half)`
  display: flex;
  justify-content: center;
`;

export const FeatureHeading = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${text};
  margin-bottom: 1rem;

  ${media.lg} {
    font-size: 26px;
  }
`;

export const Body = styled.p`
  font-size: 15px;
  color: ${muted};
  line-height: 1.625;
`;

export const GifImg = styled.img`
  width: 100%;
  max-width: 480px;
  object-fit: contain;
`;

export const GifImgRounded = styled(GifImg)`
  max-width: 460px;
  border-radius: 4px;
`;

export const GifImgUseCase = styled(GifImg)`
  max-width: 500px;
  border-radius: 4px;
`;

export const VoiceTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;

  ${media.lg} {
    font-size: 36px;
    text-align: left;
  }
`;

export const VoiceDesc = styled.p`
  font-size: 15px;
  color: #ccc;
  line-height: 1.625;
  text-align: center;

  ${media.lg} {
    text-align: left;
  }
`;

export const VoiceTextCol = styled(Half)`
  text-align: center;

  ${media.lg} {
    text-align: left;
  }
`;

export const PenTopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  margin-bottom: 4rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const PenLogo = styled(Image)`
  object-fit: contain;
  margin-bottom: 1.5rem;
`;

export const PenTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${text};
  margin-bottom: 0.75rem;
`;

export const PenDesc = styled(Body)`
  margin-bottom: 1rem;
`;

export const SysReqLink = styled.a`
  font-size: 13px;
  color: ${teal};

  &:hover {
    text-decoration: underline;
  }
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SmallDlIcon = styled(Image)`
  object-fit: contain;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.7;
  }
`;

export const ScreenshotImg = styled(Image)`
  width: 100%;
  object-fit: contain;
  border-radius: 4px;
`;

export const HowToBlock = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const HowToTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${text};
  margin-bottom: 0.5rem;
`;

export const HowToDesc = styled.p`
  font-size: 14px;
  color: ${muted};
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const StepCell = styled.div`
  text-align: center;
`;

export const StepImg = styled(Image)`
  width: 100%;
  object-fit: contain;
  margin-bottom: 0.75rem;
`;

export const StepLabel = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${teal};
  margin-bottom: 0.25rem;
`;

export const StepText = styled.p`
  font-size: 13px;
  color: ${muted};
  line-height: 1.625;
`;

export const UseCaseTag = styled.p`
  font-size: 14px;
  color: ${teal};
  margin-bottom: 1rem;
  text-align: center;
`;

export const UseCaseTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${text};
  margin-bottom: 3rem;
  text-align: center;

  ${media.lg} {
    font-size: 28px;
  }
`;

export const UseCaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const UseCaseCell = styled.div`
  display: flex;
  justify-content: center;
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const SpecCell = styled.div`
  text-align: center;
`;

export const SpecIcon = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  object-fit: contain;
`;

export const SpecTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: ${text};
  margin-bottom: 0.5rem;
`;

export const SpecDesc = styled.p`
  font-size: 13px;
  color: ${muted};
  line-height: 1.625;
`;

export const CtaSection = styled.section`
  background: #f5f5f5;
`;

export const CtaRow = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const CtaImageCol = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${media.lg} {
    width: 50%;
  }
`;

export const CtaProductImg = styled(Image)`
  object-fit: contain;
`;

export const CtaTextCol = styled.div`
  width: 100%;
  text-align: center;

  ${media.lg} {
    width: 50%;
    text-align: left;
  }
`;

export const CtaTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${text};
  margin-bottom: 1rem;

  ${media.lg} {
    font-size: 28px;
  }
`;

export const CtaDesc = styled.p`
  font-size: 15px;
  color: ${muted};
  line-height: 1.625;
  margin-bottom: 1.5rem;
`;

export const CtaButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #333;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  transition: background 0.15s;

  &:hover {
    background: #555;
  }
`;

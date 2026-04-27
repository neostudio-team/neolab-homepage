import styled from "styled-components";
import { media } from "@/styles/theme";

/* Brand purple */
const PURPLE = "#b766fa";

/* ── Intro contents ─────────────────────────────── */
export const IntroContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 80px);
  width: 100%;
`;

export const UseCaseRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

export const UseCaseCard = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  padding: clamp(24px, 3vw, 48px);
  border: 1px solid #ddd;
  border-radius: 16px;
  background: #fff;
`;

export const UseCaseTitle = styled.p`
  font-size: clamp(18px, 1.5vw, 24px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
`;

export const UseCaseDesc = styled.p`
  font-size: clamp(13px, 1.1vw, 20px);
  color: #111;
  line-height: normal;
  white-space: pre-wrap;
`;

export const UseCaseNote = styled.p`
  font-size: clamp(11px, 0.9vw, 14px);
  color: #757575;
  letter-spacing: 0.25px;
`;

export const IntroCta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const GridaBoardStartBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 32px;
  background: #111;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`;

export const StartBtnLabel = styled.span`
  font-size: clamp(16px, 1.3vw, 24px);
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.005em;
  white-space: nowrap;
`;

export const StartBtnCircle = styled.div`
  position: relative;
  width: 79px;
  height: 79px;
  border-radius: 50%;
  border: 1px solid #fff;
  flex-shrink: 0;
`;

export const StartBtnCircleText = styled.span`
  position: absolute;
  left: 9px;
  top: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
`;

export const StartBtnArrow = styled.img`
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 16px;
`;

export const IntroNote = styled.p`
  font-size: clamp(12px, 1vw, 16px);
  color: #757575;
  text-align: center;
`;

export const ScreenshotWrap = styled.div`
  width: clamp(400px, 67%, 1083px);
  aspect-ratio: 1083 / 608;
  border-radius: 16px;
  overflow: hidden;
  align-self: center;
  ${media.md} {
    width: 100%;
  }
`;

export const ScreenshotImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

/* ── Steps (사용법) ─────────────────────────────── */
export const StepsRow = styled.div`
  display: flex;
  gap: clamp(20px, 3vw, 40px);
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: clamp(200px, 20vw, 320px);
`;

export const StepImgWrap = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  flex-shrink: 0;
  overflow: hidden;
`;

export const StepCircleBg = styled.img`
  position: absolute;
  inset: 12.5% 10.94% 12.5% 14.06%;
  width: auto;
  height: auto;
`;

export const StepMainImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const StepTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
`;

export const StepNum = styled.p`
  font-size: clamp(24px, 2vw, 32px);
  font-weight: 700;
  color: ${PURPLE};
  line-height: normal;
  letter-spacing: 0.25px;
`;

export const StepDesc = styled.p`
  font-size: clamp(14px, 1.1vw, 18px);
  color: #111;
  line-height: normal;
  letter-spacing: 0.25px;

  strong {
    color: ${PURPLE};
    font-weight: 700;
  }
`;

export const VideoWrap = styled.div`
  width: clamp(400px, 67%, 1083px);
  aspect-ratio: 1083 / 611;
  border-radius: 16px;
  overflow: hidden;
  align-self: center;
  ${media.md} {
    width: 100%;
  }
`;

export const VideoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

/* ── Controller section ─────────────────────────── */
export const ControllerBox = styled.div`
  display: flex;
  gap: clamp(24px, 5vw, 80px);
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #fff;
  border-radius: 8px;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

export const ControllerImgWrap = styled.div`
  flex-shrink: 0;
  width: clamp(200px, 30%, 566px);
  aspect-ratio: 566 / 747;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const ControllerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ControllerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const ControllerHead = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ControllerIconImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const ControllerTitle = styled.p`
  font-size: clamp(24px, 2.5vw, 40px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

export const ControllerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ControllerRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ControllerBadge = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${PURPLE};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 18px;
  color: #fff;
  line-height: 1.4;
`;

export const ControllerKey = styled.p`
  font-size: clamp(14px, 1.1vw, 20px);
  font-weight: 600;
  color: #000;
  white-space: nowrap;
`;

export const ControllerVal = styled.p`
  font-size: clamp(14px, 1.1vw, 20px);
  color: #000;
  white-space: nowrap;
`;

export const ControllerBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DownloadBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  background: #111;
  border-radius: 8px;
  max-width: clamp(240px, 25vw, 386px);
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.85; }
`;

export const DownloadBtnLabel = styled.span`
  font-size: clamp(14px, 1.3vw, 24px);
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.005em;
  white-space: nowrap;
`;

export const DownloadNote = styled.p`
  font-size: clamp(11px, 0.9vw, 14px);
  color: #757575;
  line-height: 1.4;
`;

/* ── Bottom CTA ─────────────────────────────────── */
export const CtaInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
  max-width: 1080px;
  padding: 0 16px;
`;

export const CtaLogo = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const CtaTitle = styled.p`
  font-size: clamp(24px, 2.5vw, 40px);
  font-weight: 700;
  color: #333;
  line-height: 54px;
`;

export const CtaDesc = styled.p`
  font-size: clamp(14px, 1.3vw, 24px);
  color: #111;
  line-height: 1.4;
`;

export const CtaBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 79px;
  min-width: clamp(200px, 22vw, 350px);
  padding: 0 32px;
  background: ${PURPLE};
  border-radius: 8px;
  font-size: clamp(14px, 1.3vw, 20px);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

export const CtaArrow = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

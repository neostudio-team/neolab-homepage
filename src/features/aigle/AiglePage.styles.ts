import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Intro two-column ───────────────────────────── */
export const IntroTwoCol = styled.div`
  display: flex;
  gap: clamp(32px, 5vw, 80px);
  align-items: flex-start;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

/* Modal screenshots area */
export const ModalArea = styled.div`
  flex-shrink: 0;
  width: 52%;
  ${media.md} {
    width: 100%;
  }
`;

export const ModalWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 838 / 545;
  overflow: hidden;
`;

export const ModalImg = styled.img<{
  $left: string; $top: string; $width: string;
}>`
  position: absolute;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  width: ${({ $width }) => $width};
  height: auto;
  border-radius: clamp(8px, 1vw, 16px);
  box-shadow: 0 0 12px rgba(0,0,0,0.15);
`;

/* Intro right column */
export const IntroRight = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const IntroAboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IntroLabel = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.75rem);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
`;

export const IntroDesc = styled.p`
  font-size: clamp(0.875rem, 1.1vw, 1.25rem);
  color: #000;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const IntroHighlight = styled.div`
  border-left: 4px solid #3880ef;
  padding: 4px 0 4px 24px;
`;

export const IntroHighlightText = styled.p`
  font-size: clamp(0.875rem, 1vw, 1.125rem);
  color: #757575;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const BlueCta = styled.a`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 32px;
  max-width: clamp(240px, 20vw, 386px);
  background: #3880ef;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

export const BlueCtaLabel = styled.span`
  font-size: clamp(16px, 1.3vw, 24px);
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.005em;
  white-space: nowrap;
  flex: 1;
`;

export const BlueCtaCircle = styled.div`
  position: relative;
  width: 79px;
  height: 79px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid #fff;
`;

export const BlueCtaCircleText = styled.span`
  position: absolute;
  left: 9px;
  top: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
`;

export const BlueCtaArrow = styled.img`
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
  width: 25px;
  height: 16px;
`;

/* ── Feature cards ──────────────────────────────── */
export const FeatureCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  ${media.md} {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 1px 2px -1px rgba(0,0,0,0.1);
`;

export const FeatureIconImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const FeatureTitle = styled.h3`
  font-size: clamp(18px, 1.5vw, 28px);
  font-weight: 700;
  color: #111;
  line-height: 1.4;
`;

export const FeatureDesc = styled.p`
  font-size: clamp(13px, 1.1vw, 20px);
  color: #111;
  line-height: 1.4;
  white-space: pre-line;
`;

/* ── Process section ────────────────────────────── */
export const ProcessFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const ProcessStepsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 clamp(40px, 10vw, 171px);
`;

export const StepCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #bbd8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: clamp(18px, 1.5vw, 24px);
  font-weight: 700;
  color: #111;
`;

export const StepLine = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(187, 216, 255, 0.3);
`;

export const ProcessTextsRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  ${media.md} {
    flex-direction: column;
    gap: 24px;
  }
`;

export const StepTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  text-align: center;
  width: clamp(220px, 28vw, 430px);
  padding: 0 clamp(16px, 2.5vw, 40px);
  color: #fff;
`;

export const StepTitle = styled.p`
  font-size: clamp(16px, 1.5vw, 28px);
  font-weight: 700;
  line-height: 1.4;
`;

export const StepDesc = styled.p`
  font-size: clamp(13px, 1.1vw, 20px);
  line-height: 1.4;
`;

/* Usage table */
export const UsageTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #fff;
`;

export const UsageTh = styled.th`
  background: rgba(245, 247, 250, 0.1);
  border: 1px solid rgba(181,181,181,0.5);
  padding: clamp(12px, 1.5vw, 16px) clamp(16px, 2vw, 24px);
  font-size: clamp(14px, 1.1vw, 20px);
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  width: 260px;
`;

export const UsageTd = styled.td`
  border: 1px solid rgba(181,181,181,0.5);
  padding: clamp(12px, 1.5vw, 16px) clamp(16px, 2vw, 24px);
  font-size: clamp(14px, 1.1vw, 20px);
  text-align: center;
`;

/* ── Pricing ────────────────────────────────────── */
export const PricingWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
`;

export const PricingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  font-size: clamp(13px, 1vw, 18px);
`;

export const PTh = styled.th<{ $bg?: string }>`
  background: ${({ $bg }) => $bg ?? "#fcfcfc"};
  border: 1px solid #ddd;
  padding: clamp(10px, 1vw, 17px) clamp(12px, 1.3vw, 25px);
  text-align: center;
  font-weight: 600;
  color: #111;
  white-space: nowrap;
`;

export const PTd = styled.td<{ $strong?: boolean; $blue?: boolean }>`
  border: 1px solid #ddd;
  padding: clamp(10px, 1vw, 17px) clamp(12px, 1.3vw, 25px);
  text-align: center;
  font-weight: ${({ $strong }) => ($strong ? 700 : 400)};
  color: ${({ $blue }) => ($blue ? "#3880ef" : "#111")};
  background: #fff;
`;

export const PricingNotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: clamp(12px, 0.9vw, 14px);
  color: #757575;
`;

export const PricingTwoCol = styled.div`
  display: flex;
  gap: clamp(32px, 5vw, 80px);
  align-items: flex-start;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

export const MiniTableWrap = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
`;

export const MiniTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: clamp(13px, 1vw, 18px);
`;

export const MiniTh = styled.th`
  background: #0f2235;
  color: #fff;
  border-right: 1px solid #ddd;
  padding: clamp(10px, 1vw, 16px) clamp(12px, 1.3vw, 24px);
  text-align: center;
  font-weight: 600;
  &:last-child { border-right: none; }
`;

export const MiniTd = styled.td<{ $strong?: boolean }>`
  border-top: 1px solid #f3f4f6;
  border-right: 1px solid #ddd;
  padding: clamp(8px, 0.8vw, 10.5px) clamp(12px, 1.3vw, 17px);
  text-align: center;
  font-weight: ${({ $strong }) => ($strong ? 600 : 400)};
  color: ${({ $strong }) => ($strong ? "#101828" : "#4a5565")};
  background: #fff;
  &:last-child { border-right: none; }
`;

export const PricingSubHead = styled.p`
  font-size: clamp(16px, 1.3vw, 24px);
  font-weight: 700;
  color: #111;
  line-height: 1.4;
`;

export const PricingSubDesc = styled.p`
  font-size: clamp(13px, 1vw, 18px);
  color: #111;
  line-height: 1.4;
`;

export const S2BBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 79px;
  background: #3880ef;
  border-radius: 8px;
  font-size: clamp(14px, 1.3vw, 20px);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

/* ── Bottom CTA section ─────────────────────────── */
export const CtaInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  max-width: 700px;
  padding: 0 24px;
`;

export const CtaHeadingGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const CtaTitle = styled.h2`
  font-size: clamp(24px, 2.5vw, 40px);
  font-weight: 700;
  color: #111;
  line-height: 1.4;
`;

export const CtaDesc = styled.p`
  font-size: clamp(14px, 1.3vw, 24px);
  color: #111;
  line-height: 1.4;
`;

export const CtaBtnRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CtaBtnBlue = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 80px;
  width: clamp(200px, 22vw, 350px);
  background: #3880ef;
  border-radius: 8px;
  font-size: clamp(14px, 1.3vw, 20px);
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover { opacity: 0.88; }
`;

export const CtaBtnOutline = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 80px;
  width: clamp(200px, 22vw, 350px);
  border: 1px solid #111;
  border-radius: 8px;
  font-size: clamp(14px, 1.3vw, 20px);
  font-weight: 600;
  color: #111;
  text-decoration: none;
  transition: background 0.2s;
  &:hover { background: rgba(0,0,0,0.04); }
`;

export const ArrowImg = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

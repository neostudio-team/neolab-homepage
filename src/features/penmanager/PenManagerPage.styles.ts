import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

/* ──────────────────────────────────────────────────
 * Intro contents — passed into <RevealHeadingBody contents>.
 * Two-column layout: large screenshot on the left, download/help card on the right.
 * Stacks on mobile.
 * ────────────────────────────────────────────────── */
export const IntroLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 60px);
  align-items: stretch;
  width: 100%;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const IntroLeft = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroScreenshot = styled.img`
  width: 100%;
  max-width: 790px;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const IntroRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2.5vw, 32px);
  flex-shrink: 0;
  width: 100%;

  ${media.lg} {
    width: clamp(440px, 36%, 690px);
  }
`;

export const DownloadCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: clamp(24px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2.5vw, 32px);
`;

export const HelpCard = styled(DownloadCard)`
  gap: clamp(16px, 2vw, 24px);
`;

export const PenManagerLogo = styled.img`
  width: clamp(180px, 18vw, 290px);
  height: auto;
  object-fit: contain;
  display: block;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardHeaderTitle = styled.h3`
  margin: 0;
  font-size: clamp(18px, 1.7vw, 24px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1.4;
`;

export const DownloadBtnRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${media.sm} {
    flex-direction: row;
    gap: 16px;
  }
`;

export const DownloadOsBtn = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: clamp(14px, 1.6vw, 20px) clamp(20px, 2vw, 28px);
  background: #111;
  border-radius: 8px;
  color: #fff;
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  svg {
    width: clamp(20px, 1.6vw, 24px);
    height: auto;
    flex-shrink: 0;
  }
`;

export const SystemReqLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 500;
  color: #757575;
  text-decoration: none;
  letter-spacing: -0.005em;
  align-self: flex-start;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #111;
  }

  svg {
    width: clamp(14px, 1.2vw, 16px);
    height: auto;
    flex-shrink: 0;
  }
`;

export const HelpLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: clamp(16px, 1.8vw, 24px) clamp(20px, 2vw, 28px);
  background: transparent;
  border: 1px solid #111;
  border-radius: 8px;
  color: #111;
  font-size: clamp(14px, 1.2vw, 20px);
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  svg {
    width: clamp(20px, 1.7vw, 28px);
    height: auto;
    flex-shrink: 0;
  }
`;

export const SupportedNote = styled.p`
  margin: 16px 0 0;
  font-size: clamp(12px, 1vw, 16px);
  color: #757575;
  line-height: 1.4;
  letter-spacing: -0.005em;
  text-align: center;

  ${media.lg} {
    text-align: left;
  }
`;

/* ──────────────────────────────────────────────────
 * 핵심 기능 — 2-card row inside <Section>.
 * Each card: image on top + title + description.
 * ────────────────────────────────────────────────── */
export const FeatureCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;

  ${media.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: clamp(16px, 1.5vw, 24px);
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2.5vw, 32px);
  padding: clamp(20px, 2.5vw, 32px);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  overflow: hidden;
`;

export const FeatureImg = styled.img`
  width: 100%;
  max-width: 550px;
  aspect-ratio: 550 / 420;
  align-self: center;
  object-fit: contain;
  display: block;
`;

export const FeatureBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 16px);
`;

export const FeatureTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1.2;
`;

export const FeatureDesc = styled.p`
  margin: 0;
  font-size: clamp(14px, 1.2vw, 20px);
  color: #111;
  line-height: 1.4;
  white-space: pre-line;
`;

export const FeatureSubDesc = styled.p`
  margin: 0;
  font-size: clamp(12px, 1vw, 16px);
  color: #757575;
  line-height: 1.4;
  letter-spacing: -0.005em;
  white-space: pre-line;
`;

/* ──────────────────────────────────────────────────
 * 연동 서비스 — service card with thumbnail + content + CTA
 * ────────────────────────────────────────────────── */
export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3vw, 40px);
  padding: clamp(24px, 3vw, 40px);
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  align-self: center;

  ${media.lg} {
    flex-direction: row;
    align-items: center;
    gap: clamp(40px, 5vw, 80px);
  }
`;

export const ServiceImg = styled.img`
  width: 100%;
  max-width: 520px;
  aspect-ratio: 520 / 314;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  display: block;
`;

export const ServiceBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 32px);
  width: 100%;
`;

export const ServiceTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1.2;
`;

export const ServiceDesc = styled.p`
  margin: 0;
  font-size: clamp(14px, 1.3vw, 20px);
  color: #111;
  line-height: 1.4;
  letter-spacing: -0.005em;
`;

import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

/* ──────────────────────────────────────────────────
 * Intro hero card — passed into <RevealHeadingBody contents>.
 * Full-width image with overlay text + CTA button on the left.
 * ────────────────────────────────────────────────── */
export const IntroCard = styled.div`
  position: relative;
  width: 100%;
  min-height: clamp(360px, 36vw, 600px);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  isolation: isolate;
`;

export const IntroBgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
`;

export const IntroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0.15) 100%
  );
  z-index: 1;
  pointer-events: none;
`;

export const IntroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3vw, 40px);
  padding: clamp(32px, 5vw, 80px);
  width: 100%;
  max-width: 700px;
  color: #fff;
`;

export const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 16px);
`;

export const IntroTitle = styled.h3`
  margin: 0;
  font-size: clamp(24px, 2.6vw, 40px);
  font-weight: 700;
  letter-spacing: -0.005em;
  line-height: 1.3;
`;

export const IntroDesc = styled.p`
  margin: 0;
  font-size: clamp(14px, 1.3vw, 20px);
  line-height: 1.5;
  white-space: pre-line;
`;

/* ──────────────────────────────────────────────────
 * Partnership / Event sections — category title + grid of cards
 * ────────────────────────────────────────────────── */
export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(20px, 2.5vw, 32px);
  width: 100%;
`;

export const SubsectionTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2vw, 32px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1.4;
`;

/* 4-column responsive grid for partner cards (398×398 in Figma) */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 1.5vw, 20px);
  width: 100%;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

/* 3-column grid for event cards (525×525 in Figma) */
export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 2vw, 24px);
  width: 100%;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

/* ──────────────────────────────────────────────────
 * Partner card — square card with logo image fill + label below
 * (Hover: subtle lift)
 * ────────────────────────────────────────────────── */
export const PartnerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const PartnerImg = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
`;

export const PartnerLabel = styled.p`
  margin: 0;
  padding: clamp(12px, 1.2vw, 16px) clamp(12px, 1.5vw, 20px);
  font-size: clamp(14px, 1.2vw, 18px);
  font-weight: 600;
  color: #111;
  text-align: center;
  letter-spacing: -0.005em;
  background: #fff;
  border-top: 1px solid #f0f0f0;
`;

/* ──────────────────────────────────────────────────
 * Event card — same as PartnerCard but with dark gradient overlay
 * + title + description on top of image (525×525 + content area)
 * ────────────────────────────────────────────────── */
export const EventCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  isolation: isolate;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
  }
`;

export const EventImgWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 525 / 525;
  overflow: hidden;
`;

export const EventImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: 0;
`;

export const EventImgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 1;
  pointer-events: none;
`;

export const EventBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1vw, 12px);
  padding: clamp(20px, 2vw, 32px);
`;

export const EventTitle = styled.h4`
  margin: 0;
  font-size: clamp(18px, 1.7vw, 24px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1.3;
`;

export const EventDesc = styled.p`
  margin: 0;
  font-size: clamp(13px, 1.1vw, 16px);
  color: #555;
  line-height: 1.55;
  white-space: pre-line;
  letter-spacing: -0.005em;
`;

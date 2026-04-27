import styled from "styled-components";
import Link from "next/link";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

/**
 * Intro image — used as `contents` slot in `<RevealHeadingBody>`.
 * The CI/BI page passes nothing into `contents`; Tech passes this image
 * to mirror the Figma 63:2693 reference card layout.
 */
export const IntroImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
  border-radius: 16px;
  background: #f8f8f8;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`;

/* ──────────────────────────────────────────────────
 * Tab content — Ncode / Printing / Smart Pen
 * Two-column layout: image on the left, feature cards on the right.
 * ────────────────────────────────────────────────── */
export const TwoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 5vw, 80px);
  align-items: stretch;
  width: 100%;

  ${media.lg} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const TwoColCenter = styled(TwoCol)`
  ${media.lg} {
    align-items: center;
  }
`;

/* Ncode diagram (only used on the Ncode tab) */
export const NcodeDiagramWrap = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;

  ${media.lg} {
    width: 56%;
  }
`;

export const NcodeMainImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

/* Printing / Smart Pen left image */
export const TabImgWrap = styled.div`
  flex: 1;
  min-width: 0;
  width: 100%;
  padding: 0;

  ${media.lg} {
    padding: 0 clamp(0px, 5vw, 80px);
  }
`;

export const TabMainImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

/* Feature cards (right column) */
export const CardsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-width: 0;
  width: 100%;
  align-self: stretch;
`;

export const FeatureCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: clamp(24px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 24px);
  flex: 1;
`;

export const FeatureIconImg = styled.img<{ $size?: number }>`
  width: clamp(48px, 5vw, ${({ $size }) => $size ?? 70}px);
  height: clamp(48px, 5vw, ${({ $size }) => $size ?? 70}px);
  object-fit: contain;
  flex-shrink: 0;
`;

export const FeatureTitle = styled.h4`
  margin: 0 0 8px;
  font-size: clamp(18px, 1.8vw, 28px);
  font-weight: 700;
  color: #111;
  line-height: 1.3;
`;

export const FeatureDesc = styled.p`
  margin: 0;
  font-size: clamp(13px, 1.1vw, 20px);
  color: #111;
  line-height: 1.4;
  white-space: pre-line;
`;

/* ──────────────────────────────────────────────────
 * 응용 분야 — content cards rendered inside <Section>
 * ────────────────────────────────────────────────── */
export const AppCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  ${media.md} {
    flex-direction: row;
  }
`;

/**
 * Card is a clickable link.
 *
 *  • Below `lg` (Figma 852:1377): bg image + dark bottom panel with full content
 *    (title + description + "바로가기 →"). No hover overlay.
 *  • From `lg` (Figma 410:2624): bg image + dark bottom panel with **title only**;
 *    on hover the orange flood overlay covers the card and reveals title +
 *    description + circular "바로가기" CTA.
 */
export const AppCard = styled(Link)`
  flex: 1;
  min-width: 0;
  /* Below lg the card holds title + 3-line desc + CTA in the dark panel,
   * so we need a taller minimum. From lg+ the desc/CTA collapse out and
   * the card scales up to the Figma 500px size. */
  height: clamp(360px, 32vw, 500px);
  position: relative;
  border: 1px solid #ddd;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  isolation: isolate;

  ${media.lg} {
    &:hover .app-card-overlay {
      opacity: 1;
    }
    &:hover .app-card-label {
      opacity: 0;
    }
  }
`;

export const AppCardBgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: 0;
`;

/* Bottom panel (visible by default on every breakpoint). */
export const AppCardLabel = styled.div.attrs({ className: "app-card-label" })`
  position: relative;
  z-index: 1;
  background: rgba(17, 17, 17, 0.5);
  backdrop-filter: blur(8px);
  padding: clamp(16px, 2vw, 24px) clamp(20px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: clamp(6px, 0.8vw, 8px);
  color: #fff;
  transition: opacity 0.3s ease;
`;

export const AppCardLabelTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2.4vw, 32px);
  font-weight: 600;
  letter-spacing: -0.16px;
  line-height: 1.2;
`;

/* Description shown only below lg (replaced by hover overlay on desktop). */
export const AppCardLabelDesc = styled.p`
  margin: 0;
  font-size: clamp(13px, 1.5vw, 20px);
  font-weight: 400;
  line-height: 1.4;

  ${media.lg} {
    display: none;
  }
`;

/* Inline "바로가기 →" link, only below lg. */
export const AppCardLabelCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: clamp(4px, 0.8vw, 8px);
  font-size: clamp(13px, 1.1vw, 16px);
  font-weight: 600;

  svg {
    width: clamp(20px, 1.7vw, 25px);
    height: auto;
    flex-shrink: 0;
  }

  ${media.lg} {
    display: none;
  }
`;

/**
 * Hover overlay (Figma 410:2624): orange flood + title + desc + circular CTA.
 * Only mounted/visible on `lg`+ — below lg it's display:none and the dark
 * bottom panel carries the same content.
 */
export const AppCardOverlay = styled.div.attrs({ className: "app-card-overlay" })`
  display: none;

  ${media.lg} {
    position: absolute;
    inset: 0;
    z-index: 2;
    background: rgba(255, 153, 0, 0.85);
    backdrop-filter: blur(12px);
    padding: clamp(24px, 3vw, 40px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: clamp(20px, 2.5vw, 24px);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    color: #fff;
  }
`;

export const AppCardOverlayBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 24px);
`;

export const AppCardOverlayTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2.4vw, 32px);
  font-weight: 600;
  letter-spacing: -0.16px;
  line-height: 1.2;
`;

export const AppCardOverlayDesc = styled.p`
  margin: 0;
  font-size: clamp(13px, 1.3vw, 20px);
  font-weight: 400;
  line-height: 1.4;
  white-space: pre-line;
`;

/**
 * Circular CTA matching Figma 410:2624 — 79px ring with "바로가기" text inside
 * the left half and an arrow that protrudes past the right edge of the ring.
 *
 *   ┌──────────┐
 *   │  바로가기  │ →
 *   └──────────┘
 */
export const AppCardCta = styled.span`
  position: relative;
  flex-shrink: 0;
  align-self: flex-start;
  width: clamp(60px, 6vw, 79px);
  height: clamp(60px, 6vw, 79px);
  /* extra room on the right so the arrow can stick out without clipping */
  margin-right: clamp(18px, 2vw, 24px);

  /* The ring */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  /* "바로가기" — anchored to the left half of the ring */
  span {
    position: absolute;
    left: 11%;
    top: 50%;
    transform: translateY(-50%);
    font-size: clamp(13px, 1.1vw, 16px);
    font-weight: 600;
    color: #fff;
    white-space: nowrap;
    letter-spacing: -0.01em;
  }

  /* Arrow — anchored near the right edge so it visually extends past the ring */
  svg {
    position: absolute;
    left: 87%;
    top: 50%;
    transform: translateY(-50%);
    width: clamp(20px, 1.7vw, 25px);
    height: auto;
    color: #fff;
  }
`;

/* ──────────────────────────────────────────────────
 * Developer section — dark CTA strip with bg image
 * ────────────────────────────────────────────────── */
export const DevSection = styled.section`
  position: relative;
  padding: clamp(60px, 10vw, 140px) clamp(24px, 8vw, 120px);
  background-color: #101324;
  background-image:
    linear-gradient(rgba(16, 19, 36, 0.55), rgba(16, 19, 36, 0.55)),
    url("/images/technology/dev-bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  overflow: hidden;
  min-height: 360px;

  ${media.lg} {
    background-attachment: fixed;
  }

  @media (prefers-reduced-motion: reduce) {
    background-attachment: scroll;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  gap: 8px;
`;

export const DevTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
`;

export const DevDesc = styled.p`
  font-size: clamp(1rem, 1.3vw, 1.5rem);
`;

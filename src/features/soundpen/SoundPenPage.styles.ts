import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

/* ──────────────────────────────────────────────────
 * Intro CTA row — passed into <RevealHeadingBody contents>.
 * Layout: [팝펜 팩토리 button] [main product image] [팝펜 공식몰 button]
 * Stacks on mobile.
 * ────────────────────────────────────────────────── */
export const CtaRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 5vw, 80px);
  align-items: center;
  justify-content: center;
  width: 100%;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const CtaCard = styled.a<{ $filled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 32px;
  width: 100%;
  max-width: 386px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  order: ${({ $filled }) => ($filled ? 2 : 1)};

  ${({ $filled }) =>
    $filled
      ? `background: #FF9900; border: 2px solid #FF9900;`
      : `background: transparent; border: 2px solid #FF9900; backdrop-filter: blur(12px);`}

  ${media.lg} {
    order: ${({ $filled }) => ($filled ? 3 : 1)};
  }
`;

export const CtaLabel = styled.span<{ $filled?: boolean }>`
  flex: 1;
  font-size: clamp(16px, 1.3vw, 24px);
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
  color: ${({ $filled }) => ($filled ? "#fff" : "#FF9900")};
`;

/**
 * Circular CTA matching Figma 51:2068 — same ring-with-protruding-arrow pattern
 * as Tech `AppCardCta`, but colored per `$filled` (orange-on-transparent or
 * white-on-orange).
 */
export const CtaCircle = styled.span<{ $filled?: boolean }>`
  position: relative;
  flex-shrink: 0;
  width: clamp(60px, 6vw, 79px);
  height: clamp(60px, 6vw, 79px);
  margin-right: clamp(18px, 2vw, 24px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid ${({ $filled }) => ($filled ? "#fff" : "#FF9900")};
    border-radius: 50%;
  }

  span {
    position: absolute;
    left: 11%;
    top: 50%;
    transform: translateY(-50%);
    font-size: clamp(13px, 1.1vw, 16px);
    font-weight: 600;
    color: ${({ $filled }) => ($filled ? "#fff" : "#FF9900")};
    white-space: nowrap;
    letter-spacing: -0.01em;
  }

  svg {
    position: absolute;
    left: 87%;
    top: 50%;
    transform: translateY(-50%);
    width: clamp(20px, 1.7vw, 25px);
    height: auto;
    color: ${({ $filled }) => ($filled ? "#fff" : "#FF9900")};
  }
`;

export const CtaProductImg = styled.img`
  width: clamp(220px, 26vw, 500px);
  height: clamp(220px, 26vw, 500px);
  object-fit: contain;
  flex-shrink: 0;
  order: 3;

  ${media.lg} {
    order: 2;
  }
`;

/* ──────────────────────────────────────────────────
 * 라인업 — 4-card row inside <Section>.
 * Stacks on mobile, side-by-side from md.
 * ────────────────────────────────────────────────── */
export const LineupCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  width: 100%;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const LineupCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: clamp(20px, 3vw, 32px);
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 24px);
  align-items: center;
  overflow: hidden;
`;

export const LineupCardImg = styled.img`
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  object-fit: contain;
`;

export const LineupCardName = styled.p`
  margin: 0;
  font-size: clamp(18px, 2vw, 32px);
  font-weight: 600;
  color: #111;
  letter-spacing: -0.005em;
  white-space: nowrap;
`;

/* ──────────────────────────────────────────────────
 * 스티커 & 패밀리 도서 — tab UI (3 vertical tabs + content panel).
 * ────────────────────────────────────────────────── */
export const StickerTabsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: stretch;
  width: 100%;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  width: 100%;

  ${media.lg} {
    width: clamp(280px, 33%, 641px);
    justify-content: center;
  }
`;

export const StickerTabBtn = styled.button<{ $active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: clamp(16px, 1.8vw, 32px);
  font-weight: 600;
  letter-spacing: -0.005em;
  padding: clamp(20px, 2.5vw, 32px);
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
  white-space: nowrap;

  ${({ $active }) =>
    $active
      ? `
    background: #FF9900;
    color: #fff;
    border: none;
    border-radius: 16px;
  `
      : `
    background: #fff;
    color: #111;
    border: 1px solid #ddd;
    border-radius: 16px;
  `}

  /* On lg+ the active tab "merges" with the panel: left side rounded,
   * right side flat, and extends past the parent to cover the gap so it
   * sits flush against the panel's orange border. */
  ${media.lg} {
    ${({ $active }) =>
      $active &&
      `
      border-radius: 16px 0 0 16px;
      width: calc(100% + 16px);
      margin-right: -16px;
      position: relative;
      z-index: 1;
    `}
  }
`;

export const StickerPanel = styled.div<{ $activeIdx: number }>`
  flex: 1;
  min-width: 0;
  background: #fff;
  border: 4px solid #ff9900;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.5vw, 24px);
  align-items: stretch;
  padding: clamp(24px, 3vw, 40px);
  border-radius: 16px;

  ${media.lg} {
    flex-direction: row;
    align-items: center;
    height: clamp(420px, 35vw, 536px);
    border-radius: ${({ $activeIdx }) =>
      $activeIdx === 0
        ? "0 16px 16px 16px"
        : $activeIdx === 1
          ? "16px"
          : "16px 16px 16px 0"
    };
        
  }
`;

export const StickerPanelImg = styled.div`
  flex-shrink: 0;
  width: 100%;
  aspect-ratio: 344 / 431;
  position: relative;
  overflow: hidden;

  ${media.lg} {
    width: clamp(180px, 22vw, 344px);
    height: auto;
    aspect-ratio: 344 / 431;
  }
`;

export const StickerPanelContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 24px);
`;

export const StickerPanelTitle = styled.h3`
  margin: 0;
  font-size: clamp(20px, 2vw, 28px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: 1.2;
`;

export const StickerPanelDesc = styled.p`
  margin: 0;
  font-size: clamp(14px, 1.2vw, 20px);
  color: #111;
  line-height: 1.4;
  letter-spacing: -0.005em;
`;

export const StickerBulletList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`;

export const StickerBulletItem = styled.li`
  display: flex;
  gap: 8px;
  font-size: clamp(14px, 1.2vw, 20px);
  color: #111;
  line-height: 1.4;
  letter-spacing: -0.005em;

  &::before {
    content: "•";
    flex-shrink: 0;
  }
`;

export const StickerBulletTitle = styled.strong`
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
`;

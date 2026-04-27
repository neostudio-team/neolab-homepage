import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Hero ───────────────────────────────────────── */
export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 50vw;
  max-height: 950px;
  min-height: 320px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroBgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const HeroTitle = styled.h1`
  position: relative;
  z-index: 1;
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(48px, 7vw, 100px);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
`;

/* ── Intro section ──────────────────────────────── */
export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: clamp(60px, 6vw, 120px);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: clamp(60px, 10vw, 200px) clamp(24px, 7vw, 140px);
`;

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-self: flex-start;
  width: 100%;
`;

export const IntroTitle = styled.h2`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(32px, 5vw, 80px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

export const IntroDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.5vw, 28px);
  font-weight: 500;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.6;
`;

/* CTA row */
export const CtaRow = styled.div`
  display: flex;
  gap: clamp(24px, 5vw, 80px);
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export const CtaCard = styled.a<{ $filled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 32px;
  width: clamp(240px, 20vw, 386px);
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.85;
  }
  ${({ $filled }) =>
    $filled
      ? `background: #FF9900; border: none;`
      : `background: transparent; border: 2px solid #FF9900; backdrop-filter: blur(12px);`}
`;

export const CtaLabel = styled.span<{ $filled?: boolean }>`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(16px, 1.3vw, 24px);
  font-weight: 600;
  letter-spacing: -0.005em;
  white-space: nowrap;
  flex: 1;
  color: ${({ $filled }) => ($filled ? "#fff" : "#FF9900")};
`;

export const CtaCircle = styled.div<{ $filled?: boolean }>`
  position: relative;
  width: 79px;
  height: 79px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid ${({ $filled }) => ($filled ? "#fff" : "#FF9900")};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
`;

export const CtaCircleText = styled.span<{ $filled?: boolean }>`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${({ $filled }) => ($filled ? "#fff" : "#FF9900")};
`;

export const CtaArrow = styled.img`
  width: 25px;
  height: 16px;
  position: absolute;
  right: 9px;
  top: 50%;
  transform: translateY(-50%);
`;

export const CtaProductImg = styled.img`
  width: clamp(200px, 26vw, 500px);
  height: clamp(200px, 26vw, 500px);
  object-fit: cover;
  flex-shrink: 0;
`;

/* ── 라인업 section ──────────────────────────────── */
export const LineupSection = styled.section`
  background: #fcfcfc;
  padding: clamp(60px, 10vw, 200px) clamp(24px, 7vw, 140px);
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 80px);
  overflow: hidden;
`;

export const LineupHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  position: relative;
`;

export const LineupOrangeDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff9900;
`;

export const LineupTitle = styled.h2`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(32px, 4vw, 64px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
`;

export const LineupDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  color: #000;
  line-height: 1.4;
  text-align: center;
  letter-spacing: -0.01em;
`;

export const LineupCards = styled.div`
  display: flex;
  gap: 16px;
  height: clamp(300px, 40vw, 670px);
  align-items: center;
  ${media.md} {
    flex-direction: column;
    height: auto;
  }
`;

export const LineupCard = styled.div`
  flex: 1;
  min-width: 0;
  height: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  overflow: hidden;
  ${media.md} {
    height: auto;
    padding: 24px;
  }
`;

export const LineupCardImg = styled.img`
  width: clamp(180px, 20vw, 500px);
  height: clamp(180px, 20vw, 500px);
  object-fit: cover;
  flex-shrink: 0;
`;

export const LineupCardName = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(18px, 2vw, 32px);
  font-weight: 600;
  color: #111;
  letter-spacing: -0.005em;
  white-space: nowrap;
  flex-shrink: 0;
`;

/* ── 스티커 & 패밀리 도서 section ────────────────── */
export const StickerSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 80px);
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: clamp(60px, 10vw, 200px) clamp(24px, 7vw, 140px);
  position: relative;
`;

export const StickerHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const StickerOrangeDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff9900;
  margin-bottom: 32px;
`;

export const StickerTitle = styled.h2`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(32px, 4vw, 64px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
`;

/* ── Sticker tabs layout ─────────────────────────── */
export const StickerTabsWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: stretch;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

export const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  width: clamp(200px, 33%, 641px);
  justify-content: center;
  ${media.md} {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const StickerTabBtn = styled.button<{ $active: boolean; $position: "top" | "middle" | "bottom" }>`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(16px, 1.8vw, 32px);
  font-weight: 600;
  letter-spacing: -0.005em;
  padding: 32px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  flex: 1;

  ${({ $active }) =>
    $active
      ? `
    background: #FF9900;
    color: #fff;
    border: none;
    border-radius: 16px 0 0 16px;
    width: calc(100% + 4px);
    margin-right: -4px;
    position: relative;
    z-index: 1;
  `
      : `
    background: #fff;
    color: #111;
    border: 1px solid #ddd;
    border-radius: 16px;
    text-align: left;
  `}
`;

export const StickerPanel = styled.div<{ $activeIdx: number }>`
  flex: 1;
  min-width: 0;
  background: #fff;
  border: 4px solid #ff9900;
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 40px;
  height: clamp(300px, 35vw, 536px);
  border-radius: ${({ $activeIdx }) =>
    $activeIdx === 0
      ? "0 16px 16px 16px"
      : $activeIdx === 1
        ? "16px"
        : "16px 16px 0 16px"};
  ${media.md} {
    border-radius: 16px;
    height: auto;
    flex-direction: column;
  }
`;

export const StickerPanelImg = styled.div`
  flex-shrink: 0;
  width: clamp(120px, 18vw, 344px);
  height: clamp(180px, 24vw, 431px);
  position: relative;
  overflow: hidden;
  ${media.md} {
    width: 100%;
    height: 200px;
  }
`;

export const StickerPanelContent = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const StickerPanelTitle = styled.h3`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(18px, 1.8vw, 28px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.005em;
  line-height: normal;
  white-space: nowrap;
`;

export const StickerPanelDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(13px, 1.1vw, 20px);
  color: #111;
  line-height: 1.4;
  letter-spacing: -0.005em;
`;

export const StickerBulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
  list-style: none;
`;

export const StickerBulletItem = styled.li`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(13px, 1.1vw, 20px);
  color: #111;
  line-height: 1.4;
  letter-spacing: -0.005em;
  display: flex;
  gap: 8px;
  &::before {
    content: "•";
    flex-shrink: 0;
  }
`;

export const StickerBulletTitle = styled.strong`
  font-weight: 600;
  display: block;
  margin-bottom: 4px;
`;

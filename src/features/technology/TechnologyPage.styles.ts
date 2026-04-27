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

/* ── Main content ───────────────────────────────── */
export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(80px, 10vw, 200px);
  padding: clamp(60px, 10vw, 200px) clamp(24px, 7vw, 140px);
  overflow: hidden;
`;

/* ── Intro ──────────────────────────────────────── */
export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 6vw, 120px);
`;

export const IntroHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
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

export const IntroImgWrap = styled.div`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: #f8f8f8;
  aspect-ratio: 16 / 9;
  max-height: 600px;
`;

export const IntroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

/* ── Tab bar ────────────────────────────────────── */
export const TabBarWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TabBar = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TabBtn = styled.button<{ $active: boolean }>`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  font-weight: 600;
  padding: 20px 24px;
  min-width: clamp(120px, 12vw, 240px);
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  background: ${({ $active }) => ($active ? "#FF9900" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#111")};
  border: ${({ $active }) => ($active ? "none" : "1px solid #ddd")};
  &:hover {
    background: ${({ $active }) => ($active ? "#FF9900" : "#f8f8f8")};
  }
`;

export const TabDotArea = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  pointer-events: none;
`;

export const TabDot = styled.div`
  position: absolute;
  top: 16px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff9900;
  transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

/* ── Tab content ────────────────────────────────── */
export const TabContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 80px);
  width: 100%;
`;

export const ContentTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
  text-align: center;
  position: relative;
`;

export const ContentTitle = styled.h3`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  color: #000;
  line-height: normal;
`;

export const ContentDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  color: #000;
  line-height: 1.4;
  text-align: center;
`;

/* ── Two-column layout ──────────────────────────── */
export const TwoCol = styled.div`
  display: flex;
  gap: clamp(24px, 5vw, 80px);
  align-items: flex-start;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

export const TwoColCenter = styled(TwoCol)`
  align-items: center;
`;

/* Ncode diagram */
export const NcodeDiagramWrap = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 56%;
  aspect-ratio: 915 / 594;
  ${media.md} {
    width: 100%;
  }
`;

export const NcodeMainImg = styled.img`
  position: absolute;
  left: 8.6%;
  top: 0;
  width: 67.2%;
  height: 100%;
  object-fit: cover;
`;

export const SynergyArr1Img = styled.img`
  position: absolute;
  left: 66.7%;
  top: 23.2%;
  width: 33.3%;
  height: auto;
`;

export const SynergyArr2Wrap = styled.div`
  position: absolute;
  left: 68.3%;
  top: 40.6%;
  width: 32.2%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(29.16deg);
`;

export const SynergyArr2Img = styled.img`
  width: 100%;
  height: auto;
`;

/* Printing / Smart Pen left image */
export const TabImgWrap = styled.div`
  flex: 1;
  min-width: 0;
  padding: 0 clamp(0px, 5vw, 80px);
  ${media.md} {
    padding: 0;
    width: 100%;
  }
`;

export const TabMainImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

/* Feature cards */
export const CardsCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  min-width: 0;
  align-self: stretch;
  ${media.md} {
    width: 100%;
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
  flex: 1;
`;

export const FeatureIconImg = styled.img<{ $size?: number }>`
  width: ${({ $size }) => $size ?? 70}px;
  height: ${({ $size }) => $size ?? 70}px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const FeatureTitle = styled.h4`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(18px, 1.8vw, 28px);
  font-weight: 700;
  color: #111;
  line-height: normal;
  white-space: nowrap;
`;

export const FeatureDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(13px, 1.1vw, 20px);
  color: #111;
  line-height: 1.4;
  white-space: pre-line;
`;

/* ── 응용 분야 ──────────────────────────────────── */
export const AppSection = styled.section`
  background: #fcfcfc;
  padding: clamp(60px, 10vw, 200px) clamp(24px, 7vw, 140px);
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 80px);
`;

export const AppHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  position: relative;
`;

export const AppTitle = styled.h2`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(32px, 4vw, 64px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.2;
  text-align: center;
`;

export const AppDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  color: #000;
  line-height: 1.4;
  text-align: center;
  letter-spacing: -0.01em;
`;

export const AppCards = styled.div`
  display: flex;
  gap: 16px;
  ${media.md} {
    flex-direction: column;
  }
`;

export const AppCard = styled.div`
  flex: 1;
  min-width: 0;
  height: clamp(280px, 30vw, 500px);
  position: relative;
  border: 1px solid #ddd;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const AppCardBgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

export const AppCardLabel = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(17, 17, 17, 0.5);
  backdrop-filter: blur(8px);
  padding: 24px 40px;
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(18px, 2vw, 32px);
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.005em;
  white-space: nowrap;
`;

/* ── Developer section ──────────────────────────── */
export const DevSection = styled.section`
  position: relative;
  padding: clamp(60px, 10vw, 140px) clamp(24px, 28vw, 420px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 400px;
`;

export const DevBgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: #101324;
`;

export const DevBgImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  opacity: 0.8;
`;

export const DevInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  text-align: center;
  max-width: 700px;
`;

export const DevTitle = styled.h2`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(24px, 3vw, 40px);
  font-weight: 700;
  color: #fff;
  line-height: 1.4;
`;

export const DevDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  color: #fff;
  line-height: 1.4;
`;

export const DevBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0 32px;
  height: 80px;
  min-width: clamp(200px, 20vw, 350px);
  border: 1px solid #fff;
  border-radius: 8px;
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 20px);
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

/* Orange section dot */
export const OrangeDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ff9900;
  flex-shrink: 0;
`;

import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

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

/* ── Brand Guide header ─────────────────────────── */
export const BrandGuideSection = styled.section`
  padding: clamp(60px, 10vw, 200px) clamp(24px, 7vw, 140px)
    clamp(40px, 5vw, 80px);
`;

export const BrandGuideTitle = styled.h2`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(36px, 5vw, 80px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin-bottom: 48px;
`;

export const BrandGuideDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.5vw, 28px);
  font-weight: 500;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.6;
`;

/* ── Tab section ────────────────────────────────── */
export const TabSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 clamp(24px, 7vw, 140px) clamp(80px, 10vw, 200px);
`;

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
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  width: 100%;
  max-width: 1360px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const ContentTitle = styled.h3`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(28px, 4vw, 64px);
  font-weight: 700;
  color: #111;
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

export const ContentDesc = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  color: #000;
  line-height: 1.4;
  text-align: center;
`;

/* ── Section blocks ─────────────────────────────── */
export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const SectionLabel = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(24px, 2.5vw, 40px);
  font-weight: 600;
  color: #111;
  line-height: 1.2;
  .dot {
    color: #ff9900;
  }
`;

/* ── Logo rows ──────────────────────────────────── */
export const LogoRowBorder = styled.div<{ $dark?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  border-radius: 16px;
  border: ${({ $dark }) => ($dark ? "none" : "1px solid #ddd")};
  background: ${({ $dark }) => ($dark ? "#515559" : "#fff")};
  gap: 16px;
  flex-wrap: wrap;
  ${media.md} {
    padding: 16px 24px;
    gap: 12px;
  }
`;

export const LogoCell = styled.div<{ $bg?: string }>`
  flex: 1;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: ${({ $bg }) => $bg ?? "transparent"};
  border-radius: 4px;
  overflow: hidden;
`;

export const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
`;

/* NEO SMARTPEN: two separate rows */
export const SpRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const SpRow = styled.div<{ $dark?: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 24px 48px;
  align-items: center;
  justify-items: center;
  background: ${({ $dark }) => ($dark ? "#4c4a49" : "#fff")};
  border: ${({ $dark }) => ($dark ? "none" : "1px solid #ddd")};
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
  }
`;

export const SpCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 100%;
`;

/* AiGLE / POKORO: lang-labeled rows */
export const LangRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: stretch;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

export const LangTag = styled.span`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  font-weight: 500;
  color: #111;
  white-space: nowrap;
  display: flex;
  align-items: center;
  min-width: 32px;
`;

export const LangLogoBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px;
  border: 1px solid #ddd;
  border-radius: 16px;
  gap: 16px;
  flex-wrap: wrap;
  ${media.md} {
    padding: 16px 24px;
    gap: 12px;
  }
`;

/* ── Colors ─────────────────────────────────────── */
export const ColorCardsRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  ${media.md} {
    flex-direction: column;
  }
`;

export const ColorCard = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 16px;
  background: #fff;
  overflow: hidden;
`;

export const ColorCardFull = styled(ColorCard)`
  flex: none;
  width: 100%;
`;

export const Swatch = styled.div<{ $bg: string; $size?: number }>`
  flex-shrink: 0;
  width: ${({ $size }) => $size ?? 80}px;
  height: ${({ $size }) => $size ?? 80}px;
  border-radius: 100px;
  background: ${({ $bg }) => $bg};
`;

export const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ColorHex = styled.p<{ $color: string }>`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(16px, 1.8vw, 32px);
  font-weight: 600;
  color: ${({ $color }) => $color};
  letter-spacing: -0.005em;
  white-space: nowrap;
  line-height: normal;
`;

export const ColorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ColorMetaRow = styled.div`
  display: flex;
  gap: 8px;
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(12px, 1vw, 20px);
  color: #111;
  line-height: 1.4;
`;

export const ColorMetaKey = styled.span`
  font-weight: 700;
  min-width: 48px;
`;

/* AiGLE gradient card */
export const GradientCard = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
  padding: 24px 48px;
  border: 1px solid #ddd;
  border-radius: 16px;
  background: #fff;
  ${media.md} {
    flex-direction: column;
    padding: 24px;
  }
`;

export const GradientSwatch = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: linear-gradient(to bottom, #0ccbff 13.5%, #158bfa 50%, #5349f4 90%);
`;

export const GradientStops = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  ${media.md} {
    gap: 24px;
  }
`;

export const GradientStop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GradientHex = styled.p<{ $color: string }>`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(14px, 1.3vw, 24px);
  font-weight: 600;
  line-height: 1.4;
  .pct {
    color: #111;
    font-weight: 400;
  }
  color: ${({ $color }) => $color};
`;

export const GradientRgb = styled.p`
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(12px, 1vw, 20px);
  color: #111;
  line-height: 1.4;
`;

/* ── Download buttons ───────────────────────────── */
export const DownloadRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  min-width: clamp(160px, 20vw, 386px);
  border: 1px solid #111;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-family: "Pretendard Variable", Pretendard, sans-serif;
  font-size: clamp(13px, 1.3vw, 24px);
  font-weight: 600;
  color: #111;
  letter-spacing: -0.005em;
  white-space: nowrap;
  transition: background 0.2s;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`;

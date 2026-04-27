import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

/* ── Tab section (Figma: 200px top + 200px bottom padding around tabs+content) ── */
export const TabSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(48px, 6.25vw, 120px);
  padding: clamp(80px, 10.4vw, 200px) 0;

  & > div {
    width: 100%;
  }
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
  font-size: clamp(14px, 1.25vw, 24px);
  font-weight: 600;
  padding: 24px;
  width: clamp(140px, 12.5vw, 240px);
  border-radius: 999px;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;
  white-space: nowrap;
  background: ${({ $active }) => ($active ? "#FF9900" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#111")};
  border: 1px solid
    ${({ $active }) => ($active ? "transparent" : "#ddd")};
  &:hover {
    background: ${({ $active }) => ($active ? "#FF9900" : "#f8f8f8")};
  }
`;

/* ── Tab content (Figma: 80px gap between blocks) ── */
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 6vw, 80px);
  align-items: center;
  width: 100%;
  max-width: 1360px;
`;


/* ── Section blocks ─────────────────────────────── */
export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2vw, 24px);
  width: 100%;
  ${media.md} {
    gap: 16px;
  }
`;

export const SectionLabel = styled.p`
  font-size: clamp(24px, 2.1vw, 40px);
  font-weight: 600;
  .dot {
    color: #ff9900;
  }
`;

/* ── Logo rows ──────────────────────────────────── */
export const LogoRowBorder = styled.div<{ $dark?: boolean }>`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  justify-items: center;
  padding: 16px 24px;
  border-radius: 16px;
  border: ${({ $dark }) => ($dark ? "none" : "1px solid #ddd")};
  background: ${({ $dark }) => ($dark ? "#515559" : "#fff")};
  gap: clamp(32px, 2vw, 60px);

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px 48px;
  }

  ${media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LogoCell = styled.div<{ $bg?: string }>`
  flex: 1;
  max-width: 260px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: ${({ $bg }) => $bg ?? "transparent"};
  border-radius: 4px;
  overflow: hidden;
`;

export const LogoImg = styled.img`
  max-height: 95px;
  object-fit: contain;
  display: block;
`;


/* AiGLE / POKORO: lang-labeled rows */
export const LangRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: stretch;
  width: 100%;
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

/* ── Colors ─────────────────────────────────────── */
export const ColorCardsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${media.lg} {
    flex-direction: row;
  }
`;

export const ColorCard = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: 48px;
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
  font-size: clamp(1rem, 1.8vw, 2rem);
  font-weight: 600;
  color: ${({ $color }) => $color};
  white-space: nowrap;

  & .pct {
    font-weight: 600;
    color: #111;
    font-size: clamp(0.875rem, 1vw, 1.25rem);
  }
`;

export const ColorMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ColorMetaRow = styled.div`
  display: flex;
  gap: 8px;
  font-size: clamp(0.875rem, 1vw, 1.25rem);
  color: #111;
`;

export const ColorMetaKey = styled.span`
  font-weight: 700;
  min-width: 48px;
`;

/* AiGLE gradient card */
export const GradientSwatch = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: linear-gradient(to bottom, #0ccbff 13.5%, #158bfa 50%, #5349f4 90%);
`;

export const GradientStops = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  ${media.md} {
    gap: 60px;
  }
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

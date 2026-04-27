import styled from "styled-components";
import { media } from "@/styles/theme";

/* ── Page wrapper ───────────────────────────────── */
export const Page = styled.main`
  background: #fff;
  min-height: 100vh;
`;

/* ── Tab section (Figma: 200px top + 200px bottom around tabs+content) ── */
export const TabSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(40px, 6.25vw, 120px);
  padding: clamp(60px, 10.4vw, 200px) clamp(16px, 4vw, 40px);

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

/* On mobile: 2-col grid. From sm: flex row, wraps if needed. */
export const TabBar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  width: 100%;
  max-width: 1080px;

  ${media.sm} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
  }
`;

export const TabBtn = styled.button<{ $active: boolean }>`
  font-size: clamp(14px, 1.25vw, 24px);
  font-weight: 600;
  padding: clamp(14px, 1.6vw, 24px) clamp(16px, 1.6vw, 24px);
  width: 100%;
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

  ${media.sm} {
    width: clamp(160px, 14vw, 240px);
  }
`;

/* ── Section blocks ─────────────────────────────── */
export const SectionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 24px);
  width: 100%;
`;

export const SectionLabel = styled.p`
  margin: 0;
  font-size: clamp(20px, 2.1vw, 40px);
  font-weight: 600;
  line-height: 1.2;
  color: #111;
  .dot {
    color: #ff9900;
  }
`;

/* ── Logo rows ──────────────────────────────────── */
export const LogoRowBorder = styled.div<{ $dark?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  padding: clamp(12px, 2vw, 24px) clamp(16px, 3vw, 48px);
  border-radius: 16px;
  border: ${({ $dark }) => ($dark ? "none" : "1px solid #ddd")};
  background: ${({ $dark }) => ($dark ? "#515559" : "#fff")};
  gap: clamp(12px, 2vw, 32px);
  width: 100%;

  ${media.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: clamp(24px, 2vw, 60px);
  }
`;

export const LogoCell = styled.div<{ $bg?: string }>`
  width: 100%;
  max-width: 260px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(64px, 8vw, 100px);
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

/* AiGLE / POKORO: lang-labeled rows — stack on mobile, row from md */
export const LangRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  width: 100%;

  ${media.md} {
    flex-direction: row;
    align-items: stretch;
    gap: 24px;
  }
`;

export const LangTag = styled.span`
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
  flex-direction: column;
  gap: clamp(16px, 2vw, 32px);
  align-items: flex-start;
  padding: clamp(20px, 2vw, 24px);
  border: 1px solid #ddd;
  border-radius: 16px;
  background: #fff;
  overflow: hidden;

  ${media.sm} {
    flex-direction: row;
    align-items: center;
    gap: clamp(24px, 3vw, 48px);
  }
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

  /* Scale down on small screens */
  @media (max-width: 480px) {
    width: ${({ $size }) => Math.min($size ?? 80, 72)}px;
    height: ${({ $size }) => Math.min($size ?? 80, 72)}px;
  }
`;

export const ColorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 1.5vw, 24px);
  min-width: 0;
`;

export const ColorHex = styled.p<{ $color: string }>`
  margin: 0;
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

/* AiGLE gradient swatch */
export const GradientSwatch = styled.div`
  flex-shrink: 0;
  width: clamp(64px, 8vw, 80px);
  height: clamp(64px, 8vw, 80px);
  border-radius: 100px;
  background: linear-gradient(
    to bottom,
    #0ccbff 13.5%,
    #158bfa 50%,
    #5349f4 90%
  );
`;

export const GradientStops = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.md} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: clamp(24px, 4vw, 60px);
  }
`;

export const GradientRgb = styled.p`
  margin: 0;
  font-size: clamp(12px, 1vw, 20px);
  color: #111;
  line-height: 1.4;
`;

/* ── Download buttons ───────────────────────────── */
export const DownloadRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
  width: 100%;
  ${media.md} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px clamp(20px, 2.5vw, 32px);
  width: 100%;
  border: 1px solid #111;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  font-size: clamp(14px, 1.3vw, 24px);
  font-weight: 600;
  color: #111;
  letter-spacing: -0.005em;
  white-space: nowrap;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }

  ${media.sm} {
    width: clamp(220px, 22vw, 400px);
  }
`;

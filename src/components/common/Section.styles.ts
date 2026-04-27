import { media } from "@/styles/theme";
import styled from "styled-components";

export const SectionRoot = styled.section<{ $tone: "dark" | "light" }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  color: ${({ $tone }) => ($tone === "light" ? "#fff" : "#111")};
  padding: 120px 1rem;

  ${media.md} {
    padding: 160px 2.5rem;
  }

  ${media.lg} {
    padding: 200px clamp(40px, 7.3vw, 140px);
  }
`;

export const SectionOverlay = styled.div<{ $bg: string }>`
  position: absolute;
  inset: 0;
  background: ${({ $bg }) => $bg};
  pointer-events: none;
  z-index: 0;
`;

export const SectionInner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1640px;
  width: 100%;
  z-index: 1;
`;

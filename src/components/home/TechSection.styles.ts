import Image from "next/image";
import { media } from "@/styles/theme";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 80px 16px 40px;

  ${media.md} {
    padding: 120px 24px 60px;
  }

  ${media.lg} {
    padding: 200px 0 0;
  }
`;

export const BgDecoration = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.9;
  pointer-events: none;
  z-index: 0;
  background-image: url("/images/home/figma/tech-bg-decoration.svg");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
`;


export const Heading = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 5rem);
  font-weight: 700;
  padding: 0 1.5rem;
  margin-bottom: 32px;

  ${media.md} {
    margin-bottom: 40px;
  }
`;

export const PinSpacer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;

  ${media.lg} {
    height: 360vh;
  }
`;

export const PinContent = styled.div`
  position: static;
  top: auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  overflow: visible;

  ${media.lg} {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }
`;

export const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  overflow-x: visible;
  overflow-y: visible;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.lg} {
    overflow-x: hidden;
  }
`;

export const CardTrack = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
    max-width: 720px;
    gap: 20px;
  }

  ${media.lg} {
    display: flex;
    gap: 24px;
    width: max-content;
    max-width: none;
    margin: 0;
    padding: 0 clamp(24px, 7.3vw, 140px);
  }
`;

export const TechCard = styled.article<{ $offset: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 550 / 600;
  flex-shrink: 0;
  margin-top: 0;
  overflow: hidden;
  color: #ffffff;

  ${media.lg} {
    width: clamp(300px, 60vw, 760px);
    margin-top: ${({ $offset }) => ($offset ? "clamp(48px, 7.5vw, 146px)" : "0")};
  }
`;

export const CardBgImage = styled(Image)`
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

export const CardContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 2;
  color: #ffffff;

  ${media.md} {
    padding: 28px 24px;
    gap: 10px;
  }

  ${media.lg} {
    padding: 32px 28px;
    gap: 12px;
  }
`;

export const CardTitle = styled.h3`
  font-size: clamp(1.25rem, 1.8vw, 1.75rem);
  font-weight: 700;
`;

export const CardDesc = styled.p`
  font-size: clamp(0.8125rem, 1.1vw, 1rem);
  line-height: 1.45;
  white-space: pre-line;
`;

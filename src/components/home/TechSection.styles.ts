import Image from "next/image";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 200px 0 0;

  @media (max-width: 1023px) {
    padding: 120px 24px 60px;
  }

  @media (max-width: 767px) {
    padding: 80px 16px 40px;
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
  margin-bottom: 40px;

  @media (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const PinSpacer = styled.div`
  position: relative;
  width: 100%;
  height: 360vh;
  z-index: 1;

  @media (max-width: 1023px) {
    height: auto;
  }
`;

export const PinContent = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1023px) {
    position: static;
    height: auto;
    overflow: visible;
  }
`;

export const SliderWrap = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1023px) {
    overflow: visible;
  }
`;

export const CardTrack = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: max-content;
  padding: 0 clamp(24px, 7.3vw, 140px);

  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    padding: 0;
    gap: 20px;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    max-width: 100%;
    gap: 16px;
  }
`;

export const TechCard = styled.article<{ $offset: boolean }>`
  position: relative;
  width: clamp(300px, 60vw, 760px);
  aspect-ratio: 550 / 600;
  flex-shrink: 0;
  margin-top: ${({ $offset }) => ($offset ? "clamp(48px, 7.5vw, 146px)" : "0")};
  overflow: hidden;
  color: #ffffff;

  @media (max-width: 1023px) {
    width: 100%;
    margin-top: 0;
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
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 2;
  color: #ffffff;

  @media (max-width: 1023px) {
    padding: 28px 24px;
    gap: 10px;
  }

  @media (max-width: 767px) {
    padding: 24px 20px;
    gap: 8px;
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

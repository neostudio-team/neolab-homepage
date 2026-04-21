import Image from "next/image";
import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #fff;
  padding-top: 160px;

  @media (max-width: 1023px) {
    padding-top: 120px;
  }

  @media (max-width: 767px) {
    padding-top: 80px;
  }
`;

export const BgDecoration = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/images/home/figma/tech-bg-decoration.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 208% auto;
  opacity: 0.9;
  pointer-events: none;
  z-index: 0;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 1rem;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

export const Heading = styled.h2`
  margin: 0;
  text-align: center;
  color: #111;
  font-family: Pretendard, sans-serif;
  font-size: clamp(40px, 4.5vw, 80px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

export const PinSpacer = styled.div`
  position: relative;
  width: 100%;
  height: 360vh;
  z-index: 1;

  @media (max-width: 1023px) {
    height: 300vh;
  }

  @media (max-width: 767px) {
    height: 260vh;
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
`;

export const CardTrack = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  width: max-content;
  padding: 0 clamp(24px, 7.3vw, 140px);

  @media (max-width: 767px) {
    gap: 16px;
  }
`;

export const TechCard = styled.article<{ $offset: boolean }>`
  position: relative;
  width: clamp(380px, 38vw, 760px);
  aspect-ratio: 550 / 600;
  flex-shrink: 0;
  margin-top: ${({ $offset }) => ($offset ? "clamp(56px, 7.5vw, 146px)" : "0")};
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 86vw;
    margin-top: ${({ $offset }) => ($offset ? "clamp(32px, 16vw, 100px)" : "0")};
  }
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

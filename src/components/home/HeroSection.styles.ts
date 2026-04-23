import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: #000;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  min-height: 100svh;
`;

export const VideoBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: #000;
  overflow: hidden;
`;

export const HeroVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  width: 100vw;
  height: 56.25vw;
  min-height: 100vh;
  min-width: 177.78vh;
  transform: translate(-50%, -50%);
  object-fit: cover;
`;

export const FadeOverlay = styled.div<{ $opacity: number }>`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background: #000;
  transition: none;
  opacity: ${({ $opacity }) => $opacity};
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.25) 40%, rgba(0, 0, 0, 0.45) 75%, rgba(0, 0, 0, 0.85) 100%),
    linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, transparent 60%);
`;

export const DotCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  pointer-events: none;
  opacity: 0.35;
  mix-blend-mode: screen;
`;

export const HeroTextBlock = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 1400px;
  padding: 0 80px 140px;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-family: "DM Sans", sans-serif;
  font-size: clamp(48px, 7vw, 128px);
  line-height: 1.02;
  letter-spacing: -0.03em;
  font-weight: 700;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const HeroTitleLine = styled.span`
  display: block;
  overflow: hidden;
`;

export const HeroTitleLineInner = styled.span`
  display: block;
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 32px;
  right: 80px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const ScrollLine = styled.div`
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.25));
`;

export const ScrollText = styled.span`
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.2);
`;

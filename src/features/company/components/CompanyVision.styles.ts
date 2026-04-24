import styled, { keyframes } from "styled-components";
import { colors } from "@/styles/theme";

const watermarkFlow = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

export const VisionHeading = styled.div`
  font-size: clamp(2rem, 5.5vw, 5rem);
  line-height: 1.2;
  font-weight: 700;

  span {
    color: ${colors.primary};
  }
`;

export const VisionBodyGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: clamp(24px, 5vw, 48px);
`;

export const VisionParagraph = styled.p<{ $muted?: boolean }>`
  font-size: clamp(1rem, 1.4vw, 1.5rem);
  font-weight: 400;
  color: #111111;
`;

export const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: clamp(48px, 6vw, 80px);

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 539px) {
    grid-template-columns: 1fr;
  }
`;

export const IndustryCard = styled.article<{ $bg: string }>`
  position: relative;
  aspect-ratio: 1 / 1.1;
  border-radius: 16px;
  overflow: hidden;
  padding: clamp(18px, 2vw, 26px);
  color: #ffffff;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.12) 20%, rgba(0, 0, 0, 0.55) 100%),
    url("${({ $bg }) => $bg}") center / cover no-repeat;
  isolation: isolate;
  transform: translateY(0) scale(1);
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s ease;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 153, 0, 0.8);
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: 0;
  }

  &:hover::after,
  &:focus-within::after {
    opacity: 1;
  }

  &:hover,
  &:focus-within {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 20px 38px rgba(0, 0, 0, 0.24);
  }
`;

export const IndustryContent = styled.div`
  position: absolute;
  left: clamp(20px, 2.4vw, 30px);
  right: clamp(20px, 2.4vw, 30px);
  bottom: clamp(20px, 2.4vw, 30px);
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #ffffff;

  ${IndustryCard}:hover &,
  ${IndustryCard}:focus-within & {
    opacity: 0;
  }
`;

export const IndustryHoverContent = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: clamp(20px, 2.4vw, 30px);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.3s ease,
    transform 0.35s ease;
  transform: translateY(8px);

  ${IndustryCard}:hover &,
  ${IndustryCard}:focus-within & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const IndustryHoverText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
`;

export const IndustryEyebrow = styled.p`
  margin: 0;
  font-size: clamp(0.875rem, 1vw, 1rem);
  font-weight: 500;
  opacity: 0.95;
  transition:
    opacity 0.25s ease,
    max-height 0.25s ease,
    margin 0.25s ease;
  max-height: 24px;
  overflow: hidden;

  ${IndustryCard}:hover &,
  ${IndustryCard}:focus-within & {
    opacity: 0;
    max-height: 0;
    margin: 0;
  }
`;

export const IndustryLabel = styled.h3`
  margin: 0;
  font-size: clamp(1.5rem, 2.2vw, 2rem);
  font-weight: 700;
`;

export const IndustryIconBox = styled.div`
  display: grid;
  place-items: center;
  transform: translateY(-4px) scale(0.96);
  opacity: 0.9;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.35s ease;

  ${IndustryCard}:hover &,
  ${IndustryCard}:focus-within & {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

export const IndustryIcon = styled.svg`
  width: 32px;
  height: 32px;
  color: #ffffff;
`;

export const IndustryDescription = styled.p`
  margin: 0;
  white-space: pre-line;
  font-size: clamp(1rem, 1.25vw, 1.25rem);
  line-height: 1.45;
`;

export const VisionWatermark = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -1vw;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
`;

export const VisionWatermarkTrack = styled.div`
  display: flex;
  width: max-content;
  white-space: nowrap;
  animation: ${watermarkFlow} 32s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const VisionWatermarkText = styled.span`
  flex-shrink: 0;
  padding-right: 6vw;
  font-family: "Pretendard", sans-serif;
  font-weight: 900;
  font-size: clamp(8rem, 18vw, 16rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.04);
`;

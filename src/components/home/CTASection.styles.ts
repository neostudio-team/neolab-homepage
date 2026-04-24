import { colors } from "@/styles/theme";
import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  background: ${colors.primary};
`;

const ctaPartnerScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 32px));
  }
`;

export const TopRow = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  justify-content: space-between;
  padding: 140px clamp(40px, 7.5vw, 140px);

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: clamp(2.25rem, 5vw, 5rem);
  flex: 1;

  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const PartnerMarqueeOuter = styled.div`
  padding-bottom: 140px;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 1023px) {
    padding-bottom: 80px;
  }
`;

export const PartnerMarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  gap: 32px;
  align-items: center;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;

export const PartnerMarqueeGroup = styled.div`
  display: flex;
  gap: 32px;
  width: max-content;
  align-items: center;
  flex-shrink: 0;
  animation: ${ctaPartnerScroll} 40s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const PartnerMarqueeLink = styled(Link)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(160px, 20vw, 280px);
  height: clamp(80px, 10vw, 140px);
  border-radius: 16px;
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const PartnerMarqueeLogo = styled(Image)`
  object-fit: contain;
  width: auto;
  height: auto;
  transition: opacity 0.2s ease,
`;

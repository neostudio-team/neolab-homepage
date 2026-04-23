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
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 140px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 5rem;
  flex: 1;
`;

export const ContactButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  background: transparent;
  color: #fff;
  padding: 0;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: -0.5px;

  &:hover span:last-child {
    transform: scale(1.05);
  }
`;

export const ContactText = styled.span`
  color: #fff;
  font-size: clamp(40px, 4vw, 60px);
  font-weight: 600;
`;

export const ContactCircle = styled.span`
  display: grid;
  place-items: center;
  width: 140px;
  height: 140px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  transition: transform 0.3s ease;
  font-size: 48px;
`;

export const PartnerMarqueeOuter = styled.div`
  padding-bottom: 140px;
  width: 100vw;
  overflow: hidden;
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
  width: 280px;
  height: 140px;
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

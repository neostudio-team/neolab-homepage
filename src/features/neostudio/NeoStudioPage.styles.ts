"use client";

import styled from "styled-components";
import Image from "next/image";
import { colors, media } from "@/styles/theme";

export const Page = styled.main`
  background: #fcfcfc;
  color: #111;
  overflow-x: hidden;
`;

/* ---------- HERO ---------- */
export const HeroSection = styled.section<{ $bg: string }>`
  position: relative;
  width: 100%;
  height: clamp(420px, 56vw, 950px);
  background-image: ${({ $bg }) => `url("${$bg}")`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  pointer-events: none;
`;

export const HeroTitle = styled.h1`
  position: relative;
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 6.25rem);
  letter-spacing: -1px;
  line-height: 1;
  text-align: center;
`;

/* ---------- COMMON SECTION ---------- */
export const Section = styled.section`
  padding: clamp(80px, 12vw, 200px) clamp(20px, 7vw, 140px);
`;

export const SectionInner = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  width: 100%;
`;

/* ---------- INTRO + DOWNLOAD ---------- */
export const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 48px);
  margin-bottom: clamp(64px, 10vw, 120px);
`;

export const IntroTitle = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: clamp(2rem, 5.2vw, 5rem);
  line-height: 1.2;
  letter-spacing: -0.8px;
`;

export const IntroDesc = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: clamp(1rem, 1.8vw, 1.75rem);
  line-height: 1.6;
  letter-spacing: -0.28px;
  color: #333;
  white-space: pre-line;
`;

export const DownloadCard = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #ececec;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: clamp(32px, 5vw, 64px);
  padding: clamp(28px, 4vw, 48px);

  ${media.lg} {
    flex-direction: row;
    align-items: center;
    padding: 0;
    padding-right: 40px;
    min-height: 600px;
  }
`;

export const DownloadVisual = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 11;
  background: #fcfcfc;
  border-radius: 12px;
  overflow: hidden;

  ${media.lg} {
    flex: 1 1 0;
    height: 600px;
    aspect-ratio: auto;
    border-radius: 0;
  }
`;

export const DownloadVisualImg = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const DownloadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(28px, 3.5vw, 48px);

  ${media.lg} {
    width: 650px;
    flex-shrink: 0;
  }
`;

export const DownloadGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DownloadLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: clamp(1.125rem, 1.6vw, 1.5rem);
  color: #111;

  svg {
    color: ${colors.primary};
  }
`;

export const StoreRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const StoreBadge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #111;
  color: #fff;
  border-radius: 12px;
  padding: 14px 22px;
  height: 64px;
  min-width: 200px;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    background: #000;
    transform: translateY(-2px);
  }

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const StoreBadgeText = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1.1;

  small {
    font-size: 11px;
    opacity: 0.8;
    font-weight: 400;
  }
  strong {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.2px;
  }
`;

export const SiteLinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  height: 72px;
  padding: 0 32px;
  font-weight: 600;
  font-size: clamp(1rem, 1.4vw, 1.25rem);
  color: #111;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #fafafa;
    border-color: ${colors.primary};
    transform: translateY(-2px);
  }

  svg {
    width: 28px;
    height: 28px;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(4px);
    color: ${colors.primary};
  }

  ${media.lg} {
    width: 448px;
    max-width: 100%;
  }
`;

/* ---------- SECTION HEADING (matches project SectionHeading effect) ---------- */
export const HeadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: clamp(40px, 6vw, 80px);
  gap: clamp(16px, 2vw, 32px);
`;

export const HeadingTitle = styled.h2`
  position: relative;
  margin: 0;
  color: #111;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
  letter-spacing: -0.64px;

  &::before {
    content: "";
    position: absolute;
    top: clamp(-22px, -1.8vw, -12px);
    right: clamp(-26px, -2vw, -14px);
    width: clamp(20px, 2.2vw, 40px);
    height: clamp(20px, 2.2vw, 40px);
    border-radius: 999px;
    border: clamp(4px, 0.55vw, 9px) solid ${colors.primary};
  }
`;

export const HeadingDesc = styled.p`
  margin: 0;
  font-size: clamp(1rem, 1.4vw, 1.5rem);
  color: #333;
  line-height: 1.4;
  letter-spacing: -0.1px;
  white-space: pre-line;
`;

/* ---------- CORE EXPERIENCE CARDS ---------- */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ExperienceCard = styled.article`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: clamp(24px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.06);
  }
`;

export const ExperienceCardMedia = styled.div`
  width: 100%;
  aspect-ratio: 320 / 405;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExperienceCardImg = styled(Image)`
  object-fit: contain;
`;

export const ExperienceCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
`;

export const ExperienceCardTitle = styled.h3`
  margin: 0;
  font-weight: 700;
  font-size: clamp(1.25rem, 1.9vw, 1.75rem);
  letter-spacing: -0.14px;
  text-align: center;
`;

export const ExperienceCardDesc = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: clamp(0.95rem, 1.2vw, 1.25rem);
  color: #333;
  line-height: 1.4;
  letter-spacing: -0.1px;
  text-align: center;
  white-space: pre-line;
`;

/* ---------- SMART FEATURES ---------- */
export const SmartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  ${media.lg} {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;

export const SmartMockup = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 749 / 649;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmartMockupImg = styled(Image)`
  object-fit: contain;
`;

export const SmartFeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SmartFeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: clamp(16px, 1.6vw, 22px) clamp(20px, 2vw, 28px);
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
    transform: translateX(4px);
  }
`;

export const SmartFeatureIcon = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: clamp(48px, 4vw, 64px);
  height: clamp(48px, 4vw, 64px);
  border-radius: 12px;
  background: rgba(255, 153, 0, 0.08);
  color: ${colors.primary};

  svg {
    width: 60%;
    height: 60%;
  }
`;

export const SmartFeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SmartFeatureTitle = styled.h4`
  margin: 0;
  font-weight: 700;
  font-size: clamp(1.05rem, 1.4vw, 1.25rem);
  letter-spacing: -0.1px;
`;

export const SmartFeatureDesc = styled.p`
  margin: 0;
  font-size: clamp(0.85rem, 1.05vw, 1rem);
  color: #555;
  line-height: 1.45;
  letter-spacing: -0.05px;
`;

/* ---------- WEB SECTION ---------- */
export const WebVisual = styled.div`
  position: relative;
  width: 100%;
  max-width: 1314px;
  margin: 0 auto;
  aspect-ratio: 1314 / 650;
  background: #f3f3f3;
  border: 1px solid #ddd;
  border-radius: 16px;
  overflow: hidden;
`;

export const WebVisualImg = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const WebCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(32px, 4vw, 48px);
`;

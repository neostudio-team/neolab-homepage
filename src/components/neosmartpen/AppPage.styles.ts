import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const Container = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const HeroSection = styled.section`
  position: relative;
  background: #1a1a2e;
  color: #fff;
  overflow: hidden;
  min-height: 480px;
`;

export const HeroInner = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 480px;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const HeroCol = styled.div`
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
  z-index: 10;

  ${media.lg} {
    width: 50%;
  }
`;

export const HeroImageCol = styled(HeroCol)`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const HeroHeading = styled.h1`
  font-size: 38px;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;

  ${media.lg} {
    font-size: 46px;
  }
`;

export const HeroLead = styled.p`
  font-size: 16px;
  color: #d1d5db;
  line-height: 1.625;
`;

export const HeroImg = styled(Image)`
  object-fit: contain;
  max-height: 400px;
`;

export const FeatureSection = styled.section<{ $light: boolean }>`
  background: ${({ $light }) => ($light ? "#fff" : "#f5f5f5")};
  padding: 4rem 0;

  ${media.lg} {
    padding: 5rem 0;
  }
`;

export const FeatureRow = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  ${media.lg} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  }
`;

export const Half = styled.div`
  width: 100%;

  ${media.lg} {
    width: 50%;
  }
`;

export const FeatureImg = styled(Image)`
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const FeatureHeading = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

export const FeatureBody = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.625;
`;

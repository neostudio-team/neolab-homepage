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
  background: #000;
  color: #fff;
  overflow: hidden;
  min-height: 500px;
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
  min-height: 500px;

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

export const HeroEyebrow = styled.p`
  font-size: 14px;
  color: #9ca3af;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const HeroHeading = styled.h1`
  font-size: 38px;
  font-weight: 700;
  line-height: 1.25;

  ${media.lg} {
    font-size: 46px;
  }
`;

export const HeroImg = styled(Image)`
  object-fit: contain;
  max-height: 400px;
`;

export const FeatureSection = styled.section<{ $light: boolean }>`
  background: ${({ $light }) => ($light ? "#fff" : "#f5f5f5")};
  padding: 4rem 0;

  ${media.lg} {
    padding: 6rem 0;
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

export const FeatureCenter = styled.div`
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const FeatureCenterTitle = styled.h3`
  font-size: 28px;
  font-weight: 300;
  color: #ccc;
  margin-bottom: 1rem;

  ${media.lg} {
    font-size: 36px;
  }
`;

export const FeatureCenterDesc = styled.p`
  font-size: 14px;
  color: #999;
  line-height: 1.625;
`;

export const SpecsSection = styled.section`
  padding: 4rem 0;
  background: #fff;
`;

export const SpecsTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

export const SpecsList = styled.div`
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

export const SpecRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

export const SpecValue = styled.span`
  font-size: 14px;
  color: #666;
`;

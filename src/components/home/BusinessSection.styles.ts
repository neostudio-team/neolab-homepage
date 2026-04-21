import Image from "next/image";
import styled from "styled-components";
import { sectionPadding } from "@/styles/section";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background-image: url("/images/home/figma/business-bg.png");
  background-size: cover;
  background-position: center;
  color: #fff;
  ${sectionPadding}
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.55) 0%,
    rgba(0, 0, 0, 0.35) 45%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
`;

export const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1640px;
`;


export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export const CardFigure = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  aspect-ratio: 520 / 549;
  overflow: hidden;
`;

export const CardImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

import Image from "next/image";
import { media } from "@/styles/theme";
import styled from "styled-components";

export const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${media.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (min-width: 1441px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export const Card = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  color: #ffffff;
  aspect-ratio: 520 / 549;
  background-image: url("/images/home/figma/business/card-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;

`;

export const CardTitle = styled.h3`
  position: absolute;
  z-index: 1;
  width: 50%;
  top: 2.2%;
  left: 0;
  font-size: clamp(1.25rem, 1.7vw, 1.875rem);
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  text-align: center;
`;

export const LogoList = styled.div`
  z-index: 1;
  width: clamp(72%, 75vw, 80%);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(14px, 1.6vw, 24px);
  margin-top: clamp(14px, 1.6vw, 24px);
`;

export const LogoGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 1.2vw, 18px);
`;

export const LogoItem = styled.div<{ $withTopPadding?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(4px, 0.55vw, 8px);
`;

export const LogoImageWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(38px, 4.2vw, 56px);
  width: 100%;
`;

export const LogoImage = styled(Image)`
  object-fit: scale-down;
  max-height: 100%;
  width: auto;
`;

export const LogoLabel = styled.p`
  margin: 0;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(0.8125rem, 1vw, 0.9375rem);
  font-weight: 500;
  line-height: 1.4;
  color: #ffffff;
  text-align: center;
  white-space: pre-line;
`;

export const DashedDivider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    #ffffff 0 4px,
    transparent 4px 8px
  );
  background-size: 8px 1px;
  background-repeat: repeat-x;
`;

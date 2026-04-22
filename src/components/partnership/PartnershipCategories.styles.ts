import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const CategoryBlock = styled.div`
  margin-bottom: 4rem;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

export const CategoryIcon = styled(Image)``;

export const CategoryTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
`;

export const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  ${media.sm} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  ${media.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const CardRoot = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  background: #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const CardImageArea = styled.div<{ $expanded: boolean }>`
  position: relative;
  transition: all 0.3s;
  height: ${({ $expanded }) => ($expanded ? "12rem" : "16rem")};
`;

export const CardCoverImage = styled(Image)`
  object-fit: cover;
`;

export const CardGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    transparent 100%
  );
`;

export const CardNameBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: #fff;
`;

export const CardName = styled.h4`
  font-weight: 700;
  font-size: 14px;
`;

export const ExpandButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #1f2937;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #fff;
  }
`;

export const DescPanel = styled.div<{ $expanded: boolean }>`
  overflow: hidden;
  transition: all 0.3s;
  background: #fff;
  max-height: ${({ $expanded }) => ($expanded ? "12rem" : "0")};
  padding: ${({ $expanded }) => ($expanded ? "1rem" : "0 1rem")};
`;

export const DescText = styled.p`
  font-size: 12px;
  color: #4b5563;
  line-height: 1.625;
`;

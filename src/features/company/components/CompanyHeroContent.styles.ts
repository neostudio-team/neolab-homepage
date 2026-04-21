import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

export const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  align-items: center;

  ${media.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;
  }
`;

export const VisualColumn = styled.div`
  position: relative;
  height: 380px;
  display: none;
  user-select: none;

  ${media.lg} {
    display: block;
  }
`;

export const PhotoLayerPrimary = styled.div<{ $tx: number; $ty: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 72%;
  height: 78%;
  border-radius: 1rem;
  overflow: hidden;
  transform: translate(${({ $tx }) => $tx * -10}px, ${({ $ty }) => $ty * -10}px);
  transition: transform 0.4s ease-out;
`;

export const PhotoLayerSecondary = styled.div<{ $tx: number; $ty: number }>`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 56%;
  height: 58%;
  border-radius: 1rem;
  overflow: hidden;
  border: 3px solid #0a0a0a;
  transform: translate(${({ $tx }) => $tx * 14}px, ${({ $ty }) => $ty * 14}px);
  transition: transform 0.4s ease-out;
`;

export const CoverImage = styled(Image)`
  object-fit: cover;
`;

export const PhotoGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, transparent, rgba(0, 0, 0, 0.3));
`;

export const NcodeBadge = styled.div<{ $tx: number; $ty: number }>`
  position: absolute;
  top: 54%;
  left: 50%;
  z-index: 10;
  background: #f8da2f;
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15);
  transform: translate(
    calc(-50% + ${({ $tx }) => $tx * 22}px),
    calc(-50% + ${({ $ty }) => $ty * 22}px)
  );
  transition: transform 0.25s ease-out;
`;

export const NcodeText = styled.p`
  color: #000;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.05em;
  margin: 0;
`;

export const Lead = styled.p`
  color: #f3f4f6;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.9;
  margin-bottom: 1rem;

  ${media.md} {
    font-size: 1.125rem;
  }
`;

export const BodyText = styled.p`
  color: #9ca3af;
  font-size: 14px;
  line-height: 2;
  margin-bottom: 1rem;

  ${media.md} {
    font-size: 15px;
  }
`;

export const SectorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.625rem;
`;

export const SectorCard = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  cursor: default;
  transition:
    border-color 0.2s,
    background 0.2s,
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: rgba(248, 218, 47, 0.45);
    background: rgba(248, 218, 47, 0.07);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(248, 218, 47, 0.08);
  }
`;

export const SectorIconWrap = styled.div`
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s;

  ${SectorCard}:hover & {
    color: #f8da2f;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const SectorTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 0.25rem;
  color: #fff;
  transition: color 0.2s;

  ${SectorCard}:hover & {
    color: #f8da2f;
  }
`;

export const SectorDesc = styled.p`
  color: #6b7280;
  font-size: 12px;
  line-height: 1.625;
  margin: 0;
`;

import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/styles/theme";

export const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: stretch;
  min-height: clamp(500px, 60vw, 700px);


  @media (max-width: 1279px) {
    gap: 8px;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    min-height: 0;
  }
`;

export const Card = styled.button<{ $active: boolean }>`
  appearance: none;
  cursor: default;
  text-align: left;
  flex-grow: ${({ $active }) => ($active ? 792 : 246)};
  flex-shrink: 1;
  flex-basis: 0;
  min-width: ${({ $active }) => ($active ? "340px" : "200px")};
  background: ${({ $active }) => ($active ? "#fff" : "#f8f8f8")};
  border: 1px solid
    ${({ $active }) => ($active ? "rgba(0,0,0,0.06)" : "transparent")};
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  transition:
    flex-grow 1.05s cubic-bezier(0.19, 1, 0.22, 1),
    min-width 1.05s cubic-bezier(0.19, 1, 0.22, 1),
    background-color 0.7s ease,
    border-color 0.7s ease;
  display: flex;
  flex-direction: column;
  will-change: flex-grow;

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

  @media (max-width: 1279px) {
    min-width: ${({ $active }) => ($active ? "280px" : "170px")};
  }

  @media (max-width: 1023px) {
    flex: 1 1 auto;
    min-width: 100%;
    min-height: ${({ $active }) => ($active ? "560px" : "120px")};
    transition:
      min-height 1.05s cubic-bezier(0.19, 1, 0.22, 1),
      background-color 0.7s ease,
      border-color 0.7s ease;
  }

  @media (max-width: 767px) {
    min-height: ${({ $active }) => ($active ? "520px" : "110px")};
  }
`;

export const CardContent = styled.div<{
  $active: boolean;
  $visible: boolean;
}>`
  position: absolute;
  inset: 0;
  padding: ${({ $active }) => ($active ? "40px" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transition: opacity 0.55s cubic-bezier(0.19, 1, 0.22, 1);


  @media (max-width: 1279px) {
    padding: ${({ $active }) => ($active ? "24px" : "0")};
  }

  @media (max-width: 1023px) {
    position: static;
    inset: auto;
    display: ${({ $visible }) => ($visible ? "flex" : "none")};
    flex-direction: ${({ $active }) => ($active ? "column" : "row")};
    align-items: ${({ $active }) => ($active ? "stretch" : "center")};
    justify-content: space-between;
    gap: ${({ $active }) => ($active ? "20px" : "16px")};
    padding: ${({ $active }) => ($active ? "24px" : "16px 20px")};
  }
`;

export const SmallHeader = styled.div`
  position: relative;
  z-index: 2;
  padding: 34px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 1279px) {
    padding: 24px 8px 0;
  }

  @media (max-width: 1023px) {
    padding: 0;
    align-items: flex-start;
    gap: 10px;
    flex: 1;
  }
`;

export const SmallTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  font-weight: 700;
  text-align: center;

  @media (max-width: 1023px) {
    text-align: left;
  }
`;

export const SmallChipList = styled.div<{ $singleChip?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $singleChip }) =>
    $singleChip ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))"};
  justify-items: ${({ $singleChip }) => ($singleChip ? "center" : "stretch")};
  gap: 4px;
  width: 100%;

  @media (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    width: auto;
  }
`;

export const SmallChip = styled.span<{ $wide?: boolean; $singleChip?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $wide, $singleChip }) => {
    if ($singleChip) return "auto";
    return $wide ? "auto" : "100%";
  }};
  justify-self: ${({ $wide, $singleChip }) => {
    if ($singleChip) return "center";
    return $wide ? "start" : "stretch";
  }};
  border: 1px solid #757575;
  border-radius: 100px;
  padding: 4px 14px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #757575;
  background: transparent;
  white-space: nowrap;

  @media (max-width: 1023px) {
    width: auto;
    justify-self: start;
    border: none;
    padding: 0;
    background: transparent;
    color: #aaaaaa;
    font-size: 0.95rem;
    font-weight: 500;

    &::before {
      content: "#";
    }
  }
`;

export const ChipList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  width: 100%;
  max-width: 368px;

  @media (max-width: 1023px) {
    max-width: none;
  }
`;

export const ChipButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer !important;
  font-family: inherit;
  border-radius: 999px;
  padding: 14px 16px;
  width: 100%;
  font-size: clamp(0.95rem, 1.15vw, 1.125rem);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  transition:
    background-color 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease;
  border: 1px solid ${({ $active }) => ($active ? colors.primary : "#d8d8d8")};
  background: ${({ $active }) => ($active ? colors.primary : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#222")};

  &:hover {
    background: ${colors.primary};
    color: #fff;
    border-color: ${colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
  }

`;

export const ProductActionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  max-width: 368px;

  @media (max-width: 1023px) {
    max-width: none;
    align-items: center;
  }
`;

export const ViewMoreButton = styled.button`
  display: none;
  appearance: none;
  border: 0;
  background: transparent;
  color: ${colors.primary};
  font-family: inherit;
  font-size: clamp(1rem, 1.25vw, 1.875rem);
  font-weight: 700;
  line-height: 1.1;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  padding: 2px 4px;

  &:focus-visible {
    outline: 2px solid ${colors.primary};
    outline-offset: 2px;
    border-radius: 8px;
  }

  @media (max-width: 1023px) {
    display: inline-flex;
  }
`;

export const SmallImageWrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  margin-top: 24px;
  overflow: hidden;

  @media (max-width: 1023px) {
    width: 160px;
    min-width: 160px;
    height: 88px;
    margin-top: 0;
  }
`;

export const SmallImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;

export const SearchBadge = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(2px);
  display: grid;
  place-items: center;
  font-size: clamp(1.75rem, 3vw, 3rem);
  pointer-events: none;
  z-index: 2;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const BigImageWrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  max-height: 420px;
  overflow: hidden;

  @media (max-width: 1023px) {
    min-height: 220px;
  }
`;

export const BigBody = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-top: 14px;
  flex-wrap: wrap;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }

  @media (max-width: 767px) {
    align-items: stretch;
  }
`;

export const BigInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1023px) {
    align-items: center;
    text-align: center;
  }
`;

export const BigCategory = styled.p`
  margin: 0;
  font-size: clamp(1rem, 1.4vw, 1.375rem);
  font-weight: 600;
`;

export const BigTitle = styled.span`
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -1px;
  line-height: 1;
  font-weight: 700;
`;

export const BigSub = styled.span`
  font-size: 1rem;
`;

export const SwappableProductImage = styled(Image)<{ $visible: boolean }>`
  object-fit: contain;
  object-position: center center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.985)"};
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const ProductTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: productFadeIn 0.7s cubic-bezier(0.19, 1, 0.22, 1);

  @keyframes productFadeIn {
    from {
      opacity: 0.4;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

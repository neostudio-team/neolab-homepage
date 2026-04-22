import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/styles/theme";

export const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: stretch;
  min-height: 700px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Card = styled.button<{ $active: boolean }>`
  appearance: none;
  text-align: left;
  cursor: pointer;
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

  @media (max-width: 767px) {
    flex: 1 1 auto;
    min-height: ${({ $active }) => ($active ? "560px" : "200px")};
    transition:
      min-height 1.05s cubic-bezier(0.19, 1, 0.22, 1),
      background-color 0.7s ease,
      border-color 0.7s ease;
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
`;

export const SmallHeader = styled.div`
  position: relative;
  z-index: 2;
  padding: 34px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const SmallTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const SmallChipList = styled.div<{ $singleChip?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $singleChip }) =>
    $singleChip ? "minmax(0, 1fr)" : "repeat(2, minmax(0, 1fr))"};
  justify-items: ${({ $singleChip }) => ($singleChip ? "center" : "stretch")};
  gap: 4px;
  width: 100%;
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
  min-width: ${({ $wide, $singleChip }) => {
    if ($singleChip) return "auto";
    return $wide ? "auto" : "100px";
  }};
  border: 1px solid #757575;
  border-radius: 100px;
  padding: 4px 10px;
  font-size: 16px;
  font-weight: 500;
  color: #757575;
  background: transparent;
  white-space: nowrap;
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 368px;
  justify-content: flex-start;
`;

export const ChipButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  border-radius: 999px;
  padding: 16px;
  width: 180px;
  font-size: 18px;
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

export const SmallImageWrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  margin-top: 24px;
  overflow: hidden;
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
  font-size: 48px;
  pointer-events: none;
  z-index: 2;
`;

export const BigImageWrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  max-height: 420px;
  overflow: hidden;
`;

export const BigBody = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-top: 14px;
`;

export const BigInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BigCategory = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
`;

export const BigTitle = styled.span`
  font-size: 48px;
  letter-spacing: -1px;
  line-height: 1;
  font-weight: 700;
`;

export const BigSub = styled.span`
  font-size: 16px;
`;

export const ProductImage = styled(Image)`
  object-fit: contain;
  object-position: center bottom;
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

import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/styles/theme";
import { sectionPadding } from "@/styles/section";

export const Section = styled.section`
  background: #fff;
  ${sectionPadding}
`;

export const Row = styled.div`
  margin: 0 auto;
  max-width: 1640px;
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
    flex-grow 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    min-width 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.4s ease,
    border-color 0.4s ease;
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
      min-height 0.6s cubic-bezier(0.22, 1, 0.36, 1),
      background-color 0.4s ease,
      border-color 0.4s ease;
  }
`;

export const CardContent = styled.div`
  position: absolute;
  inset: 0;
  padding: 28px 28px 30px;
  display: flex;
  flex-direction: column;
`;

export const SmallHeader = styled.div`
  position: relative;
  z-index: 2;
  padding: 34px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SmallTitle = styled.h3`
  margin: 0;
  color: #111;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.05;
  text-align: center;
`;

export const SmallChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
`;

export const SmallChip = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #757575;
  border-radius: 100px;
  padding: 4px 10px;
  min-width: 64px;
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: #757575;
  background: transparent;
  white-space: nowrap;
`;

export const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 248px;
  justify-content: flex-end;
`;

export const ChipButton = styled.button<{ $active?: boolean }>`
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  border-radius: 999px;
  padding: 7px 14px;
  min-width: 104px;
  font-size: 14px;
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
  bottom: 72px;
  transform: translateX(-50%);
  width: 54px;
  height: 54px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  color: #111;
  font-size: 22px;
  pointer-events: none;
  z-index: 2;
`;

export const BigImageWrap = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 370px;
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
  color: #111;
  font-size: 28px;
  font-weight: 600;
`;

export const BigTitleRow = styled.div`
  display: block;
`;

export const BigTitle = styled.span`
  color: #111;
  font-size: 54px;
  font-weight: 700;
  line-height: 1;
`;

export const BigSub = styled.span`
  color: #555;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
`;

export const ProductImage = styled(Image)`
  object-fit: contain;
  object-position: center bottom;
`;

export const SwappableProductImage = styled(Image)<{ $visible: boolean }>`
  object-fit: contain;
  object-position: center center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.4s ease;
`;

export const ProductTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: productFadeIn 0.35s ease;

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

import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/theme";

const ink = "#171717";

export const Section = styled.section`
  background: #fff;
  padding: 2.5rem 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${media.lg} {
    flex-direction: row;
  }
`;

export const GalleryCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  ${media.md} {
    flex-direction: row;
  }

  ${media.lg} {
    width: 50%;
  }
`;

export const Thumbs = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  ${media.md} {
    flex-direction: column;
    overflow-x: visible;
    overflow-y: auto;
    max-height: 560px;
  }
`;

export const ThumbButton = styled.button<{ $active: boolean }>`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: border-color 0.15s;
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: ${({ $active }) => ($active ? `2px solid ${ink}` : "1px solid #e5e7eb")};

  &:hover {
    border-color: ${({ $active }) => ($active ? ink : "#9ca3af")};
  }
`;

export const ThumbImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #f9fafb;
`;

export const MainFrame = styled.div`
  flex: 1;
  background: #f9fafb;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  ${media.lg} {
    min-height: 560px;
  }
`;

export const MainImage = styled(Image)`
  width: 100%;
  max-width: 480px;
  object-fit: contain;
  padding: 1rem;
`;

export const InfoCol = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${media.lg} {
    width: 50%;
  }
`;

export const Eyebrow = styled.p`
  font-size: 14px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${ink};
  line-height: 1.25;
  margin-bottom: 0.75rem;

  ${media.lg} {
    font-size: 40px;
  }
`;

export const Tagline = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: ${ink};
  margin-bottom: 0.25rem;
`;

export const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: ${ink};
  margin-bottom: 1.5rem;
`;

export const ColorBlock = styled.div`
  margin-bottom: 1.5rem;
`;

export const ColorLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${ink};
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ColorRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const ColorSwatch = styled.button<{ $selected: boolean; $tone: "black" | "skyblue" }>`
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  border: 2px solid
    ${({ $selected }) => ($selected ? ink : "#d1d5db")};
  transition: border-color 0.15s, box-shadow 0.15s;
  padding: 0;
  cursor: pointer;
  background: ${({ $tone }) => ($tone === "black" ? "#1a1a1a" : "#87ceeb")};
  box-shadow: ${({ $selected }) =>
    $selected ? `0 0 0 2px #fff, 0 0 0 4px ${ink}` : "none"};
`;

export const BuyLink = styled.a`
  display: inline-block;
  background: ${ink};
  color: #fff;
  text-align: center;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-size: 15px;
  transition: background 0.15s;
  width: 100%;

  ${media.lg} {
    width: auto;
  }

  &:hover {
    background: #333;
  }
`;

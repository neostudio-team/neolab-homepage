import Image from "next/image";
import styled from "styled-components";


export const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-size: clamp(44px, 5.5vw, 80px);
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 1.12;
  white-space: pre-line;
  flex: 1;
`;

export const ContactButton = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  background: transparent;
  color: #fff;
  padding: 0;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: -0.5px;

  &:hover span:last-child {
    transform: scale(1.05);
  }
`;

export const ContactText = styled.span`
  color: #fff;
  font-size: clamp(40px, 4vw, 60px);
  font-weight: 600;
`;

export const ContactCircle = styled.span`
  display: grid;
  place-items: center;
  width: 140px;
  height: 140px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  transition: transform 0.3s ease;
  font-size: 48px;
`;

export const LogosRow = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    gap: 16px;
  }
`;

export const LogoBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 280 / 140;
  border-radius: 16px;
  background: #fff;
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: 16px;
`;

export const LogoImage = styled(Image)`
  object-fit: contain;
  object-position: center;
`;

// legacy
export const ButtonWrap = styled.div`
  flex-shrink: 0;
`;

import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  background: #fcfcfc;
  color: #0a0a0a;
  padding: 140px 0 160px;
`;

export const VerticalStripes = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: repeating-linear-gradient(
    to right,
    rgba(0, 0, 0, 0.05) 0px,
    rgba(0, 0, 0, 0.05) 1px,
    transparent 1px,
    transparent 47px
  );
  mask-image: radial-gradient(ellipse at center, #000 30%, transparent 85%);
`;

export const Inner = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1640px;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

export const HeadingBlock = styled.div`
  margin-bottom: 80px;
`;

export const Title = styled.h2`
  margin: 0;
  white-space: pre-line;
  line-height: 1.1;
  font-size: clamp(44px, 5.5vw, 80px);
  font-weight: 700;
  letter-spacing: -1px;
`;

export const Subtitle = styled.p`
  margin: 1rem 0 0;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.55);

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const PillRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Pill = styled.div`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 100px;
  padding: 32px 56px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 167px;
  justify-content: center;
`;

export const Label = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #111;
`;

export const CountRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Count = styled.span`
  color: #111;
  line-height: 1;
  font-size: clamp(48px, 5vw, 72px);
  font-weight: 700;
  letter-spacing: -2px;
`;

export const Unit = styled.span`
  color: #111;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 355fr 1269fr;
  }
`;

export const InfoCard = styled.div`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 32px 36px;
  min-height: 285px;
`;

export const InfoTitle = styled.h3`
  margin: 0 0 18px;
  font-size: 24px;
  font-weight: 700;
  color: #111;
`;

export const InfoBody = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #111;
  white-space: pre-line;
`;

export const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  font-size: 16px;
  line-height: 1.6;
  color: #111;
  white-space: pre-line;
`;

// legacy kept for compatibility
export const CardGrid = styled.div``;
export const Card = styled.div``;
export const Desc = styled.p``;

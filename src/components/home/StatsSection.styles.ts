import styled from "styled-components";

export const Title = styled.h2`
  margin: 0;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 7.5rem;
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
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Pill = styled.div`
  background: #fff;
  border: 1px solid #111;
  border-radius: 100px;
  padding: 24px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const CountRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

export const Count = styled.span`
  font-size: 5rem;
  font-weight: 700;
`;

export const Unit = styled.span`
  font-size: 3rem;
  font-weight: 600;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: rgba(255, 255, 255, 0.10);
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: 32px;
`;

export const InfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const InfoBody = styled.div`
  font-size: 1rem;
`;

export const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  font-size: 1rem;
`;

export const BulletList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BulletItem = styled.li`
  position: relative;
  padding-left: 18px;
  line-height: 1.5;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`;

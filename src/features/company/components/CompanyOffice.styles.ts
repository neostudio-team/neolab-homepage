import styled from "styled-components";

const orange = "#FF9900";

export const OfficeInner = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 64px);
`;

export const OfficeHeader = styled.div`
  position: relative;
`;

export const OfficeDot = styled.span`
  position: absolute;
  top: -8px;
  left: -52px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 8px solid ${orange};

  @media (max-width: 1023px) {
    left: -16px;
    top: -16px;
    width: 28px;
    height: 28px;
    border-width: 6px;
  }
`;

export const OfficeTitle = styled.h2`
  margin: 0;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(2rem, 4.5vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: #111111;
`;

export const OfficeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const OfficeCard = styled.article`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 16px;
  padding: clamp(28px, 3vw, 40px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const OfficeCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const OfficeBadge = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: clamp(1rem, 1.2vw, 1.25rem);
  font-weight: 700;
  color: ${orange};
  letter-spacing: -0.01em;
`;

export const OfficeName = styled.h3`
  margin: 0;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(1.25rem, 1.6vw, 1.5rem);
  font-weight: 600;
  color: #111111;
  letter-spacing: -0.01em;
`;

export const OfficeAddress = styled.p`
  margin: 0;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(0.95rem, 1vw, 1rem);
  line-height: 1.6;
  color: #111111;
  white-space: pre-line;
`;

export const OfficeMapLink = styled.a`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #ffffff;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  color: #111111;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background: #f6f6f6;
    border-color: #bbb;
  }
`;

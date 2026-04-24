import styled from "styled-components";

const orange = "#FF9900";

export const JourneyInner = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: clamp(40px, 6vw, 80px);
  align-items: start;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`;

export const JourneyHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const JourneyDot = styled.span`
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

export const JourneyTitle = styled.h2`
  margin: 0;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(2rem, 4.5vw, 5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

export const JourneyYear = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: clamp(4rem, 10vw, 12.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${orange};

  span {
    color: #b5b5b5;
  }
`;

export const JourneyEvents = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: "Pretendard", sans-serif;
`;

export const JourneyEventItem = styled.li<{ $highlight?: boolean }>`
  font-size: ${({ $highlight }) =>
    $highlight ? "clamp(1.25rem, 2.4vw, 2.5rem)" : "clamp(1rem, 1.6vw, 2rem)"};
  font-weight: ${({ $highlight }) => ($highlight ? 700 : 600)};
  line-height: 1.4;
  color: #111111;
  opacity: ${({ $highlight }) => ($highlight ? 1 : 0.25)};

  &::before {
    content: "—  ";
  }
`;

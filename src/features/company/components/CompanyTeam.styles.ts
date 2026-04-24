import styled from "styled-components";

const orange = "#FF9900";

export const TeamInner = styled.div`
  max-width: 1640px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(40px, 6vw, 80px);
`;

export const TeamHeading = styled.h2`
  margin: 0;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(1.75rem, 4vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-align: center;
  white-space: pre-line;
  color: #111111;
`;

export const TeamDescription = styled.p`
  margin: 0;
  max-width: 1100px;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.5rem);
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.01em;
  text-align: center;
  white-space: pre-line;
  color: rgba(0, 0, 0, 0.7);
`;

export const OrgChart = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 1;
  margin-top: clamp(20px, 4vw, 60px);
`;

export const OrgRing = styled.div<{ $size: number; $alpha: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $size }) => $size}%;
  height: ${({ $size }) => $size}%;
  border-radius: 50%;
  background: rgba(255, 153, 0, ${({ $alpha }) => $alpha});
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const OrgCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 41%;
  height: 41%;
  border-radius: 50%;
  background: ${orange};
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-family: "BM Dohyeon", "Pretendard", sans-serif;
  font-weight: 400;
  font-size: clamp(1.5rem, 3.2vw, 3.125rem);
  line-height: 1.2;
  text-align: center;
  white-space: pre-line;
`;

export const OrgNode = styled.div`
  position: absolute;
  width: clamp(110px, 14vw, 180px);
  height: clamp(110px, 14vw, 180px);
  border-radius: 999px;
  background: #ffffff;
  border: 2px solid ${orange};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  text-align: center;
  transform: translate(-50%, -50%);
  box-shadow: 0 8px 24px -10px rgba(0, 0, 0, 0.18);

  svg {
    width: clamp(28px, 3.6vw, 48px);
    height: clamp(28px, 3.6vw, 48px);
  }
`;

export const OrgNodeLabel = styled.span`
  font-family: "Pretendard", sans-serif;
  font-size: clamp(0.85rem, 1.1vw, 1.125rem);
  font-weight: 600;
  color: #111111;
  letter-spacing: -0.01em;
`;

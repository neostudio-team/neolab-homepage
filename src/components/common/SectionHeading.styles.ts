import styled from "styled-components";

export const HeadingWrap = styled.div`
  display: flex;
  margin-bottom: 120px;
  align-items: center;
  justify-content: center;
`;

export const HeadingTitle = styled.h2<{ $tone: "dark" | "light" }>`
  position: relative;
  margin: 0;
  color: ${({ $tone }) => ($tone === "light" ? "#fff" : "#000")};
  font-size: clamp(44px, 5.5vw, 80px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    left: -30px;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 10px solid #f3a101;
  }
`;

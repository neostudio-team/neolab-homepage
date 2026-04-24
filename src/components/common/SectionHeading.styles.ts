import { colors } from "@/styles/theme";
import styled from "styled-components";

export const HeadingWrap = styled.div`
  display: flex;
  margin-bottom: clamp(48px, 8vw, 120px);
  align-items: center;
  justify-content: center;
`;

export const HeadingTitle = styled.h2<{ $tone: "dark" | "light" }>`
  position: relative;
  margin: 0;
  color: ${({ $tone }) => ($tone === "light" ? "#fff" : "#000")};
  font-size: clamp(2rem, 5.5vw, 5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1px;

  &::before {
    content: "";
    position: absolute;
    top: clamp(-30px, -2.5vw, -16px);
    left: clamp(-30px, -2.5vw, -16px);
    width: clamp(20px, 2.5vw, 40px);
    height: clamp(20px, 2.5vw, 40px);
    border-radius: 999px;
    border: clamp(5px, 0.6vw, 10px) solid ${colors.primary};
  }
`;

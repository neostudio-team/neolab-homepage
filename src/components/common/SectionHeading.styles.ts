import { colors } from "@/styles/theme";
import styled from "styled-components";

export const HeadingWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(24px, 2vw, 32px);
`;

export const HeadingTitle = styled.h2<{ $tone: "dark" | "light" }>`
  position: relative;
  color: ${({ $tone }) => ($tone === "light" ? "#fff" : "#000")};
  font-size: clamp(2rem, 4.2vw, 4rem);
  font-weight: 700;

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

export const HeadingDesc = styled.p<{ $tone: "dark" | "light" }>`
  text-align: center;
  color: ${({ $tone }) => ($tone === "light" ? "#fff" : "#111")};
  font-size: clamp(1rem, 1.6vw, 1.5rem);
  white-space: pre-line;
`;

import styled from "styled-components";
import { media } from "@/styles/theme";

export const Main = styled.main`
  min-height: 100vh;
  background: #f9fafb;
`;

export const Inner = styled.div`
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem 1rem;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  border: 1px solid #f3f4f6;
  padding: 2rem;

  ${media.md} {
    padding: 3rem;
  }
`;

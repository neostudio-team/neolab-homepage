import { css } from "styled-components";

export const sectionPadding = css`
  padding: 120px 1rem;

  @media (min-width: 768px) {
    padding: 160px 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 200px clamp(40px, 7.3vw, 140px);
  }
`;

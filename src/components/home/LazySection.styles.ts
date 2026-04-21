import styled from "styled-components";

export const Shell = styled.div``;

export const Placeholder = styled.div<{ $minHeight: string }>`
  min-height: ${({ $minHeight }) => $minHeight};
`;

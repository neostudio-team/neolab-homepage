import styled from "styled-components";
import { colors } from "@/styles/theme";

export const Root = styled.div`
  border-top: 1px solid #f3f4f6;

  & > * + * {
    border-top: 1px solid #f3f4f6;
  }
`;

export const Item = styled.div`
  padding: 0.25rem 0;
`;

export const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #ff4e00;
  }
`;

export const Chevron = styled.span`
  font-size: 1.25rem;
  color: #9ca3af;
  margin-left: 1rem;
`;

export const Answer = styled.div`
  padding-bottom: 1.25rem;
  font-size: 14px;
  color: #555;
  line-height: 1.625;

  & p + p {
    margin-top: 0.5rem;
  }
`;

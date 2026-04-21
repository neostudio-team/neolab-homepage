import styled from "styled-components";
import { colors } from "@/styles/theme";

export const FormRoot = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32rem;
`;

const field = `
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

export const TextInput = styled.input`
  ${field}
`;

export const SelectField = styled.select`
  ${field}
  color: #4b5563;
`;

export const TextArea = styled.textarea`
  ${field}
  height: 8rem;
  resize: none;
`;

export const SubmitButton = styled.button`
  background: ${colors.primary};
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${colors.primaryDark};
  }
`;

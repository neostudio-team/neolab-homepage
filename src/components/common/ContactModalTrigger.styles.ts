import styled from "styled-components";
import { colors, media } from "@/styles/theme";

const fieldBase = `
  width: 100%;
  background: #5a5250;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  font-size: 14px;
  border: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  }
`;

export type PillVariant = "default" | "primary" | "blackRound" | "darkGrid";

export const PillButton = styled.button<{ $pillVariant?: PillVariant }>`
  display: inline-block;
  cursor: pointer;
  font-weight: 600;
  transition:
    background 0.15s,
    color 0.15s,
    opacity 0.15s,
    border-color 0.15s;

  ${({ $pillVariant = "default" }) =>
    $pillVariant === "default" &&
    `
    border: 1px solid rgba(255, 255, 255, 0.4);
    color: #fff;
    font-size: 17px;
    padding: 1rem 2.5rem;
    border-radius: 9999px;
    background: transparent;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `}

  ${({ $pillVariant }) =>
    $pillVariant === "primary" &&
    `
    background: #f26522;
    color: #fff;
    padding: 0.75rem 2rem;
    border-radius: 0.25rem;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 14px;
    &:hover {
      background: #d4551a;
    }
  `}

  ${({ $pillVariant }) =>
    $pillVariant === "blackRound" &&
    `
    background: #000;
    color: #fff;
    font-size: 14px;
    padding: 0.75rem 2rem;
    border-radius: 9999px;
    border: none;
    &:hover {
      opacity: 0.8;
    }
  `}

  ${({ $pillVariant }) =>
    $pillVariant === "darkGrid" &&
    `
    background: #2d2d2d;
    color: #fff;
    font-size: 14px;
    padding: 0.75rem 2rem;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 0;
    font-weight: 500;
    &:hover {
      background: #444;
    }
  `}
`;

export const CircleButton = styled.button`
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 1.6vw, 24px);
  text-align: left;
  color: #fff;
  font-weight: 600;
  overflow: visible;
  transition:
    color 0.25s ease,
    border-color 0.25s ease;
  background: transparent;
  cursor: pointer;
  width: clamp(220px, 23vw, 300px);
  height: clamp(220px, 23vw, 300px);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.75);
  font-size: clamp(24px, 3vw, 52px);
  letter-spacing: -0.02em;
  line-height: 1;
  padding: 20px 24px;

  &:hover {
    border-color: rgba(255, 255, 255, 0.95);
  }
`;

export const CircleLine1 = styled.span`
  white-space: nowrap;
  font-size: 3.5rem;
  position: absolute;
  left: -140px;
  background: ${colors.primary};
`;

export const CircleArrow = styled.span`
  position: absolute;
  right: 18px;
  width: clamp(68px, 8vw, 105px);
  height: 2px;
  background: #fff;
  transform: translateX(0);
  transition: transform 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 14px;
    height: 14px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: translateY(-50%) rotate(45deg);
  }

  ${CircleButton}:hover & {
    transform: translateX(clamp(16px, 2.1vw, 80px));
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
`;

export const ModalPanel = styled.div`
  position: relative;
  width: 100%;
  max-width: 80rem;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 0.5rem;
  background: #3a3230;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  line-height: 1;
  z-index: 10;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const ModalBody = styled.div`
  padding: 2rem;

  ${media.md} {
    padding: 3rem;
  }
`;

export const ModalTitle = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
  margin-bottom: 2rem;
`;

export const SuccessWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  gap: 1.5rem;
`;

export const SuccessIcon = styled.div`
  font-size: 3rem;
`;

export const SuccessLead = styled.p`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
`;

export const SuccessSub = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;

export const SuccessClose = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background: #fff;
  color: #3a3230;
  font-weight: 700;
  border-radius: 0.25rem;
  font-size: 14px;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
`;

export const FormGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FormSelect = styled.select`
  ${fieldBase}
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='white' d='M6 8L0 0h12z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
`;

export const FormInput = styled.input`
  ${fieldBase}
`;

export const FormTextarea = styled.textarea`
  ${fieldBase}
  resize: none;
`;

export const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #5a5250;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
`;

export const FileName = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FilePickButton = styled.button`
  flex-shrink: 0;
  background: #3a3230;
  color: #fff;
  font-size: 12px;
  padding: 0.375rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #2d2624;
  }
`;

export const HiddenFileInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const PrivacyCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PrivacyBox = styled.div`
  background: #fff;
  border-radius: 0.25rem;
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  max-height: 360px;
  font-size: 12px;
  color: #374151;
  line-height: 1.625;
`;

export const PrivacyHeading = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0.75rem;
  color: #111827;
`;

export const PrivacyContent = styled.div`
  white-space: pre-wrap;
`;

export const PrivacyLoading = styled.p`
  color: #9ca3af;
`;

export const AgreeLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  user-select: none;
`;

export const AgreeCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #fb923c;
`;

export const AgreeText = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

export const ErrorText = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: #f87171;
  font-size: 14px;
`;

export const SubmitWrap = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 16rem;
  padding: 1rem;
  background: #fff;
  color: #cc2222;
  font-weight: 700;
  letter-spacing: 0.3em;
  font-size: 14px;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: #f3f4f6;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

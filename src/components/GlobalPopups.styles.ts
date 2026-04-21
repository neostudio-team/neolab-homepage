import styled, { css } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9998;
  pointer-events: none;
`;

const positionBase = css`
  position: fixed;
  z-index: 9999;
  background: #fff;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  pointer-events: auto;
  border: 1px solid #f3f4f6;
`;

export const PopupCenter = styled.div`
  ${positionBase}
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.75rem;
`;

export const PopupTopLeft = styled.div`
  ${positionBase}
  top: 1.5rem;
  left: 1.5rem;
  border-radius: 0.5rem;
`;

export const PopupTopRight = styled.div`
  ${positionBase}
  top: 1.5rem;
  right: 1.5rem;
  border-radius: 0.5rem;
`;

export const PopupBottomLeft = styled.div`
  ${positionBase}
  bottom: 1.5rem;
  left: 1.5rem;
  border-radius: 0.5rem;
`;

export const PopupBottomRight = styled.div`
  ${positionBase}
  bottom: 1.5rem;
  right: 1.5rem;
  border-radius: 0.5rem;
`;

export const PopupBody = styled.div`
  flex: 1;
  overflow-y: auto;
  width: 100%;
  max-height: 85vh;
`;

export const PopupHtml = styled.div`
  width: 100%;
`;

export const PopupFooter = styled.div`
  background: #f8f9fa;
  border-top: 1px solid #e5e7eb;
  padding: 0.625rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

export const HideLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  cursor: pointer;
  color: #6b7280;
  user-select: none;

  &:hover {
    color: #374151;
  }
`;

export const HideCheckbox = styled.input`
  width: 14px;
  height: 14px;
  accent-color: #1a1a2e;
`;

export const CloseBtn = styled.button`
  color: #4b5563;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    color: #111827;
  }
`;

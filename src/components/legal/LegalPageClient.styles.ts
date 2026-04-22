import styled from "styled-components";

export const MainPre = styled.pre`
  white-space: pre-wrap;
  font-family: inherit;
  font-size: 14px;
  color: #374151;
  line-height: 1.625;
  margin: 0;
`;

export const PrevSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #f3f4f6;
`;

export const PrevRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SelectWrap = styled.div`
  position: relative;
  flex: 1;
  max-width: 20rem;
`;

export const VersionSelect = styled.select`
  width: 100%;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.625rem 2rem 0.625rem 1rem;
  color: #374151;
  background: #fff;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #9ca3af;
  }
`;

export const SelectChevron = styled.span`
  pointer-events: none;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  font-size: 12px;
`;

export const CloseLink = styled.button`
  font-size: 12px;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #4b5563;
  }
`;

export const PrevPanel = styled.div`
  margin-top: 1rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  position: relative;
`;

export const VersionMeta = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  gap: 0.75rem;
  font-size: 12px;
  color: #9ca3af;
`;

export const LoadingBox = styled.div`
  font-size: 12px;
  color: #9ca3af;
  text-align: center;
  padding: 2rem 0;
`;

export const PrevPre = styled.pre`
  white-space: pre-wrap;
  font-family: inherit;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.625;
  margin: 0;
`;

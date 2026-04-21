import styled from "styled-components";
import Link from "next/link";

export const Section = styled.section`
  padding-top: 6rem;
  padding-bottom: 6rem;
  position: relative;
  overflow: hidden;
  background: #fcf9f9;
`;

export const Deco1 = styled.div`
  position: absolute;
  top: 4rem;
  left: 2rem;
  width: 5rem;
  height: 5rem;
  background: #d39b9b;
  border-radius: 9999px;
  opacity: 0.6;
  pointer-events: none;
`;

export const Deco2 = styled.div`
  position: absolute;
  top: 9rem;
  right: 4rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #d39b9b;
  border-radius: 9999px;
  opacity: 0.6;
  pointer-events: none;
`;

export const Deco3 = styled.div`
  position: absolute;
  bottom: -8rem;
  left: -4rem;
  width: 500px;
  height: 500px;
  background: #f1eded;
  border-radius: 9999px;
  opacity: 0.4;
  pointer-events: none;
`;

export const Deco4 = styled.div`
  position: absolute;
  bottom: -4rem;
  right: -4rem;
  width: 400px;
  height: 400px;
  background: #f1eded;
  border-radius: 9999px;
  opacity: 0.4;
  pointer-events: none;
`;

export const Deco5 = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 2.5rem;
  width: 6rem;
  height: 6rem;
  background: #2cdbd4;
  border-radius: 9999px;
  border: 8px solid #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  pointer-events: none;
`;

export const Inner = styled.div`
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 10;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 46px;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

export const Lead = styled.p`
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.625;
  font-size: 15px;
`;

export const PrivacyNote = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 3rem;
`;

export const PrivacyLink = styled(Link)`
  color: #2ea3f2;

  &:hover {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0;
  text-align: left;
`;

export const FieldRow = styled.div`
  border-bottom: 1px solid #d1d5db;
`;

export const FieldInput = styled.input`
  width: 100%;
  background: transparent;
  padding: 1rem 0.5rem;
  font-size: 15px;
  border: none;
  transition: color 0.15s;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`;

export const FieldTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  padding: 1rem 0.5rem;
  font-size: 15px;
  border: none;
  resize: none;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
  }
`;

export const ConsentBlock = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1rem;
`;

export const ConsentLead = styled.p`
  font-size: 13px;
  color: #666;
  margin-bottom: 0.75rem;
`;

export const ConsentLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 13px;
  color: #666;
`;

export const ConsentCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #ff4e00;
`;

export const SubmitWrap = styled.div`
  padding-top: 1rem;
`;

export const SubmitButton = styled.button`
  background: #222;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.2em;
  padding: 1rem 3rem;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #333;
  }
`;

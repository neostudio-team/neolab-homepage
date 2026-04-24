import styled from "styled-components";
import Image from "next/image";

export const Root = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 600px;
`;

export const SlideLayer = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  transition: opacity 0.7s;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
`;

export const SlideImage = styled(Image)`
  object-fit: cover;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: background 0.15s;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const NavButtonPrev = styled(NavButton)`
  left: 1rem;
`;

export const NavButtonNext = styled(NavButton)`
  right: 1rem;
`;

export const NavIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`;

export const DotsRow = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

export const DotButton = styled.button<{ $active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background 0.15s;
  background: ${({ $active }) => ($active ? "#fff" : "rgba(255,255,255,0.5)")};
`;

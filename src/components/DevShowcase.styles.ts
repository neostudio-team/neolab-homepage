import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
  position: relative;
  background: #0d1117;
  overflow: hidden;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowcaseImage = styled(Image)`
  width: 100%;
  height: auto;
  opacity: 0.8;
`;

import { ImageWrap, Section, ShowcaseImage } from "./DevShowcase.styles";

export default function DevShowcase() {
  return (
    <Section>
      <ImageWrap>
        <ShowcaseImage
          src="/images/home/web-dev-13.png"
          alt="NeoLAB Development Showcase"
          width={1920}
          height={1021}
        />
      </ImageWrap>
    </Section>
  );
}

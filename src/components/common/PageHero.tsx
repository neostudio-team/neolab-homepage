import Reveal from "@/components/common/Reveal";
import { HeroOverlay, HeroSection, HeroTitle } from "./PageHero.styles";

interface PageHeroProps {
  title: string;
  backgroundImage: string;
  overlayBackground?: string;
  height?: string;
}

const defaultOverlay =
  "linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45))";
const defaultHeight = "clamp(360px, 50vw, 950px)";

export default function PageHero(props: PageHeroProps) {
  const {
    title,
    backgroundImage,
    overlayBackground = defaultOverlay,
    height = defaultHeight,
  } = props;

  return (
    <HeroSection $backgroundImage={backgroundImage} $height={height}>
      <HeroOverlay $overlayBackground={overlayBackground} aria-hidden />
      <Reveal y={40} duration={1.1} once amount={0.1}>
        <HeroTitle>{title}</HeroTitle>
      </Reveal>
    </HeroSection>
  );
}

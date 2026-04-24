import Reveal from "@/components/common/Reveal";
import { HeroOverlay, HeroSection, HeroTitle } from "./CompanyHero.styles";

export default function CompanyHero() {
  return (
    <HeroSection>
      <HeroOverlay aria-hidden />
      <Reveal y={40} duration={1.1} once amount={0.1}>
        <HeroTitle>회사 개요</HeroTitle>
      </Reveal>
    </HeroSection>
  );
}

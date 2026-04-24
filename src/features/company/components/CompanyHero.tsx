import { HeroOverlay, HeroSection, HeroTitle } from "./CompanyHero.styles";

export default function CompanyHero() {
  return (
    <HeroSection>
      <HeroOverlay aria-hidden />
      <HeroTitle>회사 개요</HeroTitle>
    </HeroSection>
  );
}

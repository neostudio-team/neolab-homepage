import Image from "next/image";
import {
  Container,
  FeatureBody,
  FeatureHeading,
  FeatureImg,
  FeatureRow,
  FeatureSection,
  Half,
  HeroCol,
  HeroHeading,
  HeroImageCol,
  HeroImg,
  HeroInner,
  HeroLead,
  HeroSection,
} from "./AppPage.styles";

interface Feature {
  title: string;
  description: string;
}

interface AppPageProps {
  hero: {
    title: string;
    subtitle: string;
  };
  features: Feature[];
  heroImage: string;
  featureImages?: string[];
}

export default function AppPage({ hero, features, heroImage, featureImages }: AppPageProps) {
  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroCol>
            <HeroHeading>{hero.title}</HeroHeading>
            <HeroLead>{hero.subtitle}</HeroLead>
          </HeroCol>
          <HeroImageCol>
            <HeroImg src={heroImage} alt={hero.title} width={500} height={400} />
          </HeroImageCol>
        </HeroInner>
      </HeroSection>

      {features.map((feature, i) => {
        const isEven = i % 2 === 0;
        const hasFeatImg = featureImages && featureImages[i];

        return (
          <FeatureSection key={feature.title} $light={isEven}>
            <Container>
              {hasFeatImg ? (
                <FeatureRow $reverse={!isEven}>
                  <Half>
                    <FeatureImg src={featureImages[i]} alt={feature.title} width={540} height={400} />
                  </Half>
                  <Half>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureBody>{feature.description}</FeatureBody>
                  </Half>
                </FeatureRow>
              ) : (
                <FeatureRow $reverse={!isEven}>
                  <Half>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureBody>{feature.description}</FeatureBody>
                  </Half>
                </FeatureRow>
              )}
            </Container>
          </FeatureSection>
        );
      })}
    </>
  );
}

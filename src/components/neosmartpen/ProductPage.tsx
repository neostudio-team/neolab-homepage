import Image from "next/image";
import {
  Container,
  FeatureBody,
  FeatureCenter,
  FeatureCenterDesc,
  FeatureCenterTitle,
  FeatureHeading,
  FeatureImg,
  FeatureRow,
  FeatureSection,
  Half,
  HeroCol,
  HeroEyebrow,
  HeroHeading,
  HeroImageCol,
  HeroImg,
  HeroInner,
  HeroSection,
  SpecRow,
  SpecsList,
  SpecsSection,
  SpecsTitle,
  SpecValue,
} from "./ProductPage.styles";

interface Feature {
  title: string;
  description: string;
}

interface ProductPageProps {
  hero: {
    title: string;
    subtitle: string;
  };
  features: Feature[];
  heroImage: string;
  featureImages?: string[];
  specs?: Record<string, string>;
}

export default function ProductPage({ hero, features, heroImage, featureImages, specs }: ProductPageProps) {
  return (
    <>
      <HeroSection>
        <HeroInner>
          <HeroCol>
            <HeroEyebrow>{hero.subtitle}</HeroEyebrow>
            <HeroHeading>{hero.title}</HeroHeading>
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
                <FeatureCenter>
                  <FeatureCenterTitle>{feature.title}</FeatureCenterTitle>
                  <FeatureCenterDesc>{feature.description}</FeatureCenterDesc>
                </FeatureCenter>
              )}
            </Container>
          </FeatureSection>
        );
      })}

      {specs && (
        <SpecsSection>
          <Container>
            <SpecsTitle>{specs.title || "Specifications"}</SpecsTitle>
            <SpecsList>
              {Object.entries(specs)
                .filter(([k]) => k !== "title")
                .map(([key, value]) => (
                  <SpecRow key={key}>
                    <SpecValue>{value}</SpecValue>
                  </SpecRow>
                ))}
            </SpecsList>
          </Container>
        </SpecsSection>
      )}
    </>
  );
}

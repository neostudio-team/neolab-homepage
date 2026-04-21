import {
  Body,
  CtaWrap,
  ExternalLink,
  GithubButton,
  Inner,
  Section,
  Subtitle,
  Title,
} from "./ResearchSection.styles";

interface ResearchSectionProps {
  dict: {
    title: string;
    subtitle: string;
    microsoft: string;
    germanAI: string;
    learnMore: string;
  };
}

export default function ResearchSection({ dict }: ResearchSectionProps) {
  return (
    <Section>
      <Inner>
        <Title>{dict.title}</Title>
        <Subtitle>{dict.subtitle}</Subtitle>
        <Body>
          <p>
            {dict.microsoft} ( →{" "}
            <ExternalLink
              href="https://www.microsoft.com/en-us/research/publication/holodoc-enabling-mixed-reality-workspaces-that-harness-physical-and-digital-content-2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.learnMore}
            </ExternalLink>{" "}
            )
          </p>
          <p>
            {dict.germanAI} ( →{" "}
            <ExternalLink
              href="https://iml.dfki.de/cognitive-assessments-using-speech-based-dialogue-smartpen-and-ml/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.learnMore}
            </ExternalLink>{" "}
            )
          </p>
        </Body>
        <CtaWrap>
          <GithubButton href="https://github.com/NeoSmartpen" target="_blank" rel="noopener noreferrer">
            Open source code for Developers »
          </GithubButton>
        </CtaWrap>
      </Inner>
    </Section>
  );
}

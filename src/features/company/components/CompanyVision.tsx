import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import RevealHeadingBody from "@/components/common/RevealHeadingBody";
import {
  IndustryCard,
  IndustryContent,
  IndustryDescription,
  IndustryEyebrow,
  IndustryGrid,
  IndustryHoverContent,
  IndustryHoverText,
  IndustryIcon,
  IndustryIconBox,
  IndustryLabel,
  VisionBodyGroup,
  VisionHeading,
  VisionParagraph,
  VisionWatermark,
  VisionWatermarkText,
  VisionWatermarkTrack,
} from "./CompanyVision.styles";
import { Icon } from "@iconify/react";

const industries = [
  {
    key: "education",
    eyebrow: "Education",
    label: "교육",
    description: "지식과 정보를 누구나 쉽게\n누릴 수 있는 혁신적인 학습 경험",
    image: "/images/company/industry-education.png",
  },
  {
    key: "medical",
    eyebrow: "Medical & Legal",
    label: "의료・법률",
    description: "정확한 기록이 생명인 분야의\n신뢰할 수 있는 디지털화",
    image: "/images/company/industry-medical.png",
  },
  {
    key: "construction",
    eyebrow: "Construction & Business",
    label: "건설・산업",
    description: "안전과 효율이 직결되는 현장의\n스마트 기록 솔루션",
    image: "/images/company/industry-construction.png",
  },
  {
    key: "aicare",
    eyebrow: "AI Care",
    label: "AI 돌봄",
    description: "AI와 결합한 따뜻한 돌봄으로\n유아 및 노년층의 다정한 친구",
    image: "/images/company/industry-aicare.png",
  },
];

function renderIndustryIcon(industryKey: string) {
  if (industryKey === "education") {
    return (
      <Icon icon="fluent-mdl2:education" fontSize={80} />
    );
  }

  if (industryKey === "medical") {
    return (
      <Icon icon="fluent-mdl2:medical" fontSize={80} />
    );
  }

  if (industryKey === "construction") {
    return (
      <Icon icon="fluent-mdl2:build-issue" fontSize={80} />
    );
  }

  return (
    <Icon icon="streamline-flex:health-care-2" fontSize={80} />
  );
}

export default function CompanyVision() {
  const watermarkText = "Write the Future, Connect the world.";

  return (
    <Section contained={false}>
      <RevealHeadingBody
        title={
          <VisionHeading>
            아날로그의 익숙함 위에
            <br />
            <span>디지털의 무한한 가능성</span>을 더합니다.
          </VisionHeading>
        }
        titleReveal={{ y: 20, duration: 0.8 }}
        description={
          <VisionBodyGroup>
            <VisionParagraph>
              네오랩컨버전스는 Ncode™ 기술을 통해 필기를 정교한 데이터로 변환하고,
              <br />
              종이 위에서 살아 움직이는 소리로 지식과 정보를 누구나 쉽게 누릴 수 있는 세상을 만듭니다.
            </VisionParagraph>
            <VisionParagraph>
              우리는 세상의 모든 기록과 소리를 가치 있는 데이터로 연결하여, 비즈니스와 라이프스타일의 새로운 기준을 세웁니다.
            </VisionParagraph>
          </VisionBodyGroup>
        }
        descriptionReveal={{ y: 24, duration: 0.8, delay: 0.1 }}
      />

      <IndustryGrid>
        {industries.map((industry, index) => (
          <Reveal key={industry.key} y={18} duration={0.7} delay={0.12 + index * 0.08}>
            <IndustryCard $bg={industry.image}>
              <IndustryContent>
                <IndustryEyebrow>{industry.eyebrow}</IndustryEyebrow>
                <IndustryLabel>{industry.label}</IndustryLabel>
              </IndustryContent>
              <IndustryHoverContent>
                <IndustryIconBox>{renderIndustryIcon(industry.key)}</IndustryIconBox>
                <IndustryHoverText>
                  <IndustryLabel>{industry.label}</IndustryLabel>
                  <IndustryDescription>{industry.description}</IndustryDescription>
                </IndustryHoverText>
              </IndustryHoverContent>
            </IndustryCard>
          </Reveal>
        ))}
      </IndustryGrid>

      <VisionWatermark aria-hidden>
        <VisionWatermarkTrack>
          <VisionWatermarkText>{watermarkText}</VisionWatermarkText>
          <VisionWatermarkText>{watermarkText}</VisionWatermarkText>
        </VisionWatermarkTrack>
      </VisionWatermark>
    </Section>
  );
}

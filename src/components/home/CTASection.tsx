"use client";

import ContactModalTrigger from "../common/ContactModalTrigger";
import {
  Inner,
  LogoBox,
  LogoImage,
  LogosRow,
  Section,
  Title,
  TopRow,
} from "./CTASection.styles";

interface CTASectionProps {
  dict?: unknown;
}

const logos = [
  { name: "partner-1", src: "/images/home/figma/cta-1.png" },
  { name: "partner-2", src: "/images/home/figma/cta-2.png" },
  { name: "partner-3", src: "/images/home/figma/cta-3.png" },
  { name: "partner-4", src: "/images/home/figma/cta-4.png" },
  { name: "partner-5", src: "/images/home/figma/cta-5.png" },
  { name: "partner-6", src: "/images/home/figma/cta-6.png" },
  { name: "partner-7", src: "/images/home/figma/cta-7.png" },
];

export default function CTASection({ dict }: CTASectionProps) {
  void dict;

  return (
    <Section>
      <Inner>
        <TopRow>
          <Title>{"Write the Future,\nConnect the World."}</Title>
          <ContactModalTrigger buttonText="Contact Us →" />
        </TopRow>

        <LogosRow>
          {logos.map((l) => (
            <LogoBox key={l.name}>
              <LogoImage src={l.src} alt={l.name} fill sizes="(max-width: 768px) 50vw, 14vw" />
            </LogoBox>
          ))}
        </LogosRow>
      </Inner>
    </Section>
  );
}

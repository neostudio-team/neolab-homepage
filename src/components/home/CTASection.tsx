"use client";

import { memo, type ReactElement } from "react";
import ContactModalTrigger from "../common/ContactModalTrigger";
import Reveal from "../common/Reveal";
import {
  Section,
  PartnerMarqueeGroup,
  PartnerMarqueeLink,
  PartnerMarqueeLogo,
  PartnerMarqueeOuter,
  PartnerMarqueeTrack,
  Title,
  TopRow,
} from "./CTASection.styles";

export interface HomeCtaDict {
  title: string;
  subtitle: string;
  button: string;
  secondButton: string;
}

interface CTASectionProps {
  dict?: HomeCtaDict;
}

interface CtaPartnerLogo {
  name: string;
  file: string;
  href: string;
}

const partnerLogos: readonly CtaPartnerLogo[] = [
  { name: "HYBE", file: "HYBE-copy.jpg", href: "https://hybecorp.com/" },
  { name: "LAMY", file: "LAMY-copy.jpg", href: "https://www.lamy.com/" },
  { name: "SMARTSTUDY", file: "smartstudy.jpg", href: "https://www.pinkfong.com/" },
  { name: "MOLESKINE", file: "Moleskine-copy.jpg", href: "https://www.moleskine.com/" },
  { name: "MONAMI", file: "monami.jpg", href: "https://www.monami.com/" },
  { name: "DAEKYO", file: "daekyo.jpg", href: "https://www.daekyo.com/" },
  { name: "KUMON", file: "kumon.jpg", href: "https://www.kumon.co.kr/" },
  { name: "DOUGLAS", file: "douglas.jpg", href: "https://www.douglas.de/" },
  { name: "WOONGJIN", file: "woong.jpg", href: "https://www.wjthinkbig.com/" },
  { name: "SCHOLASTIC", file: "scholastic.jpg", href: "https://www.scholastic.com/" },
  { name: "MEGASTUDY", file: "megastudy.jpg", href: "https://www.megastudy.net/" },
  { name: "KENT", file: "Kent.jpg", href: "https://www.kent.edu/" },
];

function PartnerMarqueeView() {
  const renderPartnerGroup = (loopId: "first" | "second", isHidden = false) => {
    const links: ReactElement[] = [];
    for (const partner of partnerLogos) {
      links.push(
        <PartnerMarqueeLink
          key={`${partner.name}-${loopId}`}
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={isHidden ? -1 : undefined}
        >
          <PartnerMarqueeLogo
            src={`/images/partners/${partner.file}`}
            alt={isHidden ? "" : partner.name}
            width={180}
            height={68}
          />
        </PartnerMarqueeLink>
      );
    }
    return <PartnerMarqueeGroup aria-hidden={isHidden}>{links}</PartnerMarqueeGroup>;
  };

  return (
    <PartnerMarqueeOuter>
      <PartnerMarqueeTrack>
        {renderPartnerGroup("first")}
        {renderPartnerGroup("second", true)}
      </PartnerMarqueeTrack>
    </PartnerMarqueeOuter>
  );
}

const PartnerMarquee = memo(PartnerMarqueeView);

export default function CTASection({ dict }: CTASectionProps) {
  const buttonText = dict?.button ?? "Contact Us →";

  return (
    <Section>
      <Reveal y={80} duration={1.1}>
        <TopRow>
          <Title>
            Write simply,
            <br />
            Impact every stroke.
          </Title>
          <ContactModalTrigger buttonText={buttonText} />
        </TopRow>
      </Reveal>
      <PartnerMarquee />
    </Section>
  );
}

  import {
  Inner,
  LogoTrack,
  PartnerLink,
  PartnerLogo,
  Section,
} from "./PartnersSection.styles";

const partners = [
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

export default function PartnersSection() {
  return (
    <Section>
      <Inner>
        <LogoTrack>
          {[...partners, ...partners].map((partner, index) => (
            <PartnerLink
              key={`${partner.name}-${index}`}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PartnerLogo
                src={`/images/partners/${partner.file}`}
                alt={partner.name}
                width={150}
                height={60}
              />
            </PartnerLink>
          ))}
        </LogoTrack>
      </Inner>
    </Section>
  );
}

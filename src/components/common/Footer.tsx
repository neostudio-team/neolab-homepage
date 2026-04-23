import type { Locale } from "@/i18n/config";
import BackToTopButton from "./BackToTopButton";
import {
  AddressText,
  BottomRight,
  BottomRow,
  BrandRow,
  CopyrightText,
  Divider,
  FooterInner,
  FooterRoot,
  LegalDivider,
  LegalLink,
  LegalRow,
  LogoImage,
  SocialIcon,
  SocialLink,
  SocialRow,
  TopRow,
} from "./Footer.styles";
import { Icon } from "@iconify/react";

interface FooterProps {
  lang: Locale;
  dict: {
    links: string;
    shop: string;
    product: string;
    app: string;
    notebook: string;
    company: string;
    about: string;
    contact: string;
    support: string;
    brandIdentity: string;
    blog: string;
    follow: string;
    address: string;
    copyright: string;
  };
}

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <FooterRoot>
      <FooterInner>
        <TopRow>
          <BrandRow>
            <LogoImage
              src="/images/NeoLAB-CI_01.png"
              alt="NeoLAB Convergence"
              width={167}
              height={50}
            />
            <AddressText>{dict.address}</AddressText>
          </BrandRow>
          <BackToTopButton />
        </TopRow>

        <Divider />

        <BottomRow>
          <CopyrightText>{dict.copyright}</CopyrightText>
          <BottomRight>
            <SocialRow>
              <SocialLink
                href="https://www.youtube.com/user/neosmartpen/videos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <Icon icon="uil:youtube" fontSize={18} />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/neolab_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon icon="uil:instagram" fontSize={18} />
              </SocialLink>
              <SocialLink
                href="https://www.facebook.com/neosmartpenglobal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Icon icon="uil:facebook" fontSize={18} />
              </SocialLink>
            </SocialRow>
            {lang === "ko" && (
              <LegalRow>
                <LegalLink href={`/${lang}/privacy`}>개인정보처리방침</LegalLink>
                <LegalDivider>|</LegalDivider>
                <LegalLink href={`/${lang}/terms`}>이용약관</LegalLink>
              </LegalRow>
            )}
          </BottomRight>
        </BottomRow>
      </FooterInner>
    </FooterRoot>
  );
}

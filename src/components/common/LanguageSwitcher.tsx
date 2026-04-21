"use client";

import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";
import {
  Root,
  LocaleLink,
  SeparatorSpan,
  type LanguageSwitcherVariant,
} from "./LanguageSwitcher.styles";

const localeLabels: Record<Locale, string> = {
  en: "ENG",
  ko: "한국어",
  ja: "日本語",
};

interface LanguageSwitcherProps {
  lang: Locale;
  variant?: LanguageSwitcherVariant;
  separator?: React.ReactNode;
}

export default function LanguageSwitcher({
  lang,
  variant = "footer",
  separator,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalePath(targetLang: Locale) {
    const withoutLocale = pathname.replace(new RegExp(`^/${lang}(/|$)`), "/");
    const cleanPath = withoutLocale === "/" ? "" : withoutLocale;
    return `/${targetLang}${cleanPath}`;
  }

  const otherLocales = i18n.locales.filter((l) => l !== lang);

  const sep =
    separator ??
    (variant === "nspFooter" ? <SeparatorSpan>|</SeparatorSpan> : <span>|</span>);

  return (
    <Root $variant={variant}>
      {otherLocales.map((locale, i) => (
        <span key={locale}>
          {i > 0 && sep}
          <LocaleLink href={getLocalePath(locale)} $variant={variant}>
            {localeLabels[locale]}
          </LocaleLink>
        </span>
      ))}
    </Root>
  );
}

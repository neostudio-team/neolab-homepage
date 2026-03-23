"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";

const localeLabels: Record<Locale, string> = {
  en: "ENG",
  ko: "한국어",
  ja: "日本語",
};

interface LanguageSwitcherProps {
  lang: Locale;
  className?: string;
  linkClassName?: string;
  separator?: React.ReactNode;
}

export default function LanguageSwitcher({ lang, className, linkClassName, separator }: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalePath(targetLang: Locale) {
    // Replace /{currentLang} with /{targetLang} at the start
    const withoutLocale = pathname.replace(new RegExp(`^/${lang}(/|$)`), "/");
    const cleanPath = withoutLocale === "/" ? "" : withoutLocale;
    return `/${targetLang}${cleanPath}`;
  }

  const otherLocales = i18n.locales.filter((l) => l !== lang);

  return (
    <span className={className}>
      {otherLocales.map((locale, i) => (
        <span key={locale}>
          {i > 0 && separator}
          <Link href={getLocalePath(locale)} className={linkClassName}>
            {localeLabels[locale]}
          </Link>
        </span>
      ))}
    </span>
  );
}

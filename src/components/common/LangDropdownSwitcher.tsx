"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";
import {
  Wrap,
  ToggleButton,
  ChevronIcon,
  Dropdown,
  DropdownLink,
  ShortLabel,
} from "./LangDropdownSwitcher.styles";

const shortLabel: Record<Locale, string> = { ko: "KR", en: "EN", ja: "JP" };
const fullLabel: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

interface Props {
  lang: Locale;
  scrolled: boolean;
}

export default function LangDropdownSwitcher({ lang, scrolled }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  function getLocalePath(target: Locale) {
    const withoutLocale = pathname.replace(new RegExp(`^/${lang}(/|$)`), "/");
    const clean = withoutLocale === "/" ? "" : withoutLocale;
    return `/${target}${clean}`;
  }

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleToggle() {
    setOpen((v) => !v);
  }

  function handleClose() {
    setOpen(false);
  }

  const others = i18n.locales.filter((l) => l !== lang);

  return (
    <Wrap ref={ref}>
      <ToggleButton type="button" $scrolled={scrolled} onClick={handleToggle}>
        {shortLabel[lang]}
        <ChevronIcon
          $open={open}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </ChevronIcon>
      </ToggleButton>

      {open && (
        <Dropdown>
          {others.map((locale) => (
            <DropdownLink
              key={locale}
              href={getLocalePath(locale)}
              onClick={handleClose}
            >
              <ShortLabel>{shortLabel[locale]}</ShortLabel>
              <span>{fullLabel[locale]}</span>
            </DropdownLink>
          ))}
        </Dropdown>
      )}
    </Wrap>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/i18n/config";

const shortLabel: Record<Locale, string> = { ko: "KR", en: "EN", ja: "JP" };
const fullLabel: Record<Locale, string> = { ko: "한국어", en: "English", ja: "日本語" };

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

  // 바깥 클릭 시 닫기
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const others = i18n.locales.filter((l) => l !== lang);

  return (
    <div ref={ref} className="relative ml-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[13px] font-semibold transition-all duration-200 ${
          scrolled
            ? "border-gray-300 text-gray-700 hover:border-gray-600"
            : "border-white/50 text-white/90 hover:border-white"
        }`}
      >
        {shortLabel[lang]}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-[calc(100%+8px)] right-0 bg-white shadow-lg rounded-xl py-1.5 min-w-[110px] z-50 border border-gray-100">
          {others.map((locale) => (
            <Link
              key={locale}
              href={getLocalePath(locale)}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
            >
              <span className="text-xs font-bold text-gray-400 w-6">{shortLabel[locale]}</span>
              <span>{fullLabel[locale]}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

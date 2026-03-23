"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface NspNavChild {
  label: string;
  href: string;
}

interface NspNavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NspNavChild[];
}

interface NspHeaderProps {
  lang: Locale;
  dict: {
    products: string;
    r1: string;
    n2: string;
    m1: string;
    dimo: string;
    lamy: string;
    reco: string;
    apps: string;
    neoStudio: string;
    gridaBoard: string;
    paperTube: string;
    penManager: string;
    solutions: string;
    hybridDocs: string;
    digitalPaper: string;
    notebooks: string;
    ncodePrintables: string;
    customerSupport: string;
    enquiry: string;
    knowledgeBase: string;
    store: string;
    onlineStore: string;
    blog: string;
    cloudLogin: string;
  };
}

function getNspNavItems(lang: Locale, dict: NspHeaderProps["dict"]): NspNavItem[] {
  const base = `/${lang}/neosmartpen`;

  if (lang === "ja") {
    return [
      {
        label: dict.products,
        href: "#",
        children: [
          { label: dict.r1, href: `${base}/product-r1` },
          { label: dict.lamy, href: `${base}/product-lamy` },
          { label: dict.m1, href: `${base}/product-m1` },
          { label: dict.dimo, href: `${base}/product-dimo` },
        ],
      },
      {
        label: dict.apps,
        href: "#",
        children: [
          { label: dict.neoStudio, href: `${base}/neo-studio` },
          { label: dict.gridaBoard, href: `${base}/gridaboard` },
          { label: dict.paperTube, href: `${base}/papertube` },
        ],
      },
      {
        label: dict.digitalPaper,
        href: "#",
        children: [
          { label: dict.notebooks, href: `${base}/notebooks` },
        ],
      },
      {
        label: dict.store,
        href: "https://neosmartpenjp.com/",
        external: true,
        children: [
          { label: dict.onlineStore, href: "https://neosmartpenjp.com/" },
        ],
      },
      { label: dict.customerSupport, href: `${base}/customer` },
    ];
  }

  if (lang === "ko") {
    return [
      {
        label: dict.products,
        href: "#",
        children: [
          { label: dict.r1, href: `${base}/product-r1` },
          { label: dict.m1, href: `${base}/product-m1` },
          { label: dict.dimo, href: `${base}/product-dimo` },
          { label: dict.lamy, href: `${base}/product-lamy` },
        ],
      },
      {
        label: dict.apps,
        href: "#",
        children: [
          { label: dict.neoStudio, href: `${base}/neo-studio` },
          { label: dict.gridaBoard, href: `${base}/gridaboard` },
          { label: dict.paperTube, href: `${base}/papertube` },
          { label: dict.penManager, href: `${base}/penmanager` },
        ],
      },
      {
        label: dict.digitalPaper,
        href: "#",
        children: [
          { label: dict.notebooks, href: `${base}/notebooks` },
          { label: dict.ncodePrintables, href: `${base}/ncode-pdf` },
        ],
      },
      {
        label: dict.solutions,
        href: "#",
        children: [
          { label: dict.hybridDocs, href: `${base}/hybriddocs` },
        ],
      },
      {
        label: dict.customerSupport,
        href: "#",
        children: [
          { label: dict.enquiry, href: `${base}/customer` },
        ],
      },
      {
        label: dict.store,
        href: "https://store.neosmartpen.com/",
        external: true,
        children: [
          { label: dict.onlineStore, href: "https://store.neosmartpen.com/" },
        ],
      },
      { label: dict.blog, href: "https://blog.naver.com/neosmartpen", external: true },
      { label: dict.cloudLogin, href: "https://www.neostudio.io", external: true },
    ];
  }

  // EN: neosmartpen.com nav
  return [
    {
      label: dict.products,
      href: "#",
      children: [
        { label: dict.r1, href: `${base}/product-r1` },
        { label: dict.m1, href: `${base}/product-m1` },
        { label: dict.dimo, href: `${base}/product-dimo` },
        { label: dict.lamy, href: `${base}/product-lamy` },
      ],
    },
    {
      label: dict.apps,
      href: "#",
      children: [
        { label: dict.neoStudio, href: `${base}/neo-studio` },
        { label: dict.gridaBoard, href: `${base}/gridaboard` },
        { label: dict.paperTube, href: `${base}/papertube` },
        { label: dict.penManager, href: `${base}/penmanager` },
      ],
    },
    {
      label: dict.solutions,
      href: "#",
      children: [
        { label: dict.hybridDocs, href: `${base}/hybriddocs` },
      ],
    },
    {
      label: dict.digitalPaper,
      href: "#",
      children: [
        { label: dict.notebooks, href: `${base}/notebooks` },
        { label: dict.ncodePrintables, href: `${base}/ncode-pdf` },
      ],
    },
    {
      label: dict.customerSupport,
      href: "#",
      children: [
        { label: dict.enquiry, href: `${base}/customer` },
        { label: dict.knowledgeBase, href: `${base}/knowledge-base` },
      ],
    },
    {
      label: dict.store,
      href: "https://shop.neosmartpen.com",
      external: true,
      children: [
        { label: dict.onlineStore, href: "https://shop.neosmartpen.com/" },
      ],
    },
    { label: dict.blog, href: "https://neosmartpen.com/neoblog/", external: true },
    { label: dict.cloudLogin, href: "http://www.neostudio.io", external: true },
  ];
}

export default function NspHeader({ lang, dict }: NspHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = getNspNavItems(lang, dict);

  return (
    <>
      {/* Top language bar - original: h=30px, bg=#000 */}
      <div className="bg-black text-white text-[12px] leading-[30px] px-4 text-right">
        <div className="max-w-[1080px] mx-auto">
          <LanguageSwitcher lang={lang} linkClassName="hover:text-[#39d2cc] mx-2 opacity-60 hover:opacity-100" />
        </div>
      </div>

      {/* Main header - original: h=80px, bg=#0a0a0a, fixed */}
      <header className="bg-[#0a0a0a] sticky top-0 z-50" style={{ height: 80 }}>
        <div className="max-w-[1080px] mx-auto px-4 flex items-center justify-between h-full">
          <Link href={`/${lang}/neosmartpen`} className="flex items-center">
            <Image
              src="/images/neosmartpen/common/h1_white-1.png"
              alt="Neo Smartpen"
              width={140}
              height={29}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="px-3 text-[14px] text-white font-semibold flex items-center gap-1 transition-colors hover:text-[#39d2cc] h-full"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-[#0a0a0a] shadow-lg py-2 min-w-[220px] z-50 border-t border-gray-700">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-[13px] text-gray-300 hover:text-[#39d2cc] hover:bg-[#1a1a1a] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-gray-700">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className="block px-6 py-3 text-sm text-gray-300 hover:text-[#39d2cc] hover:bg-[#1a1a1a] border-b border-gray-800"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="block px-10 py-2 text-sm text-gray-400 hover:text-[#39d2cc] hover:bg-[#1a1a1a]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-6 py-3 flex gap-4 text-sm">
              <LanguageSwitcher lang={lang} linkClassName="text-gray-400 hover:text-[#39d2cc]" />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

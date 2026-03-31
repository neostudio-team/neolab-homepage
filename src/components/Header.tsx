"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavChild {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
}

interface HeaderProps {
  lang: Locale;
  dict: {
    quickMenu: {
      neoSmartpenShop: string;
      pokoroShop: string;
      globalShop: string;
      aigleGoto: string;
      customerSupport: string;
    };
    company: string;
    notice: string;
    corporateNews: string;
    cibi: string;
    technologySolution: string;
    ncodeTech: string;
    devSupport: string;
    businessSolution: string;
    products: string;
    smartpen: string;
    neoSmartpenR1: string;
    neoSmartpenA1: string;
    neoSmartpenN2: string;
    neoSmartpenM1: string;
    neoSmartpenDimo: string;
    lamySafari: string;
    soundpen: string;
    poppenFactory: string;
    ncpDownload: string;
    pokoro: string;
    accessories: string;
    serviceApp: string;
    neoStudio: string;
    aigle: string;
    neoCast: string;
    gridaboard: string;
    paperTube: string;
    penManager: string;
    partnership: string;
    cases: string;
    inquiry: string;

    career: string;
    customerSupport: string;
  };
}

function getNavItems(lang: Locale, dict: HeaderProps["dict"]): NavItem[] {
  return [
    {
      label: dict.company,
      href: `/${lang}/company`,
      ...(lang === "ko" ? {
        children: [
          { label: dict.notice, href: `/${lang}/company/news` },
          { label: dict.corporateNews, href: `/${lang}/company/press` },
          { label: dict.cibi, href: `/${lang}/bi` },
        ],
      } : {}),
    },
    {
      label: dict.technologySolution,
      href: `/${lang}/technology`,
    },
    {
      label: dict.products,
      href: "#",
      children: [
        {
          label: dict.smartpen,
          href: lang === "ko" ? "https://store.neosmartpen.com/" : lang === "en" ? "https://shop.neosmartpen.com/" : "https://neosmartpenjp.com/",
          external: true,
          children: [
            { label: dict.neoSmartpenR1, href: lang === "ko" ? "https://store.neosmartpen.com/goods/goods_view.php?goodsNo=454&mtn=1%5E%7C%5E%EC%B6%94%EC%B2%9C%EC%83%81%ED%92%88%5E%7C%5Ey" : lang === "en" ? "https://shop.neosmartpen.com/products/neo-smartpen-r1" : "https://neosmartpenjp.com/products/neo-smartpen-r1", external: true },
            { label: dict.neoSmartpenA1, href: lang === "ko" ? "https://store.neosmartpen.com/goods/goods_view.php?goodsNo=455" : lang === "en" ? "https://shop.neosmartpen.com/products/neo-smartpen-a1" : "https://neosmartpenjp.com/products/neo-smartpen-a1", external: true },
            { label: dict.neoSmartpenM1, href: lang === "ko" ? "https://store.neosmartpen.com/goods/goods_view.php?goodsNo=531" : lang === "en" ? "https://shop.neosmartpen.com/products/neo-smartpen-m1-plus" : "https://neosmartpenjp.com/products/neo-smartpen-m1-plus", external: true },
            { label: dict.neoSmartpenDimo, href: lang === "ko" ? "https://store.neosmartpen.com/goods/goods_view.php?goodsNo=154&mtn=1%5E%7C%5E%EC%B6%94%EC%B2%9C%EC%83%81%ED%92%88%5E%7C%5Ey" : lang === "en" ? "https://shop.neosmartpen.com/collections/all/products/neo-smartpen-dimo" : "https://neosmartpenjp.com/products/neosmartpen-dimo", external: true },
            { label: dict.lamySafari, href: lang === "ko" ? "https://store.neosmartpen.com/goods/goods_view.php?goodsNo=392" : lang === "en" ? "https://shop.neosmartpen.com/products/lamy-safari-all-black-ncode" : "https://neosmartpenjp.com/products/lamysafari-smartpen", external: true },
          ],
        },
        {
          label: dict.soundpen,
          href: `/${lang}/soundpen`,
          ...(lang === 'ko' ? {
            children: [
              {
                label: dict.poppenFactory,
                href: "https://cafe.naver.com/dotcotory",
                external: true,
                children: [
                  { label: dict.ncpDownload, href: "https://neolabconvergence.notion.site/NCP-254d4c1a42e2805f8ae1cddedadc083e", external: true },
                ],
              },
            ],
          } : {}),
        },
        { label: dict.pokoro, href: `/${lang}/pokoro` },
        { label: lang === "ja" ? "ノート" : dict.accessories, href: lang === "ja" ? "https://neosmartpenjp.com/collections/n_note" : lang === "ko" ? "https://store.neosmartpen.com/goods/goods_list.php?cateCd=019" : "https://shop.neosmartpen.com/collections/accessories", external: true },
      ],
    },
    {
      label: dict.serviceApp,
      href: "#",
      children: [
        { label: dict.neoStudio, href: `/${lang}/apps/neo-studio` },
        { label: dict.aigle, href: "https://aigle.neolab.net", external: true },
        { label: dict.gridaboard, href: `/${lang}/apps/gridaboard` },
        { label: dict.penManager, href: `/${lang}/apps/penmanager` },
      ],
    },
    {
      label: dict.partnership,
      href: `/${lang}/partnership`,
    },
    ...(lang === "ko" ? [{
      label: dict.career,
      href: "https://neolab.career.greetinghr.com/ko/intro",
      external: true,
    }] : []),
    ...(lang === "ko" ? [{
      label: dict.customerSupport,
      href: `/${lang}/customer`,
    }] : []),
  ];
}

export default function Header({ lang, dict }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = getNavItems(lang, dict);

  return (
    <>
      {/* Floating Quick Menu */}
      <div 
        className={`fixed top-[200px] right-0 z-[100] flex transition-transform duration-300 ${
          quickMenuOpen ? 'translate-x-0' : 'translate-x-[200px]'
        } hidden lg:flex`}
      >
        <button
          onClick={() => setQuickMenuOpen(!quickMenuOpen)}
          className="absolute -left-[38px] top-0 w-[38px] h-[110px] bg-[#0f0000] text-white rounded-l-xl shadow-md flex items-center justify-center cursor-pointer hover:bg-[#ff4e00] transition-colors"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <span className="font-semibold text-xs tracking-[0.2em] transform rotate-180">QUICK</span>
        </button>

        <div className="w-[200px] bg-white shadow-[-5px_0_15px_-5px_rgba(0,0,0,0.1)] rounded-bl-xl border-l border-b border-t border-gray-100 p-4 flex flex-col gap-3">
          <Link href={lang === 'ko' ? 'https://store.neosmartpen.com/main/index.php' : lang === 'ja' ? 'https://neosmartpenjp.com/' : 'https://shop.neosmartpen.com/'} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-[#ff4e00] transition-colors border-b border-gray-50 pb-2">{dict.quickMenu.neoSmartpenShop}</Link>
          {lang === 'ja' && (
            <Link href="https://www.amazon.co.jp/neosmartpen" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-[#ff4e00] transition-colors border-b border-gray-50 pb-2">Amazon</Link>
          )}
          {lang === 'ko' && (
            <Link href="https://smartstore.naver.com/pokoro?n_media=27758&n_query=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_rank=1&n_ad_group=grp-a001-04-000000057244674&n_ad=nad-a001-04-000000479444805&n_keyword_id=nkw-a001-04-000007651633461&n_keyword=%ED%8F%AC%EC%BD%94%EB%A1%9C&n_campaign_type=4&n_contract=tct-a001-04-000000001228285&n_ad_group_type=5&NaPm=ct%3Dmn2obx2f%7Cci%3DER1927f3db%2D266f%2D11f1%2D952e%2D3ac0aae6ed3f%7Ctr%3Dbrnd%7Chk%3D3ed989dad874bfc1fe716527012b0a5af32115ba%7Cnacn%3DMJuAB0AtEIMQ" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-[#ff4e00] transition-colors border-b border-gray-50 pb-2">{dict.quickMenu.pokoroShop}</Link>
          )}
          {lang === 'ko' && (
            <Link href="https://aigle.neolab.net" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-700 hover:text-[#ff4e00] transition-colors border-b border-gray-50 pb-2">{dict.quickMenu.aigleGoto}</Link>
          )}
          {lang === 'ko' && (
            <Link href={`/${lang}/customer`} className="text-sm font-medium text-gray-700 hover:text-[#ff4e00] transition-colors">{dict.quickMenu.customerSupport}</Link>
          )}
        </div>
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-col transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        {/* Top bar (Language) — 스크롤 시만 표시 */}
        <div
          className={`text-[11px] lg:text-xs py-1.5 w-full transition-all duration-300 overflow-hidden ${
            scrolled ? "bg-[#0f0000] text-white max-h-8 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-[1080px] mx-auto px-4 flex items-center justify-end">
            <LanguageSwitcher lang={lang} linkClassName="hover:text-primary mx-1 opacity-60 hover:opacity-100" />
          </div>
        </div>

        {/* Main header */}
        <div className="w-full">
          <div className="max-w-[1080px] mx-auto px-4 flex items-center justify-between h-[60px]">
            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center">
              <Image
                src="/images/NeoLAB-CI_01.png"
                alt="NeoLAB Convergence Inc."
                width={140}
                height={42}
                priority
                className="transition-all duration-300"
                style={!scrolled ? { filter: "brightness(0) invert(1)" } : {}}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`px-3 py-4 text-[14px] font-semibold flex items-center gap-1 transition-colors ${
                      scrolled
                        ? "text-black/60 hover:text-primary"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50">
                      {item.children.map((child) => (
                        <div key={child.label} className="group/sub relative">
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                            {...(child.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          >
                            {child.label}
                          </Link>
                          {child.children && (
                            <div className="hidden group-hover/sub:block absolute left-full top-0 bg-white shadow-lg rounded-md py-2 min-w-[220px]">
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50"
                                  {...(sub.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-6 py-3 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-6 py-3 flex gap-4 text-sm">
                <LanguageSwitcher lang={lang} linkClassName="text-gray-500 hover:text-primary" />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

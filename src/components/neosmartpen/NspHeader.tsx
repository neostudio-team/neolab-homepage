"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import {
  DesktopNav,
  DropdownLink,
  DropdownPanel,
  HeaderInner,
  HeaderRoot,
  LangBar,
  LangBarInner,
  LogoImage,
  LogoLink,
  MobileBlock,
  MobileLangRow,
  MobileMenuButton,
  MobileMenuIcon,
  MobileNavPanel,
  MobileSubLink,
  MobileTopLink,
  NavChevron,
  NavItemWrap,
  NavTopLink,
} from "./NspHeader.styles";

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
        children: [{ label: dict.notebooks, href: `${base}/notebooks` }],
      },
      {
        label: dict.store,
        href: "https://neosmartpenjp.com/",
        external: true,
        children: [{ label: dict.onlineStore, href: "https://neosmartpenjp.com/" }],
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
        children: [{ label: dict.hybridDocs, href: `${base}/hybriddocs` }],
      },
      {
        label: dict.customerSupport,
        href: "#",
        children: [{ label: dict.enquiry, href: `${base}/customer` }],
      },
      {
        label: dict.store,
        href: "https://store.neosmartpen.com/",
        external: true,
        children: [{ label: dict.onlineStore, href: "https://store.neosmartpen.com/" }],
      },
      { label: dict.blog, href: "https://blog.naver.com/neosmartpen", external: true },
      { label: dict.cloudLogin, href: "https://www.neostudio.io", external: true },
    ];
  }

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
      children: [{ label: dict.hybridDocs, href: `${base}/hybriddocs` }],
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
      children: [{ label: dict.onlineStore, href: "https://shop.neosmartpen.com/" }],
    },
    { label: dict.blog, href: "https://neosmartpen.com/neoblog/", external: true },
    { label: dict.cloudLogin, href: "http://www.neostudio.io", external: true },
  ];
}

interface DesktopNavItemProps {
  item: NspNavItem;
  activeDropdown: string | null;
  onOpen: (label: string) => void;
  onClose: () => void;
}

function DesktopNavItem({
  item,
  activeDropdown,
  onOpen,
  onClose,
}: DesktopNavItemProps) {
  function handleEnter() {
    onOpen(item.label);
  }

  return (
    <NavItemWrap onMouseEnter={handleEnter} onMouseLeave={onClose}>
      <NavTopLink
        href={item.href}
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
      >
        {item.label}
        {item.children && (
          <NavChevron fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </NavChevron>
        )}
      </NavTopLink>

      {item.children && activeDropdown === item.label && (
        <DropdownPanel>
          {item.children.map((child) => (
            <DropdownLink key={child.label} href={child.href}>
              {child.label}
            </DropdownLink>
          ))}
        </DropdownPanel>
      )}
    </NavItemWrap>
  );
}

export default function NspHeader({ lang, dict }: NspHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = getNspNavItems(lang, dict);

  function handleNavOpen(label: string) {
    setActiveDropdown(label);
  }

  function handleNavClose() {
    setActiveDropdown(null);
  }

  function handleMobileToggle() {
    setMobileOpen((v) => !v);
  }

  function handleMobileClose() {
    setMobileOpen(false);
  }

  return (
    <>
      <LangBar>
        <LangBarInner>
          <LanguageSwitcher lang={lang} variant="nspTopBar" />
        </LangBarInner>
      </LangBar>

      <HeaderRoot>
        <HeaderInner>
          <LogoLink href={`/${lang}/neosmartpen`}>
            <LogoImage
              src="/images/neosmartpen/common/h1_white-1.png"
              alt="Neo Smartpen"
              width={140}
              height={29}
              priority
            />
          </LogoLink>

          <DesktopNav>
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                activeDropdown={activeDropdown}
                onOpen={handleNavOpen}
                onClose={handleNavClose}
              />
            ))}
          </DesktopNav>

          <MobileMenuButton type="button" onClick={handleMobileToggle} aria-label="Toggle menu">
            <MobileMenuIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </MobileMenuIcon>
          </MobileMenuButton>
        </HeaderInner>

        {mobileOpen && (
          <MobileNavPanel>
            {navItems.map((item) => (
              <MobileBlock key={item.label}>
                <MobileTopLink
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={item.children ? undefined : handleMobileClose}
                >
                  {item.label}
                </MobileTopLink>
                {item.children &&
                  item.children.map((child) => (
                    <MobileSubLink key={child.label} href={child.href} onClick={handleMobileClose}>
                      {child.label}
                    </MobileSubLink>
                  ))}
              </MobileBlock>
            ))}
            <MobileLangRow>
              <LanguageSwitcher lang={lang} variant="nspMobile" />
            </MobileLangRow>
          </MobileNavPanel>
        )}
      </HeaderRoot>
    </>
  );
}

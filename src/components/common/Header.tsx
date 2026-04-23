"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { readScrollY, subscribeScrollPassive } from "@/lib/browser-runtime";
import LangDropdownSwitcher from "@/components/common/LangDropdownSwitcher";
import {
  DesktopNav,
  DropdownDot,
  DropdownItemRow,
  DropdownLink,
  DropdownPanel,
  HeaderContainer,
  HeaderInner,
  HeaderLogoImage,
  LogoLink,
  MobileLangRow,
  MobileMenuButton,
  MobileMenuIcon,
  MobileNavLink,
  MobileNavPanel,
  NavBarRow,
  NavItemWrap,
  NavParentLabel,
  NavTopLink,
  QuickLabel,
  QuickMenuLink,
  QuickMenuPanel,
  QuickMenuWrapper,
  QuickToggleButton,
  SubDropdownPanel,
  SubNavWrap,
} from "./Header.styles";

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
      href: lang === "ko" ? "#" : `/${lang}/company`,
      ...(lang === "ko"
        ? {
            children: [
              { label: "개요", href: `/${lang}/company` },
              { label: dict.cibi, href: `/${lang}/bi` },
            ],
          }
        : {}),
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
          href:
            lang === "ko"
              ? "https://store.neosmartpen.com/"
              : lang === "en"
                ? "https://shop.neosmartpen.com/"
                : "https://neosmartpenjp.com/",
          external: true,
        },
        {
          label: dict.soundpen,
          href: `/${lang}/soundpen`,
        },
        { label: dict.pokoro, href: `/${lang}/pokoro` },
        {
          label: lang === "ja" ? "ノート" : dict.accessories,
          href:
            lang === "ja"
              ? "https://neosmartpenjp.com/collections/n_note"
              : lang === "ko"
                ? "https://store.neosmartpen.com/goods/goods_list.php?cateCd=019"
                : "https://shop.neosmartpen.com/collections/accessories",
          external: true,
        },
      ],
    },
    {
      label: dict.serviceApp,
      href: "#",
      children: [
        { label: dict.neoStudio, href: `/${lang}/apps/neo-studio` },
        { label: dict.aigle, href: `/${lang}/aigle` },
        { label: dict.gridaboard, href: `/${lang}/apps/gridaboard` },
        { label: dict.penManager, href: `/${lang}/apps/penmanager` },
      ],
    },
    {
      label: dict.partnership,
      href: `/${lang}/partnership`,
    },
    ...(lang === "ko"
      ? [
          {
            label: dict.customerSupport,
            href: "#",
            children: [
              { label: "고객센터", href: `/${lang}/customer` },
              { label: dict.notice, href: `/${lang}/company/news` },
              { label: dict.corporateNews, href: `/${lang}/company/press` },
            ],
          },
          {
            label: dict.career,
            href: "https://neolab.career.greetinghr.com/ko/intro",
            external: true,
          },
        ]
      : []),
  ];
}

export default function Header({ lang, dict }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(readScrollY() > 20);
    return subscribeScrollPassive(onScroll);
  }, []);

  const navItems = getNavItems(lang, dict);
  const menuOpen = activeDropdown !== null;

  const isChildActive = (href: string) => {
    if (!pathname || !href || href.startsWith("http") || href === "#")
      return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <QuickMenuWrapper $open={quickMenuOpen}>
        <QuickToggleButton onClick={() => setQuickMenuOpen(!quickMenuOpen)}>
          <QuickLabel>QUICK</QuickLabel>
        </QuickToggleButton>

        <QuickMenuPanel>
          <QuickMenuLink
            href={
              lang === "ko"
                ? "https://store.neosmartpen.com/main/index.php"
                : lang === "ja"
                  ? "https://neosmartpenjp.com/"
                  : "https://shop.neosmartpen.com/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.quickMenu.neoSmartpenShop}
          </QuickMenuLink>
          {lang === "ja" && (
            <QuickMenuLink
              href="https://www.amazon.co.jp/neosmartpen"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon
            </QuickMenuLink>
          )}
          {lang === "ko" && (
            <QuickMenuLink
              href="https://smartstore.naver.com/pokoro"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.quickMenu.pokoroShop}
            </QuickMenuLink>
          )}
          {lang === "ko" && (
            <QuickMenuLink href={`/${lang}/aigle`}>
              {dict.quickMenu.aigleGoto}
            </QuickMenuLink>
          )}
          {lang === "ko" && (
            <QuickMenuLink href={`/${lang}/customer`} $noDivider>
              {dict.quickMenu.customerSupport}
            </QuickMenuLink>
          )}
        </QuickMenuPanel>
      </QuickMenuWrapper>

      <HeaderContainer $scrolled={scrolled} $menuOpen={menuOpen}>
        <HeaderInner>
          <NavBarRow>
            <LogoLink href={`/${lang}`}>
              <HeaderLogoImage
                src="/images/NeoLAB-CI_01.png"
                alt="NeoLAB Convergence Inc."
                width={160}
                height={48}
                priority
                $scrolled={scrolled}
                $menuOpen={menuOpen}
              />
            </LogoLink>

            <DesktopNav>
              {navItems.map((item) => {
                const isOpen = activeDropdown === item.label;
                return (
                  <NavItemWrap
                    key={item.label}
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children ? (
                      <NavParentLabel
                        $scrolled={scrolled}
                        $menuOpen={menuOpen}
                        $active={isOpen}
                      >
                        {item.label}
                      </NavParentLabel>
                    ) : (
                      <NavTopLink
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        $scrolled={scrolled}
                        $menuOpen={menuOpen}
                      >
                        {item.label}
                      </NavTopLink>
                    )}

                    {item.children && isOpen && (
                      <DropdownPanel>
                        {item.children.map((child) => {
                          const active = isChildActive(child.href);
                          return (
                            <DropdownItemRow key={child.label}>
                              <SubNavWrap>
                                <DropdownLink
                                  href={child.href}
                                  $active={active}
                                  {...(child.href.startsWith("http")
                                    ? {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                      }
                                    : {})}
                                >
                                  {child.label}
                                  <DropdownDot />
                                </DropdownLink>
                                {child.children && (
                                  <SubDropdownPanel>
                                    {child.children.map((sub) => {
                                      const subActive = isChildActive(sub.href);
                                      return (
                                        <DropdownLink
                                          key={sub.label}
                                          href={sub.href}
                                          $active={subActive}
                                          {...(sub.href.startsWith("http")
                                            ? {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                              }
                                            : {})}
                                        >
                                          {sub.label}
                                          <DropdownDot />
                                        </DropdownLink>
                                      );
                                    })}
                                  </SubDropdownPanel>
                                )}
                              </SubNavWrap>
                            </DropdownItemRow>
                          );
                        })}
                      </DropdownPanel>
                    )}
                  </NavItemWrap>
                );
              })}
              <LangDropdownSwitcher
                lang={lang}
                scrolled={scrolled || menuOpen}
              />
            </DesktopNav>

            <MobileMenuButton
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <MobileMenuIcon
                $scrolled={scrolled}
                $menuOpen={mobileOpen}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </MobileMenuIcon>
            </MobileMenuButton>
          </NavBarRow>

          {mobileOpen && (
            <MobileNavPanel>
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              ))}
              <MobileLangRow>
                <LanguageSwitcher lang={lang} />
              </MobileLangRow>
            </MobileNavPanel>
          )}
        </HeaderInner>
      </HeaderContainer>
    </>
  );
}

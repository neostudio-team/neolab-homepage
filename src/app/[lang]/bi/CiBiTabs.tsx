"use client";

import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import { Icon } from "@iconify/react";
import {
  TabSection,
  TabBarWrap,
  TabBar,
  TabBtn,
  TabDotArea,
  TabDot,
  ContentWrap,
  ContentHeader,
  ContentTitle,
  ContentDesc,
  SectionBlock,
  SectionLabel,
  LogoRow,
  LogoBox,
  LogoImg,
  LangLabelRow,
  LangLabel,
  LogoRowBordered,
  SmartpenLogoRows,
  SmartpenLogoRow,
  SmartpenLogoCell,
  ColorCardsRow,
  ColorCard,
  ColorSwatch,
  ColorSwatchLg,
  ColorInfo,
  ColorHex,
  ColorMeta,
  ColorMetaRow,
  ColorMetaLabel,
  GradientCard,
  GradientSwatch,
  GradientStops,
  GradientStop,
  GradientStopHex,
  GradientStopPct,
  GradientStopRgb,
  DownloadRow,
  DownloadBtn,
  ColorCardFull,
} from "./BiPage.styles";

type TabId = "neolab" | "smartpen" | "aigle" | "pokoro";

const TABS: { id: TabId; label: string }[] = [
  { id: "neolab", label: "네오랩컨버전스" },
  { id: "smartpen", label: "네오스마트펜" },
  { id: "aigle", label: "아이글" },
  { id: "pokoro", label: "포코로" },
];

/* ── Image assets ────────────────────────────────── */
// NeoLAB CI — local files
const CI_LOGOS = [
  { src: "/images/bi/NeoLAB-CI-2.png", dark: false },
  { src: "/images/bi/NeoLAB-CI-4.png", dark: true },
  { src: "/images/bi/NeoLAB-CI-3.png", dark: false },
  { src: "/images/bi/NeoLAB-CI-1.png", dark: true },
];

// NEO SMARTPEN BI — local files
const SP_LIGHT = [
  "/images/bi/logo_01.png",
  "/images/bi/logo_02.png",
  "/images/bi/logo_03.png",
  "/images/bi/logo_04.png",
];
const SP_DARK = [
  "/images/bi/logo_05.png",
  "/images/bi/logo_06.png",
  "/images/bi/logo_07.png",
  "/images/bi/logo_08.png",
];

// AiGLE BI — Figma assets (7-day expiry; replace with permanent URLs)
const AIGLE_EN_LIGHT = [
  "https://www.figma.com/api/mcp/asset/6254cdd7-4e88-43e5-8498-2c07d6c5bce5",
  "https://www.figma.com/api/mcp/asset/5023cbb3-e4bd-4c38-b83c-eb377cf1a412",
  "https://www.figma.com/api/mcp/asset/7bb96b74-133c-4e7d-9c47-c3d32b70a11b",
];
const AIGLE_EN_DARK = "https://www.figma.com/api/mcp/asset/14131c5c-b401-4119-a796-dee19c73182b";
const AIGLE_KO_LIGHT = [
  "https://www.figma.com/api/mcp/asset/c8bd95d9-c4d9-4b9e-b525-588e9e5f25c2",
  "https://www.figma.com/api/mcp/asset/ce2bb315-ec46-4ef1-a79d-d17fc076a488",
  "https://www.figma.com/api/mcp/asset/76ccea22-c370-402b-a7f2-3efb4dfb8faa",
];
const AIGLE_KO_DARK = "https://www.figma.com/api/mcp/asset/15cc3131-e542-4abb-8024-c6daa7fd3290";

// POKORO BI — Figma assets
const POKORO_EN_LIGHT = [
  "https://www.figma.com/api/mcp/asset/633fb520-a61d-4c66-a745-cc6e25d1ae9b",
  "https://www.figma.com/api/mcp/asset/fd2a75bc-e19d-486b-abf8-ab76dd1431f3",
];
const POKORO_EN_DARK = "https://www.figma.com/api/mcp/asset/2fed1a2e-31a5-461e-8451-a647a01ecd97";
const POKORO_KO_LIGHT = "https://www.figma.com/api/mcp/asset/78a6978a-95b7-48fe-9d7c-be8bc01b5455";
const POKORO_KO_DARK = "https://www.figma.com/api/mcp/asset/a7badd9b-58fc-4add-b4c4-604ac4d633e0";

/* ── Subcomponents ───────────────────────────────── */
function DownloadButtons() {
  return (
    <DownloadRow>
      <DownloadBtn>
        로고 다운로드
        <Icon icon="material-symbols:download" width={28} />
      </DownloadBtn>
      <DownloadBtn>
        브랜드 가이드 다운로드
        <Icon icon="material-symbols:download" width={28} />
      </DownloadBtn>
    </DownloadRow>
  );
}

/* ── Tab contents ────────────────────────────────── */
function NeolabContent() {
  return (
    <ContentWrap>
      <ContentHeader>
        <ContentTitle>네오랩컨버전스 - CI</ContentTitle>
        <ContentDesc>
          NeoLAB의 워드마크(텍스트형) 로고로 가장 기본이 되는 로고입니다.<br />
          로고는 워드마크로만 사용할 수 있으며, 일관된 커뮤니케이션을 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이<br />
          그대로 사용해야 합니다.
        </ContentDesc>
      </ContentHeader>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Logo</SectionLabel>
        <LogoRow>
          {CI_LOGOS.map(({ src, dark }, i) => (
            <LogoBox key={i} $bg={dark ? "#515559" : undefined}>
              <LogoImg src={src} alt="" />
            </LogoBox>
          ))}
        </LogoRow>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Color</SectionLabel>
        <ColorCardsRow>
          <ColorCard>
            <ColorSwatchLg $bg="#FF671D" />
            <ColorInfo>
              <ColorHex $color="#FF671D">#FF671D</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaLabel>PMS</ColorMetaLabel>
                  <span>165C</span>
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaLabel>RGB</ColorMetaLabel>
                  <span>R: 236 / G: 102 / B: 47</span>
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
          <ColorCard>
            <ColorSwatchLg $bg="#515559" />
            <ColorInfo>
              <ColorHex $color="#515559">#515559</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaLabel>PMS</ColorMetaLabel>
                  <span>Cool Gray 11 C</span>
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaLabel>RGB</ColorMetaLabel>
                  <span>R: 82 / G: 85 / B: 90</span>
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
        </ColorCardsRow>
      </SectionBlock>

      <DownloadButtons />
    </ContentWrap>
  );
}

function SmartpenContent() {
  return (
    <ContentWrap>
      <ContentHeader>
        <ContentTitle>네오스마트펜 - BI</ContentTitle>
        <ContentDesc>
          NEO SMARTPEN의 메인 심볼과 영문 워드마크가 합쳐진 조합형 로고를 주 사용으로 지정하고 활용하며,{" "}
          상황에 따라 심볼과 워드마크를 각각 사용할 수 있습니다.<br />
          일관된 커뮤니케이션을 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다.
        </ContentDesc>
      </ContentHeader>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Logo</SectionLabel>
        <SmartpenLogoRows>
          <SmartpenLogoRow>
            {SP_LIGHT.map((src, i) => (
              <SmartpenLogoCell key={i}>
                <LogoImg src={src} alt="" style={{ maxHeight: 65 }} />
              </SmartpenLogoCell>
            ))}
          </SmartpenLogoRow>
          <SmartpenLogoRow $dark>
            {SP_DARK.map((src, i) => (
              <SmartpenLogoCell key={i}>
                <LogoImg src={src} alt="" style={{ maxHeight: 65 }} />
              </SmartpenLogoCell>
            ))}
          </SmartpenLogoRow>
        </SmartpenLogoRows>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Color System</SectionLabel>
        <ColorCardFull>
          <ColorSwatch $bg="#4C4A49" />
          <ColorInfo>
            <ColorHex $color="#4C4A49">#4C4A49</ColorHex>
            <ColorMeta>
              <ColorMetaRow>
                <ColorMetaLabel>PMS</ColorMetaLabel>
                <span>7540 C</span>
              </ColorMetaRow>
              <ColorMetaRow>
                <ColorMetaLabel>RGB</ColorMetaLabel>
                <span>R: 76 / G: 74 / B: 73</span>
              </ColorMetaRow>
            </ColorMeta>
          </ColorInfo>
        </ColorCardFull>
      </SectionBlock>

      <DownloadButtons />
    </ContentWrap>
  );
}

function AigleContent() {
  return (
    <ContentWrap>
      <ContentHeader>
        <ContentTitle>아이글 - BI</ContentTitle>
        <ContentDesc>
          AiGLE의 메인 심볼과 영문 워드마크가 합쳐진 조합형 로고를 주 사용으로 지정하고 활용하며,<br />
          상황에 따라 심볼과 워드마크를 각각 사용할 수 있습니다.<br />
          일관된 커뮤니케이션 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다.
        </ContentDesc>
      </ContentHeader>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Logo</SectionLabel>
        <LangLabelRow>
          <LangLabel>영어</LangLabel>
          <LogoRowBordered>
            {AIGLE_EN_LIGHT.map((src, i) => (
              <LogoBox key={i} style={{ height: 100, minWidth: 80 }}>
                <LogoImg src={src} alt="" />
              </LogoBox>
            ))}
            <LogoBox $bg="#37393a" style={{ height: 100, minWidth: 80, borderRadius: 4 }}>
              <LogoImg src={AIGLE_EN_DARK} alt="" />
            </LogoBox>
          </LogoRowBordered>
        </LangLabelRow>
        <LangLabelRow>
          <LangLabel>한글</LangLabel>
          <LogoRowBordered>
            {AIGLE_KO_LIGHT.map((src, i) => (
              <LogoBox key={i} style={{ height: 90, minWidth: 80 }}>
                <LogoImg src={src} alt="" />
              </LogoBox>
            ))}
            <LogoBox $bg="#37393a" style={{ height: 100, minWidth: 80, borderRadius: 4 }}>
              <LogoImg src={AIGLE_KO_DARK} alt="" />
            </LogoBox>
          </LogoRowBordered>
        </LangLabelRow>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Color</SectionLabel>
        <GradientCard>
          <GradientSwatch />
          <GradientStops>
            <GradientStop>
              <GradientStopHex $color="#0CCBFF">
                <GradientStopPct>13.5% - </GradientStopPct>#0CCBFF
              </GradientStopHex>
              <GradientStopRgb>R: 29 / G: 203 / B: 255</GradientStopRgb>
            </GradientStop>
            <GradientStop>
              <GradientStopHex $color="#158BFA">
                <GradientStopPct>50% - </GradientStopPct>#158BFA
              </GradientStopHex>
              <GradientStopRgb>R: 21 / G: 139 / B: 250</GradientStopRgb>
            </GradientStop>
            <GradientStop>
              <GradientStopHex $color="#5349F4">
                <GradientStopPct>90% - </GradientStopPct>#5349F4
              </GradientStopHex>
              <GradientStopRgb>R: 83 / G: 73 / B: 244</GradientStopRgb>
            </GradientStop>
          </GradientStops>
        </GradientCard>
        <ColorCardsRow>
          <ColorCard>
            <ColorSwatch $bg="#1D49F4" />
            <ColorInfo>
              <ColorHex $color="#1D49F4">#1D49F4</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaLabel>PMS</ColorMetaLabel>
                  <span>286 C</span>
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaLabel>RGB</ColorMetaLabel>
                  <span>R: 29 / G: 73 / B: 244</span>
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
          <ColorCard>
            <ColorSwatch $bg="#37393A" />
            <ColorInfo>
              <ColorHex $color="#37393A">#37393A</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaLabel>PMS</ColorMetaLabel>
                  <span>447C</span>
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaLabel>RGB</ColorMetaLabel>
                  <span>R: 55 / G: 57 / B: 58</span>
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
        </ColorCardsRow>
      </SectionBlock>

      <DownloadButtons />
    </ContentWrap>
  );
}

function PokoroContent() {
  return (
    <ContentWrap>
      <ContentHeader>
        <ContentTitle>포코로 - BI</ContentTitle>
        <ContentDesc>
          POKORO의 메인 심볼과 영문 워드마크가 합쳐진 조합형 로고를 주 사용으로 지정하고 활용하며,<br />
          상황에 따라 워드마크만 따로 사용할 수 있습니다.<br />
          일관된 커뮤니케이션 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다.
        </ContentDesc>
      </ContentHeader>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Logo</SectionLabel>
        <LangLabelRow>
          <LangLabel>영어</LangLabel>
          <LogoRowBordered>
            {POKORO_EN_LIGHT.map((src, i) => (
              <LogoBox key={i} style={{ height: 100, minWidth: 80 }}>
                <LogoImg src={src} alt="" />
              </LogoBox>
            ))}
            <LogoBox $bg="#231F20" style={{ height: 100, minWidth: 80, borderRadius: 4 }}>
              <LogoImg src={POKORO_EN_DARK} alt="" />
            </LogoBox>
          </LogoRowBordered>
        </LangLabelRow>
        <LangLabelRow>
          <LangLabel>한글</LangLabel>
          <LogoRowBordered>
            <LogoBox style={{ height: 65, minWidth: 80 }}>
              <LogoImg src={POKORO_KO_LIGHT} alt="" />
            </LogoBox>
            <LogoBox $bg="#231F20" style={{ height: 80, minWidth: 80, borderRadius: 4 }}>
              <LogoImg src={POKORO_KO_DARK} alt="" />
            </LogoBox>
          </LogoRowBordered>
        </LangLabelRow>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel><span className="dot">•</span> Color</SectionLabel>
        <ColorCardsRow>
          <ColorCard>
            <ColorSwatch $bg="#F2D575" />
            <ColorInfo>
              <ColorHex $color="#C8A830">#F2D575</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaLabel>PMS</ColorMetaLabel>
                  <span>2004C</span>
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaLabel>RGB</ColorMetaLabel>
                  <span>R: 242 / G: 213 / B: 117</span>
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
          <ColorCard>
            <ColorSwatch $bg="#231F20" />
            <ColorInfo>
              <ColorHex $color="#231F20">#231F20</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaLabel>PMS</ColorMetaLabel>
                  <span>Black C</span>
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaLabel>RGB</ColorMetaLabel>
                  <span>R: 35 / G: 31 / B: 32</span>
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
        </ColorCardsRow>
      </SectionBlock>

      <DownloadButtons />
    </ContentWrap>
  );
}

const TAB_CONTENT: Record<TabId, React.ReactNode> = {
  neolab: <NeolabContent />,
  smartpen: <SmartpenContent />,
  aigle: <AigleContent />,
  pokoro: <PokoroContent />,
};

/* ── Main component ──────────────────────────────── */
export default function CiBiTabs() {
  const [active, setActive] = useState<TabId>("neolab");
  const [dotLeft, setDotLeft] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);

  const updateDot = useCallback(() => {
    const idx = TABS.findIndex((t) => t.id === active);
    const btn = tabRefs.current[idx];
    const bar = barRef.current;
    if (btn && bar) {
      const btnRect = btn.getBoundingClientRect();
      const barRect = bar.getBoundingClientRect();
      setDotLeft(btnRect.left - barRect.left + btnRect.width / 2 - 20);
    }
  }, [active]);

  useEffect(() => {
    updateDot();
    window.addEventListener("resize", updateDot);
    return () => window.removeEventListener("resize", updateDot);
  }, [updateDot]);

  return (
    <TabSection>
      <TabBarWrap ref={barRef}>
        <TabBar>
          {TABS.map((tab, i) => (
            <TabBtn
              key={tab.id}
              $active={active === tab.id}
              onClick={() => setActive(tab.id)}
              ref={(el) => { tabRefs.current[i] = el; }}
            >
              {tab.label}
            </TabBtn>
          ))}
        </TabBar>
        <TabDotArea>
          {dotLeft !== null && <TabDot style={{ left: dotLeft }} />}
        </TabDotArea>
      </TabBarWrap>

      {TAB_CONTENT[active]}
    </TabSection>
  );
}

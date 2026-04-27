"use client";

import { useState, useRef, useEffect, useCallback, type ReactNode } from "react";
import { Icon } from "@iconify/react";
import Reveal from "@/components/common/Reveal";
import {
  SectionBlock,
  SectionLabel,
  LogoRowBorder,
  LogoCell,
  LogoImg,
  LangRow,
  LangTag,
  ColorCardsRow,
  ColorCard,
  ColorCardFull,
  Swatch,
  ColorInfo,
  ColorHex,
  ColorMeta,
  ColorMetaRow,
  ColorMetaKey,
  GradientSwatch,
  GradientStops,
  GradientRgb,
  DownloadRow,
  DownloadBtn,
} from "../CiBiPage.styles";
import {
  TabSection,
  TabBarWrap,
  TabBar,
  TabBtn,
} from "@/components/common/PillTabs.styles";
import Section from "@/components/common/Section";

type TabId = "neolab" | "smartpen" | "aigle" | "pokoro";

const TABS: { id: TabId; label: string }[] = [
  { id: "neolab", label: "네오랩컨버전스" },
  { id: "smartpen", label: "네오스마트펜" },
  { id: "aigle", label: "아이글" },
  { id: "pokoro", label: "포코로" },
];

/* ── Image paths (all local) ─────────────────────── */
const CI = {
  logo1: "/images/bi/ci-logo-1.png",
  logo1Dark: "/images/bi/ci-logo-1-dark.png",
  logo2: "/images/bi/ci-logo-2.png",
  logo2Dark: "/images/bi/ci-logo-2-dark.png",
};

const SP = {
  light: [
    "/images/bi/sp-light-1.png",
    "/images/bi/sp-light-2.png",
    "/images/bi/sp-light-3.png",
    "/images/bi/sp-light-4.png",
  ],
  dark: [
    "/images/bi/sp-dark-1.png",
    "/images/bi/sp-dark-2.png",
    "/images/bi/sp-dark-3.png",
    "/images/bi/sp-dark-4.png",
  ],
};

const AIGLE = {
  enLight: [
    "/images/bi/aigle-en-1.png",
    "/images/bi/aigle-en-2.png",
    "/images/bi/aigle-en-3.png",
  ],
  enDark: "/images/bi/aigle-en-dark.png",
  koLight: [
    "/images/bi/aigle-ko-1.png",
    "/images/bi/aigle-ko-2.png",
    "/images/bi/aigle-ko-3.png",
  ],
  koDark: "/images/bi/aigle-ko-dark.png",
};

const POKORO = {
  enLight: ["/images/bi/pokoro-en-1.png", "/images/bi/pokoro-en-2.png"],
  enDark: "/images/bi/pokoro-en-dark.png",
  koLight: "/images/bi/pokoro-ko.png",
  koDark: "/images/bi/pokoro-ko-dark.png",
};

/* ── Shared subcomponents ───────────────────────── */
function Btns() {
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

/* ── NeoLAB CI ──────────────────────────────────── */
function NeolabContent() {
  return (
    <Section 
      title="네오랩컨버전스 - CI" 
      paddingTop={0} 
      paddingBottom={0}
      desc={
        "NeoLAB의 워드마크(텍스트형) 로고로 가장 기본이 되는 로고입니다.\n로고는 워드마크로만 사용할 수 있으며, 일관된 커뮤니케이션을 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다."
      }
    >
      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Logo
        </SectionLabel>
        <LogoRowBorder>
          <LogoCell>
            <LogoImg src={CI.logo1} alt="NeoLAB CI logo" />
          </LogoCell>
          <LogoCell $bg="#515559">
            <LogoImg src={CI.logo1Dark} alt="NeoLAB CI logo (dark)" />
          </LogoCell>
          <LogoCell>
            <LogoImg src={CI.logo2} alt="NeoLAB CI symbol" />
          </LogoCell>
          <LogoCell $bg="#515559">
            <LogoImg src={CI.logo2Dark} alt="NeoLAB CI symbol (dark)" />
          </LogoCell>
        </LogoRowBorder>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Color
        </SectionLabel>
        <ColorCardsRow>
          <ColorCard>
            <Swatch $bg="#FF671D" $size={120} />
            <ColorInfo>
              <ColorHex $color="#FF671D">#FF671D</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaKey>PMS</ColorMetaKey>165C
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaKey>RGB</ColorMetaKey>R: 236 / G: 102 / B: 47
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
          <ColorCard>
            <Swatch $bg="#515559" $size={120} />
            <ColorInfo>
              <ColorHex $color="#515559">#515559</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaKey>PMS</ColorMetaKey>Cool Gray 11 C
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaKey>RGB</ColorMetaKey>R: 82 / G: 85 / B: 90
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
        </ColorCardsRow>
      </SectionBlock>

      <Btns />
    </Section>
  );
}

/* ── NEO SMARTPEN BI ────────────────────────────── */
function SmartpenContent() {
  return (
    <Section 
      title="네오스마트펜 - BI" 
      paddingTop={0} 
      paddingBottom={0} 
      desc={
        "NEO SMARTPEN의 메인 심볼과 영문 워드마크가 합쳐진 조합형 로고를 주 사용으로 지정하고 활용하며, 상황에 따라 심볼과 워드마크를 각각 사용할 수 있습니다.\n일관된 커뮤니케이션 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다."
      }
    >

      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Logo
        </SectionLabel>
        <LogoRowBorder>
          {SP.light.map((src, i) => (
            <LogoCell key={i}>
              <LogoImg src={src} alt="" style={{ maxHeight: 65 }} />
            </LogoCell>
          ))}
        </LogoRowBorder>
        <LogoRowBorder $dark>
          {SP.dark.map((src, i) => (
            <LogoCell key={i}>
              <LogoImg src={src} alt="" style={{ maxHeight: 65 }} />
            </LogoCell>
          ))}
        </LogoRowBorder>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Color
        </SectionLabel>
        <ColorCardFull>
          <Swatch $bg="#4C4A49" />
          <ColorInfo>
            <ColorHex $color="#4C4A49">#4C4A49</ColorHex>
            <ColorMeta>
              <ColorMetaRow>
                <ColorMetaKey>PMS</ColorMetaKey>7540 C
              </ColorMetaRow>
              <ColorMetaRow>
                <ColorMetaKey>RGB</ColorMetaKey>R: 76 / G: 74 / B: 73
              </ColorMetaRow>
            </ColorMeta>
          </ColorInfo>
        </ColorCardFull>
      </SectionBlock>

      <Btns />
    </Section>
  );
}

/* ── AiGLE BI ───────────────────────────────────── */
function AigleContent() {
  return (
    <Section 
      title="아이글 - BI" 
      paddingTop={0} 
      paddingBottom={0} 
      desc={
        "AiGLE의 메인 심볼과 영문 워드마크가 합쳐진 조합형 로고를 주 사용으로 지정하고 활용하며, 상황에 따라 심볼과 워드마크를 각각 사용할 수 있습니다.\n일관된 커뮤니케이션 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다."
      }
    >

      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Logo
        </SectionLabel>
        <LangRow>
          <LangTag>영어</LangTag>
          <LogoRowBorder>
            {AIGLE.enLight.map((src, i) => (
              <LogoCell key={i}>
                <LogoImg src={src} alt="" />
              </LogoCell>
            ))}
            <LogoCell
              $bg="#37393a"
            >
              <LogoImg src={AIGLE.enDark} alt="" />
            </LogoCell>
          </LogoRowBorder>
        </LangRow>
        <LangRow>
          <LangTag>한글</LangTag>
          <LogoRowBorder>
            {AIGLE.koLight.map((src, i) => (
              <LogoCell key={i}>
                <LogoImg src={src} alt="" />
              </LogoCell>
            ))}
            <LogoCell
              $bg="#37393a"
            >
              <LogoImg src={AIGLE.koDark} alt="" />
            </LogoCell>
          </LogoRowBorder>
        </LangRow>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Color
        </SectionLabel>
        <ColorCard>
          <GradientSwatch />
          <GradientStops>
            <ColorInfo>
              <ColorHex $color="#0CCBFF">
                <span className="pct">13.5% - </span>#0CCBFF
              </ColorHex>
              <GradientRgb>R: 29 / G: 203 / B: 255</GradientRgb>
            </ColorInfo>
            <ColorInfo>
              <ColorHex $color="#158BFA">
                <span className="pct">50% - </span>#158BFA
              </ColorHex>
              <GradientRgb>R: 21 / G: 139 / B: 250</GradientRgb>
            </ColorInfo>
            <ColorInfo>
              <ColorHex $color="#5349F4">
                <span className="pct">90% - </span>#5349F4
              </ColorHex>
              <GradientRgb>R: 83 / G: 73 / B: 244</GradientRgb>
            </ColorInfo>
          </GradientStops>
        </ColorCard>
        <ColorCardsRow>
          <ColorCard>
            <Swatch $bg="#1D49F4" />
            <ColorInfo>
              <ColorHex $color="#1D49F4">#1D49F4</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaKey>PMS</ColorMetaKey>286 C
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaKey>RGB</ColorMetaKey>R: 29 / G: 73 / B: 244
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
          <ColorCard>
            <Swatch $bg="#37393A" />
            <ColorInfo>
              <ColorHex $color="#37393A">#37393A</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaKey>PMS</ColorMetaKey>447C
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaKey>RGB</ColorMetaKey>R: 55 / G: 57 / B: 58
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
        </ColorCardsRow>
      </SectionBlock>

      <Btns />
    </Section>
  );
}

/* ── POKORO BI ──────────────────────────────────── */
function PokoroContent() {
  return (
    <Section 
      title="포코로 - BI" 
      paddingTop={0} 
      paddingBottom={0} 
      desc={
        "POKORO의 메인 심볼과 영문 워드마크가 합쳐진 조합형 로고를 주 사용으로 지정하고 활용하며,\n상황에 따라 워드마크만 따로 사용할 수 있습니다.\n일관된 커뮤니케이션 위해 형태나 색상, 스타일의 변형, 타 그래픽 요소와의 결합 없이 그대로 사용해야 합니다."
      }
    >

      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Logo
        </SectionLabel>
        <LangRow>
          <LangTag>영어</LangTag>
          <LogoRowBorder>
            {POKORO.enLight.map((src, i) => (
              <LogoCell key={i}>
                <LogoImg src={src} alt="" />
              </LogoCell>
            ))}
            <LogoCell $bg="#231F20">
              <LogoImg src={POKORO.enDark} alt="" />
            </LogoCell>
          </LogoRowBorder>
        </LangRow>
        <LangRow>
          <LangTag>한글</LangTag>
          <LogoRowBorder>
            <LogoCell>
              <LogoImg src={POKORO.koLight} alt="" />
            </LogoCell>
            <LogoCell $bg="#231F20">
              <LogoImg src={POKORO.koDark} alt="" />
            </LogoCell>
          </LogoRowBorder>
        </LangRow>
      </SectionBlock>

      <SectionBlock>
        <SectionLabel>
          <span className="dot">• </span>Color
        </SectionLabel>
        <ColorCardsRow>
          <ColorCard>
            <Swatch $bg="#F2D575" />
            <ColorInfo>
              <ColorHex $color="#C8A830">#F2D575</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaKey>PMS</ColorMetaKey>2004C
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaKey>RGB</ColorMetaKey>R: 242 / G: 213 / B: 117
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
          <ColorCard>
            <Swatch $bg="#231F20" />
            <ColorInfo>
              <ColorHex $color="#231F20">#231F20</ColorHex>
              <ColorMeta>
                <ColorMetaRow>
                  <ColorMetaKey>PMS</ColorMetaKey>Black C
                </ColorMetaRow>
                <ColorMetaRow>
                  <ColorMetaKey>RGB</ColorMetaKey>R: 35 / G: 31 / B: 32
                </ColorMetaRow>
              </ColorMeta>
            </ColorInfo>
          </ColorCard>
        </ColorCardsRow>
      </SectionBlock>

      <Btns />
    </Section>
  );
}

const CONTENT: Record<TabId, ReactNode> = {
  neolab: <NeolabContent />,
  smartpen: <SmartpenContent />,
  aigle: <AigleContent />,
  pokoro: <PokoroContent />,
};

/* ── Main ───────────────────────────────────────── */
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
      const br = btn.getBoundingClientRect();
      const pr = bar.getBoundingClientRect();
      setDotLeft(br.left - pr.left + br.width / 2);
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
        <Reveal y={32} once={false} amount={0.3}>
          <TabBar>
            {TABS.map((tab, i) => (
              <TabBtn
                key={tab.id}
                $active={active === tab.id}
                onClick={() => setActive(tab.id)}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
              >
                {tab.label}
              </TabBtn>
            ))}
          </TabBar>
        </Reveal>
      </TabBarWrap>

      <Reveal key={active} y={28} amount={0.1} duration={0.9} once={false}>
        {CONTENT[active]}
      </Reveal>
    </TabSection>
  );
}

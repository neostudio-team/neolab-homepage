"use client";

import { useState, type ReactNode } from "react";
import Reveal from "@/components/common/Reveal";
import Section from "@/components/common/Section";
import {
  TabSection,
  TabBarWrap,
  TabBar,
  TabBtn,
} from "@/components/common/PillTabs.styles";
import {
  TwoCol,
  TwoColCenter,
  NcodeDiagramWrap,
  NcodeMainImg,
  TabImgWrap,
  TabMainImg,
  CardsCol,
  FeatureCard,
  FeatureIconImg,
  FeatureTitle,
  FeatureDesc,
} from "../TechnologyPage.styles";

type TabId = "ncode" | "printing" | "smartpen";

const TABS: { id: TabId; label: string }[] = [
  { id: "ncode", label: "Ncode" },
  { id: "printing", label: "Printing" },
  { id: "smartpen", label: "Smart Pen" },
];

/* ── Ncode tab ──────────────────────────────────── */
function NcodeContent() {
  return (
    <Section
      title="Ncode"
      desc={
        "Ncode는 단 2mm × 2mm의 사각형 안에 방대한 정보를 담아내는 혁신적인 기술입니다.\nA4 용지 3,779억 장에 달하는 고유 코드를 생성하면서도, 미세 패턴 기술을 통해 인쇄물 본연의 이미지는 완벽하게 보존합니다.\n모아레 현상 걱정 없이, 모든 종이에 스마트한 가치를 더해 보세요."
      }
      paddingTop={0}
      paddingBottom={0}
    >
      <TwoCol>
        <TabImgWrap>
          <TabMainImg
            src="/images/technology/ncode-main.png"
            alt="Ncode technology"
            style={{ aspectRatio: "1000/878" }}
          />
        </TabImgWrap>

        <CardsCol>
          <FeatureCard>
            <FeatureIconImg
              src="/images/technology/icon-ncode-1.svg"
              alt=""
              $size={80}
            />
            <div>
              <FeatureTitle>평면상의 정확한 위치</FeatureTitle>
              <FeatureDesc>
                {
                  "인쇄된 지면 위에서 오차 없는 초정밀 위치 데이터를 구현하여,\n사용자에게 최상의 인식 정확도와 반응 속도를 제공합니다."
                }
              </FeatureDesc>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconImg
              src="/images/technology/icon-ncode-2.svg"
              alt=""
              $size={80}
            />
            <div>
              <FeatureTitle>페이지 구분 가능</FeatureTitle>
              <FeatureDesc>
                {
                  "단순한 위치 좌표를 넘어 페이지 번호, 서적의 종류 등 인쇄 매체의\n다양한 메타데이터를 개별적으로 식별하고 포함할 수 있습니다."
                }
              </FeatureDesc>
            </div>
          </FeatureCard>
        </CardsCol>
      </TwoCol>
    </Section>
  );
}

/* ── Printing tab ───────────────────────────────── */
function PrintingContent() {
  return (
    <Section
      title="Printing"
      desc={
        "Ncode는 고가의 특수 장비 없이도 기존 인쇄 인프라를 그대로 활용할 수 있는 경제적이고 효율적인 기술입니다.\n대량 생산부터 가정 내 소량 출력까지 지원하여 디지털과 아날로그를 잇는 강력한 범용성을 자랑합니다."
      }
      paddingTop={0}
      paddingBottom={0}
    >
      <TwoColCenter>
        <TabImgWrap>
          <TabMainImg
            src="/images/technology/printing-main.png"
            alt="Printing technology"
            style={{ aspectRatio: "1000/878" }}
          />
        </TabImgWrap>

        <CardsCol>
          <FeatureCard>
            <FeatureIconImg
              src="/images/technology/icon-printing-1.svg"
              alt=""
            />
            <div>
              <FeatureTitle>공정의 단순화</FeatureTitle>
              <FeatureDesc>
                {
                  "별도 특수 기술 없이 옵셋 인쇄 공정에서 별색 추가만으로\n대량 생산이 가능합니다."
                }
              </FeatureDesc>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconImg
              src="/images/technology/icon-printing-2.svg"
              alt=""
            />
            <div>
              <FeatureTitle>매체의 다양성</FeatureTitle>
              <FeatureDesc>
                {
                  "일반 종이부터 투명 필름, LCD 스크린까지\n재질의 제약 없이 인쇄할 수 있습니다."
                }
              </FeatureDesc>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconImg
              src="/images/technology/icon-printing-3.svg"
              alt=""
            />
            <div>
              <FeatureTitle>출력의 용이성</FeatureTitle>
              <FeatureDesc>
                {
                  "600DPI 이상 컬러 레이저 프린터만 있다면\n가정과 사무실에서도 즉시 출력이 가능합니다."
                }
              </FeatureDesc>
            </div>
          </FeatureCard>
        </CardsCol>
      </TwoColCenter>
    </Section>
  );
}

/* ── Smart Pen tab ──────────────────────────────── */
function SmartPenContent() {
  return (
    <Section
      title="Smart Pen"
      desc={
        "네오랩컨버전스는 세계 초슬림·최고 성능의 스마트펜을 구현한 압도적인 하드웨어 기술력을 보유하고 있습니다.\n나아가 단순한 기기 제조를 넘어, 필기구 본연의 심미성과 인체공학적 설계를 결합한 토탈 솔루션을 통해 사용자에게 최상의 필기 경험을 제공합니다."
      }
      paddingTop={0}
      paddingBottom={0}
    >
      <TwoColCenter>
        <TabImgWrap>
          <TabMainImg
            src="/images/technology/smartpen-main.png"
            alt="Smart Pen technology"
            style={{ aspectRatio: "1000/730" }}
          />
        </TabImgWrap>

        <CardsCol>
          <FeatureCard>
            <FeatureIconImg src="/images/technology/icon-sp-1.svg" alt="" />
            <div>
              <FeatureTitle>스마트펜 전용 프로세서</FeatureTitle>
              <FeatureDesc>
                {
                  "스마트펜 시스템에 최적화된 고성능 전용 프로세서를\n독자 개발하여 제품의 성능과 효율을 극대화했습니다."
                }
              </FeatureDesc>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconImg src="/images/technology/icon-sp-2.svg" alt="" />
            <div>
              <FeatureTitle>Ncode 센서</FeatureTitle>
              <FeatureDesc>
                {
                  "자체 기술로 개발한 고정밀 센서를 탑재하여, 어떠한 조도 환경에서도\n기복 없는 안정적인 Ncode 인식 성능을 보장합니다."
                }
              </FeatureDesc>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIconImg src="/images/technology/icon-sp-3.svg" alt="" />
            <div>
              <FeatureTitle>우수한 품질의 하드웨어</FeatureTitle>
              <FeatureDesc>
                단순히 외형적인 슬림함을 넘어, 개개인의 필기 각도나 습관에 따른
                비틀림까지 고려한 정밀 설계를 통해 최상의 하드웨어 안정성을
                구현했습니다.
              </FeatureDesc>
            </div>
          </FeatureCard>
        </CardsCol>
      </TwoColCenter>
    </Section>
  );
}

const CONTENT: Record<TabId, ReactNode> = {
  ncode: <NcodeContent />,
  printing: <PrintingContent />,
  smartpen: <SmartPenContent />,
};

/* ── Main component ─────────────────────────────── */
export default function TechTabs() {
  const [active, setActive] = useState<TabId>("ncode");

  return (
    <TabSection>
      <TabBarWrap>
        <Reveal y={32} once={false} amount={0.3}>
          <TabBar>
            {TABS.map((tab) => (
              <TabBtn
                key={tab.id}
                $active={active === tab.id}
                onClick={() => setActive(tab.id)}
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

import Image from "next/image";
import Section from "@/components/common/Section";
import Reveal from "@/components/common/Reveal";
import {
  OrgCenter,
  OrgChart,
  OrgNode,
  OrgNodeLabel,
  OrgRing,
  TeamDescription,
  TeamHeading,
} from "./CompanyTeam.styles";

interface TeamNode {
  key: string;
  label: string;
  icon: string;
  top: string;
  left: string;
  hoverTitle: string;
  hoverDescription: string;
}

/* Positions calculated from Figma 1640×800 chart, percentages = node center */
const teamNodes: TeamNode[] = [
  {
    key: "business",
    label: "사업",
    icon: "/images/company/team/business-target.svg",
    top: "15.6%",
    left: "50.5%",
    hoverTitle: "사업",
    hoverDescription: "고객의 숨겨진 니즈까지 발굴하여 최적의 솔루션을 찾아드립니다.",
  },
  {
    key: "ops",
    label: "생산 & 경영지원",
    icon: "/images/company/team/credit-card-payment-machine.svg",
    top: "42.3%",
    left: "68.7%",
    hoverTitle: "생산 & 경영지원",
    hoverDescription: "최고의 품질과 전략으로 시장의 신뢰를 확보합니다.",
  },
  {
    key: "hardware",
    label: "HW / FW / DVC",
    icon: "/images/company/team/computer-ram.svg",
    top: "42.3%",
    left: "32.3%",
    hoverTitle: "HW / FW / DVC",
    hoverDescription: "세상에 없던 스마트 디바이스를 탄생시킵니다.",
  },
  {
    key: "software",
    label: "SW 개발",
    icon: "/images/company/team/vector-line-curve.svg",
    top: "84.4%",
    left: "37.9%",
    hoverTitle: "SW 개발",
    hoverDescription: "데이터를 가치 있게 만드는 플랫폼을 구축합니다.",
  },
  {
    key: "design",
    label: "기획 & 디자인",
    icon: "/images/company/team/design-mug.svg",
    top: "84.4%",
    left: "63.0%",
    hoverTitle: "기획 & 디자인",
    hoverDescription: "사용자의 경험을 설계합니다.",
  },
];

export default function CompanyTeam() {
  return (
    <Section contained={false}>
      <Reveal y={20} duration={0.8}>
        <TeamHeading>
          하드웨어의 견고함과 소프트웨어의 유연함
          <br />
          그 사이의 완벽한 밸런스
        </TeamHeading>
      </Reveal>
      <Reveal y={20} duration={0.8} delay={0.1}>
        <TeamDescription>
          하드웨어를 잘 아는 소프트웨어 개발자, 소프트웨어의 흐름을 이해하는 하드웨어 개발자.
          <br />
          네오랩컨버전스의 전문가들은 자신의 영역을 넘어 제품의 '본질적 가치'를 위해 협업합니다.
        </TeamDescription>
      </Reveal>

      <Reveal y={32} duration={0.9} delay={0.2} style={{ width: "100%" }}>
        <OrgChart>
          <OrgRing $diameter={39.6} $alpha={0.1} />
          <OrgRing $diameter={30.5} $alpha={0.1} />
          <OrgCenter>{`NEOLAB\nTeam`}</OrgCenter>

          {teamNodes.map((node) => (
            <OrgNode
              key={node.key}
              $top={node.top}
              $left={node.left}
              tabIndex={0}
              aria-label={`${node.hoverTitle} - ${node.hoverDescription}`}
            >
              <div className="nodeDefault">
                <Image
                  src={node.icon}
                  alt=""
                  width={60}
                  height={60}
                  aria-hidden
                />
                <OrgNodeLabel>{node.label}</OrgNodeLabel>
              </div>
              <div className="nodeHover" aria-hidden>
                <OrgNodeLabel as="strong">{node.hoverTitle}</OrgNodeLabel>
                <OrgNodeLabel as="span">{node.hoverDescription}</OrgNodeLabel>
              </div>
            </OrgNode>
          ))}
        </OrgChart>
      </Reveal>
    </Section>
  );
}

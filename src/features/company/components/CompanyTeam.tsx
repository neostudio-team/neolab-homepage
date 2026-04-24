import { Icon } from "@iconify/react";
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
  TeamInner,
} from "./CompanyTeam.styles";

interface TeamNode {
  key: string;
  label: string;
  icon: string;
  top: string;
  left: string;
}

/* Positions calculated from Figma 1640×800 chart, percentages = node center */
const teamNodes: TeamNode[] = [
  {
    key: "business",
    label: "사업",
    icon: "streamline-cyber-color:business-target",
    top: "15.6%",
    left: "50.5%",
  },
  {
    key: "ops",
    label: "생산 & 경영지원",
    icon: "streamline-cyber-color:credit-card-payment-machine",
    top: "42.3%",
    left: "68.7%",
  },
  {
    key: "hardware",
    label: "HW / FW / DVC",
    icon: "streamline-cyber-color:computer-ram",
    top: "42.3%",
    left: "32.3%",
  },
  {
    key: "software",
    label: "SW 개발",
    icon: "streamline-cyber-color:vector-line-curve",
    top: "84.4%",
    left: "37.9%",
  },
  {
    key: "design",
    label: "기획 & 디자인",
    icon: "streamline-cyber-color:design-mug",
    top: "84.4%",
    left: "63.0%",
  },
];

export default function CompanyTeam() {
  return (
    <Section contained={false}>
      <TeamInner>
        <Reveal y={20} duration={0.8}>
          <TeamHeading>
            {`하드웨어의 견고함과 소프트웨어의 유연함\n그 사이의 완벽한 밸런스`}
          </TeamHeading>
        </Reveal>
        <Reveal y={20} duration={0.8} delay={0.1}>
          <TeamDescription>
            {`하드웨어를 잘 아는 소프트웨어 개발자, 소프트웨어의 흐름을 이해하는 하드웨어 개발자.\n네오랩컨버전스의 전문가들은 자신의 영역을 넘어 제품의 '본질적 가치'를 위해 협업합니다.`}
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
                style={{ top: node.top, left: node.left }}
              >
                <Icon icon={node.icon} aria-hidden />
                <OrgNodeLabel>{node.label}</OrgNodeLabel>
              </OrgNode>
            ))}
          </OrgChart>
        </Reveal>
      </TeamInner>
    </Section>
  );
}

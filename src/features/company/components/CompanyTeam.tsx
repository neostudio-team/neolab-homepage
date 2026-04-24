import { Icon } from "@iconify/react";
import Section from "@/components/common/Section";
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

const teamNodes = [
  {
    key: "business",
    label: "사업",
    icon: "streamline-cyber-color:business-target",
    top: "8%",
    left: "50%",
  },
  {
    key: "ops",
    label: "생산 & 경영지원",
    icon: "streamline-cyber-color:credit-card-payment-machine",
    top: "32%",
    left: "92%",
  },
  {
    key: "hardware",
    label: "HW / FW / DVC",
    icon: "streamline-cyber-color:computer-ram",
    top: "82%",
    left: "78%",
  },
  {
    key: "software",
    label: "SW 개발",
    icon: "streamline-cyber-color:vector-line-curve",
    top: "82%",
    left: "22%",
  },
  {
    key: "design",
    label: "기획 & 디자인",
    icon: "streamline-cyber-color:design-mug",
    top: "32%",
    left: "8%",
  },
];

export default function CompanyTeam() {
  return (
    <Section contained={false}>
      <TeamInner>
        <TeamHeading>
          {`하드웨어의 견고함과 소프트웨어의 유연함\n그 사이의 완벽한 밸런스`}
        </TeamHeading>
        <TeamDescription>
          {`하드웨어를 잘 아는 소프트웨어 개발자, 소프트웨어의 흐름을 이해하는 하드웨어 개발자.\n네오랩컨버전스의 전문가들은 자신의 영역을 넘어 제품의 '본질적 가치'를 위해 협업합니다.`}
        </TeamDescription>

        <OrgChart>
          <OrgRing $size={100} $alpha={0.05} />
          <OrgRing $size={75} $alpha={0.1} />
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
      </TeamInner>
    </Section>
  );
}

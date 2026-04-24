"use client";

import { useEffect, useRef, useState } from "react";
import {
  AwardsGrid,
  BulletItem,
  BulletList,
  Count,
  CountRow,
  InfoCard,
  InfoRow,
  InfoTitle,
  Label,
  Pill,
  PillRow,
  Title,
  Unit,
} from "./StatsSection.styles";
import Section from "@/components/common/Section";
import Reveal, { RevealGroup, RevealItem } from "@/components/common/Reveal";

interface StatsSectionProps {
  dict?: unknown;
}

const pills = [
  { label: "Ncode 최소 면적", count: 4, unit: "mm²" },
  { label: "인쇄 페이지", count: 96, unit: "억장" },
  { label: "기술 활용 국가", count: 76, unit: "개국" },
];

const coreTech = [
  "표면 좌표화 기술",
  "초고속 이미지 프로세싱 기술",
  "고품질의 코드 인쇄 기술",
  "고정밀의 광 전자 기기 제조 기술",
  "고속 필기 복원 알고리즘",
  "안정적인 필기 클라우드",
];

const awardsLeft = [
  "2012년: 벤처 활성화 유공 포상",
  "2012년: 굿디자인 우수상",
  "2012년: AT&D design 어워드 수상",
  "2013년: 대한민국 기술대상",
  "2014년: 독일 IF 디자인 상 (3개 부문)",
  "2015년: 독일 IF 디자인 상 (2개 부문)",
  "2016년: 장영실상",
];

const awardsRight = [
  "2016년: 국가연구개발 최우수상",
  "2016년: 수출의 탑 수상",
  "2017년: 대한민국 기술 대상",
  "2017년: 수출의 탑 수상",
  "2018년: 과학기술통신부 10대우수기업",
  "2019년: 예비 유니콘 기업 선정",
  "2022년: 혁신기업 국가대표 100 선정",
  "2025년: 독일 IF 디자인 상 (1개 부문)",
];

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

function StatPill({ item }: { item: (typeof pills)[number] }) {
  const { count, ref } = useCountUp(item.count);
  return (
    <Pill ref={ref}>
      <Label>{item.label}</Label>
      <CountRow>
        <Count>{count}</Count>
        <Unit>{item.unit}</Unit>
      </CountRow>
    </Pill>
  );
}

export default function StatsSection({ dict }: StatsSectionProps) {
  void dict;
  return (
    <Section backgroundImage="/images/home/figma/stats-bg.png">
      <Reveal>
        <Title>
          국내를 넘어
          <br />
          세계를 향해 가는 네오랩
        </Title>
      </Reveal>

      <RevealGroup stagger={0.2}>
        <PillRow>
          {pills.map((p) => (
            <RevealItem key={p.label} y={80} duration={1.1}>
              <StatPill item={p} />
            </RevealItem>
          ))}
        </PillRow>
      </RevealGroup>

      <Reveal y={100} duration={1.2} delay={0.1}>
        <InfoRow>
          <InfoCard>
            <InfoTitle>탄탄한 원천 기술</InfoTitle>
            <BulletList>
              {coreTech.map((item) => (
                <BulletItem key={item}>{item}</BulletItem>
              ))}
            </BulletList>
          </InfoCard>
          <InfoCard>
            <InfoTitle>주요 수상 경력</InfoTitle>
            <AwardsGrid>
              <BulletList>
                {awardsLeft.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </BulletList>
              <BulletList>
                {awardsRight.map((item) => (
                  <BulletItem key={item}>{item}</BulletItem>
                ))}
              </BulletList>
            </AwardsGrid>
          </InfoCard>
        </InfoRow>
      </Reveal>
    </Section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  ContentCol,
  Dot,
  EventDash,
  EventItem,
  EventList,
  TimelineLine,
  TimelineRoot,
  TimelineRow,
  YearCol,
  YearText,
} from "./CompanyHistoryTimeline.styles";

const historyData = [
  { year: "2026", events: ["아이글 출시"] },
  {
    year: "2025",
    events: ["차세대 스마트펜 라인업 확장 및 통합 라이프스타일 앱 'Neo Studio 2' 글로벌 출시"],
  },
  { year: "2024", events: ["AI 기반 스크린리스 학습 기기 '포코로(Pokoro)' 정식 런칭"] },
  { year: "2022", events: ["금융위원회 '혁신기업 국가대표 100' 선정"] },
  { year: "2020", events: ["글로벌 문구 브랜드 LAMY(라미)와 협업 솔루션 출시"] },
  { year: "2019", events: ["중소벤처기업부 '예비 유니콘' 기업 선정"] },
  { year: "2018", events: ["과학기술정보통신부 10대 우수 기업 선정", "서울형 강소기업 선정"] },
  {
    year: "2017",
    events: ["대한민국 기술대상 국무총리상 수상", "1천만 불 수출의 탑 수상", "매출 300억 돌파"],
  },
  {
    year: "2016",
    events: [
      "IR52 장영실상 수상",
      "국가연구개발 최우수상",
      "수출의 탑 수상",
      "iF 디자인 어워드 3년 연속 수상",
      "매출 200억 돌파",
      "Moleskine(몰스킨)과 협업 솔루션 출시",
    ],
  },
  { year: "2015", events: ["iF 디자인 어워드 2개 부문 수상"] },
  { year: "2014", events: ["스마트펜 'Neo smartpen N2' 출시", "iF 디자인 어워드 3개 부문 수상"] },
  { year: "2013", events: ["Neo1 출시", "대한민국 기술대상 수상", "매출 100억 원 돌파"] },
  { year: "2012", events: ["벤처 활성화 유공 포상(중소기업청장상)", "IT 분야 대한민국 대표브랜드 선정"] },
  { year: "2011", events: ["교육 기업(교원 등) 대상 소리펜 공급 개시"] },
  { year: "2010", events: ["독자적 Ncode™(엔코드) 기술 기반 확보, 소리펜 출시"] },
  { year: "2009", events: ["[02] 네오랩컨버전스 설립"] },
];

export default function CompanyHistoryTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visibleRows, setVisibleRows] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const rootElement = rootRef.current;
    if (!rootElement) return;

    const timelineRows = rootElement.querySelectorAll<HTMLElement>(
      "[data-timeline-row]",
    );
    if (timelineRows.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(
            (entry.target as HTMLElement).dataset.timelineIndex ?? "-1",
          );
          if (index < 0) return;

          setVisibleRows((prev) => {
            if (prev[index] === entry.isIntersecting) return prev;
            return { ...prev, [index]: entry.isIntersecting };
          });
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    timelineRows.forEach((row) => {
      observer.observe(row);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <TimelineRoot ref={rootRef}>
      <TimelineLine />

      {historyData.map((item, idx) => (
        <TimelineRow
          key={item.year}
          $index={idx}
          data-visible={visibleRows[idx] ? "true" : "false"}
          data-timeline-row
          data-timeline-index={idx}
        >
          <YearCol>
            <YearText>{item.year}</YearText>
          </YearCol>

          <ContentCol>
            <Dot />
            <EventList>
              {item.events.map((event) => (
                <EventItem key={event}>
                  <EventDash>—</EventDash>
                  <span>{event}</span>
                </EventItem>
              ))}
            </EventList>
          </ContentCol>
        </TimelineRow>
      ))}
    </TimelineRoot>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  JourneyEventItem,
  JourneyHeader,
  JourneyInner,
  JourneyList,
  JourneyTitle,
  JourneyViewport,
  JourneyYear,
  JourneyYearTag,
  PinContent,
  PinSpacer,
} from "./CompanyJourney.styles";

interface YearEntry {
  year: string;
  events: string[];
}

const historyData: YearEntry[] = [
  { year: "2009", events: ["네오랩컨버전스 설립"] },
  {
    year: "2010",
    events: ["독자적 Ncode™(엔코드) 기술 기반 확보, 소리펜 출시"],
  },
  { year: "2011", events: ["교육 기업(교원 등) 대상 소리펜 공급 개시"] },
  {
    year: "2012",
    events: [
      "벤처 활성화 유공 포상(중소기업청장상)",
      "AT&D Korea 대한민국 대표 브랜드 선정",
    ],
  },
  {
    year: "2013",
    events: [
      "Neo1 출시",
      "대한민국 기술대상 산업통상자원부장관상 수상",
      "매출 100억 원 돌파",
    ],
  },
  {
    year: "2014",
    events: [
      "스마트펜 'Neo smartpen N2' 출시",
      "iF 디자인 어워드 3개 부문 수상",
    ],
  },
  {
    year: "2015",
    events: [
      "iF 디자인 어워드 2개 부문 수상",
      "N2 Kickstarter 36만불 달성",
    ],
  },
  {
    year: "2016",
    events: [
      "iR52 장영실상 수상",
      "미래창조과학부 국가연구개발 우수성과 최우수상",
      "3백만불 수출의 탑 수상",
      "iF 디자인 어워드 3년 연속 수상",
      "매출 200억 돌파",
      "Moleskine(몰스킨)과 협업 솔루션 출시",
    ],
  },
  {
    year: "2017",
    events: [
      "대한민국 기술대상 국무총리상 수상",
      "1천만불 수출의 탑 수상",
      "매출 300억 돌파",
    ],
  },
  {
    year: "2018",
    events: [
      "과학기술정보통신부장관상 수상(스마트시티 비즈니스 페어 10대 우수 기업)",
      "서울형 강소기업 선정",
    ],
  },
  { year: "2019", events: ["중소벤처기업부 '예비 유니콘' 기업 선정"] },
  { year: "2020", events: ["글로벌 문구 브랜드 LAMY(라미)와 협업 솔루션 출시"] },
  { year: "2022", events: ["금융위원회 '혁신기업 국가대표 1000' 선정"] },
  { year: "2023", events: ["6년 연속 '서울형 강소기업' 선정"] },
  {
    year: "2024",
    events: [
      "AI 기반 스크린리스 학습 기기 '포코로(Pokoro)' 정식 런칭",
      "네오스마트펜 A1, R1 런칭",
    ],
  },
  { year: "2025", events: ["AI음성펜 포코로(Pokoro) iF 디자인 어워드 수상"] },
  {
    year: "2026",
    events: ["손글씨 서논술 AI평가지원 서비스 '아이글(Aigle)' 출시"],
  },
];

interface FlatEvent {
  year: string;
  text: string;
  id: string;
}

export default function CompanyJourney() {
  const flatEvents = useMemo<FlatEvent[]>(
    () =>
      historyData.flatMap((entry) =>
        entry.events.map((text, index) => ({
          year: entry.year,
          text,
          id: `${entry.year}-${index}`,
        })),
      ),
    [],
  );

  const pinRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const update = () => {
      const pin = pinRef.current;
      const list = listRef.current;
      if (!pin || !list) return;

      const isMobile = window.matchMedia("(max-width: 1023px)").matches;
      if (isMobile) {
        setTranslateY(0);
        return;
      }

      const range = pin.offsetHeight - window.innerHeight;
      if (range <= 0) return;

      const rect = pin.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / range));

      const firstItem = list.children[0] as HTMLElement | undefined;
      if (!firstItem) return;
      const itemHeight = firstItem.getBoundingClientRect().height;
      if (itemHeight <= 0) return;

      const lastIdx = flatEvents.length - 1;
      const snappedIdx = Math.round(progress * lastIdx);
      const centerY = window.innerHeight / 2;
      const ty = centerY - itemHeight * snappedIdx - itemHeight / 2;

      setTranslateY(ty);
      setActiveIndex(snappedIdx);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [flatEvents.length]);

  const activeEvent = flatEvents[activeIndex] ?? flatEvents[0];
  const activeYear = activeEvent.year;
  const yearPrefix = activeYear.slice(0, 2);
  const yearSuffix = activeYear.slice(2);

  return (
    <PinSpacer ref={pinRef} $steps={flatEvents.length}>
      <PinContent>
        <JourneyInner>
          <JourneyHeader>
            <JourneyTitle>우리의 여정</JourneyTitle>
            <JourneyYear key={activeYear}>
              <span>{yearPrefix}</span>
              {yearSuffix}
            </JourneyYear>
          </JourneyHeader>

          <JourneyViewport>
            <JourneyList
              ref={listRef}
              style={{ transform: `translateY(${translateY}px)` }}
            >
              {flatEvents.map((event, idx) => (
                <JourneyEventItem key={event.id} $active={idx === activeIndex}>
                  <span>
                    <JourneyYearTag>{event.year}</JourneyYearTag>
                    {event.text}
                  </span>
                </JourneyEventItem>
              ))}
            </JourneyList>
          </JourneyViewport>
        </JourneyInner>
      </PinContent>
    </PinSpacer>
  );
}

import Section from "@/components/common/Section";
import {
  JourneyDot,
  JourneyEventItem,
  JourneyEvents,
  JourneyHeader,
  JourneyInner,
  JourneyTitle,
  JourneyYear,
} from "./CompanyJourney.styles";

const events = [
  { text: "과학기술정보통신부 10대 우수 기업 선정" },
  { text: "서울형 강소기업 선정" },
  { text: "대한민국 기술대상 국무총리상 수상", highlight: true },
  { text: "1천만불 수출의 탑 수상" },
  { text: "매출 300억 돌파" },
];

export default function CompanyJourney() {
  return (
    <Section background="#fcfcfc" contained={false}>
      <JourneyInner>
        <JourneyHeader>
          <JourneyDot aria-hidden />
          <JourneyTitle>우리의 여정</JourneyTitle>
          <JourneyYear>
            <span>20</span>17
          </JourneyYear>
        </JourneyHeader>

        <JourneyEvents>
          {events.map((event) => (
            <JourneyEventItem key={event.text} $highlight={event.highlight}>
              {event.text}
            </JourneyEventItem>
          ))}
        </JourneyEvents>
      </JourneyInner>
    </Section>
  );
}

import Section from "@/components/common/Section";
import {
  OfficeAddress,
  OfficeBadge,
  OfficeCard,
  OfficeCardHeader,
  OfficeDot,
  OfficeGrid,
  OfficeHeader,
  OfficeInner,
  OfficeMapLink,
  OfficeName,
  OfficeTitle,
} from "./CompanyOffice.styles";

const offices = [
  {
    key: "seoul",
    badge: "본사",
    name: "서울 사무실",
    address:
      "서울특별시 구로구 디지털로30길 28\n마리오타워 1501호, 1503호",
    mapHref:
      "https://map.naver.com/v5/search/서울특별시 구로구 디지털로30길 28 마리오타워",
  },
  {
    key: "suwon",
    badge: "생산 HUB",
    name: "수원 사무실",
    address: "경기도 수원시 권선구 서부로 1433-20\n델리스 4층",
    mapHref:
      "https://map.naver.com/v5/search/경기도 수원시 권선구 서부로 1433-20",
  },
  {
    key: "tokyo",
    badge: "일본지사",
    name: "도쿄 사무실",
    address: "4-16-47-203, Shimorenjyaku\nMitaka city, Tokyo, Japan",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Shimorenjyaku+Mitaka+Tokyo+Japan",
  },
];

export default function CompanyOffice() {
  return (
    <Section background="#fcfcfc" contained={false}>
      <OfficeInner>
        <OfficeHeader>
          <OfficeDot aria-hidden />
          <OfficeTitle>사무실</OfficeTitle>
        </OfficeHeader>

        <OfficeGrid>
          {offices.map((office) => (
            <OfficeCard key={office.key}>
              <OfficeCardHeader>
                <OfficeBadge>{office.badge}</OfficeBadge>
                <OfficeName>{office.name}</OfficeName>
              </OfficeCardHeader>
              <OfficeAddress>{office.address}</OfficeAddress>
              <OfficeMapLink
                href={office.mapHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                지도보기
              </OfficeMapLink>
            </OfficeCard>
          ))}
        </OfficeGrid>
      </OfficeInner>
    </Section>
  );
}

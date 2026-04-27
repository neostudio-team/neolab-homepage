import Section from "@/components/common/Section";
import Reveal, { RevealGroup, RevealItem } from "@/components/common/Reveal";
import {
  OfficeAddress,
  OfficeBadge,
  OfficeCard,
  OfficeCardHeader,
  OfficeGrid,
  OfficeMapLink,
  OfficeName,
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
    address: "경기도 수원시 권선구 서부로\n1433-20, 델리스 4층",
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
    <Section background="#fcfcfc" title="사무실">
      <RevealGroup stagger={0.12} delay={0.1}>
        <OfficeGrid>
          {offices.map((office) => (
            <RevealItem key={office.key} y={32} duration={0.8}>
              <OfficeCard>
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
            </RevealItem>
          ))}
        </OfficeGrid>
      </RevealGroup>
    </Section>
  );
}

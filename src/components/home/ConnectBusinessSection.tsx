import Link from "next/link";
import {
  BlockDesc,
  BlockImage,
  BlockList,
  BlockRow,
  BlockTitle,
  CaseIcon,
  CaseIconMuted,
  CaseLabel,
  CaseLabelMuted,
  CaseLink,
  CaseList,
  CaseRowStatic,
  Category,
  ImageCol,
  Inner,
  PageTitle,
  Section,
  TextCol,
} from "./ConnectBusinessSection.styles";

interface BusinessCase {
  label: string;
  href: string;
}

interface BusinessBlockData {
  category: string;
  title: string;
  description: string;
}

interface ConnectBusinessSectionProps {
  dict: {
    title: string;
    smartStudy: BusinessBlockData;
    digitalTransform: BusinessBlockData;
    documentManagement: BusinessBlockData;
    collaboration: BusinessBlockData;
  };
}

interface FullBlock extends BusinessBlockData {
  cases: BusinessCase[];
  imagePosition: "left" | "right";
  image: string;
  imageAlt: string;
}

export default function ConnectBusinessSection({ dict }: ConnectBusinessSectionProps) {
  const blocks: FullBlock[] = [
    {
      ...dict.smartStudy,
      cases: [
        { label: "Megastudy - Smart Mbest", href: "https://www.mbest.co.kr/pub_all/smart2016/mbest/intro/" },
        { label: "Kyowon Kumon - smart kumon", href: "https://www.kumon.co.kr/Product/SmartKumonN" },
        { label: "Hybe Edu - Learn Korean with BTS", href: "https://weverseshop.io/ko/shop/GL_KR/artists/2/categories/82" },
      ],
      imagePosition: "right",
      image: "/images/home/connect1-edu.png",
      imageAlt: "Smart Study",
    },
    {
      ...dict.digitalTransform,
      cases: [
        { label: "MOLESKINE (ITALY) - MOLESKINE SMART", href: "https://www.moleskine.com/en-us/shop/moleskine-smart/" },
        { label: "LAMY (GERMANY) - LAMY safari all black ncode", href: "https://shop.lamy.com/de_de/highlights" },
        { label: "MONAMI(S. Korea) - Monami 153 edition", href: "https://www.neosmartpen.com/kor/neosmartpen-monami/" },
      ],
      imagePosition: "left",
      image: "/images/home/connect2-stationery.png",
      imageAlt: "Digital Transform",
    },
    {
      ...dict.documentManagement,
      cases: [
        { label: "LG Chem - Facility Inspection Solution", href: "#" },
        { label: "INFORM DS (INDIA) - Medical prescription Solution", href: "#" },
        { label: "IC SOLUTIONS (POLAND) - Corporate Document Solution", href: "#" },
      ],
      imagePosition: "right",
      image: "/images/home/connect3-form.png",
      imageAlt: "Document Management",
    },
    {
      ...dict.collaboration,
      cases: [
        { label: "Online whiteboard - Gridaboard", href: "https://gridaboard.io/" },
      ],
      imagePosition: "left",
      image: "/images/home/connect4-collab.png",
      imageAlt: "Collaboration",
    },
  ];

  return (
    <Section>
      <Inner>
        <PageTitle>{dict.title}</PageTitle>
        <BlockList>
          {blocks.map((block) => (
            <BlockRow key={block.category}>
              <ImageCol $orderAfter={block.imagePosition === "right"}>
                <BlockImage
                  src={block.image}
                  alt={block.imageAlt}
                  width={624}
                  height={400}
                />
              </ImageCol>
              <TextCol $orderAfter={block.imagePosition === "right"}>
                <Category>{block.category}</Category>
                <BlockTitle>{block.title}</BlockTitle>
                <BlockDesc>{block.description}</BlockDesc>
                <CaseList>
                  {block.cases.map((c) =>
                    c.href !== "#" ? (
                      <CaseLink key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                        <CaseIcon>Y</CaseIcon>
                        <CaseLabel>{c.label}</CaseLabel>
                      </CaseLink>
                    ) : (
                      <CaseRowStatic key={c.label}>
                        <CaseIconMuted>Y</CaseIconMuted>
                        <CaseLabelMuted>{c.label}</CaseLabelMuted>
                      </CaseRowStatic>
                    )
                  )}
                </CaseList>
              </TextCol>
            </BlockRow>
          ))}
        </BlockList>
      </Inner>
    </Section>
  );
}

import Link from "next/link";
import Image from "next/image";

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
    <section className="pt-[54px] pb-0 bg-white">
      <div className="max-w-[1080px] mx-auto px-4">
        <h2 className="text-[30px] font-medium text-center text-[#333] mb-16">
          {dict.title}
        </h2>
        <div className="space-y-20">
          {blocks.map((block) => (
            <div
              key={block.category}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className={`w-full lg:w-[58%] ${block.imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}>
                <Image src={block.image} alt={block.imageAlt} width={624} height={400} className="w-full h-auto" />
              </div>
              <div className={`w-full lg:w-[37%] ${block.imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">{block.category}</p>
                <h3 className="text-[22px] font-bold text-[#333] mb-4 leading-snug">{block.title}</h3>
                <p className="text-[#666] text-sm leading-[2] mb-6">{block.description}</p>
                <div className="space-y-3">
                  {block.cases.map((c) => (
                    c.href !== "#" ? (
                      <Link key={c.label} href={c.href} className="flex items-center gap-3 group" target="_blank" rel="noopener noreferrer">
                        <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] shrink-0">Y</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#333] group-hover:text-primary transition-colors">{c.label}</span>
                      </Link>
                    ) : (
                      <div key={c.label} className="flex items-center gap-3 group translate-y-0.5">
                        <span className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-[10px] shrink-0">Y</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#666]">{c.label}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

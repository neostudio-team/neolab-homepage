import Image from "next/image";
import Link from "next/link";

interface TechSectionProps {
  dict: {
    learnMore: string;
  };
}

export default function TechSection({ dict }: TechSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Figma 디자인 캡처 이미지 */}
      <div className="relative w-full">
        <Image
          src="/images/home/tech-section.png"
          alt="NeoLab Technology"
          width={1440}
          height={800}
          className="w-full h-auto block"
          style={{ objectFit: "cover" }}
          priority={false}
        />

        {/* See more 버튼 오버레이 — 이미지 하단 중앙 */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: "clamp(24px, 5%, 60px)" }}
        >
          <Link
            href="/ko/technology"
            className="inline-flex items-center gap-2 font-semibold text-white transition-all hover:brightness-110 active:scale-95"
            style={{
              background: "#F5A623",
              fontSize: "14px",
              letterSpacing: ".3px",
              padding: "12px 28px",
              borderRadius: "100px",
              whiteSpace: "nowrap",
            }}
          >
            {dict.learnMore} →
          </Link>
        </div>
      </div>
    </section>
  );
}

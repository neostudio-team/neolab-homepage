import Image from "next/image";
import Link from "next/link";

interface TechSectionProps {
  dict: {
    learnMore: string;
  };
}

export default function TechSection({ dict }: TechSectionProps) {
  void dict;

  return (
    <section className="relative w-full overflow-hidden">
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

        {/* See more 버튼 — 이미지 위에 실제 버튼으로 덮어씌움 */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: "6.5%" }}
        >
          <Link
            href="/ko/technology"
            className="inline-flex items-center gap-2 font-semibold text-white hover:brightness-110 active:scale-95 transition-all"
            style={{
              background: "#F5A623",
              fontSize: "clamp(13px, 1.1vw, 16px)",
              padding: "clamp(10px, 1vw, 14px) clamp(22px, 2vw, 32px)",
              borderRadius: "100px",
              whiteSpace: "nowrap",
              letterSpacing: "0.2px",
            }}
          >
            See more →
          </Link>
        </div>
      </div>
    </section>
  );
}

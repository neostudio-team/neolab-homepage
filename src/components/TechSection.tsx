import Image from "next/image";
import Link from "next/link";

interface TechSectionProps {
  dict: {
    learnMore: string;
  };
}

export default function TechSection({ dict }: TechSectionProps) {
  void dict; // learnMore 키 유지 (locale 호환)

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

        {/* See more → 버튼 위에 투명 클릭 영역 오버레이 */}
        <Link
          href="/ko/technology"
          aria-label="See more about NeoLab Technology"
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            bottom: "6.5%",
            width: "clamp(140px, 14%, 200px)",
            height: "clamp(36px, 5%, 56px)",
            borderRadius: "100px",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

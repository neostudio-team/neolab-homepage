import Link from "next/link";

interface CTASectionProps {
  dict: {
    title: string;
    subtitle: string;
    button: string;
    secondButton: string;
  };
}

export default function CTASection({ dict }: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#F5A623" }}
    >
      {/* Main CTA band */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "80px 80px" }}
      >
        {/* Left: headline */}
        <h2
          className="font-bold text-white"
          style={{
            fontSize: "clamp(36px, 4.5vw, 68px)",
            letterSpacing: "-2px",
            lineHeight: 1.05,
            whiteSpace: "pre-line",
          }}
        >
          {dict.title}
        </h2>

        {/* Right: circular contact button */}
        <Link
          href="mailto:biz@neolab.net"
          className="flex-shrink-0 flex flex-col items-center justify-center text-white font-bold text-center transition-all hover:bg-white hover:text-[#F5A623]"
          style={{
            width: "clamp(140px, 14vw, 200px)",
            height: "clamp(140px, 14vw, 200px)",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.8)",
            fontSize: "clamp(13px, 1.2vw, 16px)",
            letterSpacing: ".3px",
            padding: "20px",
          }}
        >
          <span className="leading-tight">{dict.button.replace(" →", "")}</span>
          <span style={{ fontSize: "1.4em", marginTop: 4 }}>→</span>
        </Link>
      </div>
    </section>
  );
}

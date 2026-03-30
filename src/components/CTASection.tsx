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
    <section className="bg-[#E63B2E] text-white px-[80px] py-[100px] grid grid-cols-[1fr_auto] items-center gap-[80px]">
      <div>
        <h2
          className="font-bold leading-[1.05] text-white"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(36px, 4vw, 64px)",
            letterSpacing: "-1.5px",
            whiteSpace: "pre-line",
          }}
        >
          {dict.title}
        </h2>
        <p className="font-light mt-3 text-[15px] text-white/65">
          {dict.subtitle}
        </p>
      </div>
      <div className="flex flex-col gap-3.5 items-end">
        <Link
          href="mailto:biz@neolab.net"
          className="inline-flex items-center gap-2.5 font-bold whitespace-nowrap text-[13px] tracking-[.5px] px-9 py-4 bg-white text-[#E63B2E] hover:bg-[#0a0a0a] hover:text-white transition-colors"
        >
          {dict.button}
        </Link>
        <Link
          href="/partnership"
          className="inline-flex items-center gap-2 font-medium whitespace-nowrap text-[13px] px-8 py-[15px] border border-white/35 text-white/70 hover:border-white hover:text-white transition-colors"
        >
          {dict.secondButton}
        </Link>
      </div>
    </section>
  );
}

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
      className="bg-[#E63B2E] text-white"
      style={{
        padding: "100px 80px",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gap: "80px",
      }}
    >
      <div>
        <h2
          className="font-bold leading-[1.05]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(36px, 4vw, 64px)",
            letterSpacing: "-1.5px",
            color: "#fff",
          }}
        >
          {dict.title}
        </h2>
        <p
          className="font-light mt-3"
          style={{ fontSize: "15px", color: "rgba(255,255,255,.65)" }}
        >
          {dict.subtitle}
        </p>
      </div>
      <div className="flex flex-col gap-3.5 items-end">
        <Link
          href="mailto:biz@neolab.net"
          className="inline-flex items-center gap-2.5 font-bold transition-all whitespace-nowrap"
          style={{
            background: "#fff",
            color: "#E63B2E",
            fontSize: "13px",
            letterSpacing: ".5px",
            padding: "16px 36px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#0a0a0a";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.color = "#E63B2E";
          }}
        >
          {dict.button}
        </Link>
        <Link
          href="https://neolab.net/ko/partnership"
          className="inline-flex items-center gap-2 font-medium transition-all whitespace-nowrap"
          style={{
            background: "transparent",
            color: "rgba(255,255,255,.7)",
            fontSize: "13px",
            padding: "15px 32px",
            border: "1px solid rgba(255,255,255,.35)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "rgba(255,255,255,.35)";
            (e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(255,255,255,.7)";
          }}
        >
          {dict.secondButton}
        </Link>
      </div>
    </section>
  );
}

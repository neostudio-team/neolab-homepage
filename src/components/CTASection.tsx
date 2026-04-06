import ContactModalTrigger from "./ContactModalTrigger";

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

        {/* Right: circular contact button → opens modal */}
        <ContactModalTrigger buttonText={dict.button} />
      </div>
    </section>
  );
}

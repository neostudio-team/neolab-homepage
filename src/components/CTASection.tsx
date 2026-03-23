import Link from "next/link";

interface CTASectionProps {
  dict: {
    title: string;
    button: string;
  };
}

export default function CTASection({ dict }: CTASectionProps) {
  return (
    <section className="py-0 bg-black text-center">
      <div className="max-w-[1080px] mx-auto px-4 py-16">
        <h2 className="text-[30px] font-medium text-gray-400 mb-8">
          {dict.title}
        </h2>
        <Link
          href="https://github.com/NeoSmartpen"
          className="inline-block bg-teal text-white px-8 py-3 uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          {dict.button}
        </Link>
      </div>
    </section>
  );
}

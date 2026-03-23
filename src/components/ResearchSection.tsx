import Link from "next/link";

interface ResearchSectionProps {
  dict: {
    title: string;
    subtitle: string;
    microsoft: string;
    germanAI: string;
    learnMore: string;
  };
}

export default function ResearchSection({ dict }: ResearchSectionProps) {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-[1080px] mx-auto px-4 text-center">
        <h2 className="text-[30px] font-medium mb-6">{dict.title}</h2>
        <p className="text-gray-400 uppercase tracking-wider text-xs mb-8">{dict.subtitle}</p>
        <div className="space-y-3 text-gray-400 text-sm">
          <p>
            {dict.microsoft} ( →{" "}
            <Link
              href="https://www.microsoft.com/en-us/research/publication/holodoc-enabling-mixed-reality-workspaces-that-harness-physical-and-digital-content-2/"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.learnMore}
            </Link>{" "}
            )
          </p>
          <p>
            {dict.germanAI} ( →{" "}
            <Link
              href="https://iml.dfki.de/cognitive-assessments-using-speech-based-dialogue-smartpen-and-ml/"
              className="text-blue-400 hover:text-blue-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.learnMore}
            </Link>{" "}
            )
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="https://github.com/NeoSmartpen"
            className="inline-block bg-teal text-white px-8 py-3 uppercase tracking-wider text-sm font-semibold hover:opacity-90 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open source code for Developers »
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

interface FutureSectionProps {
  dict: {
    category: string;
    title: string;
    description: string;
  };
}

export default function FutureSection({ dict }: FutureSectionProps) {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-[1080px] mx-auto px-4 py-[54px]">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-[37%]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
              {dict.category}
            </p>
            <h2 className="text-[22px] font-bold text-[#333] mb-4 leading-snug">
              {dict.title}
            </h2>
            <p className="text-[#666] text-sm leading-[2]">{dict.description}</p>
          </div>
          <div className="w-full lg:w-[58%] flex items-center justify-center">
            <Image
              src="/images/home/connect5-metaverse.png"
              alt="Metaverse Connection"
              width={624}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

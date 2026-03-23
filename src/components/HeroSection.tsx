import Image from "next/image";

interface HeroSectionProps {
  dict: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
}

export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-4 pt-[100px] lg:pt-[174px] pb-[50px]">
        <div className="max-w-[640px]">
          <h1 className="text-[32px] lg:text-[40px] font-black text-[#333] leading-[1.5] mb-6">
            {dict.title}
          </h1>
          <div className="space-y-4 text-[#666] text-base leading-[2] font-medium">
            <p>{dict.p1}</p>
            <p>{dict.p2}</p>
            <p>{dict.p3}</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/images/home/Neolab_landing_final.png"
          alt="NeoLAB Platform"
          width={1920}
          height={1021}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}

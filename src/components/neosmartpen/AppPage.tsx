import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface AppPageProps {
  hero: {
    title: string;
    subtitle: string;
  };
  features: Feature[];
  heroImage: string;
  featureImages?: string[];
}

export default function AppPage({ hero, features, heroImage, featureImages }: AppPageProps) {
  return (
    <>
      {/* Hero - dark gradient */}
      <section className="relative bg-[#1a1a2e] text-white overflow-hidden" style={{ minHeight: 480 }}>
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center" style={{ minHeight: 480 }}>
          <div className="w-full lg:w-1/2 py-16 z-10">
            <h1 className="text-[38px] lg:text-[46px] font-bold leading-tight mb-4">{hero.title}</h1>
            <p className="text-[16px] text-gray-300 leading-relaxed">{hero.subtitle}</p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center py-8 z-10">
            <Image
              src={heroImage}
              alt={hero.title}
              width={500}
              height={400}
              className="object-contain max-h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Features - alternating layout */}
      {features.map((feature, i) => {
        const isEven = i % 2 === 0;
        const hasFeatImg = featureImages && featureImages[i];
        const bgColor = isEven ? "bg-white" : "bg-[#f5f5f5]";

        return (
          <section key={feature.title} className={`${bgColor} py-16 lg:py-20`}>
            <div className="max-w-[1080px] mx-auto px-4">
              {hasFeatImg ? (
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={featureImages[i]}
                      alt={feature.title}
                      width={540}
                      height={400}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-[22px] font-bold text-[#333] mb-4">{feature.title}</h3>
                    <p className="text-[14px] text-[#666] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ) : (
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-[22px] font-bold text-[#333] mb-4">{feature.title}</h3>
                    <p className="text-[14px] text-[#666] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}

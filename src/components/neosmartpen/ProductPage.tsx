import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface ProductPageProps {
  hero: {
    title: string;
    subtitle: string;
  };
  features: Feature[];
  heroImage: string;
  featureImages?: string[];
  specs?: Record<string, string>;
}

export default function ProductPage({ hero, features, heroImage, featureImages, specs }: ProductPageProps) {
  return (
    <>
      {/* Hero - full-width dark section */}
      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: 500 }}>
        <div className="max-w-[1080px] mx-auto px-4 flex flex-col lg:flex-row items-center" style={{ minHeight: 500 }}>
          <div className="w-full lg:w-1/2 py-16 z-10">
            <p className="text-[14px] text-gray-400 mb-4 tracking-wider uppercase">{hero.subtitle}</p>
            <h1 className="text-[38px] lg:text-[46px] font-bold leading-tight">{hero.title}</h1>
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
          <section key={feature.title} className={`${bgColor} py-16 lg:py-24`}>
            <div className="max-w-[1080px] mx-auto px-4">
              {hasFeatImg ? (
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}>
                  <div className="w-full lg:w-1/2">
                    <Image
                      src={featureImages[i]}
                      alt={feature.title}
                      width={540}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-[22px] font-bold text-[#333] mb-4">{feature.title}</h3>
                    <p className="text-[14px] text-[#666] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center max-w-[700px] mx-auto">
                  <h3 className="text-[28px] lg:text-[36px] font-light text-[#ccc] mb-4">{feature.title}</h3>
                  <p className="text-[14px] text-[#999] leading-relaxed">{feature.description}</p>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* Specs */}
      {specs && (
        <section className="py-16 bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[22px] font-bold text-center text-[#333] mb-8">{specs.title || "Specifications"}</h2>
            <div className="max-w-lg mx-auto">
              {Object.entries(specs)
                .filter(([k]) => k !== "title")
                .map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-200 last:border-0">
                    <span className="text-[14px] text-[#666]">{value}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

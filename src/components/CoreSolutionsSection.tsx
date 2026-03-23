import Image from "next/image";

interface SolutionItem {
  title: string;
  description: string;
}

interface CoreSolutionsSectionProps {
  dict: {
    title: string;
    smart: SolutionItem;
    inputDevice: SolutionItem;
    cloud: SolutionItem;
    application: SolutionItem;
  };
}

const icons = [
  "/images/icons/icon1-smart.png",
  "/images/icons/Icon2-input.png",
  "/images/icons/icon3-cloud.png",
  "/images/icons/icon4-app.png",
];

export default function CoreSolutionsSection({ dict }: CoreSolutionsSectionProps) {
  const solutions = [dict.smart, dict.inputDevice, dict.cloud, dict.application];

  return (
    <section className="py-[54px] bg-white">
      <div className="max-w-[1080px] mx-auto px-4">
        <h2 className="text-[30px] font-medium text-center text-[#333] mb-12">
          {dict.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, i) => (
            <div key={solution.title} className="text-left">
              <div className="mb-4">
                <Image src={icons[i]} alt={solution.title} width={48} height={48} />
              </div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#333] mb-4">
                {solution.title}
              </h4>
              <p className="text-[#666] text-sm leading-[2]">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface DigitalAnalogSectionProps {
  dict: {
    title: string;
    naturalInterface: string;
    naturalInterfaceDesc: string;
    convergedAnalog: string;
    convergedAnalogDesc: string;
  };
}

export default function DigitalAnalogSection({ dict }: DigitalAnalogSectionProps) {
  return (
    <section className="pt-[54px] pb-0 bg-white">
      <div className="max-w-[1080px] mx-auto px-4">
        <h2 className="text-[30px] font-medium text-center text-black mb-12">
          {dict.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-right">
            <h3 className="text-[22px] font-bold text-[#333] mb-4">{dict.naturalInterface}</h3>
            <p className="text-[#666] text-sm leading-[2]">{dict.naturalInterfaceDesc}</p>
          </div>
          <div className="text-left">
            <h3 className="text-[22px] font-bold text-[#333] mb-4">{dict.convergedAnalog}</h3>
            <p className="text-[#666] text-sm leading-[2]">{dict.convergedAnalogDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

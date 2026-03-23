import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/paper/notebooks";
const NOTE_IMG = "/images/neosmartpen/main";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.notebooks.metadata;
  return { title: t.title, description: t.description };
}

export default async function NotebooksPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.notebooks;

  const notebooks = [
    { name: t.lineup.memo, desc: t.lineup.memoDesc, spec: t.lineup.memoSpec, img: `${IMG}/N-memo-2-1.png` },
    { name: t.lineup.blankPlanner, desc: t.lineup.blankPlannerDesc, spec: t.lineup.blankPlannerSpec, img: `${IMG}/N-Blank-Planner_01.png` },
    { name: t.lineup.moleskine, desc: t.lineup.moleskineDesc, spec: t.lineup.moleskineSpec, img: `${IMG}/N-Moleskine_01.png` },
    { name: t.lineup.ideaPadMini, desc: t.lineup.ideaPadMiniDesc, spec: t.lineup.ideaPadMiniSpec, img: `${IMG}/idea-pad-mini_01.png` },
    { name: t.lineup.college, desc: t.lineup.collegeDesc, spec: t.lineup.collegeSpec, img: `${IMG}/N_college_notebook-1.png` },
    { name: t.lineup.pocket, desc: t.lineup.pocketDesc, spec: t.lineup.pocketSpec, img: `${IMG}/N-pocket-2.png` },
    { name: t.lineup.ring, desc: t.lineup.ringDesc, spec: t.lineup.ringSpec, img: `${IMG}/N-ring_01-1.png` },
    { name: t.lineup.professional, desc: t.lineup.professionalDesc, spec: t.lineup.professionalSpec, img: `${NOTE_IMG}/note05-1.jpg` },
    { name: t.lineup.ideaPad, desc: t.lineup.ideaPadDesc, spec: t.lineup.ideaPadSpec, img: `${IMG}/idea-pad_01-1.png` },
    { name: t.lineup.holder, desc: t.lineup.holderDesc, spec: t.lineup.holderSpec, img: `${IMG}/N-Holder_Grey-1.png` },
  ];

  return (
    <>
      {/* S0: Hero */}
      <section className="bg-[#1a1a2e] text-white" style={{ minHeight: 480 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-[36px] lg:text-[48px] font-bold mb-4">
            {t.hero.subtitle}
          </h1>
          <p className="text-[14px] text-gray-400 mb-10">
            {t.appNote}
          </p>
          <Image
            src={`${IMG}/notebooks_hero.png`}
            alt={t.hero.title}
            width={800}
            height={500}
            className="object-contain w-full max-w-[700px]"
            priority
          />
        </div>
      </section>

      {/* S1: Variety - synced writing */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <h2 className="text-[24px] lg:text-[30px] font-bold text-[#333] mb-4 text-center">
            {t.features.variety}
          </h2>
          <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto text-center mb-12">
            {t.features.varietyDesc}
          </p>

          {/* iPad vs digital notebook comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <h3 className="text-[18px] font-semibold text-[#333] mb-4">{t.features.ipad}</h3>
              <div className="bg-[#f5f5f5] rounded-lg p-8 flex items-center justify-center" style={{ minHeight: 300 }}>
                <Image
                  src={`${IMG}/benefit_ios.png`}
                  alt={t.features.ipad}
                  width={375}
                  height={372}
                  className="object-contain w-full max-w-[300px]"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-[18px] font-semibold text-[#333] mb-4">{t.features.digitalNotebook}</h3>
              <div className="bg-[#f5f5f5] rounded-lg p-8 flex items-center justify-center" style={{ minHeight: 300 }}>
                <Image
                  src={`${IMG}/benefit_paper.png`}
                  alt={t.features.digitalNotebook}
                  width={375}
                  height={372}
                  className="object-contain w-full max-w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S2: Edit / Share / Search with images */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: t.features.edit, desc: t.features.editDesc, img: `${IMG}/note_usage_1.jpg` },
              { title: t.features.share, desc: t.features.shareDesc, img: `${IMG}/note_usage_2.jpg` },
              { title: t.features.search, desc: t.features.searchDesc, img: `${IMG}/note_usage_3.jpg` },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={320}
                    height={240}
                    className="w-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[#333] mb-4">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Quality - Ncode certification */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-[24px] lg:text-[30px] font-bold text-[#333] mb-4">
              {t.features.quality}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-6">
              {t.features.qualityDesc}
            </p>
            <Image
              src={`${NOTE_IMG}/Screen-Shot-2022-02-09-at-11.09.44-PM.png`}
              alt="Ncode certification"
              width={200}
              height={100}
              className="mx-auto mb-8"
            />
          </div>

          {/* Notebook product images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              `${NOTE_IMG}/note05-1.jpg`,
              `${NOTE_IMG}/note04-1.jpg`,
              `${NOTE_IMG}/note01-1.jpg`,
              `${NOTE_IMG}/note03-1.jpg`,
              `${NOTE_IMG}/note02-1.jpg`,
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Notebook ${i + 1}`}
                width={200}
                height={260}
                className="w-full object-cover rounded-lg shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* S4: Notebook lineup */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <h2 className="text-[28px] lg:text-[34px] font-bold text-[#333] mb-12 text-center">
            {t.lineup.title}
          </h2>

          <div className="space-y-10">
            {notebooks.map((nb, i) => (
              <div
                key={nb.name}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 bg-white rounded-lg p-6 shadow-sm`}
              >
                <div className="w-full lg:w-2/5 flex justify-center">
                  <Image
                    src={nb.img}
                    alt={nb.name}
                    width={280}
                    height={360}
                    className="object-contain rounded-lg max-h-[300px]"
                  />
                </div>
                <div className="w-full lg:w-3/5">
                  <h3 className="text-[20px] lg:text-[22px] font-bold text-[#333] mb-3">
                    {nb.name}
                  </h3>
                  <p className="text-[14px] text-[#666] leading-relaxed mb-4">
                    {nb.desc}
                  </p>
                  <p className="text-[12px] text-[#999] font-medium uppercase tracking-wider mb-1">
                    {t.lineup.productInfo}
                  </p>
                  <p className="text-[13px] text-[#888]">
                    {nb.spec}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

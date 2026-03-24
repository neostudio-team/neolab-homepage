import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const CDN = "https://shop.neosmartpen.com/cdn/shop";

const IMG = {
  featureRichBg: `${CDN}/files/neo-smartpen-r1-img.png?v=1756778721`,
  aboutBt: `${CDN}/files/25.png?v=1756700568`,
  aboutBat: `${CDN}/files/26.png?v=1756700529`,
  aboutSave: `${CDN}/files/27.png?v=1756700645`,
  sync: `${CDN}/files/221104-neolab_smartpen_-2234_1.png?v=1756790290`,
  edit: `${CDN}/files/221104-neolab_smartpen_-2378_1.png?v=1756790344`,
  transcribe: `${CDN}/files/221104-neolab_smartpen_-2396_1.png?v=1756790387`,
  searchBg: `${CDN}/files/14.png?v=1756693263`,
  notebooks: `${CDN}/files/11_a0ab5ef5-fed0-4e2d-a0f3-676cce04e21e.jpg?v=1756697566`,
  neoStudio: `${CDN}/files/16.png?v=1756698404`,
  gridaboard: `${CDN}/files/12.jpg?v=1756698417`,
  spec: `${CDN}/files/28.png?v=1756701172`,
  box: `${CDN}/files/1_bf147d36-cecc-47e6-89bc-d6bd0c372927.jpg?v=1756790863`,
};

const NOTEBOOK_PRODUCTS = [
  { name: "NEO SMART PLANNER 2026 Pro", price: "$20.00", img: `${CDN}/files/NEOSMARTPLANNER2026Pro_001.jpg?v=1760412631`, href: "https://shop.neosmartpen.com/products/neo-smart-planner-2026" },
  { name: "100 DAY COUNTDOWN PLANNER", price: "$9.50", img: `${CDN}/products/1-437017.png?v=1754458267`, href: "https://shop.neosmartpen.com/products/100-day-countdown-planner" },
  { name: "N PROFESSIONAL NOTEBOOK", price: "$19.00", img: `${CDN}/products/n-professional-notebook-notebook-notebook-black-798281.jpg?v=1615610117`, href: "https://shop.neosmartpen.com/products/n-professional-notebook-1" },
  { name: "N MOLESKINE NOTEBOOK", price: "$29.00", img: `${CDN}/products/n-moleskine-notebook-notebook-notebook-509125.jpg?v=1606769897`, href: "https://shop.neosmartpen.com/products/n-moleskine-notebook" },
  { name: "N RING NOTEBOOK (5 PACK)", price: "$19.90", img: `${CDN}/products/n-ring-notebook-5-pack-notebook-notebook-197592.jpg?v=1615610560`, href: "https://shop.neosmartpen.com/products/n-ring-notebook-5-pack" },
  { name: "N POCKET NOTEBOOKS (5 PACK)", price: "$14.90", img: `${CDN}/products/N-730011.jpg?v=1709830146`, href: "https://shop.neosmartpen.com/products/n-pocket-notebooks-5-pack" },
  { name: "N MEMO NOTEBOOKS (5 PACK)", price: "$14.90", img: `${CDN}/products/MEMO-NOTEBOOKS-766389.jpg?v=1709913031`, href: "https://shop.neosmartpen.com/products/n-memo-notebooks-5-pack" },
  { name: "N HANDY NOTEBOOK (BLUE)", price: "$15.00", img: `${CDN}/files/n-handy-notebook-notebook-notebook-light-blue-125132_208d7ca5-0110-43ca-a76a-a35c93871409.jpg?v=1701750686`, href: "https://shop.neosmartpen.com/products/n-handy-notebook-blue" },
];

const COMPARISON = [
  { spec: "Model", lamySafari: "NWP-F80", a1: "NWP-F151", m1plus: "NWP-F55", r1: "NWP-F45", dimo: "NWP-F30" },
  { spec: "Storage (A4)", lamySafari: "160 pgs", a1: "160 pgs", m1plus: "1000 pgs", r1: "20 pgs", dimo: "20 pgs" },
  { spec: "Battery", lamySafari: "Li-Polymer 180mAh", a1: "Li-po 130mAh", m1plus: "Li-po 280mAh", r1: "Li-po 180mAh", dimo: "AAA×1" },
  { spec: "Battery Life", lamySafari: "11 hours", a1: "14 hours", m1plus: "14 hours", r1: "14 hours", dimo: "9.5 hours" },
  { spec: "Charging", lamySafari: "5 Pin Cable", a1: "USB-C", m1plus: "USB-C", r1: "USB-C", dimo: "—" },
  { spec: "Size", lamySafari: "144×16mm", a1: "139×13.9mm", m1plus: "149.6×10.9mm", r1: "149×11mm", dimo: "140×14.7mm" },
  { spec: "Weight", lamySafari: "28g", a1: "20g", m1plus: "22g", r1: "18g", dimo: "26.5g" },
  { spec: "Connectivity", lamySafari: "BT 4.2", a1: "BT 5.0", m1plus: "BT 4.2", r1: "BT 4.2", dimo: "BT 4.2" },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productR1.metadata;
  return { title: t.title, description: t.description };
}

export default async function ProductR1Page({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.productR1;

  return (
    <>
      {/* S2: "Experience the freedom" */}
      <section className="bg-[#171717] text-white py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold mb-4">{t.freedom.heading}</h2>
          <p className="text-gray-400 text-[16px] leading-relaxed mb-12 max-w-[600px] mx-auto">{t.freedom.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { main: t.freedom.f1, sub: t.freedom.f1sub },
              { main: t.freedom.f2, sub: t.freedom.f2sub },
              { main: t.freedom.f3, sub: t.freedom.f3sub },
              { main: t.freedom.f4, sub: t.freedom.f4sub },
            ].map((item, i) => (
              <div key={i} className="border border-gray-700 rounded-xl p-6">
                <p className="font-bold text-white text-[15px] mb-1">{item.main}</p>
                <p className="text-gray-400 text-[13px]">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: "Feature Rich Smartpen, For Less" – background image overlay */}
      <section className="relative min-h-[500px] flex items-center">
        <Image
          src={IMG.featureRichBg}
          alt="Feature Rich Smartpen"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-[800px] mx-auto px-6 py-20 text-white">
          <h2 className="text-[32px] lg:text-[48px] font-black mb-3">{t.featureRich.heading}</h2>
          <p className="text-[18px] text-gray-300 mb-10">{t.featureRich.subheading}</p>
          <ul className="space-y-4">
            {[
              { main: t.featureRich.f1, sub: t.featureRich.f1sub },
              { main: t.featureRich.f2, sub: t.featureRich.f2sub },
              { main: t.featureRich.f3, sub: t.featureRich.f3sub },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center text-xs">✓</span>
                <div>
                  <span className="font-semibold">{item.main}</span>
                  <span className="text-gray-300"> / {item.sub}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* S4: "About R1" – 3 feature image cards */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#171717] text-center mb-3">{t.aboutR1.heading}</h2>
          <p className="text-center text-gray-500 text-[15px] mb-12 max-w-[500px] mx-auto">{t.aboutR1.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: IMG.aboutBt, label: t.aboutR1.b1 },
              { img: IMG.aboutBat, label: t.aboutR1.b2 },
              { img: IMG.aboutSave, label: t.aboutR1.b3 },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-[#f7f7f7]">
                <Image src={item.img} alt={item.label} width={400} height={300} className="w-full object-cover" unoptimized />
                <p className="text-center font-semibold text-[#171717] text-[14px] py-5 px-4">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S5: "Digitize your handwriting and beyond!" */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#171717] mb-4">{t.digitize.heading}</h2>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-12 max-w-[600px] mx-auto">{t.digitize.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: t.digitize.block1Title, desc: t.digitize.block1Desc },
              { title: t.digitize.block2Title, desc: t.digitize.block2Desc },
              { title: t.digitize.block3Title, desc: t.digitize.block3Desc },
            ].map((block, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-[#171717] text-[16px] mb-3">{block.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{block.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S6: "What You Can Do with R1" */}
      <section className="bg-white py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#171717] mb-3">{t.whatYouCan.heading}</h2>
          <p className="text-gray-500 text-[15px] mb-10">{t.whatYouCan.subheading}</p>
          <ul className="inline-flex flex-col gap-4 text-left">
            {[t.whatYouCan.item1, t.whatYouCan.item2, t.whatYouCan.item3, t.whatYouCan.item4].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-[15px] text-[#171717]">
                <span className="w-6 h-6 rounded-full bg-[#171717] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* S7: Sync handwriting */}
      <section className="bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image src={IMG.sync} alt="Sync handwriting" width={600} height={480} className="w-full rounded-2xl object-cover" unoptimized />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#171717] leading-tight mb-3">{t.sync.heading}</h2>
            <p className="text-[#171717] font-semibold text-[16px] mb-4 italic">{t.sync.tagline}</p>
            <p className="text-gray-500 text-[15px] leading-relaxed">{t.sync.desc}</p>
          </div>
        </div>
      </section>

      {/* S8: Edit The Way You Like It */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#171717] leading-tight mb-3">{t.edit.heading}</h2>
            <p className="text-[#171717] font-semibold text-[16px] mb-4 italic">{t.edit.tagline}</p>
            <p className="text-gray-500 text-[15px] leading-relaxed">{t.edit.desc}</p>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Image src={IMG.edit} alt="Edit handwriting" width={600} height={480} className="w-full rounded-2xl object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* S9: Transcribe & Export */}
      <section className="bg-[#f7f7f7]">
        <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image src={IMG.transcribe} alt="Transcribe and export" width={600} height={480} className="w-full rounded-2xl object-cover" unoptimized />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#171717] leading-tight mb-3">{t.transcribe.heading}</h2>
            <p className="text-[#171717] font-semibold text-[16px] mb-4 italic">{t.transcribe.tagline}</p>
            <p className="text-gray-500 text-[15px] leading-relaxed">{t.transcribe.desc}</p>
          </div>
        </div>
      </section>

      {/* S10: Search & Organize – full background image */}
      <section className="relative min-h-[460px] flex items-center">
        <Image src={IMG.searchBg} alt="Search and organize" fill className="object-cover object-center" unoptimized />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 py-20 text-white text-center">
          <h2 className="text-[32px] lg:text-[44px] font-black mb-4">{t.search.heading}</h2>
          <p className="text-[18px] text-gray-200 font-semibold mb-4 italic">{t.search.tagline}</p>
          <p className="text-gray-300 text-[15px] leading-relaxed">{t.search.desc}</p>
        </div>
      </section>

      {/* S11: NEO Smart Planner */}
      <section className="bg-[#ECECEC] py-16">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src="https://shop.neosmartpen.com/cdn/shop/files/2_4e69c0c0-7907-407f-926c-78fe44a4030c.jpg?v=1756790863"
              alt="NEO Smart Planner"
              width={600}
              height={400}
              className="w-full rounded-2xl object-cover"
              unoptimized
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#171717] mb-3">{t.planner.heading}</h2>
            <p className="text-[#171717] font-semibold text-[16px] mb-4">{t.planner.subheading}</p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{t.planner.desc}</p>
            <p className="text-[13px] text-gray-500">{t.planner.apps}</p>
          </div>
        </div>
      </section>

      {/* S12: Notebooks for Neo Smartpen */}
      <section className="bg-[#ECECEC] py-4 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#171717] text-center mb-12">{t.notebooks.heading}</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="w-full lg:w-1/2">
              <Image src={IMG.notebooks} alt="Notebooks for Neo Smartpen" width={600} height={420} className="w-full rounded-2xl object-cover" unoptimized />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-[22px] font-bold text-[#171717] mb-4">{t.notebooks.title}</h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">{t.notebooks.desc}</p>
            </div>
          </div>

          {/* Notebooks grid */}
          <h3 className="text-[20px] font-bold text-[#171717] text-center mb-8">{t.notebooks.findTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NOTEBOOK_PRODUCTS.map((nb, i) => (
              <a
                key={i}
                href={nb.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-square bg-gray-50 flex items-center justify-center p-3">
                  <Image src={nb.img} alt={nb.name} width={200} height={200} className="w-full h-full object-contain group-hover:scale-105 transition-transform" unoptimized />
                </div>
                <div className="p-3">
                  <p className="text-[11px] font-semibold text-[#171717] leading-tight mb-1">{nb.name}</p>
                  <p className="text-[12px] text-gray-500">{nb.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* S13: Apps */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#171717] text-center mb-12">{t.apps.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image src={IMG.neoStudio} alt="Neo Studio 2" width={600} height={360} className="w-full object-cover" unoptimized />
              <div className="p-8">
                <h3 className="text-[20px] font-bold text-[#171717] mb-3">{t.apps.ns2title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{t.apps.ns2desc}</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <Image src={IMG.gridaboard} alt="Grida Board" width={600} height={360} className="w-full object-cover" unoptimized />
              <div className="p-8">
                <h3 className="text-[20px] font-bold text-[#171717] mb-3">{t.apps.gbtitle}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{t.apps.gbdesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* S14: Specification */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#171717] text-center mb-12">{t.specs.heading}</h2>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="w-full lg:w-1/2">
              <Image src={IMG.spec} alt="Specification" width={600} height={500} className="w-full object-contain rounded-xl" unoptimized />
            </div>
            <div className="w-full lg:w-1/2">
              <table className="w-full text-[14px]">
                <tbody>
                  {[
                    [t.specs.model, t.specs.modelVal],
                    [t.specs.storage, t.specs.storageVal],
                    [t.specs.battery, t.specs.batteryVal],
                    [t.specs.batteryLife, t.specs.batteryLifeVal],
                    [t.specs.charging, t.specs.chargingVal],
                    [t.specs.size, t.specs.sizeVal],
                    [t.specs.weight, t.specs.weightVal],
                    [t.specs.powerBtn, t.specs.powerBtnVal],
                    [t.specs.connectivity, t.specs.connectivityVal],
                    [t.specs.colors, t.specs.colorsVal],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-200">
                      <td className="py-3 pr-6 text-gray-500 font-medium w-[160px] align-top">{label}</td>
                      <td className="py-3 text-[#171717]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* S15: What's Inside The Box */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#171717] text-center mb-12">{t.box.heading}</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <Image src={IMG.box} alt="What's inside the box" width={600} height={440} className="w-full object-contain rounded-xl" unoptimized />
            </div>
            <div className="w-full lg:w-1/2">
              <ul className="space-y-5">
                {[t.box.item1, t.box.item2, t.box.item3].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-gray-100 pb-5">
                    <span className="w-8 h-8 rounded-full bg-[#171717] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                    <p className="text-[15px] text-[#171717] pt-1">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[13px] text-gray-400 italic">{t.box.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* S16: Product Comparison Table */}
      <section className="bg-[#f7f7f7] py-16 overflow-x-auto">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#171717] text-center mb-12">{t.comparison.heading}</h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full text-[13px] bg-white">
              <thead>
                <tr className="bg-[#171717] text-white">
                  <th className="py-4 px-4 text-left font-semibold">Spec</th>
                  <th className="py-4 px-4 text-center font-semibold">Lamy Safari</th>
                  <th className="py-4 px-4 text-center font-semibold">A1</th>
                  <th className="py-4 px-4 text-center font-semibold">M1+</th>
                  <th className="py-4 px-4 text-center font-bold bg-gray-700">R1</th>
                  <th className="py-4 px-4 text-center font-semibold">Dimo</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-4 text-gray-500 font-medium">{row.spec}</td>
                    <td className="py-3 px-4 text-center text-[#171717]">{row.lamySafari}</td>
                    <td className="py-3 px-4 text-center text-[#171717]">{row.a1}</td>
                    <td className="py-3 px-4 text-center text-[#171717]">{row.m1plus}</td>
                    <td className="py-3 px-4 text-center font-bold text-[#171717] bg-yellow-50">{row.r1}</td>
                    <td className="py-3 px-4 text-center text-[#171717]">{row.dimo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* S17: User Manual */}
      <section className="bg-white py-16">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-[28px] font-bold text-[#171717] mb-8">{t.manual.heading}</h2>
          <div className="flex flex-col gap-4">
            <a
              href="https://neo-smartpen.myshopify.com/cdn/shop/files/F40_manual_global.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[14px] text-[#171717] font-medium text-left">{t.manual.dl1}</span>
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
            <a
              href="https://neo-smartpen.myshopify.com/cdn/shop/files/R1_manual_re7_240624.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border border-gray-200 rounded-xl px-6 py-4 hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[14px] text-[#171717] font-medium text-left">{t.manual.dl2}</span>
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

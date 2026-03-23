import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/paper/ncode-pdf";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.ncodePdf.metadata;
  return { title: t.title, description: t.description };
}

const PAPER_DOWNLOADS = [
  { img: "paper_plain-1.png", label: "Plain", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_A_Type_plain_en.zip" },
  { img: "paper_string-1.png", label: "Lined", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_B_Type_string_en.zip" },
  { img: "paper_grid-1.png", label: "Grid", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_C_Type_grid_en.zip" },
  { img: "paper_dot-1.png", label: "Dot", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_D_Type_dot_en.zip" },
  { img: "paper_landscape-1.png", label: "Landscape", href: "https://neosmartpen.com/wp-content/uploads/2022/03/Neosmartpen_A4_E_Type_landscape_en.zip" },
];

const TEMPLATE_DOWNLOADS = [
  { img: "NcodePDF_manuscript.png", label: "Manuscript", href: "https://drive.google.com/file/d/1d68IiJarC_BIni18uOehXZu30qavSzyr/view?usp=drive_link" },
  { img: "NcodePDF_Check-List.png", label: "Check-List", href: "https://drive.google.com/file/d/1gX9p7tta7JKwwLBZPAT7V8ZfDbTolRnr/view?usp=drive_link" },
  { img: "NcodePDF_cornell.png", label: "Cornell", href: "https://drive.google.com/file/d/1m3mQhDDN2Nuij9KfXuYycKWVwHPHsgkB/view?usp=drive_link" },
  { img: "NcodePDF_Meeting-Minutes.png", label: "Meeting Minutes", href: "https://drive.google.com/file/d/1P5xWYUrNNVYzj3dzgoaUlcz2c0sr74a3/view?usp=drive_link" },
  { img: "NcodePDF_log-sheet.png", label: "Log Sheet", href: "https://drive.google.com/file/d/1KUgsVdnHb7De0bxRHCNF6xaDowVQBsTH/view?usp=drive_link" },
  { img: "NcodePDF_Letter.png", label: "Letter", href: "https://drive.google.com/file/d/18OBF04MgfNr1OxYfda03vlbb0t-D29G-/view?usp=drive_link" },
  { img: "NcodePDF_A5_Plain.png", label: "A5 Plain", href: "https://drive.google.com/file/d/1F4y5bRssGaqROzJPKqeZtu72gShfOle6/view?usp=drive_link" },
  { img: "NcodePDF_A5_String.png", label: "A5 Lined", href: "https://drive.google.com/file/d/1sLWNy5rfG6U2tQ3wpIgEas4qzqufKFt-/view?usp=drive_link" },
];

const STORYBOARD_DOWNLOADS = [
  { img: "NcodeStoryBD_A4_ver1.png", label: "Storyboard A4", href: "https://neosmartpen.com/wp-content/uploads/2022/07/StoryBoard-A4.zip" },
  { img: "NcodeStoryBD_Letter_ver1.png", label: "Storyboard Letter", href: "https://neosmartpen.com/wp-content/uploads/2022/07/StoryBoard-Letter.zip" },
];

export default async function NcodePdfPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.ncodePdf;

  return (
    <>
      {/* S0: Hero */}
      <section className="bg-[#1a1a2e] text-white" style={{ minHeight: 400 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-[36px] lg:text-[48px] font-bold mb-4">
            {t.hero.title}
          </h1>
          <p className="text-[16px] text-gray-300 leading-relaxed max-w-[600px]">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* S1: How it works - 3 features */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: `${IMG}/Print-Icon_01.png`, title: t.features.printHome, desc: t.features.printHomeDesc },
              { icon: `${IMG}/Print-Icon_02.png`, title: t.features.enoughPages, desc: t.features.enoughPagesDesc },
              { icon: `${IMG}/Print-Icon_03.png`, title: t.features.templates, desc: t.features.templatesDesc },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mx-auto mb-6 object-contain"
                />
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[#333] mb-3">
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

      {/* S2: Printables - Template gallery */}
      <section className="bg-[#f5f5f5]">
        <div className="max-w-[1080px] mx-auto px-4 py-20">
          <h2 className="text-[28px] lg:text-[34px] font-bold text-[#333] mb-12 text-center">
            {t.printables}
          </h2>

          {/* Paper types - 5 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            {PAPER_DOWNLOADS.map((paper) => (
              <div key={paper.label} className="bg-white rounded-lg p-4 shadow-sm text-center">
                <Image
                  src={`${IMG}/${paper.img}`}
                  alt={paper.label}
                  width={200}
                  height={280}
                  className="w-full object-contain mb-4"
                />
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#333] text-white text-[13px] font-medium rounded hover:bg-[#555] transition-colors"
                >
                  {t.download}
                </a>
              </div>
            ))}
          </div>

          {/* Template downloads - 4 columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {TEMPLATE_DOWNLOADS.map((tmpl) => (
              <div key={tmpl.label} className="bg-white rounded-lg p-4 shadow-sm text-center">
                <Image
                  src={`${IMG}/${tmpl.img}`}
                  alt={tmpl.label}
                  width={200}
                  height={280}
                  className="w-full object-contain mb-4"
                />
                <a
                  href={tmpl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#333] text-white text-[13px] font-medium rounded hover:bg-[#555] transition-colors"
                >
                  {t.download}
                </a>
              </div>
            ))}
          </div>

          {/* Storyboard downloads - 2 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {STORYBOARD_DOWNLOADS.map((sb) => (
              <div key={sb.label} className="bg-white rounded-lg p-4 shadow-sm text-center">
                <Image
                  src={`${IMG}/${sb.img}`}
                  alt={sb.label}
                  width={400}
                  height={280}
                  className="w-full object-contain mb-4"
                />
                <a
                  href={sb.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#333] text-white text-[13px] font-medium rounded hover:bg-[#555] transition-colors"
                >
                  {t.download}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* S3: Print notes */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-16">
          <div className="bg-[#f9f9f9] rounded-lg p-8 mb-12">
            <p className="text-[13px] text-[#888] mb-2">
              <span className="font-semibold text-[#666]">{t.notes.noteLabel}</span>
            </p>
            <ul className="text-[13px] text-[#888] leading-relaxed space-y-1 list-decimal list-inside">
              <li>{t.notes.note1}</li>
              <li>{t.notes.note2}</li>
              <li>{t.notes.note3}</li>
            </ul>
          </div>

          {/* Before you print */}
          <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-2">
                {t.beforePrint}
              </h3>
              <h4 className="text-[18px] font-semibold text-[#555] mb-4">
                {t.testFirst}
              </h4>
              <p className="text-[14px] text-[#666] leading-relaxed">
                {t.testFirstDesc}
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/code_head_img-1.png`}
                alt={t.beforePrint}
                width={400}
                height={300}
                className="object-contain w-full max-w-[400px]"
              />
            </div>
          </div>

          {/* Neo Studio tip */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
            <div className="w-full lg:w-1/2">
              <h3 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-2">
                {t.neoStudio}
              </h3>
              <h4 className="text-[18px] font-semibold text-[#555] mb-4">
                {t.enableDisable}
              </h4>
              <p className="text-[14px] text-[#666] leading-relaxed">
                {t.enableDisableDesc}
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src={`${IMG}/NeoStudio_input.jpg`}
                alt={t.neoStudio}
                width={400}
                height={300}
                className="object-contain w-full max-w-[400px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

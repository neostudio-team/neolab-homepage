import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const IMG = "/images/neosmartpen/apps/neo-studio";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.neoStudio.metadata;
  return { title: t.title, description: t.description };
}

/* Feature grid image mapping per locale (JA has dedicated screenshots) */
const featureImages: Record<string, { img1: string; img2: string }> = {
  easyConnect:    { img1: `${IMG}/easy-connect-ja.png`,     img2: `${IMG}/easy-connect-ja-2.png` },
  edit:           { img1: `${IMG}/edit-ja.png`,             img2: `${IMG}/edit-ja-2.png` },
  videoShare:     { img1: `${IMG}/video-share-ja.png`,      img2: `${IMG}/video-share-ja-2.png` },
  search:         { img1: `${IMG}/search-ja.png`,           img2: `${IMG}/search-ja-2.png` },
  mediaShare:     { img1: `${IMG}/media-share-ja.png`,      img2: `${IMG}/media-share-ja-2.png` },
  voicePlayback:  { img1: `${IMG}/voice-playback-ja.png`,   img2: `${IMG}/voice-playback-ja-2.png` },
  tag:            { img1: `${IMG}/tag-ja.png`,              img2: `${IMG}/tag-ja-2.png` },
  bookmark:       { img1: `${IMG}/bookmark-ja.png`,         img2: `${IMG}/bookmark-ja-2.png` },
  textConvert:    { img1: `${IMG}/text-convert-ja.png`,     img2: `${IMG}/text-convert-ja-2.png` },
  autoSync:       { img1: `${IMG}/auto-sync-ja.png`,        img2: `${IMG}/auto-sync-ja-2.png` },
};

export default async function NeoStudioPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.neoStudio;

  const features = [
    { key: "easyConnect",   title: t.s2.featureEasyConnect,   desc: t.s2.featureEasyConnectDesc },
    { key: "edit",          title: t.s2.featureEdit,          desc: t.s2.featureEditDesc },
    { key: "videoShare",    title: t.s2.featureVideoShare,    desc: t.s2.featureVideoShareDesc },
    { key: "search",        title: t.s2.featureSearch,        desc: t.s2.featureSearchDesc },
    { key: "mediaShare",    title: t.s2.featureMediaShare,    desc: t.s2.featureMediaShareDesc },
    { key: "voicePlayback", title: t.s2.featureVoicePlayback, desc: t.s2.featureVoicePlaybackDesc },
    { key: "tag",           title: t.s2.featureTag,           desc: t.s2.featureTagDesc },
    { key: "bookmark",      title: t.s2.featureBookmark,      desc: t.s2.featureBookmarkDesc },
    { key: "textConvert",   title: t.s2.featureTextConvert,   desc: t.s2.featureTextConvertDesc },
    { key: "autoSync",      title: t.s2.featureAutoSync,      desc: t.s2.featureAutoSyncDesc },
  ];

  return (
    <>
      {/* S0: Title section - white */}
      <section className="bg-white" style={{ minHeight: 295 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-16 flex flex-col items-center text-center">
          <h1 className="text-[40px] lg:text-[56px] font-bold text-[#333] mb-4">
            {t.hero.title}
          </h1>
          <h2 className="text-[18px] lg:text-[22px] text-[#666] font-light leading-relaxed max-w-[700px]">
            {t.hero.subtitle}
          </h2>
        </div>
      </section>

      {/* S1: Description - white */}
      <section className="bg-white" style={{ minHeight: 304 }}>
        <div className="max-w-[900px] mx-auto px-4 py-12 text-center">
          <p className="text-[15px] lg:text-[17px] text-[#555] leading-[1.8]">
            {t.s1.desc}
          </p>
        </div>
      </section>

      {/* S2: Main features - white */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4">

          {/* Cross Platform Access */}
          <div className="py-16 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-6">
              {t.s2.crossPlatform}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-10">
              {t.s2.crossPlatformDesc}
            </p>
            <Image
              src={`${IMG}/NeoStudio_landing01.jpg`}
              alt="Neo Studio Cross Platform"
              width={1080}
              height={600}
              className="w-full object-contain rounded-lg mb-10"
            />

            {/* App store buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
              <a href="https://apps.apple.com/app/neo-studio/id1483403928" target="_blank" rel="noopener noreferrer">
                <Image src={`${IMG}/btn_appstore.png`} alt="App Store" width={160} height={48} className="object-contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=kr.neolab.neostudio" target="_blank" rel="noopener noreferrer">
                <Image src={`${IMG}/btn_googleplay.png`} alt="Google Play" width={160} height={48} className="object-contain" />
              </a>
            </div>

            {/* Desktop download icons */}
            <p className="text-[14px] text-[#999] mb-4">{t.s2.downloadForDesktop}</p>
            <div className="flex justify-center items-center gap-6">
              <a href="https://www.neosmartpen.com/neo-studio-download/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
                <Image src={`${IMG}/donwload_icon_windows.png`} alt="Windows" width={40} height={40} className="object-contain" />
                <span className="text-[12px] text-[#999]">Windows</span>
              </a>
              <a href="https://www.neosmartpen.com/neo-studio-download/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:opacity-70 transition-opacity">
                <Image src={`${IMG}/donwload_icon_mac.png`} alt="Mac" width={40} height={40} className="object-contain" />
                <span className="text-[12px] text-[#999]">Mac</span>
              </a>
            </div>
          </div>

          {/* Export features - 3 columns */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t.s2.createPdf, desc: t.s2.createPdfDesc },
              { title: t.s2.createSvg, desc: t.s2.createSvgDesc },
              { title: t.s2.createPng, desc: t.s2.createPngDesc },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#333] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Share Creativity */}
          <div className="py-16 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-6">
              {t.s2.shareCreativity}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-10">
              {t.s2.shareCreativityDesc}
            </p>
          </div>

          {/* GIF animation - ideation */}
          <div className="py-16 text-center">
            <h2 className="text-[24px] lg:text-[30px] font-bold text-[#333] mb-4">
              {t.s2.ideationHeading}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-10">
              {t.s2.ideationDesc}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/ideation-min.gif`}
              alt="Ideation to Finalization"
              className="w-full max-w-[800px] mx-auto object-contain rounded-lg"
            />
            <p className="text-[12px] text-[#999] mt-3 italic">
              {t.s2.ideationNote}
            </p>
          </div>

          {/* Bigger screen */}
          <div className="py-16 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-6">
              {t.s2.biggerScreen}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-10">
              {t.s2.biggerScreenDesc}
            </p>
            <Image
              src={`${IMG}/NS-web.png`}
              alt="Neo Studio Web"
              width={1080}
              height={600}
              className="w-full object-contain rounded-lg"
            />
          </div>

          {/* Edit with Ease */}
          <div className="py-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <Image
                src={`${IMG}/필기편집02.png`}
                alt="Edit with Ease"
                width={540}
                height={400}
                className="w-full object-contain rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-4">
                {t.s2.editWithEase}
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed">
                {t.s2.editWithEaseDesc}
              </p>
            </div>
          </div>

          {/* Find & Retrieve */}
          <div className="py-16 flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-1/2">
              <Image
                src={`${IMG}/Neostudio_검색.png`}
                alt="Find & Retrieve"
                width={540}
                height={400}
                className="w-full object-contain rounded-lg"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-4">
                {t.s2.findRetrieve}
              </h2>
              <p className="text-[15px] text-[#666] leading-relaxed mb-4">
                {t.s2.findRetrieveDesc}
              </p>
              <p className="text-[13px] text-[#999] italic">
                {t.s2.languages30}
              </p>
            </div>
          </div>

          {/* Supported Languages */}
          <div className="py-8">
            <details className="border border-[#ddd] rounded-lg overflow-hidden">
              <summary className="px-6 py-4 cursor-pointer bg-[#f9f9f9] hover:bg-[#f0f0f0] transition-colors">
                <h3 className="inline text-[16px] font-semibold text-[#333]">
                  {t.s2.supportedLanguagesTitle}
                </h3>
              </summary>
              <div className="px-6 py-4">
                <p className="text-[14px] text-[#666] leading-relaxed">
                  {t.s2.supportedLanguagesList}
                </p>
              </div>
            </details>
          </div>

        </div>
      </section>

      {/* Feature Grid - app features with screenshots */}
      <section className="bg-white">
        <div className="max-w-[1080px] mx-auto px-4 py-16">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-12 text-center">
            {t.s2.featureGridTitle}
          </h2>
          <div className="space-y-20">
            {features.map((feature, idx) => {
              const imgs = featureImages[feature.key];
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={feature.key}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10`}
                >
                  {/* Screenshot */}
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                      src={imgs.img1}
                      alt={feature.title}
                      width={480}
                      height={720}
                      className="w-full max-w-[360px] object-contain rounded-2xl shadow-lg"
                    />
                  </div>
                  {/* Text + icon */}
                  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image
                      src={imgs.img2}
                      alt={`${feature.title} icon`}
                      width={56}
                      height={56}
                      className="object-contain mb-4"
                    />
                    <h4 className="text-[22px] lg:text-[26px] font-bold text-[#333] mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-[15px] text-[#666] leading-relaxed max-w-[440px]">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* S3: Desktop features */}
      <section className="bg-[#f7f7f7]">
        <div className="max-w-[1080px] mx-auto px-4">

          {/* Desktop title */}
          <div className="py-16 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-6">
              {t.s3.desktopTitle}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-12">
              {t.s3.desktopDesc}
            </p>

            {/* Desktop screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Image
                src={`${IMG}/Screenshot-2023-04-07-at-4.43.47-PM-1.png`}
                alt="Neo Studio Desktop screenshot 1"
                width={350}
                height={220}
                className="w-full object-contain rounded-lg shadow-md"
              />
              <Image
                src={`${IMG}/Screenshot-2023-04-07-at-5.06.02-PM.png`}
                alt="Neo Studio Desktop screenshot 2"
                width={350}
                height={220}
                className="w-full object-contain rounded-lg shadow-md"
              />
              <Image
                src={`${IMG}/Screenshot-2023-04-07-at-5.29.48-PM.png`}
                alt="Neo Studio Desktop screenshot 3"
                width={350}
                height={220}
                className="w-full object-contain rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Do more */}
          <div className="py-16 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-6">
              {t.s3.doMore}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-3">
              {t.s3.doMoreDesc}
            </p>
            <p className="text-[12px] text-[#999] italic">
              {t.s2.doMoreNote}
            </p>
          </div>

          {/* Pen Mouse */}
          <div className="py-16 text-center">
            <h2 className="text-[28px] lg:text-[36px] font-bold text-[#333] mb-6">
              {t.s3.penMouse}
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed max-w-[700px] mx-auto mb-3">
              {t.s3.penMouseDesc}
            </p>
            <p className="text-[12px] text-[#999] italic">
              {t.s2.penMouseNote}
            </p>
          </div>

        </div>
      </section>

      {/* S4: CTA - black bg */}
      <section className="bg-[#111]" style={{ minHeight: 453 }}>
        <div className="max-w-[1080px] mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-[20px] lg:text-[26px] text-white font-light leading-relaxed max-w-[700px] mb-10">
            {t.s4.cta}
          </h2>
          <a
            href="https://shop.neosmartpen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-white text-white text-[14px] hover:bg-white hover:text-[#111] transition-colors"
          >
            {t.s4.shopLink}
          </a>
        </div>
      </section>
    </>
  );
}

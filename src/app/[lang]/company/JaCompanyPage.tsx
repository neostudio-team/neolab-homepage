import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Locale } from "@/i18n/config";

const WP = "https://neolab.co.jp/wp-content/uploads";

const IMGS = {
  face01: `${WP}/2022/01/Face01-write.jpeg`,
  heroGroup: `${WP}/2022/03/IMG_4046.jpg`,
  impression02: `${WP}/2022/01/impression02.jpg`,
  face04: `${WP}/2022/01/Face04-logo.png`,
  coWorking: `${WP}/2022/01/co-working-space-61.png`,
  pplTalk: `${WP}/2022/01/PPL_talk.jpg`,
  top2: `${WP}/2023/07/TOP-2.jpg`,
  ppl016: `${WP}/2022/01/PPL016.jpg`,
  top1: `${WP}/2023/07/TOP-1.jpg`,
  ppl019: `${WP}/2022/01/PPL019.jpg`,
  ppl014: `${WP}/2022/01/PPL014.jpg`,
  iconSetup: `${WP}/2022/02/icon_setup.png`,
  iconCEO: `${WP}/2022/02/icon_CEO.png`,
  steve: `${WP}/2022/02/steve.jpg`,
  ozawa: `${WP}/2022/02/ozawa.jpg`,
  activities: `${WP}/2022/02/06.jpeg`,
  biz01: `${WP}/2022/02/biz01.jpg`,
  biz02: `${WP}/2022/02/biz02.jpg`,
  iconTech01: `${WP}/2022/02/icon_Tech01.png`,
  iconColl02: `${WP}/2022/02/icon-coll02.png`,
  iconTech03: `${WP}/2022/02/icon_Tech03.png`,
  bottom: `${WP}/2022/01/bottom.png`,
  footerLogo: `${WP}/2022/03/NeoLAB-CI-2.png`,
};

const partners = [
  "アスクル株式会社",
  "株式会社アルク",
  "株式会社岩田屋三越",
  "株式会社内田洋行",
  "株式会社エヌ・ティ・ティ・データ",
  "株式会社NTTドコモ",
  "株式会社学書",
  "株式会社カタログハウス",
  "有限会社ジェイ・リサーチ出版",
  "株式会社ジャック",
  "株式会社小学館集英社プロダクション",
  "大日本印刷株式会社",
  "株式会社蔦屋家電エンタープライズ",
  "TOPPAN株式会社",
  "株式会社トヨタシステムズ",
  "株式会社ドリームブロッサム",
  "株式会社阪急阪神百貨店",
  "株式会社フレーベル館",
  "ベータ・ジャパン合同会社",
];

const history = [
  { year: "2006", text: "NeoLAB株式会社（日本法人）企業、教育関連のモバイルアプリ開発会社として誕生" },
  { year: "2008", text: "デバイス（デジアナ製品）関連の開発と研究を開始" },
  { year: "2009", text: "Seoul officeオープン、先のIot産業発展に備え研究所開設" },
  { year: "2010", text: "World IT Show参加、初代Sound Pen リリース（教育業界向けの音声ペン）" },
  { year: "2012", text: "Good design Kids賞受賞（ペンが教育と相性のよい産業であり私教育熱の高い韓国における販売実績急上昇）" },
  { year: "2013", text: "（独）世界最大ブックフェア、（伊）世界最大キッズ向けブックフェア、東京ブックフェア等へ参加。初代自社製スマートペン Neo smartpen neo.1リリース" },
  { year: "2014", text: "Neo smartpen N2リリース直前、米クラウドファンディング「Kickstarter」にローンチし1800％達成、テクニカル部門世界二位となる" },
  { year: "2015", text: "米アマゾン.comリリース、日本でもAmazonにて販売開始。（独）iFデザイン賞において2製品が対象となり受賞決定。NeoLAB TAIWAN設立" },
  { year: "2016", text: "Moleskine Smart Writing Set リリース、（韓）「輸出の塔」受賞、国家研究開発優秀賞と最優秀賞受賞" },
  { year: "2017", text: "（米）Staples入店、（韓）Neo smartpen LINE FRIENDS Editionリリース" },
  { year: "2018", text: "（米）CESにて新製品発表にてNeo smartpen Mシリーズ発表、日本でNeo smartpen M1 発売開始" },
  { year: "2019", text: "（韓）Korea Technology Finance Corporationから可能性ある中小ベンチャー企業として選定" },
  { year: "2020", text: "Neo smartpen M1+発売 NEO STUDIOアプリ始動" },
  { year: "2021", text: "ドイツLAMY社のロングセラーモデルsafariのスマートペン販売開始" },
  { year: "2022", text: "フジテレビ冬季スポーツ中継にNeo smartpen登場" },
  { year: "2024", text: "Neo smartpen A1発売" },
];

interface JaCompanyPageProps {
  lang: Locale;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: any;
}

export default function JaCompanyPage({ lang, dict }: JaCompanyPageProps) {
  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <main>

        {/* ── Hero ── */}
        <section className="bg-[#1a1a2e] text-white py-16">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: text */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#39d2cc] mb-3">team neolab</p>
                <h1 className="text-[32px] lg:text-[44px] font-black leading-tight mb-5">
                  アナログとデジタルの世界を繋ぐ<br />テクノロジーの専門企業
                </h1>
                <p className="text-gray-400 text-sm tracking-widest">源泉技術開発・テクノロジーからプロダクトまで</p>
              </div>
              {/* Right: images grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="rounded-[32px] overflow-hidden">
                    <Image src={IMGS.heroGroup} alt="NeoLAB team" width={400} height={500} className="w-full h-auto object-cover" unoptimized />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="rounded-full overflow-hidden w-20 h-20">
                    <Image src={IMGS.face01} alt="Writing with smartpen" width={80} height={80} className="w-full h-full object-cover" unoptimized />
                  </div>
                  <div className="rounded-[32px] overflow-hidden">
                    <Image src={IMGS.impression02} alt="NeoLAB" width={400} height={400} className="w-full h-auto object-cover" unoptimized />
                  </div>
                  <div className="rounded-full overflow-hidden w-16 h-16">
                    <Image src={IMGS.face04} alt="NeoLAB Logo Badge" width={64} height={64} className="w-full h-full object-cover" unoptimized />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Moon Shot Thinkers ── */}
        <section className="py-16 bg-[#f4f4f4]">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[36px] lg:text-[52px] font-extrabold text-black leading-tight mb-6">MOON SHOT<br />THINKERS</h2>
                <p className="text-[#666] text-sm leading-[2]">
                  NeoLABグループは、一見不可能な物事を革新的な思考を通してひとつひとつ実行していく人たちが集まった会社です。ハードウェア、ファームウェア、ソフトウェアからサーバー技術まで融合された基盤技術を保有するNeoLABグループは幅広い経験を持つ人材たちで構成された専門家集団であることを自負しています。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image src={IMGS.coWorking} alt="Co-working space" width={400} height={300} className="w-full h-auto rounded-lg" unoptimized />
                <Image src={IMGS.pplTalk} alt="Team discussion" width={400} height={300} className="w-full h-auto rounded-lg" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* ── Vision ── */}
        <section className="py-16 bg-[#1a1a2e] text-white text-center">
          <div className="max-w-[800px] mx-auto px-4">
            <p className="text-xs uppercase tracking-[0.4em] text-[#39d2cc] mb-6">VISION</p>
            <p className="text-[18px] lg:text-[22px] font-light leading-relaxed mb-8 italic text-gray-200">
              We are analog beings living in the digital environment.<br />
              We connect your handwriting to the digital world<br />
              to dream, create and achieve more.
            </p>
            <p className="text-gray-400 text-sm leading-[2] max-w-2xl mx-auto">
              私たち人間は、デジタル社会の発達したこの世界で生きるアナログ的存在です。筆記をデジタルの世界に繋げることを夢見て、皆様がより多くのことを実現させるように努めてまいります。
            </p>
          </div>
        </section>

        {/* ── Company Info ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[36px] font-extrabold text-black mb-10 text-center">NEOLAB</h2>
            {/* Company table */}
            <div className="max-w-[640px] mx-auto mb-14">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {[
                    ["会社名", "NeoLAB株式会社 （読み：ネオラボ）"],
                    ["設立", "2006年11月"],
                    ["資本金", "99百万円"],
                    ["代表", "Steve Sanggyu Lee"],
                    ["従業員数", "約110名（日本法人6名）"],
                    ["所在地", "東京都港区南青山7-4-18"],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-gray-200">
                      <td className="py-3 pr-6 text-[#888] font-medium w-[140px] align-top">{label}</td>
                      <td className="py-3 text-[#333]">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CEO & Director profiles */}
            <div className="grid lg:grid-cols-2 gap-10">
              {/* CEO */}
              <div className="bg-[#f8f8f8] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={IMGS.iconSetup} alt="CEO icon" width={40} height={40} unoptimized />
                  <h3 className="font-bold text-[#333] text-lg">代表取締役</h3>
                </div>
                <div className="flex gap-4 items-start">
                  <Image src={IMGS.steve} alt="Steve Sanggyu Lee" width={90} height={110} className="rounded object-cover shrink-0" unoptimized />
                  <div>
                    <p className="font-bold text-[#333] mb-1">Steve Sanggyu Lee</p>
                    <p className="text-xs text-[#666] leading-relaxed">
                      KAIST(Korea Advanced Institution of Science and Technology)卒業<br />
                      1997年 Neowiz Group共同設立 のちに上場（KOSDAQ 042420）<br />
                      2000年～2003年 Neowizの海外マーケティングディレクターを務める<br />
                      2003年～2007年 Neowiz Japan CEOを務める<br />
                      2006年～現在に至る NeoLAB株式会社設立 代表取締役 (Tokyo)<br />
                      2009年～現在に至る NeoLAB Convergence Inc. CEO (Seoul)
                    </p>
                  </div>
                </div>
              </div>
              {/* Director */}
              <div className="bg-[#f8f8f8] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={IMGS.iconCEO} alt="Director icon" width={40} height={40} unoptimized />
                  <h3 className="font-bold text-[#333] text-lg">取締役</h3>
                </div>
                <div className="flex gap-4 items-start">
                  <Image src={IMGS.ozawa} alt="Aki Ozawa" width={90} height={110} className="rounded object-cover shrink-0" unoptimized />
                  <div>
                    <p className="font-bold text-[#333] mb-1">小澤亜希 Aki Ozawa</p>
                    <p className="text-xs text-[#666] leading-relaxed">
                      京都女子大学 (Kyoto Women&apos;s University) 卒業<br />
                      1997年 EPSON MEDICAL入社（現 株式会社EMシステムズ）<br />
                      2003年～ Neowiz Japan 創業参画 広報セクションの設立<br />
                      2009年 NeoLAB株式会社<br />
                      2011年～現在に至る NeoLAB株式会社 取締役
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="py-14 bg-[#f4f4f4]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[24px] font-bold text-black mb-8 text-center">主要取引先</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-[800px] mx-auto">
              {partners.map((p) => (
                <p key={p} className="text-sm text-[#555] py-1 text-center border-b border-gray-200">{p}</p>
              ))}
            </div>
            <p className="text-xs text-[#888] text-center mt-4">（五十音順）</p>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-4 bg-white overflow-hidden">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="col-span-2 row-span-2">
                <Image src={IMGS.top2} alt="NeoLAB" width={600} height={400} className="w-full h-full object-cover rounded-lg" unoptimized />
              </div>
              <Image src={IMGS.ppl016} alt="NeoLAB team" width={300} height={200} className="w-full h-full object-cover rounded-lg" unoptimized />
              <Image src={IMGS.top1} alt="NeoLAB" width={300} height={200} className="w-full h-full object-cover rounded-lg" unoptimized />
              <Image src={IMGS.ppl019} alt="NeoLAB exhibition" width={300} height={200} className="w-full h-full object-cover rounded-lg" unoptimized />
              <Image src={IMGS.ppl014} alt="NeoLAB team photo" width={300} height={200} className="w-full h-full object-cover rounded-lg" unoptimized />
            </div>
          </div>
        </section>

        {/* ── NeoLAB Japan Activities ── */}
        <section className="py-16 bg-[#f4f4f4]">
          <div className="max-w-[1080px] mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#39d2cc] mb-2">since 2006</p>
                <h2 className="text-[28px] font-bold text-black mb-6">NeoLAB Japanの活動</h2>
                <p className="text-sm text-[#666] leading-[2.2]">
                  Ncode™ 技術を通じてデジタルとアナログを融合し、紙とペンが用いられるあらゆる市場に新しい価値を創出していく為に日々力を尽くしています。人の暮らしや働き方を変える、そのためのツールとしては100％デジタルよりもデジタルとアナログの各長所を活かしあう融合サービスの方がもっと先進的で有意義な事もある事に気づかされます。ここ数十年のデジタル化社会で人が機械に合わせてきた時代を超え、より自然な行動をよりスマートにアシストするインプットデバイスに注目が集まっています。私達NeoLAB Japanは、当社のスマートペンが法人や個人に用いられ、業務の一部や日常生活に取り入れられる様に、戦略策定、営業、コンサルテイション、サポートなどの活動を主な業務としています。
                </p>
              </div>
              <div>
                <Image src={IMGS.activities} alt="NeoLAB Japan activities" width={500} height={400} className="w-full h-auto rounded-lg" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* ── Business Operations ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[28px] font-bold text-black mb-8 text-center">事業内容</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Image src={IMGS.biz01} alt="Business 1" width={520} height={360} className="w-full h-auto rounded-lg" unoptimized />
              <Image src={IMGS.biz02} alt="Business 2" width={520} height={360} className="w-full h-auto rounded-lg" unoptimized />
            </div>
            <div className="space-y-4 text-sm text-[#555] leading-[2] max-w-[840px] mx-auto">
              <p>新規Smartpen開発・販売（当社テクノロジーを活用したデジタルとアナログを融合した先進技術商品の事業化）</p>
              <p>Smart ICT教育ツール開発・販売（重要事業分野であり、成長を牽引してきたスマート教具開発事業）</p>
              <p>Smartpenのコンシューマビジネス展開（当社テクノロジーを活用した製品を提供とフォロー）</p>
              <p>当法人ではソーシング及び営業、運営、品質管理及びローカライズが主業務</p>
              <p>SmartpenのB2B展開</p>
            </div>
            {/* 2 business areas */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-[#f8f8f8] rounded-lg p-6">
                <h3 className="font-bold text-[#333] mb-3">Hand writing solution（スマートペン）</h3>
                <p className="text-sm text-[#666] leading-[2]">
                  スマートペン Neo smartpen N2, Neo smartpen M1, Neo smartpen M1+, Neo smartpen dimo<br />
                  書いてデジタル！世界で最も細い印刷コード対応のスマートペンで、法人向け個人向け共に対応可能。
                </p>
              </div>
              <div className="bg-[#f8f8f8] rounded-lg p-6">
                <h3 className="font-bold text-[#333] mb-3">Touch &amp; Play（音声ペン等）</h3>
                <p className="text-sm text-[#666] leading-[2]">
                  教育改革が急がれる中、Smart ICT教育ツールの導入加速が続きます。ネオラボでは、お客様のオリジナルモデルの製造及びレファランスモデルの適用共に可能で、音声ペンにかかわる教材づくり、音声ペンの導入相談から製造、納品までワンストップで相談に応じることができます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Strengths ── */}
        <section className="py-16 bg-[#1a1a2e] text-white">
          <div className="max-w-[1080px] mx-auto px-4 text-center">
            <h2 className="text-[28px] font-bold mb-12">当社の強み</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="mb-5 flex justify-center">
                  <Image src={IMGS.iconTech01} alt="strength 1" width={64} height={64} unoptimized />
                </div>
                <p className="text-[13px] font-bold mb-2 uppercase tracking-wider">1</p>
                <p className="text-sm text-gray-300 leading-relaxed">トータルソリューションの提供<br /><span className="text-gray-400 text-xs">開発から販売、サポートまでワンストップで行うことにより他社とは差別化された堅実さをもって製品を提供</span></p>
              </div>
              <div>
                <div className="mb-5 flex justify-center">
                  <Image src={IMGS.iconColl02} alt="strength 2" width={64} height={64} unoptimized />
                </div>
                <p className="text-[13px] font-bold mb-2 uppercase tracking-wider">2</p>
                <p className="text-sm text-gray-300 leading-relaxed">教育分野のITデバイスにおいても<br /><span className="text-gray-400 text-xs">既に10年近いノウハウを保有</span></p>
              </div>
              <div>
                <div className="mb-5 flex justify-center">
                  <Image src={IMGS.iconTech03} alt="strength 3" width={64} height={64} unoptimized />
                </div>
                <p className="text-[13px] font-bold mb-2 uppercase tracking-wider">3</p>
                <p className="text-sm text-gray-300 leading-relaxed">開発力（全社の4割が開発陣）<br /><span className="text-gray-400 text-xs">世界的に権威のある各種デザイン、テクノロジー、ブランド関連分野で頭角を現す</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* ── History ── */}
        <section className="py-16 bg-white">
          <div className="max-w-[800px] mx-auto px-4">
            <h2 className="text-[28px] font-bold text-black mb-12 text-center">沿革</h2>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-[60px] top-0 bottom-0 w-px bg-gray-200" />
              <div className="space-y-6">
                {history.map((item) => (
                  <div key={item.year} className="flex gap-6 relative">
                    <div className="w-[60px] shrink-0 text-right">
                      <span className="text-[#39d2cc] font-bold text-sm">{item.year}</span>
                    </div>
                    <div className="relative pl-6 flex-1">
                      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#39d2cc] -translate-x-1" />
                      <p className="text-sm text-[#555] leading-[1.8]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="py-16 bg-[#f4f4f4]">
          <div className="max-w-[1080px] mx-auto px-4">
            <h2 className="text-[28px] font-bold text-black mb-10 text-center">LOCATION</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
              <div className="space-y-6 text-sm">
                <div>
                  <p className="font-bold text-[#333] mb-1">NeoLAB株式会社（ネオラボ）</p>
                  <p className="text-[#888] text-xs mb-1">日本</p>
                  <p className="text-[#555]">〒107-0062</p>
                  <p className="text-[#555]">東京都港区南青山7-4-18 NCN南青山3F</p>
                </div>
                <div>
                  <p className="font-bold text-[#333] mb-1">NeoLAB Convergence Inc.</p>
                  <p className="text-[#888] text-xs mb-1">SEOUL</p>
                  <p className="text-[#555]">15F, 28, Digital-ro 30-gil, Guro-gu, Seoul, Korea</p>
                </div>
                <div>
                  <p className="font-bold text-[#333] mb-1">NeoLAB USA</p>
                  <p className="text-[#888] text-xs mb-1">アメリカ</p>
                  <p className="text-[#555]">Dallas, USA</p>
                  <p className="text-[#555]">bizinquiry@neolab.net</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image src={IMGS.bottom} alt="NeoLAB Exhibition" width={600} height={400} className="w-full h-auto object-cover" unoptimized />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

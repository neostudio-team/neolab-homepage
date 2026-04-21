import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import type { Locale } from "@/i18n/config";
import {
  AddressList,
  AddressText,
  BizCard,
  BizTitle,
  Body,
  BusinessCards,
  Center,
  Circle64,
  Circle80,
  Container,
  DarkSection,
  Dot,
  FootNote,
  FullImage,
  Gallery,
  GalleryGrid,
  GalleryLarge,
  GraySection,
  Heading28,
  Hero,
  HeroGrid,
  HeroImageGrid,
  HeroSub,
  HeroTitle,
  HistoryBody,
  HistoryItem,
  HistoryLine,
  HistoryList,
  HistoryText,
  HistoryWrap,
  HistoryYear,
  ListText,
  LocationGrid,
  Main,
  MidTitle,
  Name,
  OfficeName,
  OfficeSub,
  PartnerGrid,
  PartnerItem,
  ProfileBody,
  ProfileCard,
  ProfileGrid,
  ProfileHead,
  ProfileImage,
  ProfileTitle,
  RoundBox,
  Section,
  SmallLabel,
  StrengthGrid,
  StrengthSub,
  StrengthText,
  Table,
  TdLabel,
  TdValue,
  TinyBody,
  TitleXl,
  Tr,
  TwoCol,
  TwoImageCol,
  VisionBody,
  VisionLead,
  WhiteSection,
  YearText,
  InfoTableWrap,
} from "./JaCompanyPage.styles";

const WP = "https://neolab.co.jp/wp-content/uploads";
const IMGS = { face01: `${WP}/2022/01/Face01-write.jpeg`, heroGroup: `${WP}/2022/03/IMG_4046.jpg`, impression02: `${WP}/2022/01/impression02.jpg`, face04: `${WP}/2022/01/Face04-logo.png`, coWorking: `${WP}/2022/01/co-working-space-61.png`, pplTalk: `${WP}/2022/01/PPL_talk.jpg`, top2: `${WP}/2023/07/TOP-2.jpg`, ppl016: `${WP}/2022/01/PPL016.jpg`, top1: `${WP}/2023/07/TOP-1.jpg`, ppl019: `${WP}/2022/01/PPL019.jpg`, ppl014: `${WP}/2022/01/PPL014.jpg`, iconSetup: `${WP}/2022/02/icon_setup.png`, iconCEO: `${WP}/2022/02/icon_CEO.png`, steve: `${WP}/2022/02/steve.jpg`, ozawa: `${WP}/2022/02/ozawa.jpg`, activities: `${WP}/2022/02/06.jpeg`, biz01: `${WP}/2022/02/biz01.jpg`, biz02: `${WP}/2022/02/biz02.jpg`, iconTech01: `${WP}/2022/02/icon_Tech01.png`, iconColl02: `${WP}/2022/02/icon-coll02.png`, iconTech03: `${WP}/2022/02/icon_Tech03.png`, bottom: `${WP}/2022/01/bottom.png` };
const partners = ["アスクル株式会社", "株式会社アルク", "株式会社岩田屋三越", "株式会社内田洋行", "株式会社エヌ・ティ・ティ・データ", "株式会社NTTドコモ", "株式会社学書", "株式会社カタログハウス", "有限会社ジェイ・リサーチ出版", "株式会社ジャック", "株式会社小学館集英社プロダクション", "大日本印刷株式会社", "株式会社蔦屋家電エンタープライズ", "TOPPAN株式会社", "株式会社トヨタシステムズ", "株式会社ドリームブロッサム", "株式会社阪急阪神百貨店", "株式会社フレーベル館", "ベータ・ジャパン合同会社"];
const history = [{ year: "2006", text: "NeoLAB株式会社（日本法人）企業、教育関連のモバイルアプリ開発会社として誕生" }, { year: "2008", text: "デバイス（デジアナ製品）関連の開発と研究を開始" }, { year: "2009", text: "Seoul officeオープン、先のIot産業発展に備え研究所開設" }, { year: "2010", text: "World IT Show参加、初代Sound Pen リリース（教育業界向けの音声ペン）" }, { year: "2012", text: "Good design Kids賞受賞（ペンが教育と相性のよい産業であり私教育熱の高い韓国における販売実績急上昇）" }, { year: "2013", text: "（独）世界最大ブックフェア、（伊）世界最大キッズ向けブックフェア、東京ブックフェア等へ参加。初代自社製スマートペン Neo smartpen neo.1リリース" }, { year: "2014", text: "Neo smartpen N2リリース直前、米クラウドファンディング「Kickstarter」にローンチし1800％達成、テクニカル部門世界二位となる" }, { year: "2015", text: "米アマゾン.comリリース、日本でもAmazonにて販売開始。（独）iFデザイン賞において2製品が対象となり受賞決定。NeoLAB TAIWAN設立" }, { year: "2016", text: "Moleskine Smart Writing Set リリース、（韓）「輸出の塔」受賞、国家研究開発優秀賞と最優秀賞受賞" }, { year: "2017", text: "（米）Staples入店、（韓）Neo smartpen LINE FRIENDS Editionリリース" }, { year: "2018", text: "（米）CESにて新製品発表にてNeo smartpen Mシリーズ発表、日本でNeo smartpen M1 発売開始" }, { year: "2019", text: "（韓）Korea Technology Finance Corporationから可能性ある中小ベンチャー企業として選定" }, { year: "2020", text: "Neo smartpen M1+発売 NEO STUDIOアプリ始動" }, { year: "2021", text: "ドイツLAMY社のロングセラーモデルsafariのスマートペン販売開始" }, { year: "2022", text: "フジテレビ冬季スポーツ中継にNeo smartpen登場" }, { year: "2024", text: "Neo smartpen A1発売" }];

interface JaCompanyPageProps { lang: Locale; dict: any; }

export default function JaCompanyPage({ lang, dict }: JaCompanyPageProps) {
  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Main>
        <Hero>
          <Container>
            <HeroGrid>
              <div><SmallLabel>team neolab</SmallLabel><HeroTitle>アナログとデジタルの世界を繋ぐ<br />テクノロジーの専門企業</HeroTitle><HeroSub>源泉技術開発・テクノロジーからプロダクトまで</HeroSub></div>
              <HeroImageGrid>
                <div><RoundBox><FullImage src={IMGS.heroGroup} alt="NeoLAB team" width={400} height={500} unoptimized /></RoundBox></div>
                <div><Circle80><FullImage src={IMGS.face01} alt="Writing with smartpen" width={80} height={80} unoptimized /></Circle80><RoundBox><FullImage src={IMGS.impression02} alt="NeoLAB" width={400} height={400} unoptimized /></RoundBox><Circle64><FullImage src={IMGS.face04} alt="NeoLAB Logo Badge" width={64} height={64} unoptimized /></Circle64></div>
              </HeroImageGrid>
            </HeroGrid>
          </Container>
        </Hero>

        <GraySection><Container><TwoCol><div><TitleXl>MOON SHOT<br />THINKERS</TitleXl><Body>NeoLABグループは、一見不可能な物事を革新的な思考を通してひとつひとつ実行していく人たちが集まった会社です。ハードウェア、ファームウェア、ソフトウェアからサーバー技術まで融合された基盤技術を保有するNeoLABグループは幅広い経験を持つ人材たちで構成された専門家集団であることを自負しています。</Body></div><TwoImageCol><FullImage src={IMGS.coWorking} alt="Co-working space" width={400} height={300} unoptimized /><FullImage src={IMGS.pplTalk} alt="Team discussion" width={400} height={300} unoptimized /></TwoImageCol></TwoCol></Container></GraySection>

        <DarkSection><Container><Center><SmallLabel>VISION</SmallLabel><VisionLead>We are analog beings living in the digital environment.<br />We connect your handwriting to the digital world<br />to dream, create and achieve more.</VisionLead><VisionBody>私たち人間は、デジタル社会の発達したこの世界で生きるアナログ的存在です。筆記をデジタルの世界に繋げることを夢見て、皆様がより多くのことを実現させるように努めてまいります。</VisionBody></Center></Container></DarkSection>

        <WhiteSection><Container><MidTitle>NEOLAB</MidTitle><InfoTableWrap><Table><tbody>{[["会社名", "NeoLAB株式会社 （読み：ネオラボ）"], ["設立", "2006年11月"], ["資本金", "99百万円"], ["代表", "Steve Sanggyu Lee"], ["従業員数", "約110名（日本法人6名）"], ["所在地", "東京都港区南青山7-4-18"]].map(([label, value]) => <Tr key={label}><TdLabel>{label}</TdLabel><TdValue>{value}</TdValue></Tr>)}</tbody></Table></InfoTableWrap>
          <ProfileGrid>
            <ProfileCard><ProfileHead><FullImage src={IMGS.iconSetup} alt="CEO icon" width={40} height={40} unoptimized /><ProfileTitle>代表取締役</ProfileTitle></ProfileHead><ProfileBody><ProfileImage src={IMGS.steve} alt="Steve Sanggyu Lee" width={90} height={110} unoptimized /><div><Name>Steve Sanggyu Lee</Name><TinyBody>KAIST(Korea Advanced Institution of Science and Technology)卒業<br />1997年 Neowiz Group共同設立 のちに上場（KOSDAQ 042420）<br />2003年～2007年 Neowiz Japan CEOを務める<br />2006年～現在に至る NeoLAB株式会社設立 代表取締役 (Tokyo)</TinyBody></div></ProfileBody></ProfileCard>
            <ProfileCard><ProfileHead><FullImage src={IMGS.iconCEO} alt="Director icon" width={40} height={40} unoptimized /><ProfileTitle>取締役</ProfileTitle></ProfileHead><ProfileBody><ProfileImage src={IMGS.ozawa} alt="Aki Ozawa" width={90} height={110} unoptimized /><div><Name>小澤亜希 Aki Ozawa</Name><TinyBody>京都女子大学卒業<br />2003年～ Neowiz Japan 創業参画 広報セクションの設立<br />2009年 NeoLAB株式会社<br />2011年～現在に至る NeoLAB株式会社 取締役</TinyBody></div></ProfileBody></ProfileCard>
          </ProfileGrid>
        </Container></WhiteSection>

        <GraySection><Container><Center><Heading28>主要取引先</Heading28></Center><PartnerGrid>{partners.map((p) => <PartnerItem key={p}>{p}</PartnerItem>)}</PartnerGrid><FootNote>（五十音順）</FootNote></Container></GraySection>

        <Gallery><Container><GalleryGrid><GalleryLarge><FullImage src={IMGS.top2} alt="NeoLAB" width={600} height={400} unoptimized /></GalleryLarge><FullImage src={IMGS.ppl016} alt="NeoLAB team" width={300} height={200} unoptimized /><FullImage src={IMGS.top1} alt="NeoLAB" width={300} height={200} unoptimized /><FullImage src={IMGS.ppl019} alt="NeoLAB exhibition" width={300} height={200} unoptimized /><FullImage src={IMGS.ppl014} alt="NeoLAB team photo" width={300} height={200} unoptimized /></GalleryGrid></Container></Gallery>

        <GraySection><Container><TwoCol><div><SmallLabel>since 2006</SmallLabel><Heading28>NeoLAB Japanの活動</Heading28><Body>Ncode™ 技術を通じてデジタルとアナログを融合し、紙とペンが用いられるあらゆる市場に新しい価値を創出していく為に日々力を尽くしています。私達NeoLAB Japanは、当社のスマートペンが法人や個人に用いられ、業務の一部や日常生活に取り入れられる様に、戦略策定、営業、コンサルテイション、サポートなどの活動を主な業務としています。</Body></div><div><FullImage src={IMGS.activities} alt="NeoLAB Japan activities" width={500} height={400} unoptimized /></div></TwoCol></Container></GraySection>

        <WhiteSection><Container><Center><Heading28>事業内容</Heading28></Center><TwoCol><FullImage src={IMGS.biz01} alt="Business 1" width={520} height={360} unoptimized /><FullImage src={IMGS.biz02} alt="Business 2" width={520} height={360} unoptimized /></TwoCol><ListText><p>新規Smartpen開発・販売（当社テクノロジーを活用したデジタルとアナログを融合した先進技術商品の事業化）</p><p>Smart ICT教育ツール開発・販売（重要事業分野であり、成長を牽引してきたスマート教具開発事業）</p><p>Smartpenのコンシューマビジネス展開（当社テクノロジーを活用した製品を提供とフォロー）</p><p>SmartpenのB2B展開</p></ListText>
          <BusinessCards><BizCard><BizTitle>Hand writing solution（スマートペン）</BizTitle><Body>スマートペン Neo smartpen N2, Neo smartpen M1, Neo smartpen M1+, Neo smartpen dimo</Body></BizCard><BizCard><BizTitle>Touch &amp; Play（音声ペン等）</BizTitle><Body>音声ペンにかかわる教材づくり、音声ペンの導入相談から製造、納品までワンストップで相談に応じることができます。</Body></BizCard></BusinessCards>
        </Container></WhiteSection>

        <DarkSection><Container><Center><Heading28>当社の強み</Heading28></Center><StrengthGrid>
          <div><Center><FullImage src={IMGS.iconTech01} alt="strength 1" width={64} height={64} unoptimized /></Center><Center><SmallLabel>1</SmallLabel></Center><StrengthText>トータルソリューションの提供<StrengthSub>開発から販売、サポートまでワンストップ</StrengthSub></StrengthText></div>
          <div><Center><FullImage src={IMGS.iconColl02} alt="strength 2" width={64} height={64} unoptimized /></Center><Center><SmallLabel>2</SmallLabel></Center><StrengthText>教育分野のITデバイスにおいても<StrengthSub>10年近いノウハウを保有</StrengthSub></StrengthText></div>
          <div><Center><FullImage src={IMGS.iconTech03} alt="strength 3" width={64} height={64} unoptimized /></Center><Center><SmallLabel>3</SmallLabel></Center><StrengthText>開発力（全社の4割が開発陣）<StrengthSub>各種分野で頭角を現す</StrengthSub></StrengthText></div>
        </StrengthGrid></Container></DarkSection>

        <WhiteSection><Container><Center><Heading28>沿革</Heading28></Center><HistoryWrap><HistoryLine /><HistoryList>{history.map((item) => <HistoryItem key={item.year}><HistoryYear><YearText>{item.year}</YearText></HistoryYear><HistoryBody><Dot /><HistoryText>{item.text}</HistoryText></HistoryBody></HistoryItem>)}</HistoryList></HistoryWrap></Container></WhiteSection>

        <GraySection><Container><Center><Heading28>LOCATION</Heading28></Center><LocationGrid><AddressList><div><OfficeName>NeoLAB株式会社（ネオラボ）</OfficeName><OfficeSub>日本</OfficeSub><AddressText>〒107-0062 東京都港区南青山7-4-18 NCN南青山3F</AddressText></div><div><OfficeName>NeoLAB Convergence Inc.</OfficeName><OfficeSub>SEOUL</OfficeSub><AddressText>15F, 28, Digital-ro 30-gil, Guro-gu, Seoul, Korea</AddressText></div><div><OfficeName>NeoLAB USA</OfficeName><OfficeSub>アメリカ</OfficeSub><AddressText>Dallas, USA / bizinquiry@neolab.net</AddressText></div></AddressList><div><FullImage src={IMGS.bottom} alt="NeoLAB Exhibition" width={600} height={400} unoptimized /></div></LocationGrid></Container></GraySection>
      </Main>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import {
  BlobLeft,
  BlobRight,
  Card,
  Empty,
  Excerpt,
  Hero,
  HeroContact,
  HeroInner,
  HeroLabel,
  HeroMail,
  HeroTitle,
  List,
  Meta,
  Page,
  ReadMore,
  Section,
  Title,
} from "./PressPage.styles";

export const dynamic = "force-dynamic";

interface PressRelease { id: string; titleKo: string; titleEn: string; titleJa: string; contentKo: string; contentEn: string; contentJa: string; author: string; category: string; externalUrl: string; createdAt: string; }

async function getPressReleases(): Promise<PressRelease[]> {
  try {
    const snapshot = await adminDb.collection("press").orderBy("createdAt", "desc").get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      titleKo: doc.data().titleKo ?? "",
      titleEn: doc.data().titleEn ?? "",
      titleJa: doc.data().titleJa ?? "",
      contentKo: doc.data().contentKo ?? "",
      contentEn: doc.data().contentEn ?? "",
      contentJa: doc.data().contentJa ?? "",
      author: doc.data().author ?? "NeoLAB",
      category: doc.data().category ?? "press",
      externalUrl: doc.data().externalUrl ?? "",
      createdAt: doc.data().createdAt?.toDate().toISOString() ?? new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

export default async function PressPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const pressReleases = await getPressReleases();

  const getTitle = (p: PressRelease) => (lang === "en" ? p.titleEn || p.titleKo : lang === "ja" ? p.titleJa || p.titleKo : p.titleKo);
  const getExcerpt = (p: PressRelease) => (lang === "en" ? p.contentEn || p.contentKo : lang === "ja" ? p.contentJa || p.contentKo : p.contentKo) ?? "";

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        <Hero>
          <BlobRight /><BlobLeft />
          <HeroInner>
            <HeroLabel>NEWSROOM</HeroLabel>
            <HeroTitle>Press release</HeroTitle>
            <HeroContact>홍보 및 보도자료 문의: <HeroMail href="mailto:korbiz@neolab.net">korbiz@neolab.net</HeroMail></HeroContact>
          </HeroInner>
        </Hero>

        <Section>
          {pressReleases.length === 0 ? (
            <Empty>등록된 기업뉴스가 없습니다.</Empty>
          ) : (
            <List>
              {pressReleases.map((post) => (
                <Card key={post.id}>
                  <Title>
                    <ReadMore href={post.externalUrl || `/${lang}/company/press/${post.id}`} target={post.externalUrl ? "_blank" : undefined} rel={post.externalUrl ? "noopener noreferrer" : undefined}>
                      {getTitle(post)}
                    </ReadMore>
                  </Title>
                  <Meta>by {post.author} | {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} | {post.category}</Meta>
                  {getExcerpt(post) && <Excerpt>{getExcerpt(post)}</Excerpt>}
                  <ReadMore href={post.externalUrl || `/${lang}/company/press/${post.id}`} target={post.externalUrl ? "_blank" : undefined} rel={post.externalUrl ? "noopener noreferrer" : undefined}>read more</ReadMore>
                </Card>
              ))}
            </List>
          )}
        </Section>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

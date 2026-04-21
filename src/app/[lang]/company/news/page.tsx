import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { adminDb } from "@/lib/firebase-admin";
import {
  BoardSection,
  Container,
  DateText,
  Empty,
  HeadRow,
  Hero,
  HeroBg,
  HeroBlobLeft,
  HeroBlobRight,
  HeroInner,
  HeroLabel,
  HeroTitle,
  Page,
  Row,
  Table,
  TableWrap,
  Td,
  Th,
  TitleLink,
  TitleTd,
  Wave,
} from "./NewsPage.styles";

export const dynamic = "force-dynamic";

interface Notice { id: string; isPinned: boolean; titleKo: string; titleEn: string; titleJa: string; author: string; views: number; createdAt: string; }

async function getNotices(): Promise<Notice[]> {
  try {
    const snapshot = await adminDb.collection("notices").orderBy("createdAt", "desc").get();
    const docs = snapshot.docs.map((doc) => ({
      id: doc.id,
      isPinned: doc.data().isPinned ?? false,
      titleKo: doc.data().titleKo ?? "",
      titleEn: doc.data().titleEn ?? "",
      titleJa: doc.data().titleJa ?? "",
      author: doc.data().author ?? "NeoLAB",
      views: doc.data().views ?? 0,
      createdAt: doc.data().createdAt?.toDate().toISOString() ?? new Date().toISOString(),
    }));
    return [...docs.filter((d) => d.isPinned), ...docs.filter((d) => !d.isPinned)];
  } catch {
    return [];
  }
}

export default async function NoticePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const notices = await getNotices();

  const getTitle = (n: Notice) => (lang === "en" ? n.titleEn || n.titleKo : lang === "ja" ? n.titleJa || n.titleKo : n.titleKo);

  return (
    <>
      <Header lang={lang} dict={dict.common.header} />
      <Page>
        <Hero>
          <HeroBg><HeroBlobLeft /><HeroBlobRight /></HeroBg>
          <HeroInner>
            <HeroLabel>ANNOUNCEMENT</HeroLabel>
            <HeroTitle>{lang === "en" ? "Notice" : lang === "ja" ? "お知らせ" : "공지 사항"}</HeroTitle>
          </HeroInner>
          <Wave>
            <svg width="100%" height="80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C71.37,20.44,151.72,42.71,213.9,50.75,249.23,55.33,285.4,59.35,321.39,56.44Z" fill="#fff" />
            </svg>
          </Wave>
        </Hero>

        <BoardSection>
          {notices.length === 0 ? (
            <Empty>등록된 공지사항이 없습니다.</Empty>
          ) : (
            <TableWrap>
              <Table>
                <thead>
                  <HeadRow><Th>번호</Th><Th>제목</Th><Th>작성자</Th><Th>날짜</Th><Th>조회</Th></HeadRow>
                </thead>
                <tbody>
                  {notices.map((n) => (
                    <Row key={n.id} $pinned={n.isPinned}>
                      <Td $strong={n.isPinned}>{n.isPinned ? "공지" : notices.filter((x) => !x.isPinned).length - notices.filter((x) => !x.isPinned).indexOf(n)}</Td>
                      <TitleTd><TitleLink href={`/${lang}/company/news/${n.id}`} $strong={n.isPinned}>{getTitle(n)}</TitleLink></TitleTd>
                      <Td>{n.author}</Td>
                      <Td><DateText>{new Date(n.createdAt).toLocaleDateString("ko-KR")}</DateText></Td>
                      <Td><DateText>{n.views}</DateText></Td>
                    </Row>
                  ))}
                </tbody>
              </Table>
            </TableWrap>
          )}
        </BoardSection>
      </Page>
      <Footer lang={lang} dict={dict.common.footer} />
    </>
  );
}

import { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import {
  CategoriesSection,
  CategoryCard,
  CategoryGrid,
  CategoryIcon,
  CategoryTitle,
  Container,
  HeroSection,
  HeroSubtitle,
  HeroTitle,
} from "./KnowledgeBasePage.styles";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.neosmartpen.knowledgeBase.metadata;
  return { title: t.title, description: t.description };
}

export default async function KnowledgeBasePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const dict = await getDictionary((await params).lang);
  const t = dict.neosmartpen.knowledgeBase;

  const categories = [
    { key: "gettingStarted", icon: "🚀" },
    { key: "troubleshooting", icon: "🔧" },
    { key: "compatibility", icon: "🔗" },
    { key: "faq", icon: "❓" },
  ] as const;

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>{t.hero.title}</HeroTitle>
          <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
        </Container>
      </HeroSection>

      <CategoriesSection>
        <Container>
          <CategoryGrid>
            {categories.map((cat) => (
              <CategoryCard key={cat.key}>
                <CategoryIcon>{cat.icon}</CategoryIcon>
                <CategoryTitle>{t.categories[cat.key]}</CategoryTitle>
              </CategoryCard>
            ))}
          </CategoryGrid>
        </Container>
      </CategoriesSection>
    </>
  );
}

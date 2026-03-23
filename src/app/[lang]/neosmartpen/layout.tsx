import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import NspHeader from "@/components/neosmartpen/NspHeader";
import NspFooter from "@/components/neosmartpen/NspFooter";

export default async function NeoSmartpenLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Locale;
  const dict = await getDictionary(lang);
  const nsp = dict.neosmartpen;

  return (
    <>
      <NspHeader lang={lang} dict={nsp.header} />
      <main>{children}</main>
      <NspFooter lang={lang} dict={nsp.footer} />
    </>
  );
}

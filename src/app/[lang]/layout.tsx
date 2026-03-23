import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import { i18n, Locale } from "@/i18n/config";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - NeoLAB Convergence Inc.",
  description: "A Gateway Bridging the Physical and Virtual Worlds. We help you turn handwritten notes, paper documents, and real-world inputs into digital data easily and accurately.",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Exo_2, Sora } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WEBJ - Landing Page Profissional",
  description: "Landing page profissional WEBJ - Next.js 15 + TypeScript + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${exo2.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

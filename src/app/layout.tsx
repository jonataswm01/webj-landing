import type { Metadata } from "next";
import { Sora, Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
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
        className={`${orbitron.variable} ${sora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

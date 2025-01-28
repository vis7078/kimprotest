import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포트폴리오 | 이프로",
  description: "프론트엔드 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-900 text-gray-100`}>{children}</body>
    </html>
  );
}

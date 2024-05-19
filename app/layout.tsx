import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const dosis = Dosis({ subsets: ["latin-ext"] });
export const metadata: Metadata = {
  title: "Manualne Centrum Terapii Ciała",
  description: "Manualne Centrum Terapii Ciała",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${dosis.className} bg-color-4/60`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

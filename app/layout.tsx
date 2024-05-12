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
    <html lang="en" className="!scroll-smooth bg-black">
      <body className={`${dosis.className} dark:bg-gray-500`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

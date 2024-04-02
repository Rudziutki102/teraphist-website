import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

const dosis = Dosis({subsets:['latin-ext']})
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
    <ThemeContextProvider>
      <html lang="en" className="!scroll-smooth">
        <body className={`${dosis.className} dark:bg-gray-500 h-[1000px]`}>
          <Header/>
          {children}
          <ThemeSwitch/>
          </body>
      </html>
    </ThemeContextProvider>
  );
}

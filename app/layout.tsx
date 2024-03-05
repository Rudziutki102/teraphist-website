import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

const dosis = Dosis({subsets:['latin-ext']})
export const metadata: Metadata = {
  title: "Fizjo",
  description: "Fizjo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContextProvider>
      <html lang="en" className="!scroll-smooth">
        <body className={`${dosis.className} bg-purple-500 h-[100000px]`}>
          <Header/>
          {children}
          <ThemeSwitch/>
          </body>
      </html>
    </ThemeContextProvider>
  );
}

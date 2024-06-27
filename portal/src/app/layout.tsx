import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import ThemeProvider from '../components/themeprovider/themeprovider';
import "./globals.css";
import { ReactNode } from "react";

const libreFranklin = Libre_Franklin({ subsets: ['latin'], weight: '400' });


export const metadata: Metadata = {
  title: "Guardian One",
  description: "Guardian One",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={libreFranklin.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
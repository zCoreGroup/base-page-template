import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import ThemeProvider from "../components/themeprovider/themeprovider";
import "./globals.css";
import { ReactNode } from "react";

const libreFranklin = Libre_Franklin({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Guardian One",
  description: "Guardian One",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/csite.webmanifest" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className={libreFranklin.className}>
        <ThemeProvider>
          <div className="content">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

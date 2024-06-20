import React from "react";

import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "モチヅ記";
const description =
  "望月田吾作の日記です。インターネットに痕跡を残すために始めました。";
const url = "https://motttey.github.io/mochiduko-24";

export const metadata: Metadata = {
  metadataBase: new URL("https://motttey.github.io/dialy/"),
  title: `モチヅ記`,
  icons: "/favicon.ico",
  keywords: ["望月", "望月田吾作", "日記", "ブログ"],
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: "ja_JP",
    type: "website",
    images: {
      url: HOME_OG_IMAGE_URL,
    },
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    site: "@mt_tg",
    creator: "@mt_tg",
    images: [HOME_OG_IMAGE_URL],
  },
  description: `望月田吾作の日記です。`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

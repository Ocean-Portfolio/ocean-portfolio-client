import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getCssText } from "../../stitches.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

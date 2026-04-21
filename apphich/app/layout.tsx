import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Áp phích - Xem phim miễn phí",
  description: "Web xem phim miễn phí - Bản clone của Netflix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className={`${inter.className} bg-[#141414] text-[#e5e5e5]`}>
        {children}
      </body>
    </html>
  );
}
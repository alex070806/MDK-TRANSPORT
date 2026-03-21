import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MDK Transport LLC — Надёжный партнёр в автоперевозках",
  description: "MDK Transport LLC — диспетчерская компания №1. 12% комиссия, без депозита, $300 страховка, выплаты каждую пятницу. Звоните 24/7: 253-527-7115",
  keywords: "MDK Transport, dispatch, car hauling, auto transport, диспетчерская, автоперевозки, owner operator, car carrier",
  icons: {
    icon: [
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`, type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "MDK Transport LLC — Надёжный партнёр в автоперевозках",
    description: "Диспетчерская компания №1. 12% комиссия, без депозита, $300 страховка, стабильные выплаты. 253-527-7115",
    type: "website",
    siteName: "MDK Transport LLC",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#059669" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

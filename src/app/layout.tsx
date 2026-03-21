import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MDK Transport LLC — Надёжный партнёр в автоперевозках",
  description: "MDK Transport LLC — диспетчерская компания №1. Прозрачные условия, выгодные маршруты, стабильные выплаты. Звоните 24/7: 253-527-7115",
  keywords: "MDK Transport, dispatch, car hauling, auto transport, диспетчерская, автоперевозки",
  openGraph: {
    title: "MDK Transport LLC",
    description: "Ваш надёжный партнёр в автоперевозках. Наш гросс — №1 на рынке!",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

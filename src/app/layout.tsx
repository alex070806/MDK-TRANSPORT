import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mdktransport.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MDK Transport LLC — Надёжный партнёр в автоперевозках",
    template: "%s | MDK Transport LLC",
  },
  description:
    "MDK Transport LLC — диспетчерская компания №1 в car hauling. 12% комиссия, без депозита, $300 страховка, выплаты каждую пятницу. Поддержка 24/7. Звоните: 253-527-7115",
  keywords:
    "MDK Transport, dispatch, car hauling, auto transport, диспетчерская, автоперевозки, owner operator, car carrier, truck dispatch, dispatching service",
  authors: [{ name: "MDK Transport LLC", url: siteUrl }],
  creator: "MDK Transport LLC",
  publisher: "MDK Transport LLC",
  category: "Transportation",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MDK Transport LLC — Надёжный партнёр в автоперевозках",
    description:
      "Диспетчерская компания №1 в car hauling. 12% комиссия, без депозита, $300 страховка, стабильные выплаты каждую пятницу. 253-527-7115",
    type: "website",
    siteName: "MDK Transport LLC",
    url: siteUrl,
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "MDK Transport LLC — Надёжный партнёр в автоперевозках",
    description:
      "Диспетчерская компания №1 в car hauling. 12% комиссия, без депозита, $300 страховка, стабильные выплаты. 253-527-7115",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "MDK Transport LLC",
  description:
    "Диспетчерская компания для автоперевозок (car hauling). 12% комиссия, без депозита, выплаты каждую пятницу.",
  url: siteUrl,
  telephone: "+12535277115",
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 N Howard St Ste W",
    addressLocality: "Spokane",
    addressRegion: "WA",
    postalCode: "99201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.6588",
    longitude: "-117.4260",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "12%",
  serviceType: "Auto Transport Dispatch",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#059669" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

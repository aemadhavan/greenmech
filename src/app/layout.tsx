import type { Metadata, Viewport } from "next";
import { Rajdhani, DM_Sans, Bebas_Neue, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#05080D",
};

// Update SITE_URL to your production domain before deploying
const SITE_URL = "https://greenmech.in";
const SITE_TITLE = "GreenMech Automation | CNC & VMC Machining Coimbatore";
const SITE_DESC =
  "ISO 9001 certified CNC & VMC precision machining in Coimbatore — aerospace, oil & gas, automotive components. Surface grinding specialists. TUV India certified.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | GreenMech Automation",
  },
  description: SITE_DESC,
  keywords: [
    "CNC machining Coimbatore",
    "VMC machining Tamil Nadu",
    "precision machining",
    "surface grinding",
    "CNC turning",
    "aerospace components",
    "oil gas components",
    "ISO 9001 certified machining",
    "GreenMech Automation",
    "job works Coimbatore",
  ],
  authors: [{ name: "GreenMech Automation" }],
  creator: "GreenMech Automation",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "GreenMech Automation",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [
      {
        url: "/greenmach-logo.png",
        width: 512,
        height: 512,
        alt: "GreenMech Automation – Precision Machining Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/greenmach-logo.png"],
  },
};

const LD_JSON = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "GreenMech Automation",
  description: SITE_DESC,
  url: SITE_URL,
  logo: `${SITE_URL}/greenmach-logo.png`,
  image: `${SITE_URL}/greenmach-logo.png`,
  telephone: ["+919566657428", "+919384947902"],
  email: "greenmechcbe@gmail.com",
  taxID: "33AAXFG6115F1ZC",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No: 37, Athipalayam Road, Chinnavedampatti",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641049",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.0168,
    longitude: 76.9558,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: { "@type": "Country", name: "India" },
  // TODO: replace # values with your actual social profile URLs
  sameAs: [
    "https://www.facebook.com/",       // replace with your Facebook page URL
    "https://twitter.com/",            // replace with your X/Twitter profile URL
    "https://www.instagram.com/",      // replace with your Instagram profile URL
    "https://www.youtube.com/",        // replace with your YouTube channel URL
    "https://www.linkedin.com/",       // replace with your LinkedIn page URL
  ],
  knowsAbout: [
    "CNC Machining",
    "VMC Machining",
    "Surface Grinding",
    "Precision Engineering",
    "Aerospace Components",
    "Oil & Gas Components",
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: "ISO 9001",
    recognizedBy: { "@type": "Organization", name: "TUV India" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${dmSans.variable} ${bebasNeue.variable} ${shareTechMono.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_JSON) }}
        />
        {children}
      </body>
    </html>
  );
}

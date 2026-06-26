import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Aboadi Rural Agricultural Technology Centre (ARATC)",
    default: "Aboadi Rural Agricultural Technology Centre (ARATC) | Practical Agriculture & Livelihood Training",
  },
  description: "ARATC is a Ghanaian non-governmental, non-profit organization that delivers practical agricultural training, livelihood development, research and consultancy services.",
  keywords: ["agriculture", "livelihood training", "Ghana", "NGO", "rural development", "farming", "community support"],
  authors: [{ name: "ARATC" }],
  openGraph: {
    title: "Aboadi Rural Agricultural Technology Centre (ARATC)",
    description: "Empowering communities through agriculture, skills and enterprise in Ghana.",
    url: "https://aratc-ghana.org",
    siteName: "ARATC",
    locale: "en_GH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-foreground selection:bg-green-100 selection:text-green-950">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

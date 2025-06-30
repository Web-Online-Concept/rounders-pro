import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rounders - Gagnez plus sur Stake avec notre guide et bonus VIP",
  description: "Guide complet pour maximiser vos gains sur Stake. Bonus cash jusqu'à 200€ par niveau VIP, guide France, crypto et stratégies exclusives.",
  keywords: "stake, stake france, stake vip, stake bonus, stake casino, stake sport, rounders",
  authors: [{ name: "Rounders" }],
  creator: "Rounders",
  publisher: "Rounders",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Rounders - Gagnez plus sur Stake avec notre guide et bonus VIP",
    description: "Guide complet pour maximiser vos gains sur Stake. Bonus cash jusqu'à 200€ par niveau VIP.",
    url: "https://www.rounders.pro",
    siteName: "Rounders",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rounders - Gagnez plus sur Stake",
    description: "Guide complet et bonus VIP exclusifs pour Stake",
    creator: "@rounders_pro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
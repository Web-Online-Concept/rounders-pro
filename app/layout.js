import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rounders - Gagnez plus sur Stake",
  description: "Guide complet pour maximiser vos gains sur Stake. Bonus cash jusqu'à 200€ par niveau VIP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
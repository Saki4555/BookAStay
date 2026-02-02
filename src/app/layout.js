import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/components/common/AppNavbar";
import Footer from '@/components/ui/Footer';
import { LanguageProvider } from "@/context/LanguageContext";

// Serif font for headers - elegant, luxurious feel
const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Sans-serif for body text - clean, readable, professional
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Winds of Zanzibar | Luxury Beach House in Pwani Mchangani",
  description: "Experience serenity and peace at our luxury beach house on Zanzibar's east coast. Authentic island living with modern comfort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        <LanguageProvider>
          <AppNavbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
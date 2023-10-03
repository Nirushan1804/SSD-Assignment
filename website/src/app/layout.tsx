import Navigation from "@/components/navigation/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Footer from "@/components/footer/Footer";

const Garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tranquil Paradise: Whispers of Sporting Elegance",
  description: "Tranquil Paradise: Whispers of Sporting Elegance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

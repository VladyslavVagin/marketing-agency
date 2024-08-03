import { metadata } from '@/data/metadata';
import { Montserrat, Paytone_One } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export const paytoneOne = Paytone_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-paytone-one",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${montserrat.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

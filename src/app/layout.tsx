import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Marko. - Marketing Agency",
  description:
    "We help businesses grow by creating digital experiences. We design and develop websites, apps, and digital marketing campaigns.",
};

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

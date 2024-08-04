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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Vlad Vagin is a professional web developer specializing in modern JavaScript technologies like React, Next.js and Node.js."
        />
        <title>Vlad Vagin - Web Developer</title>
        <meta />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${montserrat.className}`}>
        <Header />
        <main className="bg-[#e3e3e3] min-h-screen">{children}</main>
      </body>
    </html>
  );
}

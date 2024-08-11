import { Montserrat, Paytone_One } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Toast from "@/components/Toast/Toast";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            locale === "en"
              ? "Vladyslav Vagin is a professional web developer specializing in modern JavaScript technologies like React, Next.js and Node.js."
              : "Vladyslav Vagin es un desarrollador web profesional especializado en tecnologías JavaScript modernas como React, Next.js y Node.js."
          }
        />
        <title>
          {locale === "en"
            ? "Vladyslav Vagin - Modern Web Developing"
            : "Vladyslav Vagin - Desarrollo Web moderno"}
        </title>
        <meta />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className={`${montserrat.className}`}>
          <Header />
          <main className="bg-[#d1ebf5] min-h-screen">{children}</main>
          <Footer />
          <Toast />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

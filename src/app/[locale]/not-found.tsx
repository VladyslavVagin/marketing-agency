"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { paytoneOne } from "./layout";

export default function NotFound() {
  const t = useTranslations("Header");

  return (
    <div className="text-center bg-accent h-screen text-white py-10">
      <h1 className={`${paytoneOne.className} text-9xl md:text-notFound`}>404</h1>
      <h2 className={`${paytoneOne.className} text-4xl mb-10 md:text-6xl`}>
        {t("notFound")}
      </h2>
      <Link
        href={"/"}
        aria-label={t("ariaLabelMain")}
        className="bg-white text-accent border border-accent px-3 py-1 rounded-lg text-xl font-semibold transition-colors duration-500 xl:hover:bg-black"
      >
        {t("goMain")}
      </Link>
    </div>
  );
}

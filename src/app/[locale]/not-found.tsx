"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { paytoneOne } from "./layout";
import { variantButtons, variantText } from "@/animation/MainPage/hero";

export default function NotFound() {
  const t = useTranslations("Header");

  return (
    <div className="text-center bg-accent h-screen text-white py-10">
      <motion.h1
        variants={variantButtons}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${paytoneOne.className} text-9xl md:text-notFound`}
      >
        404
      </motion.h1>
      <motion.h2
        variants={variantText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${paytoneOne.className} text-4xl mb-10 md:text-6xl`}
      >
        {t("notFound")}
      </motion.h2>
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

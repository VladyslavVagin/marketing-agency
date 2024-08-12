"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { variantButtons } from "@/animation/MainPage/hero";

const ButtonsHero = () => {
  const currentLocale = useLocale();
  const t = useTranslations("HomePage");

  return (
    <motion.div
      className="flex items-center justify-center gap-1.5 md:justify-start md:mb-8 relative z-10 xl:gap-4"
      variants={variantButtons}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Link
        href={`/${currentLocale}/about`}
        aria-label={t("btnAboutAriaLabel")}
        className="btn-link text-black bg-white"
      >
        {t("btnAbout")}
      </Link>
      <a
        href={`/CV/CV_Vagin_Vladyslav_${currentLocale}.pdf`}
        download={true}
        aria-label={t("btnDownloadAriaLabel")}
        className="btn-link bg-accent text-white border-white border-[1px]"
      >
        {t("btnDownload")}
      </a>
    </motion.div>
  );
};

export default ButtonsHero;

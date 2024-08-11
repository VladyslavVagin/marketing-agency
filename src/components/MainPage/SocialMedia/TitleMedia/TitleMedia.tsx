"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import { variantSub1, variantSub2 } from "@/animation/MainPage/portfolio";

const TitleMedia = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="xl:w-[40%]">
      <motion.h2
        className={`${paytoneOne.className} text-white title mb-5`}
        variants={variantSub1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("socialMedia")}
      </motion.h2>
      <motion.p
        className="text-lg font-light text-gray-200 mb-16 xl:text-xl"
        variants={variantSub2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("textSocialMedia")}
      </motion.p>
    </div>
  );
};

export default TitleMedia;

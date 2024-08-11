"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import {
  variantSubtitle,
  variantTitle,
  variantText,
} from "@/animation/MainPage/expertise";

const TitleEducation = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="xl:flex xl:items-start xl:justify-between">
      <div>
        <motion.p
          className="subtitle"
          variants={variantSubtitle}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {t("educationSubtitle")}
        </motion.p>
        <motion.h2
          className={`${paytoneOne.className} title mb-5`}
          variants={variantTitle}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {t("educationTitle")}
        </motion.h2>
      </div>
      <motion.p
        className="title-text xl:w-[470px]"
        variants={variantText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("educationText")}
      </motion.p>
    </div>
  );
};

export default TitleEducation;

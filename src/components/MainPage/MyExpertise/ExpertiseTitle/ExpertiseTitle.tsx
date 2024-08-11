"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import {
  variantSubtitle,
  variantTitle,
  variantText,
} from "@/animation/MainPage/expertise";

const ExpertiseTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <motion.p
        className="subtitle"
        variants={variantSubtitle}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("expertise")}
      </motion.p>
      <div className="flex flex-col items-start gap-5 xl:flex-row xl:justify-between">
        <motion.h2
          className={`${paytoneOne.className} title xl:w-[320px]`}
          variants={variantTitle}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {t("solutions")}
        </motion.h2>
        <motion.p
          className="title-text xl:w-[470px]"
          variants={variantText}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {t("textExpertise")}
        </motion.p>
      </div>
    </div>
  );
};

export default ExpertiseTitle;

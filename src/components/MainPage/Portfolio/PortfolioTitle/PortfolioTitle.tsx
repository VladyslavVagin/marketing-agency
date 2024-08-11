"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import { variantSub1, variantSub2 } from "@/animation/MainPage/portfolio";

const PortfolioTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="text-center mb-14">
      <motion.p
        className="subtitle"
        variants={variantSub1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("heroSubtitle")}
      </motion.p>
      <motion.h2
        className={`${paytoneOne.className} title`}
        variants={variantSub2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("featuredWorks")}
      </motion.h2>
    </div>
  );
};

export default PortfolioTitle;

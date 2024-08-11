"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import {
  variantSubtitle,
  variantTitle,
  variantText,
} from "@/animation/MainPage/hero";

const SkillsTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative xl:w-[370px]">
      <motion.p
        className="subtitle mb-4"
        variants={variantSubtitle}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("skills")}
      </motion.p>
      <motion.h2
        className={`title mb-9 ${paytoneOne.className} relative z-20`}
        variants={variantTitle}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("whatSkills")}
      </motion.h2>
      <motion.p
        className="title-text"
        variants={variantText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("textSkills")}
      </motion.p>
      <Image
        className="absolute z-10 top-0 right-0"
        src="/images/hero/shape.png"
        alt="Shape for decoration"
        width={176}
        height={176}
      />
    </div>
  );
};

export default SkillsTitle;

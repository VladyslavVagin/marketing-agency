"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import {
  variantSubtitle,
  variantTitle,
  variantText,
} from "@/animation/MainPage/hero";

const ContactTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative md:w-[50%] xl:w-[40%]">
      <motion.p
        className="subtitle"
        variants={variantSubtitle}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("contact")}
      </motion.p>
      <motion.h2
        className={`${paytoneOne.className} relative z-10 title`}
        variants={variantTitle}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("getInTouch")}
      </motion.h2>
      <motion.p
        className="title-text mt-9 mb-12"
        variants={variantText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("textContact")}
      </motion.p>
      <Image
        className="absolute z-0 top-0 right-0"
        src="/images/hero/shape.png"
        alt={t("shapeAlt")}
        width={176}
        height={176}
      />
    </div>
  );
};

export default ContactTitle;

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

const HeroTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="text-white text-left mt-6 mb-10 md:max-w-[60%] xl:max-w-[470px]">
      <div className="relative mb-8">
        <motion.p
          className="uppercase text-2xl font-light mb-5 md:text-3xl"
          variants={variantSubtitle}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {t("heroSubtitle")}
        </motion.p>
        <motion.h1
          className={`${paytoneOne.className} font-normal text-7xl`}
          variants={variantTitle}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h1>
        <Image
          src="/images/hero/shape.png"
          alt="Shape for hero section"
          width={176}
          height={176}
          className="absolute top-0 right-[-120px] xl:right-0"
        />
      </div>
      <motion.p
        className="title-text text-justify"
        variants={variantText}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {t("textHero")}
      </motion.p>
    </div>
  );
};

export default HeroTitle;

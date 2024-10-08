"use client";

import { FC } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { paytoneOne } from "@/app/[locale]/layout";
import {
  variantSubtitle,
  variantTitle,
  variantText,
  variantRotate,
} from "@/animation/MainPage/hero";

type Props = {
  title: string;
  description: string;
  thumbnail: string;
};

const TitleItem: FC<Props> = ({ title, description, thumbnail }) => {
  const t = useTranslations("Projects");

  return (
    <div className="text-white bg-accent overflow-hidden rounded-b-[50px] relative z-30">
      <div className="px-3.5 py-12 relative max-w-[425px] mx-auto md:max-w-[800px] md:px-9 xl:max-w-[1280px] xl:px-[135px]">
        <div className="relative md:max-w-[45%] xl:max-w-[55%]">
          <motion.p
            variants={variantSubtitle}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="subtitle"
          >
            {t("details")}
          </motion.p>
          <motion.h1
            variants={variantTitle}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${paytoneOne.className} text-titleMain mb-12 xl:text-7xl`}
          >
            {title}
          </motion.h1>
          <motion.p
            variants={variantText}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="title-text md:min-h-48"
          >
            {description}
          </motion.p>
          <Image
            src="/images/hero/shape.png"
            alt={t("shape")}
            width={176}
            height={176}
            className="absolute top-0 right-[-120px]"
          />
        </div>
        <motion.div
          variants={variantRotate}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-[280px] h-[280px] mx-auto my-6 shadow-xl p-2 rounded-full relative overflow-hidden flex flex-col items-center justify-center md:absolute md:right-6 md:top-6 md:w-[360px] md:h-[360px] xl:top-2 xl:right-[10%]"
        >
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TitleItem;

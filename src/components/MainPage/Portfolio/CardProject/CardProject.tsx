"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { variantScale } from "@/animation/MainPage/portfolio";
import { paytoneOne } from "@/app/[locale]/layout";
import { Project } from "@/types/project";

const CardProject: FC<Project> = ({ project }) => {
  const { path, title, thumbnail } = project;
  const t = useTranslations("HomePage");
  const currentLocale = useLocale();

  return (
    <motion.li
      variants={variantScale}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-[346px] h-[346px] relative rounded-full shadow-xl shadow-yellowIcon border-2 border-white md:w-[300px] md:h-[300px] xl:w-[320px] xl:h-[320px]"
    >
      <Link
        href={`/${currentLocale}/portfolio/${path}`}
        className="w-full h-full"
        aria-label={t("ariaLabelLink")}
      >
        <Image
          src={thumbnail}
          alt={t("screenAlt")}
          layout="fill"
          objectFit="cover"
          className="absolute z-10 rounded-full filter brightness-50 transition-all duration-500 hover:filter-none"
        />
        <p
          className={`${paytoneOne.className} absolute z-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-center text-logo font-normal transition-colors duration-500 xl:hover:text-accent`}
        >
          {title}
        </p>
      </Link>
    </motion.li>
  );
};

export default CardProject;

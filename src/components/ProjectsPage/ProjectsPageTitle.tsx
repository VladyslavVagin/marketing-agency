"use client";

import { FC, Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { paytoneOne } from "@/app/[locale]/layout";
import { variantScale } from "@/animation/MainPage/portfolio";
import {
  variantSubtitle,
  variantButtons,
  variantText,
  variantTitle,
} from "@/animation/MainPage/hero";

type Props = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const ProjectsPageTitle: FC<Props> = ({ setCategory, category }) => {
  const t = useTranslations("Projects");

  return (
    <div className="text-white bg-accent overflow-hidden rounded-b-[50px] relative z-30">
      <div className="p-3.5 relative max-w-[1280px] mx-auto md:px-9 md:py-4 xl:px-[135px]">
        <div className="md:flex md:items-center md:justify-between md:gap-6">
          <div className="relative md:max-w-[50%] xl:max-w-[44%]">
            <motion.p
              className="subtitle"
              variants={variantSubtitle}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {t("subtitle")}
            </motion.p>
            <motion.h1
              variants={variantTitle}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`${paytoneOne.className} text-titleMain text-center mb-8 md:text-left xl:text-7xl`}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="title-text text-white text-justify"
              variants={variantText}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {t("text")}
            </motion.p>
            <Image
              src="/images/hero/shape.png"
              alt={t("shape")}
              width={176}
              height={176}
              className="absolute top-0 right-[-120px] xl:right-0"
            />
          </div>
          <motion.div
            variants={variantScale}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full h-48 rounded-lg my-4 shadow-sm shadow-white xl:h-60 xl:w-[45%]"
          >
            <Image
              src="/images/projects.webp"
              alt={t("imgAlt")}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
        <div className="mt-10 mb-6">
          <motion.ul
            variants={variantButtons}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 items-center justify-center"
          >
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "all"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("all")}
              >
                All
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "landing"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("landing")}
              >
                Landing
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "frontend"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("frontend")}
              >
                Frontend
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "backend"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("backend")}
              >
                Backend
              </button>
            </li>
            <li
              className={`border font-bold w-[100px] h-12 flex items-center justify-center rounded-xl ${
                category === "fullstack"
                  ? "bg-accent text-white border-white"
                  : "bg-yellowIcon text-black border-black"
              }`}
            >
              <button
                type="button"
                className="w-full h-full"
                onClick={() => setCategory("fullstack")}
              >
                Fullstack
              </button>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageTitle;

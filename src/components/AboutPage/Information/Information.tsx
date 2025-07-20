"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { paytoneOne } from "@/app/[locale]/layout";
import { variantScale } from "@/animation/MainPage/portfolio";
import {
  variantsBackdrop,
  variants,
  variantsLI1,
  variantsLI2,
  variantsLI3,
} from "@/animation/About/about";

const Information = () => {
  const t = useTranslations("AboutMe");

  return (
    <div className="px-3.5 py-20 relative z-20 mx-auto rounded-b-[50px] mt-[-50px] max-w-[425px] md:max-w-[800px] xl:max-w-[1280px] xl:px-[135px]">
      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-yellowIcon relative`}>
            <span
              className={`w-[15px] h-[15px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <motion.span
            variants={variantsBackdrop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${paytoneOne.className} text-logo`}
          >
            {t("skills")}
          </motion.span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-yellowIcon w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full"
          >
            <motion.h3
              className="subtitle text-white"
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {t("techSkills")}
            </motion.h3>
            <motion.p
              className="text-lg font-light text-white md:text-2xl xl:font-semibold"
              variants={variantsLI2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {t("skillsValues")}
            </motion.p>
            <motion.h3
              className="subtitle mt-4 text-white"
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {t("soft")}
            </motion.h3>
            <motion.p
              variants={variantsLI2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-white md:text-2xl xl:font-semibold"
            >
              {t("softValues")}
            </motion.p>
            <motion.h3
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="subtitle mt-4 text-white"
            >
              {t("approaches")}
            </motion.h3>
            <motion.p
              variants={variantsLI2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-white md:text-2xl xl:font-semibold"
            >
              {t("approachesValues")}
            </motion.p>
            <motion.div
              variants={variantScale}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative w-full h-40 mt-6"
            >
              <Image
                src="/images/about/banner.png"
                alt={t("banner")}
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <motion.span
            className={`${paytoneOne.className} text-logo text-black`}
            variants={variantsBackdrop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {t("seamanLife")}
          </motion.span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full"
          >
            <motion.p
              className="text-lg font-light text-black md:text-2xl xl:font-semibold"
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {t("textSeaman1")}
            </motion.p>
            <motion.p
              variants={variantsLI2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold mt-3"
            >
              {t("textSeaman2")}
            </motion.p>
            <motion.div
              variants={variantScale}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="w-48 h-48 rounded-full relative mx-auto mt-4"
            >
              <Image
                src="/images/about/onma.webp"
                alt={t("onmaSymbol")}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <motion.span
            variants={variantsBackdrop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${paytoneOne.className} text-logo text-black`}
          >
            {t("goit")}
          </motion.span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full"
          >
            <motion.p
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold"
            >
              {t("goitText1")}
            </motion.p>
            <motion.p
              variants={variantsLI2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold mt-3"
            >
              {t("goitText2")}
            </motion.p>
            <motion.p
              variants={variantsLI3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold mt-3"
            >
              {t("goitText3")}
            </motion.p>
            <motion.div
              variants={variantScale}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 flex-wrap mt-4 md:gap-8"
            >
              <Image
                src="/images/about/page1.webp"
                alt={t("certPage1")}
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
              <Image
                src="/images/about/page2.webp"
                alt={t("certPage2")}
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
              <Image
                src="/images/about/page3.webp"
                alt={t("certPage3")}
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
              <Image
                src="/images/about/page4.webp"
                alt={t("certPage4")}
                width={140}
                height={200}
                className="md:w-44 md:h-60"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <motion.span
            variants={variantsBackdrop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${paytoneOne.className} text-logo text-black`}
          >
            {t("getafe")}
          </motion.span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full"
          >
            <motion.p
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold"
            >
              {t("getafeText1")}
            </motion.p>
            <motion.p
              variants={variantsLI2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold mt-3"
            >
              {t("getafeText2")}
            </motion.p>
            <motion.p
              variants={variantsLI3}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold mt-3"
            >
              {t("getafeText3")}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <motion.span
            variants={variantsBackdrop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${paytoneOne.className} text-logo text-black`}
          >
            {t("searchJob")}
          </motion.span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full"
          >
            <motion.p
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold"
            >
              {t("searchJobText1")}
            </motion.p>
            <motion.p
              variants={variantsLI2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold mt-3"
            >
              {t("searchJobText2")}
            </motion.p>
          </motion.div>
        </div>
      </div> */}

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-yellowIcon relative`}>
            <span
              className={`w-[15px] h-[15px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <motion.span
            variants={variantsBackdrop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${paytoneOne.className} text-logo text-black`}
          >
            {t("hobby")}
          </motion.span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <motion.div
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full"
          >
            <motion.p
              variants={variantsLI1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-lg font-light text-black md:text-2xl xl:font-semibold"
            >
              {t("hobbyText")}
            </motion.p>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 md:flex-row">
              <motion.div
                variants={variantsLI2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full h-28 relative md:w-[40%] xl:h-40"
              >
                <Image
                  src="/images/about/foto1.webp"
                  alt={t("hobbyPhotoAlt")}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </motion.div>
              <motion.div
                variants={variantsLI3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-full h-28 relative md:w-[40%] xl:h-40"
              >
                <Image
                  src="/images/about/foto2.webp"
                  alt={t("hobbyPhotoAlt")}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Information;

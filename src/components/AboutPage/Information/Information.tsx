"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

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
          <span className={`${paytoneOne.className} text-logo`}>
            {t("skills")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-yellowIcon w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <h3 className="subtitle">{t("techSkills")}</h3>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("skillsValues")}
            </p>
            <h3 className="subtitle mt-4">{t("soft")}</h3>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("softValues")}
            </p>
            <h3 className="subtitle mt-4">{t("approaches")}</h3>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("approachesValues")}
            </p>
            <div className="relative w-full h-40 mt-6">
              <Image
                src="/images/about/banner.webp"
                alt={t("banner")}
                layout="fill"
                objectFit="contain"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            {t("seamanLife")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("textSeaman1")}
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              {t("textSeaman2")}
            </p>
            <div className="w-48 h-48 rounded-full relative mx-auto mt-4">
              <Image
                src="/images/about/onma.webp"
                alt={t("onmaSymbol")}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            {t("goit")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("goitText1")}
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              {t("goitText2")}
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              {t("goitText3")}
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap mt-4 md:gap-8">
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
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            {t("getafe")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("getafeText1")}
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              {t("getafeText2")}
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              {t("getafeText3")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-accent relative`}>
            <span
              className={`w-[15px] h-[15px] bg-white rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            {t("searchJob")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("searchJobText1")}
            </p>
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold mt-3">
              {t("searchJobText2")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[346px] md:max-w-[768px] xl:max-w-full">
        <div className="flex items-center justify-start gap-3">
          <div className={`w-12 h-12 rounded-xl bg-yellowIcon relative`}>
            <span
              className={`w-[15px] h-[15px] bg-black rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            ></span>
          </div>
          <span className={`${paytoneOne.className} text-logo`}>
            {t("hobby")}
          </span>
        </div>
        <div className="border-l border-l-gray-400 pl-2 md:pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px] xl:max-w-full">
          <div className="bg-white w-80 rounded-2xl px-2 md:px-12 py-10 shadow-xl md:w-[680px] xl:w-full">
            <p className="text-lg font-light text-gray-500 md:text-2xl xl:font-semibold">
              {t("hobbyText")}
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 md:flex-row">
              <div className="w-full h-28 relative md:w-[40%] xl:h-40">
                <Image
                  src="/images/about/foto1.webp"
                  alt={t("hobbyPhotoAlt")}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="w-full h-28 relative md:w-[40%] xl:h-40">
                <Image
                  src="/images/about/foto2.webp"
                  alt={t("hobbyPhotoAlt")}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;

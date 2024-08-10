"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const AboutPage = () => {
  const t = useTranslations("AboutMe");

  return (
    <div className="w-full bg-accent overflow-hidden rounded-b-[50px] relative z-30">
      <div className="px-3.5 pb-9 relative max-w-[425px] text-white mx-auto md:px-9 md:py-4 md:max-w-[800px] md:flex md:items-center md:justify-between xl:px-[135px] xl:max-w-[1280px] xl:py-10">
        <div className="w-full py-10 relative md:max-w-[45%] xl:max-w-[55%]">
          <p className="subtitle">{t("subtitle")}</p>
          <h1 className={`${paytoneOne.className} text-titleMain xl:text-7xl`}>
            {t("title")}
          </h1>
          <p className="title-text text-justify mt-5 xl:mt-10 xl:text-3xl">
            {t("description")}
          </p>
          <Image
            src="/images/hero/shape.png"
            alt={t("shape")}
            width={176}
            height={176}
            className="absolute top-0 right-[-120px] xl:right-0"
          />
        </div>
        <div className="w-52 h-52 relative rounded-full mx-auto shadow-lg shadow-white md:w-64 md:h-64 xl:w-72 xl:h-72">
          <Image
            src="/images/about/foto3.webp"
            alt={t("myPhoto")}
            layout="fill"
            objectFit="cover"
            className="rounded-full object-cover object-right-top filter brightness-75"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

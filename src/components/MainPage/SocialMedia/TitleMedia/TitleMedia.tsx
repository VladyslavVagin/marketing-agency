"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const TitleMedia = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="xl:w-[40%]">
      <h2 className={`${paytoneOne.className} text-white title mb-5`}>
        {t("socialMedia")}
      </h2>
      <p className="text-lg font-light text-gray-200 mb-16 xl:text-xl">
        {t("textSocialMedia")}
      </p>
    </div>
  );
};

export default TitleMedia;

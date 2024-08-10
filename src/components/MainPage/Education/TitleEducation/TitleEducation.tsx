"use client";

import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const TitleEducation = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="xl:flex xl:items-start xl:justify-between">
      <div>
        <p className="subtitle">{t("educationSubtitle")}</p>
        <h2 className={`${paytoneOne.className} title mb-5`}>
          {t("educationTitle")}
        </h2>
      </div>
      <p className="title-text xl:w-[470px]">{t("educationText")}</p>
    </div>
  );
};

export default TitleEducation;

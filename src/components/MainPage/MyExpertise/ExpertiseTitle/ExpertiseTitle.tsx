"use client";

import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const ExpertiseTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div>
      <p className="subtitle">{t("expertise")}</p>
      <div className="flex flex-col items-start gap-5 xl:flex-row xl:justify-between">
        <h2 className={`${paytoneOne.className} title xl:w-[320px]`}>
          {t("solutions")}
        </h2>
        <p className="title-text xl:w-[470px]">{t("textExpertise")}</p>
      </div>
    </div>
  );
};

export default ExpertiseTitle;

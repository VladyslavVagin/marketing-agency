"use client";

import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const PortfolioTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="text-center mb-14">
      <p className="subtitle">{t("heroSubtitle")}</p>
      <h2 className={`${paytoneOne.className} title`}>{t("featuredWorks")}</h2>
    </div>
  );
};

export default PortfolioTitle;

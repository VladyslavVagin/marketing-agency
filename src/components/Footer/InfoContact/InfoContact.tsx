"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { paytoneOne } from "@/app/[locale]/layout";

const InfoContact = () => {
  const t = useTranslations("Footer");

  return (
    <div>
      <h3 className="subtitle mb-4">{t("contactFooter")}</h3>
      <Link
        href="tel:665051466"
        className={`${paytoneOne.className} text-2xl font-normal transition-colors duration-500 xl:hover:text-yellowIcon`}
        aria-label={t("callUs")}
      >
        +34 665 051 466
      </Link>
      <div className="flex flex-col items-start gap-2 mt-2">
        <Link
          href="mailto:vladtwince@gmail.com"
          aria-label={t("sendEmail")}
          className="xl:text-lg transition-colors duration-500 xl:hover:text-yellowIcon"
        >
          vladtwince@gmail.com
        </Link>
        <address className="not-italic xl:text-lg">{t("address")}</address>
      </div>
    </div>
  );
};

export default InfoContact;

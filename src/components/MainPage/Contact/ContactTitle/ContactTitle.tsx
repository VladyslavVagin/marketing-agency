"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const ContactTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative md:w-[50%] xl:w-[40%]">
      <p className="subtitle">{t("contact")}</p>
      <h2 className={`${paytoneOne.className} relative z-10 title`}>
        {t("getInTouch")}
      </h2>
      <p className="title-text mt-9 mb-12">{t("textContact")}</p>
      <Image
        className="absolute z-0 top-0 right-0"
        src="/images/hero/shape.png"
        alt={t("shapeAlt")}
        width={176}
        height={176}
      />
    </div>
  );
};

export default ContactTitle;

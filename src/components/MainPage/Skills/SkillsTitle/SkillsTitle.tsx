"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { paytoneOne } from "@/app/[locale]/layout";

const SkillsTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="relative xl:w-[370px]">
      <p className="subtitle mb-4">{t("skills")}</p>
      <h2 className={`title mb-9 ${paytoneOne.className} relative z-20`}>
        Frontend, Backend and Software
      </h2>
      <p className="title-text">{t("textSkills")}</p>
      <Image
        className="absolute z-10 top-0 right-0"
        src="/images/hero/shape.png"
        alt="Shape for decoration"
        width={176}
        height={176}
      />
    </div>
  );
};

export default SkillsTitle;

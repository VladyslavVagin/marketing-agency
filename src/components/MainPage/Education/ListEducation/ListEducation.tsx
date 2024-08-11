"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { getEducations } from "@/data/educations";
import CardEducation from "../CardEducation/CardEducation";

const ListEducation = () => {
  const t = useTranslations("HomePage");
  const educations = getEducations(t);

  return (
    <div className="mt-16 relative">
      <ul className="flex flex-col items-center gap-4 w-full">
        {educations.map((education) => (
          <CardEducation key={education.id} education={education} />
        ))}
      </ul>
      <Image
        className="absolute z-10 top-0 right-[-10px]"
        src="/images/hero/shape.png"
        alt={t("shapeAlt")}
        width={176}
        height={176}
      />
    </div>
  );
};

export default ListEducation;

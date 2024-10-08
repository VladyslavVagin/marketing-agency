"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";
import { Project } from "@/types/project";

const ProjectCard: FC<Project> = ({ project }) => {
  const currentLocale = useLocale();
  const t = useTranslations("Projects");

  return (
    <li className="w-[300px] h-[300px] bg-accent shadow-xl shadow-yellowIcon p-2 rounded-lg relative overflow-hidden border-4 border-accent flex flex-col items-center justify-center">
      <Image
        src={project.thumbnail}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="filter brightness-50"
      />
      <span className="absolute top-2 right-2 p-1 bg-slate-700 text-white rounded-lg">
        {project.category}
      </span>
      <h2
        className={`${paytoneOne.className} text-4xl text-white relative z-20 text-center`}
      >
        {project.title}
      </h2>
      <Link
        href={`/${currentLocale}/portfolio/${project.path}`}
        aria-label={`${t("btnAriaLabel")} ${project.title}`}
        className="relative z-30 mt-8 bg-accent px-3 py-1 rounded-xl text-white text-xl font-semibold"
      >
        {t("seeDetails")}
      </Link>
    </li>
  );
};

export default ProjectCard;

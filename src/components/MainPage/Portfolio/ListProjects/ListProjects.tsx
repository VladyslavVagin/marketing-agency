"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { paytoneOne } from "@/app/[locale]/layout";
import { projects } from "@/data/projects";
import CardProject from "../CardProject/CardProject";

const ListProjects = () => {
  const t = useTranslations("HomePage");
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  let numberProjects = isDesktop ? 5 : 3;

  return (
    <div className="relative">
      <ul className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap md:gap-6">
        {projects.slice(0, numberProjects).map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
        <li className="w-[346px] h-[346px] relative z-10 bg-accent rounded-2xl shadow-xl border-2 border-white md:w-[300px] md:h-[300px] xl:w-[320px] xl:h-[320px]">
          <Link
            href={"/portfolio"}
            className={`w-full h-full flex items-center justify-center text-white ${paytoneOne.className} text-logo rounded-2xl transition-all duration-500 xl:hover:text-yellowIcon xl:hover:shadow-accent`}
          >
            {t("seeMore")}
            <Image
              src="/images/hero/shape.png"
              alt={t("shapeAlt")}
              width={176}
              height={176}
              className="absolute z-0 bottom-[-40px] left-[-16px]"
            />
          </Link>
        </li>
      </ul>
      <Image
        src="/images/hero/shape.png"
        alt={t("shapeAlt")}
        width={176}
        height={176}
        className="absolute z-0 top-[-40px] right-0"
      />
    </div>
  );
};

export default ListProjects;

"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { paytoneOne } from "@/app/[locale]/layout";

const HeroTitle = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="text-white text-left mt-6 mb-10 md:max-w-[60%] xl:max-w-[470px]">
      <div className="relative mb-8">
        <p className="uppercase text-2xl font-light mb-5 md:text-3xl">
          portfolio
        </p>
        <h1 className={`${paytoneOne.className} font-normal text-7xl`}>
          {t("title")}
        </h1>
        <Image
          src="/images/hero/shape.png"
          alt="Shape for hero section"
          width={176}
          height={176}
          className="absolute top-0 right-[-120px] xl:right-0"
        />
      </div>
      <p className="title-text text-justify">
        Frontend and MERN-stack Web Developer who specialize in HTML5/CSS3,
        JavaScript, React.js, Next.js, TypeScript, Node.js, NoSQL/SQL databases,
        REST APIs and WordPress.
      </p>
    </div>
  );
};

export default HeroTitle;

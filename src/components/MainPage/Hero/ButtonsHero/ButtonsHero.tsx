"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

const ButtonsHero = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="flex items-center justify-center gap-1.5 md:justify-start md:mb-8 relative z-10 xl:gap-4">
      <Link href="#about" className="btn-link text-black bg-white">
        {t("btnAbout")}
      </Link>
      <a
        href="/CV/CV_Vagin_Vladyslav_en.pdf"
        download={true}
        className="btn-link bg-accent text-white border-white border-[1px]"
      >
        {t("btnDownload")}
      </a>
    </div>
  );
};

export default ButtonsHero;

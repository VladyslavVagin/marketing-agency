"use client";

import { useLocale } from "next-intl";
import { ChangeEvent, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";

const SwitcherLang = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const currentLocale = useLocale();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const currentPath = pathname.split("/").slice(2).join("/");
    startTransition(() => {
      router.replace(`/${nextLocale}/${currentPath}`);
    });
  };

  return (
    <div className="mx-auto">
      <select
        defaultValue={currentLocale}
        onChange={handleSelect}
        disabled={isPending}
        className="bg-accent text-white text-xl px-2 py-1 cursor-pointer outline-none transition-colors duration-500 xl:hover:text-yellow-500"
      >
        <option
          value="en"
          className="cursor-pointer bg-white text-black transition-colors duration-500 xl:hover:text-accent"
        >
          ENG
        </option>
        <option
          value="es"
          className="cursor-pointer bg-white text-black transition-colors duration-500 xl:hover:text-accent"
        >
          ESP
        </option>
      </select>
    </div>
  );
};

export default SwitcherLang;

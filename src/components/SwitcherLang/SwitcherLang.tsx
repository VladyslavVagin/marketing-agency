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
    const currentPath = pathname.split('/').slice(2).join('/');
    startTransition(() => {
      router.replace(`/${nextLocale}/${currentPath}`);
    });
  };

  return (
    <div>
      <select
        defaultValue={currentLocale}
        onChange={handleSelect}
        disabled={isPending}
      >
        <option value="en">ENG</option>
        <option value="es">ESP</option>
      </select>
    </div>
  );
};

export default SwitcherLang;

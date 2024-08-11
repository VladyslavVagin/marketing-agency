"use client";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "./Logo/Logo";
import SocialMedia from "./SocialMedia/SocialMedia";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "../MobileMenu/MobileMenu";
import Menu from "./Menu/Menu";

const Header = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-accent w-full" id="header">
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      <div className="p-3.5 flex items-center justify-between max-w-[1280px] mx-auto md:px-9 md:py-4 xl:px-[135px]">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          {isDesktop && <Menu />}
          <SocialMedia />
          <BurgerBtn setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;

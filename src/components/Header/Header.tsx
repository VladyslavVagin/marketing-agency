"use client";

import { useState } from "react";
import Logo from "./Logo/Logo";
import SocialMedia from "./SocialMedia/SocialMedia";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-accent w-full">
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
      <div className="p-3.5 flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <SocialMedia />
          <BurgerBtn setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;

import Logo from "./Logo/Logo";
import SocialMedia from "./SocialMedia/SocialMedia";
import BurgerBtn from "./BurgerBtn/BurgerBtn";

const Header = () => {
  return (
    <header className="bg-accent w-full">
      <div className="p-3.5 flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center gap-2">
          <SocialMedia />
          <BurgerBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;

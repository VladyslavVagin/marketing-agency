import Logo from "../Header/Logo/Logo";
import MenuFooter from "./MenuFooter/MenuFooter";
import InfoContact from "./InfoContact/InfoContact";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-16 mt-[-50px] relative z-0">
      <div className="px-3.5 text-white md:flex md:items-center md:justify-between max-w-[1280px] mx-auto md:px-9 md:py-4 xl:px-[135px]">
        <div>
          <Logo />
          <p className="max-w-[270px] mt-6 text-lg font-light text-gray-300">
            Crafting Digital Experiences, One Line of Code at a Time.
          </p>
        </div>
        <MenuFooter />
        <InfoContact />
      </div>
    </footer>
  );
};

export default Footer;

import HeroTitle from "./HeroTitle/HeroTitle";
import ButtonsHero from "./ButtonsHero/ButtonsHero";
import ImageHero from "./ImageHero/ImageHero";

const Hero = () => {
  return (
    <section className="bg-accent overflow-hidden rounded-b-[50px] mb-16">
      <div className="p-3.5 relative pb-72 max-w-[445px] mx-auto md:px-9 md:py-4 md:max-w-[768px] xl:max-w-[1280px] xl:px-[135px]">
        <HeroTitle />
        <ButtonsHero />
        <ImageHero />
      </div>
    </section>
  );
};

export default Hero;

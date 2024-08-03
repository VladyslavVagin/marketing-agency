import HeroTitle from "./HeroTitle/HeroTitle";
import ButtonsHero from "./ButtonsHero/ButtonsHero";
import ImageHero from "./ImageHero/ImageHero";

const Hero = () => {
  return (
    <section className="bg-accent overflow-hidden rounded-b-[50px] mb-16">
      <div className="p-3.5 relative pb-72">
        <HeroTitle />
        <ButtonsHero />
        <ImageHero />
      </div>
    </section>
  );
};

export default Hero;

import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="absolute bottom-0 translate-x-5 md:right-[-40px]">
      <Image
        src="/images/hero/hero.png"
        alt="Photo of Vladyslav Vagin"
        width={346}
        height={458}
        className="md:w-[520px] md:h-[460px]"
      />
    </div>
  );
};

export default ImageHero;

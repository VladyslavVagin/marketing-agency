import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="absolute bottom-0 translate-x-5 md:right-[-80px] xl:right-0">
      <Image
        src="/images/hero/hero.png"
        alt="Photo of Vladyslav Vagin"
        width={346}
        height={458}
        className="md:w-[560px] md:h-[460px] xl:w-[700px] xl:h-[580px]"
      />
    </div>
  );
};

export default ImageHero;

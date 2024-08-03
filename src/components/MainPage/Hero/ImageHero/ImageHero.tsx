import Image from "next/image";

const ImageHero = () => {
  return (
    <div className="absolute bottom-0 translate-x-5">
      <Image
        src="/images/hero/hero.png"
        alt="Photo of Vladyslav Vagin"
        width={346}
        height={458}
      />
    </div>
  );
};

export default ImageHero;

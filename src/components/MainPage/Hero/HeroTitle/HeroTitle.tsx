import Image from "next/image";
import { paytoneOne } from "@/app/layout";

const HeroTitle = () => {
  return (
    <div className="text-white text-left mt-6 mb-10 max-w-[60%]">
      <div className="relative mb-8">
        <p className="uppercase text-2xl font-light mb-5 md:text-3xl">
          portfolio
        </p>
        <h1 className={`${paytoneOne.className} font-normal text-titleMain`}>
          Hello, I&apos;m Vlad Vagin
        </h1>
        <Image
          src="/images/hero/shape.png"
          alt="Shape for hero section"
          width={176}
          height={176}
          className="absolute top-0 right-[-120px]"
        />
      </div>
      <p className="title-text text-justify">
        Frontend and MERN-stack Web Dveloper who specialize in HTML5/CSS3, JavaScript,
        React.js, Next.js, TypeScript, Node.js, MongoDB, REST APIs and WordPress.
      </p>
    </div>
  );
};

export default HeroTitle;

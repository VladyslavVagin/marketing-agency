import Image from "next/image";
import { paytoneOne } from "@/app/layout";

const HeroTitle = () => {
  return (
    <div className="text-white text-left mt-6 mb-10">
      <div className="relative mb-8">
        <p className="font-montserrat uppercase text-2xl font-light mb-5">
          portfolio
        </p>
        <h1 className={`${paytoneOne.className} font-normal text-titleMain`}>
          Hello, I'm Vlad Vagin
        </h1>
        <Image
          src="/images/hero/shape.png"
          alt="Shape for hero section"
          width={176}
          height={176}
          className="absolute top-0 right-[-120px]"
        />
      </div>
      <p className="text-lg font-normal text-justify">
        Frontend and MERN-stack Web Dveloper who specialize in HTML5/CSS3, JavaScript,
        React.js, Next.js, TypeScript, Node.js, MongoDB, REST APIs and WordPress.
      </p>
    </div>
  );
};

export default HeroTitle;

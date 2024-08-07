import { FC } from "react";
import Image from "next/image";
import { paytoneOne } from "@/app/layout";

type Props = {
  title: string;
  description: string;
  thumbnail: string;
};

const TitleItem: FC<Props> = ({ title, description, thumbnail }) => {
  return (
    <div className="text-white bg-accent overflow-hidden rounded-b-[50px] relative z-30">
      <div className="px-3.5 py-12">
        <div className="relative">
          <p className="subtitle">Details</p>
          <h1 className={`${paytoneOne.className} text-titleMain mb-12`}>
            {title}
          </h1>
          <p className="title-text">{description}</p>
          <Image
            src="/images/hero/shape.png"
            alt="Shape for hero section"
            width={176}
            height={176}
            className="absolute top-0 right-[-120px]"
          />
        </div>
        <div className="w-[180px] h-[180px] mx-auto mt-6 shadow-xl p-2 rounded-full relative overflow-hidden flex flex-col items-center justify-center">
          <Image
            src={thumbnail}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleItem;

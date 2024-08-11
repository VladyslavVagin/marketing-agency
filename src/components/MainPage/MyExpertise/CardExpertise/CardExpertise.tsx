import { FC } from "react";
import { paytoneOne } from "@/app/[locale]/layout";

type Props = {
  solution: {
    Icon: any;
    title: string;
    description: string;
  };
};

const CardExpertise: FC<Props> = ({ solution }) => {
  return (
    <div className="w-full max-w-[370px] h-[464px] p-12 bg-[#f7f7f7] rounded-2xl overflow-hidden">
      <div className="bg-yellowIcon w-28 h-28 flex items-center justify-center rounded-xl mb-20">
        <solution.Icon className="w-12 h-12" />
      </div>
      <h3
        className={`${paytoneOne.className} text-logo font-normal mb-5 text-black`}
      >
        {solution.title}
      </h3>
      <p className="text-grayText text-lg font-light text-justify max-h-32 overflow-y-scroll">
        {solution.description}
      </p>
    </div>
  );
};

export default CardExpertise;

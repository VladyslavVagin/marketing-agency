import { FC } from "react";
import { paytoneOne } from "@/app/layout";

type Props = {
  education: {
    id: number;
    year: string;
    title: string;
    description: string;
  };
};

const CardEducation: FC<Props> = ({ education }) => {
  const { year, title, description, id } = education;

  return (
    <li className="max-w-[346px] md:max-w-[768px]">
      <div className="flex items-center justify-start gap-3">
        <div
          className={`w-12 h-12 rounded-xl ${
            id === 2 ? "bg-yellowIcon" : "bg-accent"
          } relative`}
        >
          <span
            className={`w-[15px] h-[15px] ${
              id === 2 ? "bg-black" : "bg-white"
            } rounded-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
          ></span>
        </div>
        <span className={`${paytoneOne.className} text-logo`}>{year}</span>
      </div>
      <div className="border-l border-l-gray-400 pl-8 py-4 mt-4 ml-6 max-w-[335px] flex items-center md:max-w-[700px]">
        <div className="bg-white w-72 rounded-2xl px-12 py-10 shadow-xl md:w-[680px]">
          <h3 className="text-2xl font-normal mb-5">{title}</h3>
          <p className="text-lg font-light text-gray-500">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default CardEducation;

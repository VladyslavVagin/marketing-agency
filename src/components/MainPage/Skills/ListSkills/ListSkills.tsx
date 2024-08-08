import { paytoneOne } from "@/app/layout";
import { skills } from "@/data/skills";
import ProgressBar from "../ProgressBar/ProgressBar";

type Skill = {
  id: number;
  name: string;
  progress: number;
  color: string;
};

const ListSkills = () => {
  return (
    <ul className="flex flex-col items-center justify-center mt-14 gap-4 md:flex-row md:flex-wrap md:gap-6 md:mx-auto md:mb-10 xl:mx-0 xl:mb-0 xl:justify-end xl:max-w-[560px]">
      {skills.map((skill: Skill) => (
        <li
          key={skill.id}
          className="w-[270px] h-[272px] rounded-2xl bg-white shadow-xl flex flex-col items-center justify-center md:w-80 md:h-80 xl:w-[250px] xl:h-[252px] xl:odd:mt-[-120px]"
        >
          <div className="relative w-40 h-40">
            <ProgressBar
              progress={skill.progress}
              colorProgress={skill.color}
            />
            <p
              className={`${paytoneOne.className} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-logo font-normal text-black`}
            >
              {skill.progress}%
            </p>
          </div>
          <h3 className="mt-2 text-2xl font-light text-blacks md:font-semibold xl:font-light">{skill.name}</h3>
        </li>
      ))}
    </ul>
  );
};

export default ListSkills;

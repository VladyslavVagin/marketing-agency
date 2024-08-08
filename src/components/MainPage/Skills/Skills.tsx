import SkillsTitle from "./SkillsTitle/SkillsTitle";
import ListSkills from "./ListSkills/ListSkills";

const Skills = () => {
  return (
    <div className="bg-gray-300 rounded-[50px] px-[30px] pt-[74px] pb-16 max-w-[1280px] mx-auto md:px-9 md:pb-4 xl:px-[135px] xl:flex xl:items-start xl:justify-between">
      <SkillsTitle />
      <ListSkills />
    </div>
  );
};

export default Skills;

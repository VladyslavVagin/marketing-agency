import SkillsTitle from "./SkillsTitle/SkillsTitle";
import ListSkills from "./ListSkills/ListSkills";

const Skills = () => {
  return (
    <div className="bg-gray-300 rounded-[50px] px-[30px] pt-[74px] pb-16">
      <SkillsTitle />
      <ListSkills />
    </div>
  );
};

export default Skills;

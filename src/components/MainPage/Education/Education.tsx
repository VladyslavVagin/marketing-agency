import TitleEducation from "./TitleEducation/TitleEducation";
import ListEducation from "./ListEducation/ListEducation";

const Education = () => {
  return (
    <section>
      <div className="p-3.5 max-w-[1280px] mx-auto md:px-9 md:pb-4 xl:px-[135px]">
        <TitleEducation />
        <ListEducation />
      </div>
    </section>
  );
};

export default Education;

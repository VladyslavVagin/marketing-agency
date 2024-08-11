import ExpertiseTitle from "./ExpertiseTitle/ExpertiseTitle";
import ListSolutions from "./ListSolutions/ListSolutions";

const MyExpertise = () => {
  return (
    <section>
      <div className="p-3.5 max-w-[1280px] mx-auto md:px-9 md:py-4 xl:px-[135px]">
        <ExpertiseTitle />
        <ListSolutions />
      </div>
    </section>
  );
};

export default MyExpertise;

import ExpertiseTitle from "./ExpertiseTitle/ExpertiseTitle";
import ListSolutions from "./ListSolutions/ListSolutions";

const MyExpertise = () => {
  return (
    <section id="about">
      <div className="p-3.5">
        <ExpertiseTitle />
        <ListSolutions />
      </div>
    </section>
  );
};

export default MyExpertise;

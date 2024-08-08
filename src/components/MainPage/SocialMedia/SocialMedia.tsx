import TitleMedia from "./TitleMedia/TitleMedia";
import ListLinks from "./ListLinks/ListLinks";

const SocialMedia = () => {
  return (
    <div className="px-3.5 pt-16 pb-24 max-w-[1280px] mx-auto md:px-9 xl:w-full xl:flex xl:items-center xl:justify-between">
      <TitleMedia />
      <ListLinks />
    </div>
  );
};

export default SocialMedia;

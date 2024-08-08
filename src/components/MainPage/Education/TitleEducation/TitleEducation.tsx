import { paytoneOne } from "@/app/layout";

const TitleEducation = () => {
  return (
    <div className="xl:flex xl:items-start xl:justify-between">
      <div>
        <p className="subtitle">my learning</p>
        <h2 className={`${paytoneOne.className} title mb-5`}>Education</h2>
      </div>
      <p className="title-text xl:w-[470px]">
        My education journey has been unique and diverse. I started my career as
        a seaman, navigating the vast oceans. But my passion for technology and
        coding led me to the world of web development. Today, I use my diverse
        experiences to create innovative and user-friendly web solutions.
      </p>
    </div>
  );
};

export default TitleEducation;

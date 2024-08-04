import Image from "next/image";
import { paytoneOne } from "@/app/layout";

const SkillsTitle = () => {
  return (
    <div className="relative">
      <p className="subtitle mb-4">my skills</p>
      <h2 className={`title mb-9 ${paytoneOne.className} relative z-20`}>
        Frontend, Backend and Software
      </h2>
      <p className="text-title">
        I specialize in JavaScript, TypeScript, React, Next and have experience
        with backend development using Node.js. I'm also proficient in using
        various development tools such as npm and Git, Redux and Firebase. My
        focus is on writing clean, efficient, and maintainable code.
      </p>
      <Image className="absolute z-10 top-0 right-0" src="/images/hero/shape.png" alt="Shape for decoration" width={176} height={176} />
    </div>
  );
};

export default SkillsTitle;

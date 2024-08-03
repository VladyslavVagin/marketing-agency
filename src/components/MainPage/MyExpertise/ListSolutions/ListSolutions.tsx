import { FaLaptopCode, FaSitemap } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";

const ListSolutions = () => {
  return (
    <div className="relative">
      <ul className="flex flex-col items-center gap-4">
        <li className="w-full p-12 bg-[#f7f7f7] rounded-2xl">
          <div className="bg-[#f8f7ab] w-28 h-28 flex items-center justify-center rounded-xl mb-20">
            <FaLaptopCode className="w-12 h-12" />
          </div>
          <h3>Web Applications</h3>
          <p>
            It is about creating applications that run on a web server and can
            be accessed by users via a web browser. I specialize in creating
            dynamic, responsive, and user-friendly web applications using modern
            technologies like JavaScript, TypeScript, React and Next.
          </p>
        </li>
        <li className="w-full p-12 bg-[#f7f7f7] rounded-2xl">
          <div className="bg-[#f8f7ab] w-28 h-28 flex items-center justify-center rounded-xl mb-20">
            <FaSitemap className="w-12 h-12" />
          </div>
          <h3>Web Pages</h3>
          <p>
            Involves creating individual pages that provide information,
            entertainment, or e-commerce functionality. I ensure that these
            pages are well-designed, responsive, and optimized for search
            engines.
          </p>
        </li>
        <li className="w-full p-12 bg-[#f7f7f7] rounded-2xl">
          <div className="bg-[#f8f7ab] w-28 h-28 flex items-center justify-center rounded-xl mb-20">
            <AiFillApi className="w-12 h-12" />
          </div>
          <h3>REST APIs</h3>
          <p>
            Creating interfaces that allow different software applications to
            communicate and exchange data. I have experience in designing and
            implementing secure, efficient, and scalable REST APIs with Node.js.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ListSolutions;

import { Dispatch, FC, SetStateAction } from "react";
import { IoMenuSharp } from "react-icons/io5";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const BurgerBtn: FC<Props> = ({ setIsOpen }) => {
  return (
    <div className="w-12 h-12 md:w-16 md:h-16 xl:hidden">
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30"
      >
        <IoMenuSharp className="w-4 h-4 fill-white md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default BurgerBtn;

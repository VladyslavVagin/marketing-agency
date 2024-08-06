import { FC, Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenu: FC<Props> = ({ setIsOpen }) => {
  return (
    <div className="fixed z-[60] top-0 left-0 w-screen h-screen bg-[rgba(0, 0, 0, 0.897)]">
      <div className="absolute z-[61] top-0 right-0 w-52 min-h-screen bg-white">
        <button type="button" className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
          <IoClose className="fill-black w-9 h-9" />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;

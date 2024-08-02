import { IoMenuSharp } from "react-icons/io5";

const BurgerBtn = () => {
  return (
    <div className="w-12 h-12">
      <button
        type="button"
        className="flex items-center justify-center w-full h-full bg-primary rounded-full border border-white border-opacity-30"
      >
        <IoMenuSharp className="w-4 h-4 fill-white" />
      </button>
    </div>
  );
};

export default BurgerBtn;

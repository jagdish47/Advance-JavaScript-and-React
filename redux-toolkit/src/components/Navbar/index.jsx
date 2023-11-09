import { AiFillHome } from "react-icons/ai";
import { ImCart } from "react-icons/im";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2 px-6">
        <AiFillHome className="text-[25px] transition duration-300 ease-out hover:text-green-700" />
        <ImCart className="text-[25px] transition duration-300 ease-out hover:text-blue-700" />
      </div>
    </>
  );
};

export default Navbar;

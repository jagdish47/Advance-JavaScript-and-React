import { AiFillHome } from "react-icons/ai";
import { ImCart } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartLength = useSelector((state) => state.cart.items.length);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between p-2 px-6">
        <AiFillHome
          onClick={() => {
            navigate("/");
          }}
          className="text-[25px] transition duration-300 ease-out hover:text-green-700"
        />
        <div className="flex">
          <h1 className="bg-slate-500 h-full w-5 text-center rounded-full font-bold text-white">
            {cartLength}
          </h1>
          <ImCart
            onClick={() => {
              navigate("/cart");
            }}
            className="text-[25px] transition duration-300 ease-out hover:text-blue-700"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

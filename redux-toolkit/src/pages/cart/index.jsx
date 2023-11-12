import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  console.log("Cart Items : ", cartItems);

  return (
    <>
      {cartItems.items.map((ele, index) => (
        <div
          key={index}
          className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-8"
        >
          <img
            className="w-full h-48 object-cover"
            src={ele.thumbnail}
            alt={ele.title}
          />
          <div className="p-4">
            <h3 className="text-gray-700 font-bold text-xl">{ele.title}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{ele.description}</p>
            <div className="flex items-center justify-between mt-4">
              <h1 className="text-purple-500 font-bold">${ele.price}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;

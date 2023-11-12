import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callProductListApi } from "../../feature/productslice";
import { addItem } from "../../feature/cartslice";

const Product = () => {
  const dispatch = useDispatch();
  const { productList, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(callProductListApi());
  }, []);

  console.log(productList);
  console.log(isLoading);

  const handleAddToCart = (currentItem) => {
    dispatch(addItem(currentItem));
  };

  return (
    <>
      {productList.map((ele, index) => (
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
              <button
                onClick={() => {
                  handleAddToCart(ele);
                }}
                className="px-3 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 focus:outline-none"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;

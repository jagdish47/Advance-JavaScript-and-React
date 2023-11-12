import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { callProductAPI } from "../features/product/productSlice";
import { useEffect } from "react";

const Product = () => {
  const { isFailed, isLoading, productList } = useSelector(
    (state) => state.product
  );

  console.log(isFailed);
  console.log(isLoading);
  console.log(productList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callProductAPI());
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <h1>Product Page</h1>
      {productList.map((ele) => (
        <div style={{ border: "2px solid gray" }}>
          <h5>{ele.id}</h5>
          <span>{ele.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Product;

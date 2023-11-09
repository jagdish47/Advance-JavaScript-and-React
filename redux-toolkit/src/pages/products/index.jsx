import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callProductListApi, getProducts } from "../../feature/productslice";

const Product = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(callProductListApi());
  }, []);

  console.log(productList);

  return (
    <>
      <h3>Products</h3>
    </>
  );
};

export default Product;

import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);

  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of ice cream - {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Order ice cream</button>
      <input
        type="number"
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
        value={number}
      />
      <button onClick={() => dispatch(restocked(number))}>
        Restock ice cream
      </button>
    </div>
  );
};

export default IcecreamView;

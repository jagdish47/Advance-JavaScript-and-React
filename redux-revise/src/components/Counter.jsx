import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice"; // Adjust the path

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Increment by Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;

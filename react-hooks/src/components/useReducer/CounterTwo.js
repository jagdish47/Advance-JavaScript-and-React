import React, { useReducer } from "react";

const initialState = {
  counterOne: 0,
  counterTwo: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counterOne: state.counterOne + action.value };

    case "decrement":
      return { ...state, counterOne: state.counterOne + action.value };

    case "incrementby5":
      return { ...state, counterTwo: state.counterTwo + action.value };
    case "decrementby5":
      return { ...state, counterTwo: state.counterTwo - action.value };
    default:
      return { ...state };
  }
};

const CounterTwo = () => {
  const [counterObj, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Counter-1 = {counterObj.counterOne}</h4>
      <h4>Counter-2 = {counterObj.counterTwo}</h4>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "incrementby5", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrementby5", value: 5 })}>
        Decrement by 5
      </button>
    </div>
  );
};

export default CounterTwo;

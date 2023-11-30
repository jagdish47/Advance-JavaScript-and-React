import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 style={{ fontSize: "20px" }}>
        Functional Based Component How state Chagne
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default HookCounter;

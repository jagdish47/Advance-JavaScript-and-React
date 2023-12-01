import { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  function IncrementByFive() {
    //If you want to change something from Previous State we us

    setCount((prev) => prev + 5);
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment by 1</button>
      <button onClick={() => setCount(count - 1)}>Decrement by 1</button>
      <button onClick={IncrementByFive}>Increment by 5</button>

      <h1>{count}</h1>
    </div>
  );
};

export default HookCounterTwo;

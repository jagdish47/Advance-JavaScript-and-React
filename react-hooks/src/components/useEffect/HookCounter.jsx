import React, { useState, useEffect } from "react";

const HookCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${counter} times`;
    console.log("Updating document title");
  });

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Click {counter} times
      </button>
      <input placeholder="Enter..." />
    </div>
  );
};

export default HookCounter;

import React from "react";
import { useContext } from "react";

import { MyContext } from "./MyProvider";

const ChildComponent = () => {
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      <p>Data from context : {data}</p>
      <button onClick={() => setData("Fuck you bitch")}>update data</button>
    </div>
  );
};

export default ChildComponent;

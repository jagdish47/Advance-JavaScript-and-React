import React, { useContext, useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setData] = useState("Default Data");

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

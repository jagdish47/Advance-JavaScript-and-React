import React from "react";
// import ComponentF from "./components/ComponentC";

// export const UserContext = React.createContext();
// export const channelContext = React.createContext();

import MyProvider from "./contextAPI/MyProvider";
import ChildComponent from "./contextAPI/ChildComponent";

const App = () => {
  return (
    <div>
      {/* <UserContext.Provider value={"Jagdish"}>
        <channelContext.Provider value={"Learn with Jassii"}>
          <ComponentF />
        </channelContext.Provider>
      </UserContext.Provider> */}

      <MyProvider>
        <ChildComponent />
      </MyProvider>
    </div>
  );
};

export default App;

/**
 *
 * 1. Create a Context
 * 2. Provide Context Value to whole app or Component you want / high level of component tree.
 * 3. Consume it
 *
 */

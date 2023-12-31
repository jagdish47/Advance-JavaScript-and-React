import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";
// import CustomUseState from "./components/customUseState";
// import HookCounter from "./components/useEffect/HookCounter";
// import HookMouse from "./components/useEffect/HookMouse";

import CounterOne from "./components/useReducer/CounterOne";
import CounterTwo from "./components/useReducer/CounterTwo";

function App() {
  return (
    <div className="App">
      {/* ----------useState------ */}
      {/* <ClassCounter />
      <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <CustomUseState /> */}

      {/* --------useEffect---------- */}
      {/* <HookCounter /> */}
      {/* <HookMouse /> */}

      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;

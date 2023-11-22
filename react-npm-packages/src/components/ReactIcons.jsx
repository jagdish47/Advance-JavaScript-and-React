import { IconContext } from "react-icons";
import { DiApple } from "react-icons/di";
import { DiIe } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";

const ReactIcons = () => {
  return (
    <div>
      <h1>React Icons</h1>

      <IconContext.Provider value={{ color: "green", size: "5rem" }}>
        <DiApple />
        <DiJsBadge />
        <DiIe color="red" size="5rem" />
      </IconContext.Provider>
    </div>
  );
};

export default ReactIcons;

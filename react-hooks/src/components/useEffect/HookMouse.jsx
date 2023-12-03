import { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientY);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      <h1>
        X - {x} : Y - {y}
      </h1>
    </div>
  );
};

export default HookMouse;

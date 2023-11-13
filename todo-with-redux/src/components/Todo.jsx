import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../feature/todoSlice";

const defaultTask = {
  todo: "",
};

const Todo = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState(defaultTask);

  const handleTask = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmitTask = () => {
    dispatch(createTodo(task));
  };

  return (
    <div>
      <div className="p-2 bg-black flex items-center justify-between">
        <div>
          <input
            name="todo"
            value={task.todo}
            onChange={(e) => handleTask(e)}
            className="border-1 p-1 px-3 outline-none focus:outline-none "
            type="text"
            placeholder="Task"
          />
          <button
            onClick={() => handleSubmitTask()}
            className="bg-slate-500 font-bold px-2 py-1 rounded-sm text-white ml-2"
          >
            submit
          </button>
        </div>
        <div>
          <p className="text-gray-300 text-[11px] relative top-4">
            Created by <span>Jagdish Kumawat</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Todo;

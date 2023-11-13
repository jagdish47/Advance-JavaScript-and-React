import { useSelector } from "react-redux";

const ListTodo = () => {
  const data = useSelector((state) => state.todo.todoList);

  console.log("Data from Redux : ", data);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-md shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">List Todo</h1>
      {data.map((item, idx) => (
        <div key={idx} className="mb-2 p-2 border-b">
          <h1 className="text-lg">{item.todo}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;

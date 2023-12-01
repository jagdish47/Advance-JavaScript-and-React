const useCustomHook = (initialState) => {
  let state = initialState;
  const rerender = () => {};
  const setState = (newValue) => {
    state = newValue;
    rerender();
  };
  return [state, setState];
};

const CustomUseState = () => {
  const [counter, setCounter] = useCustomHook(0);

  return (
    <div>
      <h1>custom useState Hook</h1>

      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default CustomUseState;

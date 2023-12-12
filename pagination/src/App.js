import { useFetchData } from "./customHooks/useFetchData";
import "./App.css";
import { useState } from "react";

function App() {
  const { data, loading } = useFetchData();
  const [page, setPage] = useState(1);

  // console.log("Data : ", data);
  // console.log("Loading : ", loading);
  // console.log("Error : ", error);

  if (loading) {
    return <div>Loading</div>;
  }
  console.log(data);

  return (
    <>
      <div className="container">
        {data.products.slice(page * 10 - 10, page * 10).map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <span onClick={() => setPage(page - 1)}>⏮️</span>
        <h1>
          {[...Array(data.products.length / 10)].map((_, i) => (
            <h1 onClick={() => setPage(i + 1)}>{i + 1}</h1>
          ))}
        </h1>
        <span onClick={() => setPage(page + 1)}>⏭️</span>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { useFetchData } from "./customHooks/useFetchData";
import "./App.css";

function App() {
  const { data, loading } = useFetchData();
  const [page, setPage] = useState(1);

  if (loading) {
    return <div>Loading</div>;
  }

  const productsPerPage = 10;
  const startIdx = (page - 1) * productsPerPage;
  const endIdx = page * productsPerPage;

  return (
    <>
      <div className="container">
        {data.products.slice(startIdx, endIdx).map((product) => (
          <div className="card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <span
          className={page === 1 ? "disabled" : ""}
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          ⏮️
        </span>
        <div>
          {[...Array(Math.ceil(data.products.length / productsPerPage))].map(
            (_, i) => (
              <span
                key={i}
                onClick={() => setPage(i + 1)}
                className={page === i + 1 ? "active" : ""}
              >
                {i + 1}
              </span>
            )
          )}
        </div>
        <span
          className={page === 2 ? "disabled" : ""}
          onClick={() => {
            console.log("Clicked on Next Page");
            setPage((prevPage) => prevPage + 1);
          }}
        >
          ⏭️
        </span>
      </div>
    </>
  );
}

export default App;

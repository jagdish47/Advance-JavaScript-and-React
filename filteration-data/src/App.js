import { useEffect, useState } from "react";
import { useFetchData } from "./customHooks/useGetData";

const App = () => {
  const { data, loading, error } = useFetchData();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(data);
  }, [data]);

  const handleSelect = (e) => {
    const sortedData = [...data]; // Create a copy of the original data array

    if (e.target.value === "ascending") {
      const newArr = sortedData.sort((a, b) => a.price - b.price);
      setFilter(newArr);
    } else if (e.target.value === "descending") {
      const newArr = sortedData.sort((a, b) => b.price - a.price);
      setFilter(newArr);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div>
        <select onChange={handleSelect}>
          <option>Sort the Item</option>
          <option value="ascending">Low to medium</option>
          <option value="descending">High to medium</option>
        </select>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filter &&
          filter.length > 0 &&
          filter.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                margin: "10px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: "50%", height: "auto" }}
              />
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default App;

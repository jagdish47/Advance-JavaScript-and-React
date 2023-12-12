import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error : Fetching Data");
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
};

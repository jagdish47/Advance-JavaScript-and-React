// export const useGetData = () => {
//   return fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//     .catch((error) => {
//       console.error("Error Fetching Product Data:", error.message);
//       throw error;
//     });
// };

import { useState, useEffect } from "react";

export const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        setError("Error while Fetching Data");
        console.log("Getting Error while Fetching data");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //   console.log({ data });
  //   console.log({ loading });
  //   console.log({ error });

  return { data, loading, error };
};

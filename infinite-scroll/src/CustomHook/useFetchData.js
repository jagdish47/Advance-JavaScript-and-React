import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setData(data);
      console.log("Data : ", data);
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  return { data, loading };
};

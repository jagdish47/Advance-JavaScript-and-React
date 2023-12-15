import React, { useState, useEffect } from "react";

const YourComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Simulate fetching data from an API
      const response = await fetch(`https://api.example.com/data?page=${page}`);
      const newData = await response.json();

      // Update state
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);

      // Check if there's more data
      setHasMore(newData.length > 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial data

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  const handleScroll = () => {
    // Calculate the scroll position
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if the user has scrolled to the bottom of the page
    if (scrollY + windowHeight >= documentHeight - 200 && !loading && hasMore) {
      fetchData();
    }
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{/* Render your data here */}</div>
      ))}
      {loading && <h4>Loading...</h4>}
    </div>
  );
};

export default YourComponent;

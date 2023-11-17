import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";

const getColorData = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { isLoading, isError, error, data } = useQuery(
    ["color-data", pageNumber],
    () => getColorData(pageNumber),
    {
      keepPreviousData: true, //second time you go next previous get data from Catch... but data will fetch
    }
  );

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {data?.data.map((color) => (
        <div style={{ display: "flex", item: "center" }}>
          <h6>{color.id}</h6>
          <h5>{color.label}</h5>
        </div>
      ))}

      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => {
            pageNumber > 0 && setPageNumber(pageNumber - 1);
          }}
        >
          Previous
        </button>
        <h4>{pageNumber}</h4>
        <button
          disabled={pageNumber === 4}
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PaginatedQueriesPage;

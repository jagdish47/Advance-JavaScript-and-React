import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message} </h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>

      <button onClick={refetch}>Fetch Heroes</button>

      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}

      {/* {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
    </>
  );
};

export default RQSuperHeroesPage;

import axios from "axios";
import { useQuery } from "react-query";

const friendData = () => {
  return axios.get("http://localhost:4000/friends");
};

const superHeroData = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const ParallelQueriesPage = () => {
  useQuery("Friend", friendData);
  useQuery("Hero", superHeroData);

  return (
    <div>
      <h1>HEHE</h1>
    </div>
  );
};

export default ParallelQueriesPage;

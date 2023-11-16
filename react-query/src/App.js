import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import { DynamicParallelPage } from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/super-heroes">Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to="/rq-super-heroes">RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/rq-dependent"
            element={<DependentQueriesPage email="jagdish@gmail.com" />}
          />

          <Route
            path="/rq-dynamic-parallel"
            element={<DynamicParallelPage heroId={[1, 3]} />}
          />
          <Route path="/rq-super-hero/:id" element={<RQSuperHeroPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

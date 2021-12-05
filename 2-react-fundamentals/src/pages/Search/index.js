import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Hero from "../../components/Hero";
import MovieCard from "../../components/MovieCard";
import Spinner from "../../components/Spinner";

export default function Search({ keyword, searchResults, isLoading }) {
  const history = useHistory();
  useEffect(() => {
    if (searchResults.length === 0) {
      history.push("/");
    }
  }, [searchResults]);

  return (
    <>
      <Hero title={`You are searching for ${keyword}`} />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container my-5">
          <div className="row row-cols-auto gy-4 gx-5">
            {searchResults?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

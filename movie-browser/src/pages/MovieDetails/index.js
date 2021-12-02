import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Spinner from "../../components/Spinner";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((movie) => {
        setMovie(movie);
        console.log(movie);
      });
  }, [id]);

  return (
    <>
      {movie ? (
        <>
          <Hero
            title={movie && movie.title}
            backdrop={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
          <div className="container my-5">
            <div className="row">
              <div className="col-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "25rem", objectFit: "cover" }}
                />
                <p className="card-text">
                  <small className="text-muted">Languages:</small>
                  <br />
                  {movie.spoken_languages.map(({ iso_639_1, name }) => (
                    <small className="text-muted me-3" key={iso_639_1}>
                      {name}
                    </small>
                  ))}
                </p>
              </div>
              <div className="col-9">
                <h1 className="card-title">
                  {`${movie.title} (${movie.release_date.substring(0, 4)})`}
                </h1>
                <small className="blockquote">
                  Rating: {movie.vote_average} - {movie.vote_count} votes
                </small>
                <p className="card-text">
                  {movie.genres.map(({ id, name }) => (
                    <small className="text-muted me-3" key={id}>
                      {name}
                    </small>
                  ))}
                </p>
                <p className="card-text lead">
                  {movie.overview.length ? movie.overview : "No description"}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

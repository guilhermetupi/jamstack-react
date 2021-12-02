import { Link } from "react-router-dom";

export default function MovieCard({ movie, onClick }) {
  const { title, poster_path, release_date, id } = movie;

  return (
    <div className="col">
      <div className="card border-light" style={{ width: "18rem" }}>
        <div style={{ height: "25rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className="card-img-top"
            alt="..."
            style={{ height: "25rem", objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small className="text-muted">Release date: {release_date}</small>
          </p>
          <Link to={`/movies/${id}`} className="btn btn-primary">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function MovieCard({ movie, onClick }) {
  const { title, poster_path, release_date, id } = movie;

  return (
    <div className="col">
      <div class="card border-light" style={{ width: "18rem" }}>
        <div style={{ height: "25rem" }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            class="card-img-top"
            alt="..."
            style={{ height: "25rem", objectFit: "cover" }}
          />
        </div>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            <small class="text-muted">Release date: {release_date}</small>
          </p>
          <Link to={`/movies/${id}`} class="btn btn-primary">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie(movie) {
  return (
    <div>
      <img src={movie.mediumCoverImage} alt={movie.title} />
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf([PropTypes.string]).isRequired,
};

export default Movie;

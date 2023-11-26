import React from 'react';

const MovieCard = ({ movie}) => {
  return (
    <div className="movie" key={movie.imdbID}>
      <div>
        <p></p>
      </div>

      <div>
        <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title} ({movie.Year})</h3>
      </div>
    </div>
  );
}

export default MovieCard;
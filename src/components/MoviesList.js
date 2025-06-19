import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (movies === null) return;

  return (
    // <div className="p-2 bg-red-950 bg-gradient-to-b from-black">
      <div >
      <div>
        <h1 className="text-white font-bold m-2 text-3xl">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll">
        <div className="text white flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;

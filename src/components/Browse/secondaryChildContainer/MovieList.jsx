import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies &&
            movies?.map((item) => (
              <MovieCard key={item?.id} posterPath={item?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

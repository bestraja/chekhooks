import React from 'react';
import MovieCard from './MovieCard'; 
import '../layout/MovieList.css'
function MovieList({ movies }) { 
  return (
    <div className='list'>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} /> 
      ))}
    </div>
  );
}

export default MovieList;

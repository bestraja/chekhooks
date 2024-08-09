import React, { useState } from 'react';
import Header from './component/Header';
import MovieList from './component/MovieList';
import Movie from './Movie'; 
import Add from './component/Add';

function App() {
  const [datamovie, setMovie] = useState(Movie); 
  
  function addMovies(movie) {
    setMovie([movie, ...datamovie]);
  }

  function filter(title) {
    setMovie(
      datamovie.filter((el) => el.title.toLowerCase().includes(title.toLowerCase()))
    );
  }
  function filterrating(rate)
  {
    setMovie(datamovie.filter(el=>el.rate>=rate))
  }

  return (
    <div className="App">
      <Header filter={filter} filterrating={filterrating} />
      <Add  add={addMovies}/>
      <MovieList movies={datamovie} /> 
    </div>
  );
}

export default App;

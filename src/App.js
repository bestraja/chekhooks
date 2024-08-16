import React, { useState } from 'react';

import {  Routes, Route , Link } from 'react-router-dom'
import Header from './component/Header';
import MovieList from './component/MovieList';
import Movie from './Movie'; 
import Add from './component/Add';
import Dtails from './component/Dtails';


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
      <nav style={{padding: '30px',backgroundColor:"gray"}} >
      <Link to={'/add'} >  <button style={{color: "red",marginLeft: '650px'}}>Add movie</button></Link>
      <Link to={'/'} >  <button style={{color: "blue"}}>Home</button></Link>
    </nav>
      
      <Routes>
     <Route path='/' element ={<>
      < Header filter={filter} filterrating={filterrating} movies={datamovie} />
      <MovieList movies={datamovie} />
      </>}/>
     <Route path='/add' element ={<Add  add={addMovies}/>}/>
     
     <Route  path='/details/:id' element={<Dtails  data={datamovie} />} />
      </Routes>
    </div>

  );
}

export default App;

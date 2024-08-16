import React from 'react';
import '../layout/MovieCard.css'
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className='cardis'>
      <img src={movie.posterUrl} alt={movie.title} />
      <div className='part2'>
        <h1>{movie.title}</h1>
        <p>{movie.description}
        <Link to={`/details/${movie.id}`} ><button>details</button></Link>
        </p>
        <div>
          <h3>Lien Movie:</h3>
          <p>{movie.lienvideo}</p>
        </div>
        <Rating
          iconsCount={5}
          initialValue={movie.rate}
          readonly={true}
        />
      </div>
    </div>
  );
}

export default MovieCard;

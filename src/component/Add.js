import React from 'react'
import { useState } from 'react';
import '../layout/Add.css'
function Add({add}) 
{
  const [Show,setShow]=useState(false)
  const[movie,setmovie]=useState(
    {
        title:'',
        description:'',
        posterUrl:'',
        rate:''

    })

  return (

    <div>
      <button className='add' onClick={() => setShow(!Show)}>
        
        Add Movie
      </button>
      {Show && (
        <div className='addcart'>
          <div className='addcontaint'>
            <button className='closebutton' onClick={() => setShow(!Show)}>
              X
            </button>
            <div className='inpucart'>
              <input
                type='text'
                placeholder='Enter title'
                value={movie.title}
                onChange={(e) => setmovie({ ...movie, title: e.target.value })}
              />
              <input
                type='text'
                placeholder='Enter description'
                value={movie.description}
                onChange={(e) => setmovie({ ...movie, description: e.target.value })}
              />
              <input
                type='text'
                placeholder='Enter image URL'
                value={movie.posterUrl}
                onChange={(e) => setmovie({ ...movie, posterUrl: e.target.value })}
              />
              <input
                type='number'
                placeholder='Enter rating'
                value={movie.rate}
                onChange={(e) => setmovie({ ...movie, rate: Number(e.target.value) })}
              />
            </div>
            <button
              className='buttonadd'
              onClick={() => {
                add(movie);
                setmovie({ title: '', description: '', posterUrl: '', rate: 0 }); 
                setShow(false); 
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );}

export default Add
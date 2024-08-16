import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Dtails({data}) {

    const { id } = useParams();
    const obj = data.find(movie => movie.id == id); 


    
    

    console.log(data);
  return (
    <div>
        <h1>{obj.title}</h1>
        <iframe src={obj.lienvideo}  
   title="Video"
                width="600" 
                height="400" 
                
                allowFullScreen >  </iframe>
   
   <Link to={'/'} ><button>Return</button></Link>
    </div>
  )
}

export default Dtails
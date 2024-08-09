import { useState } from 'react';
import '../layout/Header.css'
import { Rating } from 'react-simple-star-rating';


function Header({filter,filterrating}) {
  const [rating, setRating] = useState(0)

  
  const handleRating = (rate) => {
    setRating(rate)
    filterrating(rating)}
    
  return (
    <div>
    <div className="header-container">
      <label className="header-label">
        Movie Name: 
        <input 
          name="myInput" 
          placeholder='title'
          className="header-input"
          onChange={(e)=>filter(e.target.value)}

        />
      </label>
      <button className="header-button" type="button">
        Search
      </button>
    </div>
    <div>
      <label >searche by rating</label>
      <Rating iconsCount={5}  onClick={handleRating}/>
    </div>
    </div>

  );
}

export default Header;

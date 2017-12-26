import React from 'react';

let AddMovie = (props) => {
  return (
    <div className="addMovieListItemContainer">
    
        <input 
          className="addMovieInput" 
          type="text" 
          placeholder="Add movie title here"
        ></input>
        
        <input 
          className="addMovieButton" 
          type="submit" 
          onClick={props.handleAddMovieClick}
          value="Add"
        ></input>
        
    </div>
  )
}

export default AddMovie;
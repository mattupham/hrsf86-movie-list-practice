import React from 'react';
import Movie from './Movie.jsx'

let MovieListContainer = (props) => (
  <div className = "movieListItemContainer">
    {props.movieList.map((movie, index) => <Movie 
        key={index} 
        movie={movie}
        handleWatchedButtonClick={props.handleWatchedButtonClick}
      />)
    }
  </div>
)

export default MovieListContainer;
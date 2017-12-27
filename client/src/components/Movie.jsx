import React from 'react';

let Movie = (props) => (
  <div className="movieListItem">
    <div>{props.movie.title}</div>
    <input
      className="watchedButton" 
      type="button"
      value="unwatched"
      onClick={props.handleWatchedButtonClick}
    >
    </input>
  </div>
  
)

export default Movie;
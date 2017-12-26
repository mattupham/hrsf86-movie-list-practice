import React from 'react';

let Search = (props) => {
  return (
    <div className="searchListItemContainer">
        <input className="searchMovieInput" placeholder="Search..."></input>
        <button className="searchButton" type="button">Go!</button>
    </div>
  )
}

export default Search;
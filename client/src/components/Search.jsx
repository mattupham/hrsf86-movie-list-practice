import React from 'react';

let Search = (props) => {
  return (
    <form 
      className="searchMovieListItemContainer"
      onSubmit={props.handleSearchMovieSubmit}
    >
      <input 
        className="searchMovieInput" 
        placeholder="Search..."
        onChange={props.handleSearchMovieInputChange}
      ></input>
      <input 
        className="searchButton" 
        type="submit"
        value="Go!"
      ></input>
    </form>
  )
}

export default Search;
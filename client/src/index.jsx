import React from 'react';
import ReactDOM  from 'react-dom';
import MovieListContainer from './components/MovieListContainer.jsx'
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx'
import Data from '../../database/index.js'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
    this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.handleSearchMovieInputChange = this.handleSearchMovieInputChange.bind(this);
    this.handleSearchMovieSubmit = this.handleSearchMovieSubmit.bind(this);
    this.handleWatchedButtonClick = this.handleWatchedButtonClick.bind(this);
    this.state = {
      movieList: Data.movieList,
      unwatchedMovieList: Data.movieList,
      watchedMovieList: [],
      addMovieValue: '',
      searchMovieValue: ''
    }
  }
  
  handleWatchedButtonClick(event){
    //toggle unwatched to watch, vice verse
    //if item isn't in watched movie list, add it
    //if item is in watched movie list, remove it
  }
  
  handleSearchMovieInputChange(event){
    this.setState({searchMovieValue: event.target.value});
    //console.log(event.target.value);
  }
  
  handleSearchMovieSubmit(event){
    event.preventDefault();
    //if value isn't empty, adds a movie to the list
    if (this.state.searchMovieValue !== '') {
      //filter movies array by search value, if movie found update movie list
      let filteredMovies = this.state.movieList.filter((movie) => movie['title'].toLowerCase() === this.state.searchMovieValue.toLowerCase());
      filteredMovies.length !== 0 ? this.setState({movieList: filteredMovies}) : alert('Movie Not Found');  
    } else {
      alert('Please enter a movie');
    }
    this.setState({searchMovieValue: ''});
  }
  
  handleAddMovieInputChange(event){
    this.setState({addMovieValue: event.target.value});
  }
  
  handleAddMovieSubmit(event){
    event.preventDefault();
    //if value isn't empty, adds a movie to the list
    if (this.state.addMovieValue !== '') {
      let movies = this.state.movieList.map((movie) => movie.title.toLowerCase());
      //if movies list doesn't include movie, add to list, else alert (case insensitive)
      !movies.includes(this.state.addMovieValue.toLowerCase()) ? this.state.movieList.push({title: this.state.addMovieValue}) : alert('Movie is already in list');
    } else {
      alert('Please add a movie');
    }
    this.setState({addMovieValue: ''});
  }

  render() {
    return (
      <div>
        <AddMovie 
          // handleAddMovieClick={this.handleAddMovieClick}
          handleAddMovieInputChange={this.handleAddMovieInputChange}
          handleAddMovieSubmit={this.handleAddMovieSubmit}
        />
        <Search
          handleSearchMovieSubmit={this.handleSearchMovieSubmit}
          handleSearchMovieInputChange={this.handleSearchMovieInputChange}
        />
        <MovieListContainer 
          movieList={this.state.movieList}
          handleWatchedButtonClick={this.handleWatchedButtonClick}
        />
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));

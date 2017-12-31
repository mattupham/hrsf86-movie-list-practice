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
      movieListView: Data.movieList,
      addMovieValue: '',
      searchMovieValue: ''
    }
  }

  handleWatchedButtonClick(event){
  }
  
  handleSearchMovieInputChange(event){
    this.setState({searchMovieValue: event.target.value});
  }
  
  handleSearchMovieSubmit(event){
    event.preventDefault();
    if (this.state.searchMovieValue !== '') {
      //filters the movies if search isn't empty
      let filteredMovieListView = this.filterMovieListViewBySearch(this.state.searchMovieValue);
      //if movie is not found, alert to user, else update the state
      filteredMovieListView.length === 0 ? alert('movie not found') : this.setState({movieListView: filteredMovieListView});
    } else {
      alert('Please add a movie');
    }
    //reset state
    this.setState({searchMovieValue: ''});
  }
  
  handleAddMovieInputChange(event){
    this.setState({addMovieValue: event.target.value});
  }

  filterMovieListViewBySearch(searchQuery){
    //filters view by title if search query is included in title (case insensitive)
    return this.state.movieListView.filter(function(movie){
      return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
  }

  filterMovieListViewByAdd(searchQuery){
    //filters view by title if search query is exactly equal to title (case insensitive)
    return this.state.movieListView.filter(function(movie){
      return movie.title.toLowerCase() === searchQuery.toLowerCase();
    })
  }

  createMovieObject(movieTitleString){
    let movieObject = {};
    movieObject.title = movieTitleString;
    movieObject.status = 'unwatched';
    return movieObject;
  }

  handleAddMovieSubmit(event){
    event.preventDefault();
    if (this.state.addMovieValue !== '') {
      let filteredMovieListView = this.filterMovieListViewByAdd(this.state.addMovieValue);
      //check to see if value already exists
      if (filteredMovieListView.length === 0){
        //add movie to database (TO DO)
        //add to movie list view
        let currentMovieList = this.state.movieList;
        currentMovieList.push(this.createMovieObject(this.state.addMovieValue));
        this.setState({movieList: currentMovieList});
        this.setState({movieListView: currentMovieList});
      } else {
        alert('movie already in list');
      }
    } else {
      alert('please enter a movie');
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
          movieList={this.state.movieListView}
          handleWatchedButtonClick={this.handleWatchedButtonClick}
        />
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));

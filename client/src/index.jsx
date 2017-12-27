import React from 'react';
import ReactDOM  from 'react-dom';
import MovieListContainer from './components/MovieListContainer.jsx'
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    // this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
    this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    this.handleSearchMovieInputChange = this.handleSearchMovieInputChange.bind(this);
    this.handleSearchMovieSubmit = this.handleSearchMovieSubmit.bind(this);
    this.state = {
      movieList: [{title: 'Mean Girls'},{title: 'Hackers'},{title: 'The Grey'},{title: 'Sunshine'},{title: 'Ex Machina'}],
      addMovieValue: '',
      searchMovieValue: ''
    }
  }
  
  handleSearchMovieInputChange(event){
    this.setState({searchMovieValue: event.target.value});
    console.log(event.target.value);
  }
  
  handleSearchMovieSubmit(event){
    event.preventDefault();
    //if value isn't empty, adds a movie to the list
    if (this.state.searchMovieValue !== '') {
      alert('Movie searched');
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
        />
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));

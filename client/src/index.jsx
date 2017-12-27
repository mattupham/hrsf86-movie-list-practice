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
    this.state = {
      movieList: [{title: 'Mean Girls'},{title: 'Hackers'},{title: 'The Grey'},{title: 'Sunshine'},{title: 'Ex Machina'}],
      addMovieValue: ''
    }
  }
  
  handleAddMovieInputChange(event){
    this.setState({addMovieValue: event.target.value});
  }
  
  handleAddMovieSubmit(event){
    //if value isn't empty, adds a movie to the list
    if (this.state.addMovieValue !== '') {
      this.state.movieList.push({title: this.state.addMovieValue});
    } else {
      alert('Please add a movie');
    }
    event.preventDefault();
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
        <Search />
        <MovieListContainer 
          movieList={this.state.movieList}
        />
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));

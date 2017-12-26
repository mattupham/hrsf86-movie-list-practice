import React from 'react';
import ReactDOM  from 'react-dom';
import MovieListContainer from './components/MovieListContainer.jsx'
import Movie from './components/Movie.jsx'
import Search from './components/Search.jsx'
import AddMovie from './components/AddMovie.jsx'

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
                  {title: 'Mean Girls'},
                  {title: 'Hackers'},
                  {title: 'The Grey'},
                  {title: 'Sunshine'},
                  {title: 'Ex Machina'},
                ]
    }
    this.handleAddMovieClick = this.handleAddMovieClick.bind(this);
  }

  handleAddMovieClick(event){
    alert('clicked');
  }

  render() {
    return (
      <div>
        <AddMovie 
          handleAddMovieClick={this.handleAddMovieClick}
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

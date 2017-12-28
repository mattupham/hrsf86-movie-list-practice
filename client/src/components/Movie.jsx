import React from 'react';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.handleWatchedButtonClick = this.handleWatchedButtonClick.bind(this);
    this.state = {status: 'unwatched'}
  }
  
  handleWatchedButtonClick(event){
    if (this.state.status === 'unwatched') {
      this.setState({status: 'watched'});
    } else {
      this.setState({status: 'unwatched'});
    }
  }
  
  render() {
    return (
      <div className="movieListItem">
        <div>{this.props.movie.title}</div>
        <input
          className="watchedButton"
          type="button"
          value={this.state.status}
          //onClick={props.handleWatchedButtonClick}
          onClick={this.handleWatchedButtonClick}
        >
        </input>
      </div>
      );
  }
}

export default Movie;
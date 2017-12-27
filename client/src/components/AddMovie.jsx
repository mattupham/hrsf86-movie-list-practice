import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <form 
        className="addMovieListItemContainer"
        onSubmit={this.props.handleAddMovieSubmit}
      >
        <input 
          className="addMovieInput" 
          placeholder="Add movie title here"
          type="text" 
          value={this.props.value}
          onChange={this.props.handleAddMovieInputChange}
        >
        </input>
        
        <input 
          className="addMovieButton" 
          type="submit" 
          value="Add"
        >
        </input>
      </form>
    )
  }
}

export default AddMovie;
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    
    this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
    this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    
  }
  
  handleAddMovieInputChange(event){
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  
  handleAddMovieSubmit(event){
    alert(this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form 
        className="addMovieListItemContainer"
        onSubmit={this.handleAddMovieSubmit}
      >
          <input 
            className="addMovieInput" 
            type="text" 
            // placeholder="Add movie title here"
            value={this.state.value}
            onChange={this.handleAddMovieInputChange}
          ></input>
          
          <input 
            className="addMovieButton" 
            type="submit" 
            onClick={this.props.handleAddMovieClick}
            value="Add"
          ></input>
          
      </form>
    )
  }
}

export default AddMovie;
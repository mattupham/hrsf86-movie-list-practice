import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {value: ''}
    
    // this.handleAddMovieInputChange = this.handleAddMovieInputChange.bind(this);
    // this.handleAddMovieSubmit = this.handleAddMovieSubmit.bind(this);
    
  }
  
  // handleAddMovieInputChange(event){
  //   this.setState({value: event.target.value});
  //   console.log(this.state.value);
  // }
  
  // handleAddMovieSubmit(event){
  //   alert(this.state.value);
  //   event.preventDefault();
  // }
  
  render() {
    return (
      <form 
        className="addMovieListItemContainer"
        onSubmit={this.props.handleAddMovieSubmit}
      >
          <input 
            className="addMovieInput" 
            type="text" 
            // placeholder="Add movie title here"
            value={this.props.value}
            onChange={this.props.handleAddMovieInputChange}
          ></input>
          
          <input 
            className="addMovieButton" 
            type="submit" 
            //onClick={this.props.handleAddMovieClick}
            value="Add"
          ></input>
          
      </form>
    )
  }
}

export default AddMovie;
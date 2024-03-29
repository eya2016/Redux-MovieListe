import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMovie }from "./actions/action"

class AddMovie extends Component {

    constructor(props){
        super(props)
        this.state={
            rating:"",
            movieImage:"",
            movieName:"",
            movieType:"",
            movieDuration:""
        }
    }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <div>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Add Movie
              </button>
              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <input type="text" name="rating" value={this.state.rating} onChange={this.handleChange} placeholder="insert rating "/>
                      <input type="text" name="movieImage" value={this.state.movieImage} onChange={this.handleChange} placeholder="insert image"/>
                      <input type="text" name="movieName" value={this.state.movieName} onChange={this.handleChange} placeholder="insert title "/>
                      <input type="text" name="movieDuration" value={this.state.movieDuration} onChange={this.handleChange} placeholder="insert duration"/>
                      <input type="text" name="movieType" value={this.state.movieType} onChange={this.handleChange} placeholder="insert type"/>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>this.props.add(this.state)}>Add Movie</button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    add:(movie)=>dispatch(addMovie(movie))
  }
}

export default connect(null,mapDispatchToProps)(AddMovie)

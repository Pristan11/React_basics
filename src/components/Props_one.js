import React, { Component } from 'react'

  class props_one extends Component {
    render() {
        return (
            <div>
           <h3>{this.props.name}</h3>
           <button onClick={this.props.changename}>click Me</button>
           <p>{this.props.Name_details.name}</p>
            </div>
        )
    }
}

export default props_one

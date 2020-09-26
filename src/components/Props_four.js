import React, { Component } from 'react'

  class Props_four extends Component {
    render() {
        const {id,name,age}=this.props.item;
         return (
            <div>
                
                    <h3>the name is {name}</h3>
                    <button onClick={this.props.changename}>click me im form props of Props_two </button>
              
            </div>
        )
    }
}

export default Props_four

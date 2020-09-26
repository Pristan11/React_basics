import React, { Component } from 'react'

  class Statecheck extends Component {
      state={
          name:"your_name",
          age:"choose_your_age"
      }

      changename=()=>{
          this.setState({
              name:"MY_name"
          })
      }
    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <button onClick={this.changename}>click here to change the name</button>
                
            </div>
        )
    }
}

export default Statecheck

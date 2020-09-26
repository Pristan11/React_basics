import React, { Component } from 'react'
import Props_one from "./Props_one"
  class props_two extends Component {
      state={
          name:"Pristan",
          age:24
      }
      changename=()=>{
          this.setState({
              name:"Tasa"
          })
      }
    render() {
        return (
            <div>
<Props_one name={this.state.name}  changename={this.changename} />
            </div>
        )
    }
}

export default props_two

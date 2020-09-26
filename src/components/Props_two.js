import React, { Component } from 'react'

  class props_two extends Component {
      state={
          name:"Pristan",
          age:24
      }
      chanename=()=>{
          this.setState({
              name:"Tasa"
          })
      }
    render() {
        return (
            <div>
<props_one name={this.state.name}  chanename={this.chanename} />
            </div>
        )
    }
}

export default props_two

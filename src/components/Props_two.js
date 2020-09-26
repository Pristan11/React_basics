import React, { Component } from 'react'
import Props_one from "./Props_one"
  class Props_two extends Component {
      state={
          name:"Pristan",
          age:24,
          Name_details:[
              {
                  id:1,
                  name:"miththilan",
                  age:24
              },
              {
                id:2,
                name:"keerthy",
                age:23 
             }
          ]
      }
      changename=()=>{
          this.setState({
              name:"Tasa"
          })
      }
    render() {
        return (
            <div>
<Props_one name={this.state.name}  changename={this.changename}  Name_details={this.state.Name_details}/>
            </div>
        )
    }
}

export default Props_two

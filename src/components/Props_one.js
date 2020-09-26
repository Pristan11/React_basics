import React, { Component } from 'react'
import Props_four from './Props_four'
//import Props_three from "./components/Props_three"
  class Props_one extends Component {
    render() {
        return (
            <div>
           <h3>{this.props.name}</h3>
           <button onClick={this.props.changename}>click Me</button>
           { this.props.Name_details.map(item=> {
          return <Props_four item={item} key={item.id} />

           }
           ) } 
            </div>
        )
    }
}

export default Props_one

import React, { Component } from 'react'
import Usinghoc from './Createhoc'
  class Mouseclick extends Component {
    render() {
        const {count,increment}=this.props;
         
        return (
            <div>
                <h3>{count}</h3>
                <button onClick={increment}>click me</button>
                
            </div>
        )
    }
}

export default Usinghoc(Mouseclick)

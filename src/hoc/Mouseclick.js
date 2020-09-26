import React, { Component } from 'react'
import Usinghoc from './Createhoc'
  class Mouseclick extends Component {
    render() {
        const {count,increment}=this.props;
        const {id,name,age} = this.props.item;
        return (
            <div>
                <h3>{count}</h3>
                <button onClick={increment}>click me</button>
                <h3>{age}</h3>
            </div>
        )
    }
}

export default Usinghoc(Mouseclick)

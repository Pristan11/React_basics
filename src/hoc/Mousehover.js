import React, { Component } from 'react'
import Usinghoc from './Createhoc'
  class Mousehover extends Component {
    render() {
        const {count,increment}=this.props;
        return (
            <div>
                <h3>{count}</h3>
                 <p onMouseOver={increment}>hover me</p>
            </div>
        )
    }
}

export default Usinghoc(Mousehover)

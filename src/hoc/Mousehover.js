import React, { Component } from 'react'
import Usinghoc from './Createhoc'
  class Mousehover extends Component {
    render() {
        const {count,increment,Names}=this.props;
        return (
            <div>
                <h3>{count}</h3>
                 <p onMouseOver={increment}>hover me</p>
                 {
                    Names.map(item=><h3>{item.name}</h3>)
                 }
            </div>
        )
    }
}

export default Usinghoc(Mousehover)

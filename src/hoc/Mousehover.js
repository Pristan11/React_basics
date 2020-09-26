import React, { Component } from 'react'
import Usinghoc from './Createhoc'
import Mouse from './Mouse';
  class Mousehover extends Component {
    render() {
        const {count,increment,Names}=this.props;
        return (
            <div>
                <h3>{count}</h3>
                 <p onMouseOver={increment}>hover me</p>
                 {
                    Names.map(item=> {
                        return <Mouse item={item} key={item.id} />
                    })
                 }
            </div>
        )
    }
}

export default Usinghoc(Mousehover)

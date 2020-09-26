import React, { Component } from 'react'

  class Mouse extends Component {
    render() {
        const {id,name,age}=this.props.item;
        return (
            <div>
                <h3>{name}</h3>
            </div>
        )
    }
}

export default Mouse

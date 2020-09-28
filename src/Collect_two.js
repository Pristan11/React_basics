import React, { Component } from 'react'

  class Collect_two extends Component {
    render() {
        const {id,headerTitle,title} = this.props.item;
        return (
            <div>
                <h1>{id}</h1>
                <h4>{headerTitle}</h4>
                <h3>{title}</h3>
            </div>
        )
    }
}

export default Collect_two

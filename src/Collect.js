import React, { Component } from 'react'
import {IConsumer} from './Context'
 
export class Collect extends Component {
    render() {
        return (
            <div>
           <IConsumer>
                {value=>{
                   return value.placeInfo.map(item=> <h3>{item.headerTitle}</h3> )
                }}
               
            </IConsumer>
            <h3>is it work</h3>
            </div>
        )
    }
}

export default Collect

import React, { Component } from 'react'
import {IConsumer} from './Context'
import Collect_two from './Collect_two'
 
export class Collect extends Component {
    render() {
        return (
            <div>
           <IConsumer>
                {value=>{
                   return value.placeInfo.map(item=>{
                       return <Collect_two item={item} key={item.id}  />
                   })
                }}
               
            </IConsumer>
            <h3>is it work</h3>
            </div>
        )
    }
}

export default Collect

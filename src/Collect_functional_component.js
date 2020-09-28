import React from 'react'
import {IConsumer } from './Context'
import { placeInfo } from './data'
function Collect_functional_component() {
    return (
        <div>
            <IConsumer>
                {value=>{
                    return value.placeInfo.map(item=><li>{item.description}</li>)
                }}
            </IConsumer>
        </div>
    )
}

export default Collect_functional_component

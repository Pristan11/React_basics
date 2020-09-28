import React from 'react'
import {IConsumer } from './Context'
import { placeInfo } from './data'
import Collect_functional_component_two from './Collect_functional_component_two'
function Collect_functional_component() {
    return (
        <div>
            <IConsumer>
                {value=>{
                    return value.placeInfo.map(item=>{
                    return <Collect_functional_component_two item={item} key={item.id} />})
                }}
            </IConsumer>
        </div>
    )
}

export default Collect_functional_component

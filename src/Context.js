import React, { Component } from 'react'
import {placeInfo,detailInf,detailInfo,Products} from './data'

const mycontext =React.createContext();
  class InfoProvider extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               placeInfo:placeInfo,
               detailInf:detailInf,
               detailInfo:detailInfo,
               Products:Products
          }
      }
      
    render() {
        return (
            <div>
                
                <mycontext.Provider value={{
placeInfo:this.state.placeInfo
                }}>
                    {this.props.children}
                </mycontext.Provider>
            </div>
        )
    }
}
 const IConsumer =mycontext.Consumer;
export  {IConsumer,InfoProvider}

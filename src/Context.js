import React, { Component } from 'react'
import {placeInfo} from './data'

const mycontext =React.createContext();
  class InfoProvider extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               placeInfo:placeInfo
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

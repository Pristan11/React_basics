import React, { Component } from 'react'

const Usinghoc = Taking_original_classes=>{
    class Createhoc extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        increment=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        render() {
            return   <Taking_original_classes count={this.state.count} increment={this.increment} />
        }
    }
    
 return Createhoc



}

export default Usinghoc

import React from 'react'

function Tweet({name,age,clicked}) {
    return (
        <div style={{display:'fles',flexDirection:'row'}}> 
        <div style={{
            width:'300px',
            height:'300px',
            backgroundColor:'lightblue',
            padding:'25px',
            display:'flex',
            flexDirection:'column',
            margin:'30px'
            
        }}>
            
         <h1>{ name}</h1>
         <h3>{ age}</h3>

         <button onClick={clicked}>Select</button>

         </div>
        </div>
    )
}

export default Tweet

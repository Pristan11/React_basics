import React,{useState} from 'react';
import Tweet from './Tweet'

function App() {
  
const [user,setuser]=useState([
  {
    name:"Pristan",
    age:"23"
  },
  {
    name:"Miththilan",
    age:"23"
  },
  {
    name:"Keerthy",
    age:"22"
  },
  {
    name:"Santharaj",
    age:"21"
  }
]);
  
  return (
    <div className="App">


      {
        user.map(item=>{
         return <Tweet name={item.name} age={item.age}   />
        })
      }
    
      
       </div>
  );
}

export default App;
import React from 'react'
import Contact from './Contact'
import Help from './Help'
import Home from './Home'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div>
            <ul style={{backgroundColor:'black',listStyleType:'none',padding:'20px',color:'white',fontSize:'20px',display:'flex',flexDirection:'row'}}>
              <Link to='/'>  <li style={{padding:"20px 40px" ,textDecoration:"none",color:'white'}}>Home</li></Link>
              <Link to='/contact'> <li style={{padding:"20px 40px",textDecoration:"none",color:'white'}}>Contact us</li></Link>
              <Link to='/help'> <li style={{padding:"20px 40px",textDecoration:"none",color:'white'}}>Help</li></Link>
            </ul>
           {/* <Home/>
           <Contact />
           <Help/>  */}
        </div>
    )
}

export default Nav

import React from 'react';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './Contact'
import Help from './Help'
import Home from './Home'


function App() {
  return (
    <Router>
    <div className="App">
   <Nav/>
   <Switch>
   <Route path='/' exact component={Home}/>
   <Route path='/contact' component={Contact}/>
   <Route path='/help' component={Help}/>
   </Switch>
       </div>
       </Router>);
}

export default App;
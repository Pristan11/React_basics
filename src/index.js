import React from 'react';
import ReactDOM from 'react-dom';
 import App from './App';
 import {InfoProvider} from './Context'
  
ReactDOM.render(
<InfoProvider>
 <App />
 </InfoProvider>,
     document.getElementById('root'));
 
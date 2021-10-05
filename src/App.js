import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Account/Home';

import Reg from './Components/Account/Reg';

import Login from './Components/Account/Login'



function App() {
  return (
    <Router>
       <div>
  
<Switch>
<Route path='/' exact component={Home}  />

<Route path='/reg' exact component={Reg}  />

<Route path='/login' exact component={Login}  />




</Switch>


</div>
    </Router>
   
  );
}

export default App;

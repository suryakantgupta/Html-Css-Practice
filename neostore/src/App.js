
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './module/Dashboard';
import User from './module/User';
import RegBody from './components/RegBody';
import MyAccount from './module/MyAccount';
require('dotenv').config()


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from='/' to='/dashboard' />
          <Route path="/dashboard" exact render={()=> <Dashboard />} />
          <Route path="/login" exact render={()=> <User body={'login'}/>} />
          <Route path="/register" exact render={()=> <User body={'register'}/>} />
          <Route path='/myaccount' exact render={()=> <MyAccount />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

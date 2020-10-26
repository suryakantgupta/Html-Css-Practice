import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardPanel from './components/CardPanel';
import LoginPanel from './components/LoginPanel';

import {BrowserRouter as Router , Switch, Route, Redirect}  from 'react-router-dom'
import Dashboard from './components/Dashboard';
import AddFeedback from './components/AddFeedback';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
<Redirect exact from='/' to='/login' />
    <Route path="/login" exact component={Login}/>
    <Route path="/registration" exact component={Registration}/>
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/addfeedback" exact component={AddFeedback} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardPanel from './components/CardPanel';
import LoginPanel from './components/LoginPanel';

import {BrowserRouter as Router , Switch, Route}  from 'react-router-dom'
import Dashboard from './components/Dashboard';
import AddFeedback from './components/AddFeedback';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={LoginPanel}/>
    <Route path="/registration" component={CardPanel}/>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/addfeedback" component={AddFeedback} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;

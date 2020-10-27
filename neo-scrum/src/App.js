import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/redux/store'
import Dashboard from './components/Dashboard';
import AddFeedback from './components/AddFeedback';
import Registration from './components/Registration';
import Login from './components/Login';
import ForgotPass from './components/ForgotPass.js';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from='/' to='/login' />
            <Route path="/login" exact component={Login} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/addfeedback" exact component={AddFeedback} />
            <Route path="/forgotpass" exact component={ForgotPass} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

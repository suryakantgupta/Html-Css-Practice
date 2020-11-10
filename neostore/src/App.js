
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './module/Dashboard';
import User from './module/User';
import MyAccount from './module/MyAccount';
import ProductModule from './module/ProductModule';
import { Provider } from 'react-redux';
import store from './redux/store'
import ProductDetail from './components/molecules/ProductDetail';
import AddAddress from './components/AddAddress';
require('dotenv').config()


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from='/' to='/dashboard' />
          <Provider store={store}>
          <Route path="/dashboard" exact render={()=> <Dashboard />} />
          
          <Route path="/login" exact render={()=> <User body={'login'}/>} />
          <Route path="/register" exact render={()=> <User body={'register'}/>} />
          <Route path='/forgotpass' exact render={()=><User body={'forgot'}/>} />
          <Route path='/recoverpass' exact render={()=><User body={'recover'}/>}/>
          <Route path='/myaccount' exact render={()=> <MyAccount />} />
          <Route path='/commonproducts/:name?/:category?' render={()=> <ProductModule />} />
          <Route path='/productdetail/:id'exact render={()=> <ProductDetail />} />
          <Route path='/addaddress' exact render={()=> <AddAddress />} /> 
          
          </Provider>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

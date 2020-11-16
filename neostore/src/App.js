
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
import ErrorPage from './components/ErrorPage';
import Cart from './module/Cart';
import Addresses from './components/orderatoms/Addresses';
import Checkout from './components/orderatoms/Checkout';
import Authentication from './module/Authentication';
import Header from './components/Header';
import Footer from './components/Footer';
// require('dotenv').config()


function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Redirect exact from='/' to='/dashboard' />
            <Route path="/dashboard" exact render={() => <Dashboard />} />
            <Route path="/login" exact render={() => <User body={'login'} />} />
            <Route path="/register" exact render={() => <User body={'register'} />} />
            <Route path='/forgotpass' exact render={() => <User body={'forgot'} />} />
            <Route path='/recoverpass' exact render={() => <User body={'recover'} />} />
            <Route path='/myaccount/:page' exact render={() => <Authentication
              render={(isLogedin, setisLogedin) => (<MyAccount isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
            />} />
            <Route path='/commonproducts/:name?/:category?' exact render={() => <ProductModule />} />
            {/* <Route path='/commonproducts/:name?/:category?' exact component={ProductModule} /> */}
            <Route path='/productdetail/:id' exact render={() => <ProductDetail />} />
            <Route path='/addaddress' exact render={() => <AddAddress />} />
            <Route path='/maincart' exact render={() => <Authentication
              render={(isLogedin, setisLogedin) => (<Cart isLogedin={isLogedin} setisLogedin={setisLogedin} />)}
            />} />
            <Route path='/order-placed' exact render={() => <Checkout />} />
            <Route render={() => <React.Fragment><Header /><ErrorPage /><Footer /></React.Fragment>} />
          </Switch>

          {/* <Route path='/editaddress/:id?' exact render={()=> <Addresses />} /> */}
          {/* <Route component={ErrorPage} /> */}
        </Provider>

      </div>
    </Router>
  );
}

export default App;

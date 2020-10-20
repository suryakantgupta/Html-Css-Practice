import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import data from './data.json'
import Products from './components/Products';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      products: data.products,
      size: "",
      sort: "",
    }
  }

  render() {
    return (
      < div className="container-fluid" >
        <header className="row">
          <div className='col-md-12'>
            <a href='/'><h1>Shopping Cart</h1></a>
          </div>
        </header>
        <main className="row">
          <div className='col-md-9'>
            <Products products={this.state.products}></Products>
          </div>
          <div className='col-md-3'>
            SideBar
              </div>
        </main>
        <footer className='d-flex justify-content-center'>
          <h3>
            Terms & Condition apply
        </h3>
        </footer>
      </div >
    )
  }
}

export default App;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Dashboard from './module/Dashboard';
import User from './module/User';
import RegBody from './components/RegBody';


function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <User />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Form from './components/Form';
import PureComp from './components/PureComp';
import PArentComp from './components/PArentComp';
import ReduxSagaTest from './components/ReduxSagaTest';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import FacebookTest from './components/FacebookTest';


function App() {
  return (
    <div className="App">
      <FacebookTest />
      {/* <Provider store={store}>
        <ReduxSagaTest />
      </Provider> */}
      {/* <PArentComp /> */}
      {/* <Form /> */}
      {/* <NameList /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <Message></Message> */}
      {/* <Greet  name="surya">
        <p>This is the children prop</p>
      </Greet>
      <Greet  name="sonu"/>
      <Welcome name="surya" />
      <Welcome name="sonu" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;

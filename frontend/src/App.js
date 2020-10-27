import React from 'react';
import './App.css';
import Routes from "./components/Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from "redux"
import { BrowserRouter } from 'react-router-dom';
import rootReducer from "./reducer/rootReducer";
import thunk from "redux-thunk";
import AOS from 'aos';

const STORE = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__
    //     ? window.__REDUX_DEVTOOLS_EXTENSION__()
    //     : f => f
  ));

function App() {

  // Initialize the scroll animation
  AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-out-quart',
    delay: 100,
    startEvent: 'load'
  });

  return (
    <div className="app">
      <Provider store={STORE}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App;

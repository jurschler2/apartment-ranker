import React from 'react';
import './App.css';
import Routes from "./components/Routes";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import rootReducer from "./reducer/rootReducer";
// import thunk from "redux-thunk";

// const STORE = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__
//     && window.__REDUX_DEVTOOLS_EXTENSION__()
//   ));

function App() {

  return (
    <div className="app">
      {/* <Provider store={STORE}> */}
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      {/* </Provider> */}
    </div>
  )
}

export default App;

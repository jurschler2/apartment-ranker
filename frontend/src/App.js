import React from 'react';
import './App.css';
import Routes from "./components/Routes";
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (

  <div className="app">
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  </div>

  )
}

export default App;

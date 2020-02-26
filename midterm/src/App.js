import React,{ useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Service"
import Service from "./components/Service"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home}/>
      <Route path="/About" component={About}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

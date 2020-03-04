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
    <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container">
              <center>
                © 2020 GameUp
              </center>
            </div>
          </div>
        </footer>
    </BrowserRouter>
  );
}

export default App;

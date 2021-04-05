import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import logo from "./images/logo.png";

import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Service from "./components/Service";
import "./css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
      <footer class="page-footer red darken-3">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">GameUp</h5>
              <img src={logo} alt="gameUp" />
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Games</h5>
              <ul>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="http://blog.dota2.com/?l=english!"
                    target="_blank"
                  >
                    Dota 2
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://blog.counter-strike.net/"
                    target="_blank"
                  >
                    CS:GO
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://playoverwatch.com/en-us/"
                    target="_blank"
                  >
                    OVERWATCH
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://www.pubg.com/"
                    target="_blank"
                  >
                    PUBG
                  </a>
                </li>
                <li>
                  <a
                    class="grey-text text-lighten-3"
                    href="https://www.epicgames.com/fortnite/en-US/home"
                    target="_blank"
                  >
                    FORTNITE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            <center>© 2020 GameUp</center>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;

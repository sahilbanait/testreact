import logo from './logo.svg';
import React from "react";
import {Button, List, Navbar, NavbarBrand} from "reactstrap";

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar dark color ="primary">
          <div className="container">
              <NavbarBrand href="/" >Sahil</NavbarBrand>

          </div>

      </Navbar>

    </div>
  );
}

export default App;

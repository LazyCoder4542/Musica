import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


// IMPORTING PAGES
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

import './App.css';
class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <Home />
            } />
            <Route path="*" element={
              <Page404/>
            }/>
          </Routes>
        </div>
      </Router >
    );
  }
}

export default App;

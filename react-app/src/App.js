import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


// IMPORTING PAGES
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Playlist from "./pages/Playlist";
import Collection from "./pages/Collection";

// IMPORTING COMPONENTS
import NavigationBar from "./components/molecules/NavigationBar";
import Header from "./components/molecules/Header";

import './App.css';
class App extends Component {
  state = {}
  render() {
    return (
      <Router>
        <div className="container">
          <NavigationBar />
          <Header />
          <div id="page-wrapper">
            <Routes>
              <Route exact path="/" element={
                <Home />
              } />
              <Route path="/collection" element={
                <Collection />
              }/>
              <Route path="/playlist" element={
                <Playlist />
              }/>
              <Route path="*" element={
                <Page404/>
              }/>
            </Routes>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;

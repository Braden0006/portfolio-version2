import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <div className="app__navbar-homepage">
              <Navbar />
              <Homepage />
            </div>
            <About />
            <Skills />
            <Project />
          </div>
        }
      />
    </Routes>
  );
}

export default App;

import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  // toggles the "open" state to true or false
  const toggleOpen = () => {
    setOpen(!open);
  };

  // When the menu is open, the page cannot be scrolled
  if (open) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <div className="app__navbar-homepage">
              <Navbar toggleOpen={toggleOpen} open={open} />
              <Homepage />
            </div>
            <About />
            <Skills />
            <Project />
          </div>
        }
      />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

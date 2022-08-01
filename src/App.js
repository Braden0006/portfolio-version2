import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import AboutDesktop from "./ResponsiveComponents/AboutDesktop";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import MediaQuery from "react-responsive";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  // toggles the "open" state to true or false
  const toggleOpen = () => {
    setOpen(!open);
  };

  const breakpoint = useMediaQuery("(max-width: 1023px)");

  // When the menu is open, the page cannot be scrolled
  if (open && breakpoint) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav>
                <Navbar toggleOpen={toggleOpen} open={open} />
              </nav>
              <main className="app">
                <Homepage />

                <MediaQuery maxWidth={1023}>
                  <About />
                </MediaQuery>

                <MediaQuery minWidth={1024}>
                  <AboutDesktop />
                </MediaQuery>

                <Skills />

                <Project />
              </main>

              <footer className="app-footer">
                <Footer />
              </footer>
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

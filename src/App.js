import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app__navbar-homepage">
        <Navbar />
        <Homepage />
      </div>
    </div>
  )
}

export default App;

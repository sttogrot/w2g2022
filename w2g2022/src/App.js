import React from "react";
import './App.css';
import './components/css/navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Startseite';
import About from './components/about';
import Help from './components/Help';
import Room from './components/Room';
import Host from "./components/Host";
import Watchparty from "./components/Watchparty";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/index' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Help' element={<Help />} />
        <Route path="/Room" element={<Room/>}/>
        <Route path="/Host" element={<Host/>}/>
        <Route path="/Watchparty" element={<Watchparty/>}/>
      </Routes>
    </Router>
  );
}

export default App;


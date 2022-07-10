
import './App.css';

import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages/Startseite';
import About from './pages/about';
import Help from './pages/Help';
import Room from './pages/Room';

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
      </Routes>
    </Router>
  );
}

export default App;

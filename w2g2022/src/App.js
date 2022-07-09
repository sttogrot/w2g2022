import logo from './logo.svg';
import './App.css';
import './Navbar.css'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/index' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Help' element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
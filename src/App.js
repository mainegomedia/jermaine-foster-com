import './App.css';
import { useState } from 'react';
import SlideRoutes from 'react-slide-routes';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Projects from './Routes/Projects'
import Contact from './Routes/Contact'
import Navbar from './Components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
    <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
     <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <header className="App-header">
          <SlideRoutes animation='rotate' timing='ease-in' transition-duration='500'>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </SlideRoutes>
      </header>
    </div>
    </Router>
  );
}

export default App;

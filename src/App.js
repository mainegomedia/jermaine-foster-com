import './App.css';
import SlideRoutes from 'react-slide-routes';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './Routes/Home'
import Projects from './Routes/Projects'
import Contact from './Routes/Contact'
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
      <header className="App-header">
        {/* <Routes> */}
          <SlideRoutes animation='rotate' timing='ease-in' transition-duration='500'>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/contact" element={<Contact/>} />
          </SlideRoutes>
        {/* </Routes> */}
      </header>
    </div>
    </Router>
  );
}

export default App;


import logo1 from './components/Logo1.webp';
import logo2 from './components/Logo2.jpg';
import logo3 from './components/Logo3.jpg';
//import logo from './logo.svg';
//<Route path="/" element={<Home />} />
//<Route path="/about" element={<Home />} />
//<Route path="/contact" element={<Home />} />
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <NavBar />
          <div className="image-container">
            <img src={logo1} alt="Image 1" className="app-image" /> {/* Segunda imagen */}
            <div className="text-box" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px', boxSizing: 'border-box', top: '700px', left: '1000px' }}>
              Ensamblaje de vehiculos
            </div>
            <img src={logo2} alt="Image 2" className="app-image" /> {/* Tercera imagen */}
            <div className="text-box" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px', boxSizing: 'border-box', top: '2000px', left: '100px' }}>
              Modelos
            </div>
            <img src={logo3} alt="Image 3" className="app-image" /> {/* Tercera imagen */}
            <div className="text-box" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px', boxSizing: 'border-box', top: '2800px', left: '1000px' }}>
              Planta de manufactura
            </div>
            
          </div>
          
          <BottomBar />
        </div>

      </Router>
      
      

    </div>
  );
}

export default App;

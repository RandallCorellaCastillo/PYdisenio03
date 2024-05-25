import logo1 from './images/Logo1.webp';
import logo2 from './images/Logo2.jpg';
import logo3 from './images/Logo3.jpg';
import NavBar from './NavBar';
import BottomBar from './BottomBar';
import './Home.css';

import React from 'react';

let infoImg1 = { backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px', boxSizing: 'border-box', top: '700px', left: '1150px' };
let infoImg2 = { backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px', boxSizing: 'border-box', top: '2000px', left: '100px' };
let infoImg3 = { backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '20px', boxSizing: 'border-box', top: '2800px', left: '1150px' };


const Home = () => {
  return (
    <div className>
          <NavBar />
          <div className="image-container">
            <img src={logo1} alt="Image 1" className="app-image" /> {/* Segunda imagen */}
            <img src={logo2} alt="Image 2" className="app-image" /> {/* Tercera imagen */}
            <img src={logo3} alt="Image 3" className="app-image" /> {/* Tercera imagen */}
            <div className="text-box" style={infoImg1}>Ensamblaje de vehiculos</div>
            <div className="text-box" style={infoImg2}>Modelos</div>
            <div className="text-box" style={infoImg3}>Planta de manufactura</div>
          </div>
          <BottomBar />
    </div>
  );
};

export default Home;
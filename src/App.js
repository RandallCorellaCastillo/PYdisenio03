//Importacion de imagemes.
//
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/Home';
import User from './components/Usuario';
import Registro from './components/Registro';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/"     element={<Navigate to="/home" />} />
          <Route path="/User" element={<User />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

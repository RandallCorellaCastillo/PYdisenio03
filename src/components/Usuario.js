import React from 'react';
import { Link } from 'react-router-dom';
import './Usuario.css';
import NavBar from './NavBar';
import BottomBar from './BottomBar';

const Usuario = () => {
  return (
    <div>
      <NavBar />
      <div className='tituloIniciarSesion'>
        Iniciar sesion
      </div>
      <div className='Registrate'>
        <Link to="/registro">
          ¿Esta es tu primera vez? Registrate
        </Link>
      </div>

      <div className='emailLabel'>
        Email
      </div>
      <div className='input-container'>
        <input type="text" className='input' placeholder="Email"/>
      </div>

      <div className='emailLabel'>
        Contraseña
      </div>
      <div className='input-container'>
        <input type="text" className='input' placeholder="Contraseña"/>
      </div>

      <div className='olvidasteContraseña'>
        <Link to="/Home">
          ¿Has olvidado tu contraseña?
        </Link>
      </div>

      <div className='button-container'>
        <button className='button_iniciar_sesion'>Iniciar sesión</button>
      </div>
      
      <BottomBar />
    </div>
  );
};

export default Usuario;
import React from 'react';
import { Link } from 'react-router-dom';
import './Registro.css';
import NavBar from './NavBar';
import BottomBar from './BottomBar';

const Registro = () => {
    return (
      <div>
        <NavBar />
        <div className='tituloRegistrarse'>
          Registrarse
        </div>

        <div className='input-container'>
          <input type="text" className='input' placeholder="Nombre"/>
        </div>
  
        <div className='input-container'>
          <input type="text" className='input' placeholder="Apellido"/>
        </div>

        <div className='input-container'>
          <input type="text" className='input' placeholder="Email"/>
        </div>

        <div className='input-container'>
          <input type="text" className='input' placeholder="Telefono"/>
        </div>

        <div className='input-container'>
          <input type="text" className='input' placeholder="Contraseña"/>
        </div>

        <div className='input-container'>
          <input type="text" className='input' placeholder="Confirmar contraseña"/>
        </div>
  
        <div className='button-container'>
          <button className='button_registro'>Iniciar sesión</button>
        </div>
        <div className='iniciarSesion'>
          <Link to="/User">
            ¿Ya eres miembro? Inicia tu sesión
          </Link>
        </div>
        
        <BottomBar />
      </div>
    );
  };
  
  export default Registro;
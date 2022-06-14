import React from "react";
import '../css/testimonio.css';

function Testimnio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../img/testimonio-${props.imagen}.jpg`)}
      alt='A momentary lapse of reason' />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
        <p className='clasificacion-testimonio'>{props.album} {props.puntuacion}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
        
    </div>
  );

}

export default Testimnio;
import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

export function Testimonio() {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require('../imagenes/testimonio-emma.png')}
                alt='Foto de Emma' />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
                <p classname='cargo-testimonio'>Ingeniera de Software en Spotify</p>
                <p classname='texto-testimonio'>"It's scary to change careers. 
                I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. 
                Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>
            </div>
        </div>


    );
}


export default Testimonio;
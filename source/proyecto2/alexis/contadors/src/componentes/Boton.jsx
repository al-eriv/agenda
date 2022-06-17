import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({texto, clickable, manejarClick}) {
    return (
        <button
        className={clickable ? 'boton-clickable' : 'boton-restart'}
        onClick={manejarClick}
        >  
            {texto}
        </button>
    )
}

export default Boton;
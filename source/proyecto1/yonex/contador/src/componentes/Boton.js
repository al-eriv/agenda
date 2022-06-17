import React from 'react';
import '../css/Boton.css';

function Boton({texto, btnClick, manejarClick}){
    return(
      <button className={btnClick? 'btn-click': 'btn-reset'}
      onClick={manejarClick}>
        {texto}
      </button>
    );
}

export default Boton; 
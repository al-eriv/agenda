import React from 'react';
import '../css/tarea.css';
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea({ texto, realizada }){
    return (
      <div className={realizada ? 'tarea_contenedor realizada' : 'tarea_contenedor'}>
        <div className='tarea_texto'>
          {texto}
        </div>
        <div className='tarea_contenedor_icono'>
          <AiOutlineCloseCircle className='tarea_icono' />
        </div>
      </div>
    );
}

export default Tarea;
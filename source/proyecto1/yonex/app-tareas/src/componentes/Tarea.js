import React from 'react';
import '../css/tarea.css';
import {AiOutlineCloseCircle} from "react-icons/ai";

function Tarea({id, texto, realizada, finalizarTarea, eliminarTarea }){
    return (
      <div className={realizada ? 'tarea_contenedor realizada' : 'tarea_contenedor'}>
        <div 
          className='tarea_texto'
          onClick={()=> finalizarTarea(id)}>
          {texto}
        </div>
        <div className='tarea_contenedor_icono'
         onClick={()=> eliminarTarea(id)}>
          <AiOutlineCloseCircle className='tarea_icono' />
        </div>
      </div>
    );
}

export default Tarea;
import React from "react";
import '../css/TareaForm.css';

function TareaForm(props){
    return (
        <form className='tarea_form'>
            <input 
              className='tarea_input'
              type='text'
              placeholder='Escribe una tarea'
              name='texto'
             />
             <button className='tarea_boton'>Agregar tarea</button>
        </form>
    );
}

export default TareaForm;
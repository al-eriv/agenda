import { e } from 'mathjs';
import React, {useState} from "react";
import '../css/tareaForm.css';
import { v4 as uuidv4} from 'uuid';

function TareaForm(props){

    const [input, setInput] = useState('');
    

    const manejarCambio = e =>{
      setInput(e.target.value);
        
    }

    const manejarEnvio = e =>{
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            realizada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form 
         className='tarea_form' 
         onSubmit={manejarEnvio}>
            <input 
              className='tarea_input'
              type='text'
              placeholder='Escribe una tarea'
              name='texto'
              onChange={manejarCambio}
             />
             <button className='tarea_boton'>Agregar tarea</button>
        </form>
    );
}

export default TareaForm;
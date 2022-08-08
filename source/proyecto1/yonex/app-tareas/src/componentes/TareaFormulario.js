import { e } from "mathjs";
import React, {useState} from "react";
import '../css/tareaForm.css';

function TareaForm(props){

    const [input, setInput] = useState('');
    

    const manejarCambio = e =>{
      setInput(e.target.value);
      console.log(e.target.value);   
    }

    const manejarEnvio = e =>{
        const tareaNueva = {
            id: '1',
            texto: 'hey'
        }
    }

    return (
        <form className='tarea_form'>
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
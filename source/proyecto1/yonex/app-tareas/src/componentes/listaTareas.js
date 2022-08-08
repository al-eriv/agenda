import React, { useState} from "react";
import TareaForm from "./TareaFormulario";
import Tarea from "./Tarea";
import '../css/listaTarea.css';

function listaTarea(){

    const [tareas, setTareas] = useState([]);
    const agregarTarea = tarea =>{
        console.log("tarea agregada");
        console.log(tarea);
    } 

    return(
        <>
          <TareaForm

           />
           <div className='tarea_lista_contendor'>
                {
                  tareas.map((tarea) =>
                  <Tarea
                    texto ={tarea.texto}
                    realizada={tarea.realizada} 
                   />)
                }

           </div>
        </>
    );
}

export default listaTarea;
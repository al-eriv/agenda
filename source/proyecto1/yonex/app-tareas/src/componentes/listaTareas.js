import React, {useState} from "react";
import TareaForm from "./TareaFormulario";
import Tarea from "./Tarea";
import '../css/listaTarea.css';

function listaTarea(){ 

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
         if(tarea.texto.trim()){
          tarea.texto = tarea.texto.trim();
          const tareaActualizadas = [tarea, ...tareas];
          setTareas(tareaActualizadas);
         }
    } 

    const eliminarTarea = id =>{
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }
    /* comentario xd */

    const finalizarTarea = id =>{
      const  tareasActualizadas = tareas.map(tarea=>{
        if (tarea.id === id){
          tarea.realizada = !tarea.realizada;
        }
        return tarea;
      });
      setTareas(tareasActualizadas);
    }

    return(
        <>
          <TareaForm onSubmit={agregarTarea}

           />
           <div className='tarea_lista_contendor'>
                {
                  tareas.map((tarea) =>
                  <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    texto ={tarea.texto}
                    realizada={tarea.realizada}
                    finalizarTarea={finalizarTarea}
                    eliminarTarea={eliminarTarea} 
                   />)
                }

           </div>
        </>
    );
}

export default listaTarea; 
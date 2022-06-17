import React from "react";
import '../hojas-de-estilo/Contador.css'

function Contador({numeroClicks, tipoContador}) {
    return(
        <div className={tipoContador} >
            {numeroClicks}
        </div>
    )
}

export default Contador;
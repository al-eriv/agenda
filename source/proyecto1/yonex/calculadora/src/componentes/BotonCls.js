import React from "react";
import '../css/BotonCls.css';


const BotonCls = (props)=>(
    <div className='boton-cls' onClick={props.manejarCls} >
        {props.children}
    </div>
);

export default BotonCls;
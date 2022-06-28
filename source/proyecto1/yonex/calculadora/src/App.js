import './App.css';
import theEndlessRiverLogo from './img/theEndlessRiver.jpg';
import yonexlogo from './img/Horinzontal-yonex.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import './componentes/BotonCls';
import BotonCls from './componentes/BotonCls';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calcularResultado = () =>{
    if (input) {
    setInput(evaluate(input))
    }else{
      alert("Agregue valores para realizar la operacion");
    }

  };


  return (
    <div className='App'> 
      <div className='theEndlessRiver-logo-contenedor' >
        <img
        src={theEndlessRiverLogo}
        className='theEndlessRiver-logo'
        alt='theEndlessRiver'
         />
        <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonCls manejarCls={() => setInput('')}>
              Limpiar
            </BotonCls>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

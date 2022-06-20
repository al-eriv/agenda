
import './App.css';

import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
  
import PulseLogo from './img/Pulse.jpg';
import {useState} from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = ()=>{
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = ()=> {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='Pulse-contenedor-logo'>
        <img
        className='Pulse-logo'
        src={PulseLogo}
        alt='logo Pulse'
         />

      </div>
      
      <div className='contenedor-contador'>
        <Contador
          numClicks={numClicks}
          />

        <Boton 
         texto='Click' 
         btnClick={true}
         manejarClick={manejarClick} />

        <Boton 
         texto='reiniciar'
         btnClick={false}
         manejarClick={reiniciarContador}
          />
      </div>

    </div>
  );
}

export default App;


import './App.css';

import Boton from './componentes/Boton';
import contador from './componentes/Contador';

import PulseLogo from './img/Pulse.jpg';


function App() {

  const manejarClick = ()=>{
    console.log('click');
  }

  const reiniciarContador = ()=> {
    console.log('reset');
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
        <contador
          numClicks='5'
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

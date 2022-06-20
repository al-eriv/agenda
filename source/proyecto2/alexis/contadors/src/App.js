import './App.css';
import logoAscension from './imagenes/logo-ascension.png';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import { useState } from 'react';

function App() {

  const [numeroClicks, setNumClicks] = useState(60);
  const [numeroClicksj1, setNumClicksj1] = useState(0);
  const [numeroClicksj2, setNumClicksj2] = useState(0);

  const sumarUnoj1 = (metodo, conteo) => {
    setNumClicksj1(numeroClicksj1 + 1);
    setNumClicks(numeroClicks - 1);
  }

  const restarUnoj1 = () => {
    setNumClicksj1(numeroClicksj1 - 1);
    setNumClicks(numeroClicks + 1);
  }

  const sumarUnoj2 = () => {
    setNumClicksj2(numeroClicksj2 + 1);
    setNumClicks(numeroClicks - 1);
  }

  const restarUnoj2 = () => {
    setNumClicksj2(numeroClicksj2 - 1);
    setNumClicks(numeroClicks + 1);
  }



  const restart = () => {
    setNumClicks(60);
    setNumClicksj1(0);
    setNumClicksj2(0);
  }


  return (
    <div className='App'>
      <div className='ascension-logo-contenedor'>
        <img className='ascension-logo'
          src={logoAscension}
          alt='Logo Ascension' />
      </div>

      <div className='contenedor-principal'>
        <div className='contenedor-j1'>

          <Contador numeroClicks={numeroClicksj1}
            tipoContador="contador j1" />

          <Boton
            texto='+ 1'
            clickable={true}
            manejarClick={sumarUnoj1}
            />
          <Boton
            texto='- 1'
            clickable={true}
            manejarClick={restarUnoj1} />
        </div>

        <div className='contenedor-honor'>
          <Contador numeroClicks={numeroClicks}
            tipoContador="contador" />

          <Boton
            texto='Reset'
            clickable={false}
            manejarClick={restart} />

        </div>

        <div className='contenedor-j2'>
          <Contador numeroClicks={numeroClicksj2}
            tipoContador="contador j2" />

          <Boton
            texto='+ 1'
            clickable={true}
            manejarClick={sumarUnoj2} />

          <Boton
            texto='- 1'
            clickable={true}
            manejarClick={restarUnoj2} />
        </div>





      </div>


    </div>
  );
}

export default App;

import './App.css';
import  Testimonio from './componentes/testimonio.js';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Los top 3 albumes del año 2022 de Pink Floyd</h1>
        <Testimonio 
        nombre='A Momentary Lapse of Reason'
        album='el mismo de arriba'
        imagen='AMomentaryLapseOfReason'
        puntuacion='10/10'
        testimonio='nice esta repotente canciones destacadas segun mi opinion de Deidad primigenia: Sorrow , Yet Another Movie y Terminal Frost'/>

        <Testimonio
        nombre='Pulse'
        album='el de arriba pibe'
        imagen='Pulse'
        puntuacion='9/10'
        testimonio='la cacion Time de este album man fua repotente pega en todo el carnet y en la vida misma de quien la escucha y la entiende por supuesto'
        />

        <Testimonio
        nombre='The EndlessRiver'
        album='no jodamos man'
        imagen='theEndlessRiver'
        puntuacion='10/10'
        testimonio='Es literal The VIAJE es EL JOURNEY este album vuela y tu con él altamente recomendado'
        />

      </div>
    </div>
  );
}

export default App;

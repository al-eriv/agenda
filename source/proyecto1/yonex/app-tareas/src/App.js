import './App.css';
import YonexLogo from './img/Horizontal-yonex.png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className='App'>
      <div className='contenedor_logo'>
        <img 
          src={YonexLogo}
          className='logo' 
         />
      </div>
      <div className='tareas_lista_principal'>
        <h1>Mis tareas</h1>
          <Tarea texto='tener ojos'
          />
      </div>
    </div>
  );
}

export default App;

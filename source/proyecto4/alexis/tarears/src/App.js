import './App.css';
import tetlogo from './imagenes/tet.png'
import '../src/hojas-de-estilo/tarea.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='logo-contenedor'>
        <img
          src={tetlogo}
          className='logo-tet'
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

    </div>


  );
}

export default App;

import './App.css';
import YonexLogo from './img/Horizontal-yonex.png';
import TareaForm from './componentes/TareaFormulario';
import ListaTareas from './componentes/listaTareas';

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
          <ListaTareas
          />
      </div>
    </div>
  );
}

export default App;

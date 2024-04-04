//5:56
import freeCodeCampLogo from './img/banner 2.jpg'
import './App.css';
import Tarea from './components/Tarea';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor' >
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
        />
      </div>

      <div className='tareas-lista-principal' >
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App;

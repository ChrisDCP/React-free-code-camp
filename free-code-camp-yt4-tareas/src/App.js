//6:40
import freeCodeCampLogo from './img/banner 2.jpg'
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';

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
       <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;

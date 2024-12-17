import './App.css';
import { useState } from 'react';
import freeCodeCampLogo from './img/banner 2.jpg'
import Boton from './components/Button.js';
import Contador from './components/Contador.js';
function App() {

  const [numClics, setNumClics]= useState(0)

  const manejarClic = () => {
    setNumClics(numClics+1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor' >
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de frecodecamp'
        />
      </div>

      <div className='contenedor-principal' >

        <Contador
        numClics={numClics}/>

        <Boton
          texto='Clic'
          esBotonDeclic={true}
          manejarClic={manejarClic} />

        <Boton
          texto='reiniciar'
          esBotonDeclic={false}
          manejarClic={reiniciarContador} />
      </div>

    </div>
  );
}

export default App;

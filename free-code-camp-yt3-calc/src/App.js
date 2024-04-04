///5:26
import './App.css';
import freeCodeCampLogo from './img/freeCodeCampLogo.png'
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';

import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const AgregarInput = val =>{
    setInput(input + val)
  }

  const calcularResultado = ()=>{
    if (input) {
      setInput(evaluate(input))
    }else{
      alert('por favor ingrese valores para realizar los calculos')
    }
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor' >
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='logo de freecodecamp'
        />
      </div>

      <div className='contenedor-calculadora' >

          <Pantalla
            input={input}
          />

        <div className='fila' >
          <Boton manejarClic={AgregarInput} >1</Boton>
          <Boton manejarClic={AgregarInput} >2</Boton>
          <Boton manejarClic={AgregarInput} >3</Boton>
          <Boton manejarClic={AgregarInput} >+</Boton>
        </div>

        <div className='fila' >
          <Boton manejarClic={AgregarInput} >4</Boton>
          <Boton manejarClic={AgregarInput} >5</Boton>
          <Boton manejarClic={AgregarInput} >6</Boton>
          <Boton manejarClic={AgregarInput} >-</Boton>
        </div>

        <div className='fila' >
          <Boton manejarClic={AgregarInput} >7</Boton>
          <Boton manejarClic={AgregarInput} >8</Boton>
          <Boton manejarClic={AgregarInput} >9</Boton>
          <Boton manejarClic={AgregarInput} >*</Boton>
        </div>

        <div className='fila' >
          <Boton manejarClic={calcularResultado} >=</Boton>
          <Boton manejarClic={AgregarInput} >0</Boton>
          <Boton manejarClic={AgregarInput} >.</Boton>
          <Boton manejarClic={AgregarInput} >/</Boton>
        </div>

        <div className='fila' >
          <BotonClear manejarClear={()=> setInput('')} >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

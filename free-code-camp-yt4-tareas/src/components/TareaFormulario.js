import React,{useState} from 'react'
import '../componentStyles/tareaFormulario.css'

function TareaFormulario () {

    const [input, SetInput] = useState('')

    const manejarCambio = e =>{
        SetInput(e.target.value)
    }

    const manejarEnvio= e =>{
        const tareaNueva ={
            id: '34545',
            texto: 'hola'
        }
    }

  return (
    <form className='tarea-formulario' >
        <input
        className='tarea-input'
        type='text'
        placeholder='Tarea'
        name='texto'
        onChange={manejarCambio}
        />
        <button className='tarea-boton' >
            Agregar
        </button>

    </form>
  )
}

export default TareaFormulario
import React,{useState} from 'react'
import {v4 as uuidv4 } from 'uuid'
import '../componentStyles/tareaFormulario.css'

function TareaFormulario (props) {

    const [input, SetInput] = useState('')

    const manejarCambio = e =>{
        SetInput(e.target.value)

    }

    const manejarEnvio= e =>{
        e.preventDefault()

        const tareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)
    }

  return (
    <form 
        className='tarea-formulario'
        onSubmit={manejarEnvio}
    >
        <input
        className='tarea-input'
        type='text'
        placeholder='Tarea'
        name='texto'
        onChange={manejarCambio}
        />
        <button className='tarea-boton' >
            Agregar Tarea
        </button>

    </form>
  )
}

export default TareaFormulario
import React from 'react'
import '../componentStyles/tarea.css'
//import { AiaoutlineCloseCircle } from 'react-icons/ai'


function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {

  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'} >
      <div 
        onClick={()=>completarTarea(id)}
        className='tarea-texto' >
        {texto}
      </div>
      <div 
        onClick={() => eliminarTarea(id)}
        className='tarea-contenedor-iconos' >
        eliminar
      </div>
    </div>
  )
}

export default Tarea
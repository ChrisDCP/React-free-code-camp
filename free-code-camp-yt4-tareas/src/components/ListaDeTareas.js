import React, { useState } from 'react'
import '../componentStyles/listaDeTareas.css'
import TareaFormulario from './TareaFormulario'
import Tarea from './Tarea'

function ListaDeTareas() {

    const [tareas, setTareas] = useState([])

    const agregarTarea = tarea => {

        console.log(tarea)
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim()
            const TareasActualizadas = [tarea, ...tareas]

            setTareas(TareasActualizadas)
          
        }
        
    }
    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor' >
                {
                    tareas.map((tarea) => 
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                        />
                    )
                }
            </div>
        </>
    )
}

export default ListaDeTareas

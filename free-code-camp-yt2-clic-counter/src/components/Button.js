 import React from 'react';
 import '../componentStyles/button.css'

 function Boton({texto, esBotonDeclic, manejarClic}){
    return(
        <button
          className={esBotonDeclic ? 'boton-clic' : 'boton-reiniciar'}
          onClick={manejarClic}>
            {texto}
        </button>
    )
 }

 export default Boton
import React from "react";
import '../componentStyles/contador.css'

function Contador({numClics}){
    return(
        <div className='contador'>
            {numClics}
        </div>
    )
}

export default Contador
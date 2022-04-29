import React from "react";
import '../css/boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }){
    return (
      <button className={esBotonDeClic ? 'btn-clic' : 'btn-reiniciar'} onClick={manejarClic}>
        {texto}
      </button>
    );
}

export default Boton;
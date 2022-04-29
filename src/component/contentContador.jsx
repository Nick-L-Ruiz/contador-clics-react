import React from "react";
import {useState} from 'react';
import Contador from './contador';
import Boton from './boton.jsx';

function ContentContador(){
    const[numClics,setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  };

  const reiniciarContador = ()=>{
    setNumClics(0);
  };
    return(
        <div className='contenedor-principal'>
          <Contador numClics={numClics}/>
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}/>
          <Boton
            texto='Reiniciar'
            esBotonDeClic ={false}
            manejarClic={reiniciarContador}/>
      </div>
    );
}
export default ContentContador;
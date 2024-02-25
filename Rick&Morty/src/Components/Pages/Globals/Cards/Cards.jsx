import React, { useState } from "react";
import "./Cards.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Descripcion from "../Descripcion/Descripcion";

function Card ({personajeIndividual}){

  const [hide,setHide]= useState(true)
  
  const mostrar =()=>{
    setHide(false)
  }




    return(
      <div className="d-flex flex-row">
          <div className="justify-content-between cartas  p-2 d-flex flex-column align-items-center gap-3">
          
              <img src={personajeIndividual.image}/>
              <h3>{personajeIndividual.name}</h3>
              <button className=" botonCard align-self-end more p-2 m-2" onClick={mostrar}>Know More...</button>
          </div>

          <div className="cartas2">
          {
              hide === false? <Descripcion status={personajeIndividual.status} especie={personajeIndividual.species} genero={personajeIndividual.gender} origen={personajeIndividual.origin.name} setHide={setHide}/>:''
          }
          </div>
     

     </div>
    )
}

export default Card;


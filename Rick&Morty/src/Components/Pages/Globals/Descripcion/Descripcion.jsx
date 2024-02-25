import React from "react";
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Descripcion.css'

function Descripcion({status, especie, genero, origen, setHide}){

return(

    <div className=" d-flex p-5 flex-column  descripcion-container">
        <button className=" d-flex align-self-end m-2 botonX " onClick={()=>setHide(true)}>X</button>
        <ul class="list-group bordeLista">
            <li class="list-group-item p-3 d-flex flex-column "><span className="fw-bold">Character Status {status}</span></li>
            <li class="list-group-item  p-3 d-flex flex-column">Species<span className="fw-bold"></span>{especie}</li>
            <li class="list-group-item  p-3 d-flex flex-column">Origin<span className="fw-bold"></span>{origen}</li>
            <li class="list-group-item p-3 d-flex flex-column">Gender<span className="fw-bold"></span>{genero}</li>
        </ul>
    </div>
)
}

export default Descripcion;


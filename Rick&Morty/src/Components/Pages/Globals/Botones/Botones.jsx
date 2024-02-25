import React from "react";
import './Botones.css';
import { Link } from "react-router-dom";

function Botones({hojas}){
    return(

        <div className="align-items-center mt-3">
           <Link className={hojas === "Characters" ? "boton active" : "boton"} to={"/Characters"}>Characters</Link>
           <Link className={hojas === "Contact" ? "boton active" : "boton"} to={"/Contact"}>Contact</Link>
        </div>
    )}


    export default Botones;
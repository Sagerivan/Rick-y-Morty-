import React from "react";

import './Navbar.css';
import { Link } from "react-router-dom";
import Botones from "../Botones/Botones";

export default function Navbar({hoja}){
const pagina = hoja;

return(
   
    <div className="navBar botonera ">
            
    <Link className="ancla " to={"/"}>Rick & Morty</Link>
    
    <Botones hojas={pagina}/>
    
</div>

    

)}



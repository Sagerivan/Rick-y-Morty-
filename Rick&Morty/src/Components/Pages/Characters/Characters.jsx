import React from "react";
import { useEffect,useState } from "react";
import "./Characters.css";
import Navbar from "../Globals/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../Globals/Cards/Cards";
import Filters from "../Filters/Filters";

const Peticion = ()=>{


let [listaPersonajes,setListaPersonajes]=useState([]);
let [personajesCompleto,setPersonajesCompleto]=useState([])
let [filtrosAplicados,setFiltrosAplicados]=useState([]);


useEffect(()=>{

 fetch("https://rickandmortyapi.com/api/character")
    
    .then(respuesta=>respuesta.json())
    .then((datosRespuesta)=>{
    setListaPersonajes(datosRespuesta.results);
    setPersonajesCompleto(datosRespuesta.results);
    console.log(datosRespuesta)
    })
    .catch(error => {
        console.error('Error:', error);
    })

},[])


   const filterCharacter=(target)=>{
        
        if(target.checked === true){
            
            setFiltrosAplicados([...filtrosAplicados,target.value])
            
        }else{
           
           
            let filtrosNuevos=filtrosAplicados.filter((filtro)=> filtro !== target.value);
            setFiltrosAplicados(filtrosNuevos)
        }
    }

    useEffect(()=>{
        setListaPersonajes(personajesCompleto)
        console.log(filtrosAplicados)
       
        filtrosAplicados.forEach((data)=>   {
            if(data === "Dead" || data ==="Alive"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.status === data); 
                setListaPersonajes(dataFiltrada)
            }else if(data === "Female" || data ==="Male"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.gender === data);
                setListaPersonajes(dataFiltrada)
            }else if(data === "Unknown"){
                let dataFiltrada=listaPersonajes.filter((personaje)=>personaje.origin.name === "unknown");
                setListaPersonajes(dataFiltrada)
            }else{
                setListaPersonajes(personajesCompleto)
            }
        })
        
    },[filtrosAplicados])




return(


<div className="componente">
    
    
    <Navbar hoja="Characters"/>

    <Filters filterCharacter={filterCharacter}/>

      

      

    <div className="characters">
      
      {listaPersonajes.map((personajeIndividual) => (
            <div  key={personajeIndividual.id}>
              
            <Card personajeIndividual={personajeIndividual}/>
            </div>
          ))}
    </div>

</div>
)
}

export default Peticion;


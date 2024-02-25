import React from "react";
import './Home.css';
import Botones from "../Globals/Botones/Botones";

export default function Home(){


    return(

   
      
        
        
            <div className="d-flex justify-content-center align-items-center">
                
                <div className="contenedor">
                    <h1 className="row justify-content-center ">Proyect Rick & Morty</h1>
                    <h2 className="text-center p-3">Welcome to Rick & Morty Proyect!</h2>
                    <p className="text-center p-2">This proyect was made for practising React and to made a functional website</p>
                    <p className="text-center p-">In this website you can know information of the characters of this animated series.</p>
                    <p className="text-center">Also you can filter for diferent types of properties to find the character that you are looking for or send us a massage for any concern o sugestion</p>
                    <h2 className="text-center p-2">Lets go!</h2>
                    <Botones/>
                </div>
            </div>
        
           
    
    
        )};
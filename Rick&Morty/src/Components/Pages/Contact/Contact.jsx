import React from "react";
import './Contact.css';
import Navbar from "../Globals/Navbar/Navbar";



export default function Contact(){

return(
    <div  className="contact ">
       
        
        <Navbar hoja="Contact"/>
        
            
             <main className="recipiente  p-5">
                <h1 className=" tituloContact">Contact</h1>
                    <p className="tituloContact">Leave us your information so we can contact you </p>
                <form className="row   ">
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Name</label>
                        <input type="text" className="form-control  p-2" id="nombre" name="name" required=""/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="correo" className="form-label">Email</label>
                        <input type="email" className="form-control  p-2" id="correo" name="email" required=""/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="mensaje" className="form-label">Messege</label>
                        <textarea id="mensaje" className="form-control p-4" name="messege" required=""></textarea>
                    </div>
                    <div className="col-12">
                    <button type="submit" className="botonSend ">Send</button>
                    </div>
                    
                </form>
                </main>
    </div>
    

)}


import React from "react";

import './Contactanos.css';

//import images
import Ubicacion from "./img/Ubicacion";
import Telefono from "./img/Telefono";
import Instagram from "./img/Instagram";
import Facebook from "./img/Facebook";

function Contactanos (){
  return(
    <div className="blocks-contactanos">
      <div className="black-block">
        <h1 id="Contactanos">Contactanos</h1>
        <div className="datos">
          <div className="contactanos-ubicacion"><Ubicacion id="contactanos-img-ubicacion"/><p id="black-text">Av Libertador</p></div>
          <div className="contactanos-telefono"><Telefono id="contactanos-img-telefono"/><p id="black-text">093396927</p></div>
          <div className="contactanos-instagram"><Instagram id="contactanos-img-instagram"/><p id="black-text">@account</p></div>
          <div className="contactanos-facebook"><Facebook id="contactanos-img-facebook"/><p id="black-text">@account</p></div>
        </div>
      </div>
      <div className="white-block"></div>
    </div>
  );
}

export {Contactanos};
import React, { useState} from "react";
import { db } from "./firebase";

//import css
import './Contactanos.css';

//import images
import Ubicacion from "./img/Ubicacion";
import Telefono from "./img/Telefono";
import Instagram from "./img/Instagram";
import Facebook from "./img/Facebook";

function Contactanos (){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [people, setPeople] = useState("");
    const [date, setDate] = useState("");
  
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("contacts")
        .add({
          name: name,
          phone: phone,
          people: people,
          date: date,
        })
        .then(() => {
          setLoader(false);
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setPhone("");
      setPeople("");
      setDate("");
    };

  return(
    <div className="blocks-contactanos">
      <div className="black-block">
        <h1 id="contactanos-title">Contactanos</h1>
        <div className="datos">
          <div className="contactanos-ubicacion"><Ubicacion id="contactanos-img-ubicacion"/><p id="black-text">Av Libertador</p></div>
          <div className="contactanos-telefono"><Telefono id="contactanos-img-telefono"/><p id="black-text">093396927</p></div>
          <div className="contactanos-instagram"><Instagram id="contactanos-img-instagram"/><p id="black-text">@account</p></div>
          <div className="contactanos-facebook"><Facebook id="contactanos-img-facebook"/><p id="black-text">@account</p></div>
        </div>
      </div>
      <div className="white-block">
      <form className="form" onSubmit={handleSubmit}>
        <div className="formularios">
          <h1 id="contactTitle">Hace tu reserva aqui</h1>

          <div className="seccion1">
          <label>Nombre</label>
            <input
              className="Inputs"
              placeholder="Nombre"
              
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="seccion1">
          <label>Telefono</label>
            <input
              className="Inputs"
              placeholder="Telefono de contacto"
              
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="seccion1">
          <label>Personas</label>
            <input
              type="number"
              className="Inputs"
              placeholder="Numero de personas"
              
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>

          <div className="seccion1">
          <label>Fecha y hora</label>
            <input
              type="datetime-local"
              className="Inputs"
              
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          
          <div className="ButtonDiv">
          <button
            type="submit"
            style={{ background: loader ? "#000" : "#171717" }}
            id="SubmitButton"
          >
          Enviar
          </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export {Contactanos};
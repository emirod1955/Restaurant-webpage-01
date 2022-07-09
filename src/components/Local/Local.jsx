//import react
import React from "react";

//import css
import './Local.css';

//import img
import foto1 from './img/foto1.jpeg';
import foto2 from './img/foto2.jpg';
import foto3 from './img/foto3.jpg';
import foto4 from './img/foto4.jpg';
import foto5 from './img/foto5.jpg';
import foto6 from './img/foto6.jpg';


function Local(){
    return(
        <div className="AllLocal">
            <div className="DivTitulo"><h1 className="LocalTitle">Nuestro restoran</h1></div>            
            <div className="ImageBlockContainer">
                <div className="fila-flex-1">
                    <img src={foto1} alt="" />
                </div>
                <div className="fila-flex-2">
                    <img id="foto2" src={foto2} alt="" />
                    <img id="foto3" src={foto3} alt="" />
                </div>
                <div className="fila-flex-3">
                    <img id="foto4" src={foto4} alt="" />
                    <img id="foto5" src={foto5} alt="" />
                    <img id="foto6" src={foto6} alt="" />
                </div>
            </div>
        </div>
    );
}

export {Local};

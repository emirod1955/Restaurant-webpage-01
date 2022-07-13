//import react
import React from "react";
import { useState } from "react"

//Import router libraly
import { Link, withRouter } from "react-router-dom";

//Import styles
import './NavBar.css';

//import img
import Twitter from './img/Twitter.jsx';
import Facebook from './img/Facebook.jsx';

function NavBar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
      <header className="Navegacion">
        <ul className={isNavExpanded ? "topnav responsive" : "topnav"}>
            <Link to="/" className="active Brand">Name</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/nuestro-local">Nuestro local</Link>
            <Link to="/contactanos" className="nav-menu-item-contactanos">RESERVACION</Link>
          <a href="#!" className="icon" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
            <i className="fa fa-bars"/>
          </a>
        </ul>

          <div className="imgs">  
            <a href="https://www.facebook.com"><Facebook className="facebook" width="30" height="30"/></a>
            <a href="https://twitter.com/home"><Twitter className="twitter" width="30" height="30"/></a>
          </div>
        

      </header>
    );
}

export default withRouter(NavBar);

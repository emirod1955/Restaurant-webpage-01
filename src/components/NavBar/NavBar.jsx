//import react
import React from "react";

//Import router libraly
import { Link, withRouter } from "react-router-dom";

//Import styles
import './NavBar.css';

//import img
import Twitter from './img/Twitter.jsx';
import Facebook from './img/Facebook.jsx';


function NavBar(props){
    return(
        <header className="header">
            <nav className="nav">
                <Link className="nav-link Brand" to="/">Brand</Link>
                <ul className="nav-menu ">
                        <li className={`nav-menu-item  ${props.location.pathname === "/Nosotros" ? "active" : ""}`}>
                            <Link className="nav-link" to="/nosotros">
                                Nosotros
                            </Link>
                        </li>
                        <li className={`nav-menu-item  ${props.location.pathname === "/component2" ? "active" : ""}`}>
                            <Link className="nav-link" to="/el-local">
                                El local
                            </Link>
                        </li>
                        <li className={`nav-menu-item  ${props.location.pathname === "/el-local" ? "active" : ""}`}>
                            <Link className="nav-link" to="/contactanos">
                                Contactanos
                            </Link>
                        </li>
                </ul>
                <div className="flex">
                    <div className="imgs">  
                        <a href="https://www.facebook.com"><Facebook className="facebook" width="30" height="30"/></a>
                        <a href="https://twitter.com/home"><Twitter className="twitter" width="30" height="30"/></a>
                    </div>
                </div>
            </nav>
        </header>  
    );
}

export default withRouter(NavBar);
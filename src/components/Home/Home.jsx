//Import React
import React from "react";

//Import styles
import './Home.css';

function Home(){
    return(
            <div className="Home-content">
                <h1 className="Home-h1">Restaurant Name</h1>
                <h2 className="Home-h2">The best food</h2>
            </div>
    );
}

export {Home};
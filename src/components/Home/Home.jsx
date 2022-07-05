//Import React
import React from "react";

//Import styles
import './Home.css';

function Home(){
    return(
        <div>
            <div className="content-01">
                <h1 id="Home-h1">Restaurant Name</h1>
                {/*<img src="https://i.ibb.co/CHDZM5M/42831e8c430929e1305c7d99ff62d7a5-caldero-de-mar-2-removebg-preview.png" alt="" className="img"/>*/}
                <h2 id="Home-h2">The best food</h2>
            </div>
        </div>
        
    );
}

export {Home};
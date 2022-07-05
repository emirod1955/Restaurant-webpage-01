import React from "react";
import Fade from 'react-reveal/Fade';

import './Nosotros.css';

function Nosotros (){
    return(
        <div>
            <div className="blocks">
            <Fade><div className="block-01">
                        <picture className="img-box">                            
                            <img id="img-component1" src="https://i.ibb.co/t3hczh7/pizza.jpg" alt="food" />
                        </picture>
                        <div className="content-block-01">
                            <div className="parrafo">
                                <h2 id="component1-h2">Subtitle</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum felis ac est posuere viverra. Praesent pretium mattis est, vitae egestas nunc. Donec egestas fermentum dui bibendum mattis. Nunc rhoncus cursus enim sed dignissim. Nullam ac auctor urna. Praesent gravida felis eget quam convallis, eget finibus augue faucibus. Etiam semper eleifend purus, non euismod dolor viverra ac. Nam accumsan elit nec sapien pulvinar, in porttitor ligula condimentum. Ut lacinia, neque sed pretium rutrum, justo enim vestibulum massa, et vestibulum lacus lectus vel est.</p>
                            </div>
                                <input id="HomeButton" type="button" value="More information"></input>                        </div>
                </div></Fade>

                <Fade><div className="block-01">
                        <div className="content-block-02">
                            <div className="parrafo">
                                <h2 id="component1-h2">Subtitle</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent interdum felis ac est posuere viverra. Praesent pretium mattis est, vitae egestas nunc. Donec egestas fermentum dui bibendum mattis. Nunc rhoncus cursus enim sed dignissim. Nullam ac auctor urna. Praesent gravida felis eget quam convallis, eget finibus augue faucibus. Etiam semper eleifend purus, non euismod dolor viverra ac. Nam accumsan elit nec sapien pulvinar, in porttitor ligula condimentum. Ut lacinia, neque sed pretium rutrum, justo enim vestibulum massa, et vestibulum lacus lectus vel est.</p>
                            </div>
                            <input id="HomeButton" type="button" value="More information"></input>
                        </div>
                        <picture className="img-box">                            
                            <img id="img-component1" src="https://i.ibb.co/BNxQBy9/photo-1625813506062-0aeb1d7a094b.jpg" alt="food" />
                        </picture>
                        
                </div></Fade>
            </div>

        </div>
    );
}

export {Nosotros};
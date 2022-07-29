
import {} from "./about.styled.js"
import { Navigate } from "react-router-dom";
import './about.css';
import Nav from "../../components/nav/nav.js";
import Moon from "../../components/images/moon.png";
import Mountains from "../../components/images/mountain.png";
import Ben from "./ben.js";
import Saf from "./saf.js";
import Olly from "./olly.js";
import Waiz from "./waiz.js";
import Liz from "./liz.js";
import Alex from "./alex.js";
import Josh from "./josh.js";
import Eddy from "./eddy.js";
import Keisha from "./key.js";
import { useEffect, useState } from "react";


//{visible && <div id="hide"><img className="joshGalaxy" src={Galaxy} alt="spining galaxy" /></div>}


function About({user, setUser}) {

const [height, setHeight] = useState(0);

    useEffect(()=>{
        setHeight(document.documentElement.scrollHeight)
    })

    return (
    <div>
        {!user && <Navigate to="/" />}
        <div className="sizing">
            <Nav /> 
        </div>

        <div className="page mainBackground">
        <img className="moon" src={Moon} alt="moon" />
        <h2 className="aboutTitle">About Us...</h2>

        <p>We are a small team of insipiring web developers...</p>

        <h3>Take a look at the team!</h3>
        <img className="mountains" src={Mountains} alt="mountains" />
        </div>

        <div>
        <Ben />
        </div>

        <div>
        <Saf />
        </div>

        <div>
        <Olly />
        </div>

        <div>
        <Waiz />
        </div>

        <div>
        <Liz />
        </div>

        <div>
        <Alex />
        </div>

        <div>
        <Josh />
        </div>

        <div>
        <Eddy />
        </div>

        <div>
        <Keisha />
        </div>
    </div>
    );
}

export default About;

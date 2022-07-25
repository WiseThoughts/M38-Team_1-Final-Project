import { useEffect, useState } from "react";
import {TeamPics} from "./about.styled.js"
import './about.css';
import BennyPic from "../../components/images/wisethoughts blue-redpink.png";
import Galaxy from "../../components/images/Galaxy.png";


function Josh() {

    const [visible, setVisible] = useState(true);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
        window.removeEventListener("scroll", listenToScroll); 
    }, [])

    const listenToScroll = () => {
        let showHeight = 1000;
        let hideHeight = 2000;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        if (winScroll <= showHeight) { 
            visible &&        
            setVisible(false);
        } else if (winScroll >= hideHeight) { 
            visible &&        
            setVisible(true);
        } else {
            setVisible(false);
        }  
    };


    return (
    <div>

<div className="pages joshBackground">
        <TeamPics src={BennyPic} alt="Benny profile pic"/>
        <h4>Joshua Foulkes</h4>
        <h5>Back-End</h5>
        {visible && <div id="hide"><img className="joshGalaxy" src={Galaxy} alt="spining galaxy" /></div>}
        </div>
        

    </div>
    );
}

export default Josh;

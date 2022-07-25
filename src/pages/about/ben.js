import { useEffect, useState } from "react";
import {TeamPics} from "./about.styled.js"
import './about.css';
import BennyPic from "../../components/images/wisethoughts blue-redpink.png";
import MoonBottom from "../../components/images/moon-base.png";


function Ben() {

    const [visible, setVisible] = useState(true);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
        window.removeEventListener("scroll", listenToScroll); 
    }, [])

    const listenToScroll = () => {
        let showHeight = 750;
        let hideHeight = 1050;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll < showHeight && winScroll > hideHeight) { 
            visible &&        
            setVisible(false);
        } else {
            setVisible(true);
        }  
    };



    return (
    <div>

        <div className="pages benBackground">
        <TeamPics src={BennyPic} alt="Benny profile pic"/>
        <h4>Benny</h4>
        <h5>UX/Desgin</h5>
        {visible && <div id="hide"><img className="benMoon" src={MoonBottom} alt="moon bottom background" /></div>}
        </div>


    </div>
    );
}

export default Ben;

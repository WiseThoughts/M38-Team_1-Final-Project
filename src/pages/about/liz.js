import { useEffect, useState } from "react";
import {TeamPics} from "./about.styled.js"
import './about.css';
import BenPic from "../../components/images/wisethoughts logo easy change.png";



function Liz() {

    const [visible, setVisible] = useState(true);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
        window.removeEventListener("scroll", listenToScroll); 
    }, [])

    const listenToScroll = () => {
        let showHeight = 800;
        let hideHeight = 1100;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
        if (winScroll < showHeight) { 
            visible &&        
            setVisible(false);
        } else if (winScroll > hideHeight) { 
            visible &&        
            setVisible(true);
        } else {
            setVisible(false);
        }  
    };

    return (
    <div>

<div className="pages lizBackground">
        <TeamPics src={BenPic} alt="Benny profile pic"/>
        <h4>Elizabeth Olugbodi</h4>
        <h5>Front-End</h5>
        </div>


    </div>
    );
}

export default Liz;

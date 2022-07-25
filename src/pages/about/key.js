import { useEffect, useState } from "react";
import {TeamPics} from "./about.styled.js"
import './about.css';
import BJNPic from "../../components/images/wisethoughts purple-yellow.png";

function Keisha() {

    const [visible, setVisible] = useState(true);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
        window.removeEventListener("scroll", listenToScroll); 
    }, [])

    const listenToScroll = () => {
        let showHeight = 8000;
        let hideHeight = 9000;
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

<div className="pages keyBackground">
        <TeamPics src={BJNPic} alt="Benny profile pic"/>
        <h4>Keshia Collins</h4>
        <h5>Back-End</h5>
        </div>


    </div>
    );
}

export default Keisha;

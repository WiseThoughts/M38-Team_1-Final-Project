import { useEffect, useState } from "react";
import {TeamPics} from "./about.styled.js"
import './about.css';
import BennyPic from "../../components/images/wisethoughts blue-redpink.png";



function Waiz() {

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

<div className="pages waizBackground">
        <TeamPics src={BennyPic} alt="Benny profile pic"/>
        <h4>Waiz Arhmed</h4>
        <h5>Front-End</h5>
        </div>


    </div>
    );
}

export default Waiz;

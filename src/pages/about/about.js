
import {TeamPics} from "./about.styled.js"
import './about.css';
import Nav from "../../components/nav/nav.js";
import BennyPic from "../../components/images/wisethoughts blue-redpink.png";
import BenPic from "../../components/images/wisethoughts logo easy change.png";
import BJNPic from "../../components/images/wisethoughts purple-yellow.png";
import Moon from "../../components/images/moon.png";
import Mountains from "../../components/images/mountain.png";
function About() {



    return (
    <div>
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

        <div className="pages benBackground">
        <TeamPics src={BennyPic} alt="Benny profile pic"/>
        <h4>Benny</h4>
        <h5>UX/Desgin</h5>
        </div>

        <div className="pages safBackground">
        <TeamPics src={BenPic} alt="Benny profile pic"/>
        <h4>Safwan Arif</h4>
        <h5>Front-End</h5>
        </div>

        <div className="pages ollyBackground">
        <TeamPics src={BJNPic} alt="Benny profile pic"/>
        <h4>Oliver Thorburn</h4>
        <h5>Front-End</h5>
        </div>

        <div className="pages waizBackground">
        <TeamPics src={BennyPic} alt="Benny profile pic"/>
        <h4>Waiz Arhmed</h4>
        <h5>Front-End</h5>
        </div>

        <div className="pages lizBackground">
        <TeamPics src={BenPic} alt="Benny profile pic"/>
        <h4>Elizabeth Olugbodi</h4>
        <h5>Front-End</h5>
        </div>

        <div className="pages alexBackground">
        <TeamPics src={BJNPic} alt="Benny profile pic"/>
        <h4>Alexander Kamara</h4>
        <h5>Front-End</h5>
        </div>

        <div className="pages joshBackground">
        <TeamPics src={BennyPic} alt="Benny profile pic"/>
        <h4>Joshua Foulkes</h4>
        <h5>Back-End</h5>
        </div>

        <div className="pages eddyBackground">
        <TeamPics src={BenPic} alt="Benny profile pic"/>
        <h4>Edward Valentine</h4>
        <h5>Back-End</h5>
        </div>

        <div className="pages keyBackground">
        <TeamPics src={BJNPic} alt="Benny profile pic"/>
        <h4>Keshia Collins</h4>
        <h5>Back-End</h5>
        </div>
    </div>
    );
}

export default About;

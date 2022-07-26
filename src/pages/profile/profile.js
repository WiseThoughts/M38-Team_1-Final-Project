import { ProfileTitle, ProfilePic, ProfileBacking  } from "./profile.styled";
import Nav from "../../components/nav/nav"
import Footer from "../../components/Footer/footer"
import Tabs from '../../components/userDetails/tabs';
// import StarRating from "../../components/userDetails/starRating";

import "../profile/profile.css"


const Profile = ({profilePic, setter, user}) => {



    return (
    <div>

        <div>
            <Nav />
        </div>

        <div className="backgroundProfile"> 
        <ProfileBacking className="postioning">
        <ProfileTitle>{user}'s Profile</ProfileTitle>

        <div  className="profilePic">
            <ProfilePic src={profilePic} alt="users profile pic" />
        </div>

        <div className="ratingBox">
            <h2>Your seller Rating:</h2>
            <p>⭐⭐⭐⭐⭐</p>
        </div>

        <div>
            <Tabs user={user} setter={setter} />
        </div>

        
        </ProfileBacking>
        </div>

        <div>
        <Footer />
        </div>


        </div>
    );
};

export default Profile;

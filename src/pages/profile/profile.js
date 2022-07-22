import { useState } from "react";
import { updateFetch, deleteFetch } from "../../utils/index";
import { ProfileTitle, ProfilePic, ProfileForm, ProfileUpdateTitle, ProfileBacking, InputProfile, UpdateBtn, DeleteBtn  } from "./profile.styled";
import Nav from "../../components/nav/nav"
import Tabs from '../../components/userDetails/tabs';
// import StarRating from "../../components/userDetails/starRating";

import "../profile/profile.css"


const Profile = ({profilePic, setter, user}) => {

    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [postcode, setPostcode] = useState();



    const submitHandler = async (e) => {
        e.preventDefault();
        const updateObj = { username, name, email, password, street, city, postcode };
        for (const key in updateObj) {
            if (!updateObj[key]) {
                delete updateObj[key];
        }
    }
    await updateFetch({ username: user }, updateObj, setter);
};



return (
<div>
    

    <div>
        <Nav user={user} setter={setter} />
    </div>
    <div className="spacer"/>

{/* I don't know why the backgound pic isn't working if I use the login backgound it works but not if I call it something else */}
    <div className="backgroundProfile"> 
    <ProfileBacking className="postioning">
    <div>
        <ProfileTitle>{user}'s Profile</ProfileTitle>
    </div>

    <div  className="profilePic">
        <ProfilePic src={profilePic} alt="users profile pic" />
        <p>{username}</p>
    </div>

    <div className="ratingBox">
        <h2>Your seller Rating:</h2>
        <p>⭐⭐⭐⭐⭐</p>
    </div>

    <div>
    <ProfileUpdateTitle>Update Profile: </ProfileUpdateTitle>
    <ProfileForm onSubmit={submitHandler}>

        <div className="column">
        <div className="row moveOver">
        <div className="row ">
        <InputProfile cl
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" />

        <InputProfile 
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" />
        </div>
        <div className="spaceBetween" />

        <InputProfile
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />

        <InputProfile
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password" />
        </div>

        <div className="spaceBetween" />
        <div className="row">
        <InputProfile
            onChange={(e) => setStreet(e.target.value)}
            placeholder="First Line of Address" />

        <InputProfile
            onChange={(e) => setCity(e.target.value)}
            placeholder="City" />

        <InputProfile
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Postcode" />
        </div>


        <div className="row moveOver2">
        <UpdateBtn type="submit">Update</UpdateBtn>

        <DeleteBtn onClick={() => deleteFetch(setter)}>Delete Account</DeleteBtn>
        </div>
        </div>

    </ProfileForm>
    </div>



    <div>
        <Tabs />
    </div>

    
    </ProfileBacking>
    </div>

    </div>
);
};

export default Profile;
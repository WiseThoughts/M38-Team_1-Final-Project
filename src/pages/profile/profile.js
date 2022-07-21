import { useState } from "react";
import { updateFetch, deleteFetch } from "../../utils/index";
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

return (<div>
    <div>
        <Nav user={user} setter={setter} />
    </div>
    <div className="spacer"/>
    <div>
        <h1>Your Profile</h1>
    </div>
    <div>
        <img src={profilePic} alt="users profile pic" />
    </div>
    <div>
        <h2>Your Rating</h2>
        {/* <StarRating /> */}
        <p>⭐⭐⭐⭐⭐</p>
        <p>100%</p>
    </div>
    <div>
    <form onSubmit={submitHandler}>
        <h2>Update Profile</h2>
        <input 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" />
        <input 
            onChange={(e) => setName(e.target.value)}
            placeholder="Name" />
        <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />
        <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password" />
        <input
            onChange={(e) => setStreet(e.target.value)}
            placeholder="First Line of Address" />
        <input
            onChange={(e) => setCity(e.target.value)}
            placeholder="City" />
        <input
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Postcode" />
        <button className="nonTabButtons" type="submit">Update</button>
    </form>
    <button className="nonTabButtons" onClick={() => deleteFetch(setter)}>Delete Account</button>
    <div>
        <Tabs />
    </div>
    </div>
    </div>
);
};

export default Profile;

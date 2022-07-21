import { useState } from "react";
import { updateFetch, deleteFetch } from "../../utils/index";
import Nav from "../../components/nav/nav"


const Profile = ({profilePic, setter, user}) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [postcode, setPostcode] = useState();

    const submitHandler = async (e) => {
        e.preventDefault();
        const updateObj = { username, email, password, address, city, postcode };
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
    <form onSubmit={submitHandler}>
        <h2>Update Profile</h2>
        <input 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" />
        <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />
        <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password" />
        <input
            onChange={(e) => setAddress(e.target.value)}
            placeholder="First Line of Address" />
        <input
            onChange={(e) => setCity(e.target.value)}
            placeholder="City" />
        <input
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="Postcode" />
        <button type="submit">Update</button>
    </form>
    <button onClick={() => deleteFetch(setter)}>Delete Account</button>
    </div>
    </div>
);
};

export default Profile;

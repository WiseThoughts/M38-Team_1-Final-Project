import Nav from "../../components/nav/nav"


const Profile = ({profilePic,}) => {


return (<div>

    <div>
        <Nav />
    </div>
    <div className="spacer"/>

    <div>
        <h1>Hello User</h1>
    </div>
    <div>
    <img src={profilePic} alt="users profile pic" />
    </div>


    </div>
);
};

export default Profile;

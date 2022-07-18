import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Nav from "../nav/nav"
import "./login.css"

const Login = ({user}) => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [logBool, setLogBool] = useState(false);



    return (
    <div>
        <div>
            <Nav />
        </div>
        <div className="spacer" />


    <div>
    {user && <Navigate to="/store" />}
        <form>
        <input onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        {!logBool && <input onChange={(e) => setName(e.target.value)} placeholder="Name" />}
        {!logBool && <input id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />}
        <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        {!logBool && <input onChange={(e) => setAddress(e.target.value)} placeholder="Address" />}
        <button type="submit">{logBool ? "Log In" : "Sign Up"}</button>
        </form>
        <div/>
        <button onClick={() => setLogBool(!logBool)}>
        {logBool ? "Don't " : "Already "} have an account?
        </button>

        </div>
    </div>
);
};

export default Login;
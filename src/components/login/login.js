import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Form, InputLogin  } from "./login.styled"
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
    <div>
        <Form>
        <InputLogin onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <div className="formSpaces" />
        {!logBool && <InputLogin onChange={(e) => setName(e.target.value)} placeholder="Name" />}
        <div className="formSpaces" />
        {!logBool && <InputLogin id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />}
        <div className="formSpaces" />
        <InputLogin onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <div className="formSpaces" />
        {!logBool && <InputLogin onChange={(e) => setAddress(e.target.value)} placeholder="Address" />}
        <div className="formSpaces" />
        <button type="submit">{logBool ? "Log In" : "Sign Up"}</button>
        <div className="formSpaces" />
        </Form>
        <div className="btnMid">
        <button onClick={() => setLogBool(!logBool)}>
        {logBool ? "Don't " : "Already "} have an account?
        </button>
        </div>
    </div>
    
    </div>
</div>
);
};

export default Login;
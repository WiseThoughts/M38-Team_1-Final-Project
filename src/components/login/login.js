import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Form, InputLogin, LoginBtn, FormBox, FormTitle, FormOuter } from "./login.styled"
import Nav from "../nav/nav"
import "./login.css"

const Login = ({setter, user}) => {

    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [logBool, setLogBool] = useState(false);

const submitSignUp = async (e) => {
    e.preventDefault();
    await submitSignUp({username, name, email, password}, setter);
}

const submitLogIn = async (e) => {
    e.preventDefault();
    await Login({username, password}, setter);
}


    return (
    <div>


        <div>
            <Nav />  
        </div>
        <div className="spacer" />




    <div>

    {user && <Navigate to="/store" />}
    <div className="backgroundLogin">
        <FormOuter>
        <FormBox>
        <Form onSubmit={logBool ? submitLogIn : submitSignUp}>
        <FormTitle>{!logBool ? "Sign Up" : "Log In"}</FormTitle>
        <InputLogin onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <div className="formSpaces" />
        {!logBool && <InputLogin onChange={(e) => setName(e.target.value)} placeholder="Name" />}
        <div className="formSpaces" />
        {!logBool && <InputLogin id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />}
        <div className="formSpaces" />
        <InputLogin onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>
        <div className="formSpaces" />
        <LoginBtn type="submit">{logBool ? "Log In" : "Sign Up"}</LoginBtn>
        <div className="formSpaces" />
        </Form>
        <div className="btnMid">
        <LoginBtn onClick={() => setLogBool(!logBool)}>
        {logBool ? "Don't " : "Already "} have an account?
        </LoginBtn>
        </div>
        <div className="black" />
        </FormBox>
        </FormOuter>
    </div>
    
    </div>
</div>
);
};

export default Login;
import { Link } from "react-router-dom";
import React from "react";
import { Wrapper, NavbarItems, Logo, } from "./nav.styled";
import "./nav.css";
import logo from "../images/logomockupblank.png";




const Nav = () => {

    const logout =()=>{
        localStorage.removeItem("myToken");
        <Link to="/" />
    }

    return (

    <Wrapper className="sizing">
        <Logo src={logo} />
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/profile"><NavbarItems>Profile</NavbarItems></Link>
        <Link className="navBarLinks" to="/shop"><NavbarItems>Shop</NavbarItems></Link>
        <Link className="navBarLinks" to="/listing"><NavbarItems>Listing</NavbarItems></Link>
        <div>
            <button onClick={logout()}>Log out</button>
        </div>
    </Wrapper>
);
};

export default Nav;


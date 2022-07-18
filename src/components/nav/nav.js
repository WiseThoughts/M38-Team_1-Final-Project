import { Link } from "react-router-dom";
import { Wrapper, NavbarItems,  } from "./nav.styled";
import "./nav.css"


const Nav = () => {


    return (
    <Wrapper>
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/profile"><NavbarItems>Profile</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;
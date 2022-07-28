import { Link } from "react-router-dom";
import { Wrapper, NavbarItems, Logo, } from "./nav.styled";
import "./nav.css";
import logo from "../images/logomockupblank.png";



const Nav = () => {


    return (
    <Wrapper className="sizing">
        <Logo src={logo} />
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/profile"><NavbarItems>Profile</NavbarItems></Link>
        <Link className="navBarLinks" to="/shop"><NavbarItems>Shop</NavbarItems></Link>
        <Link className="navBarLinks" to="/listing"><NavbarItems>Listing</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;

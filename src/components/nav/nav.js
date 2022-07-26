import { Link } from "react-router-dom";
import { Wrapper, NavbarItems, Logo  } from "./nav.styled";
import "./nav.css";
import logo from "../images/logomockupblank.png";
import {BsCart4} from 'react-icons/bs'



const Nav = () => {



    return (
    <Wrapper className="sizing">
        <Logo src={logo} />
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/profile"><NavbarItems>Profile</NavbarItems></Link>
        <Link className="navBarLinks" to="/shopPage"><NavbarItems>Shop</NavbarItems></Link>
        <Link className="navBarLinks" to="/about"><NavbarItems>About</NavbarItems></Link>
        <Link className="navBarLinks" to="/cart"><NavbarItems><BsCart4/></NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;

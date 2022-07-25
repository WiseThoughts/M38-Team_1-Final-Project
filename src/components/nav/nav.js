import { Link } from "react-router-dom";
import { Wrapper, NavbarItems, Logo } from "./nav.styled";
import "./nav.css";
import logo from "../images/logomockupblank.png";

const Nav = () => {
  return (
    <Wrapper className="sizing">
      <Logo src={logo} />
      <Link className="navBarLinks" to="/">
        <NavbarItems>Home</NavbarItems>
      </Link>
      <Link className="navBarLinks" to="/profile">
        <NavbarItems>Profile</NavbarItems>
      </Link>
      <Link className="navBarLinks" to="/shopPage">
        <NavbarItems>Shop</NavbarItems>
      </Link>
      <Link className="navBarLinks" to="/about">
        <NavbarItems>About</NavbarItems>
      </Link>
      <Link className="navBarLinks" to="/listings">
        <NavbarItems>Listings</NavbarItems>
      </Link>
    </Wrapper>
  );
};

export default Nav;

import { Link } from "react-router-dom";
import { Wrapper, NavbarItems,  } from "./nav.styled";
import "./nav.css"


const Nav = () => {

    const list=document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item)=> item.classList.remove('active'));
        this.classList.add('active')
    }
    list.forEach((item)=>item.addEventListener('click',activeLink))


    return (
    <Wrapper>
        <Link className="navBarLinks" to="/"><NavbarItems>Home</NavbarItems></Link>
        <Link className="navBarLinks" to="/profile"><NavbarItems>Profile</NavbarItems></Link>
        <Link className="navBarLinks" to="/shop"><NavbarItems>Shop</NavbarItems></Link>
    </Wrapper>
);
};

export default Nav;
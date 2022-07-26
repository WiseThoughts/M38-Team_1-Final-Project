import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: 96.8%;
    position: relative;
    z-index: 10;
    border-bottom: 10px double white;
    border-top: 10px double white;
    &:hover{

    }
`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 15px;
    color: white;
    padding: 0px 17px;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        padding: 15px;
        border: 2px solid grey;
        transition: 0.3s ease-out;
    }
`;


export const Logo = styled.img`
    display: flex;
    height: 40px;
    border: 2px solid white;
    border-radius: 50%;
`
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: 96.8%;
    position: relative;
    z-index: 0;
    border-bottom: 10px double white;
    border-top: 10px double white;
    &:hover{

    }
`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 15px;
    color: white;
    padding: 15px;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        padding: 13px;
        border: 2px solid grey;
        transtion: 0.5s;
    }
`;


export const Logo = styled.img`
    display: flex;
    height: 40px;
    border: 2px solid white;
    border-radius: 50%;
`


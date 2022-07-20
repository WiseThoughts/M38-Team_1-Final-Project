import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: 100%;
    position: fixed;
    border-bottom: 10px double white;
    border-top: 10px double white;
    &:hover{

    }
`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 25px;
    color: white;
    padding: 22px;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        padding: 20px;
        border: 2px solid grey;
    }
`;

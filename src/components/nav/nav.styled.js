import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: 100%;
    position: fixed;
`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 25px;
    color: white;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        padding: 20px;
        border: 2px solid grey;
    }
`;

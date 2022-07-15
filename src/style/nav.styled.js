import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #82008f;
    padding: 30px;
    width: 100%;
    position: fixed;
`;

export const NavbarItems = styled.a`
    font-size: 25px;
    margin-right: 25px;
    color: white;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

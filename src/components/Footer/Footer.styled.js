import styled from "styled-components";
import {Link} from 'react-router-dom';


export const FooterContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    padding: 30px;
    width: 96.85%;
    position: absolute;
    z-index: 10;
    border-top: 3px solid white;
`;

export const FooterLinksItems = styled.a`
    font-size: 25px;
    margin-right: 15px;
    color: white;
    padding: 0px 17px;
`;

export const FooterLinkTitle = styled.h1`
    font-size: 20px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding-right: 10px; 
    margin-bottom: 0.5rem;
    font-size: 18px;
    &:hover {
        cursor: pointer;
        color: gray;
        transition: 0.3s ease-out;
    }
`


import styled from "styled-components";


export const BigBox = styled.div`
    display: flex;
    background: white;
    width:75%;
    margin-left: 240px;
    border-left: 8px double black;
    border-right: 8px double black;
`

export const BassketButton = styled.button`
    position: fixed;
    top: 15%;
    left: 14.1%;
    width: fit-content;
    height: fit-content;
    border: 10px double black;
    font-size: 25px;
    padding: 5px;
    background: orange;
    &::-webkit-scrollbar {
        top: 0;
        transition: 3s;
    }
`


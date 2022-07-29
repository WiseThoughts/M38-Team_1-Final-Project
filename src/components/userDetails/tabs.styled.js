import styled from "styled-components";


export const ProfileUpdateTitle= styled.h2`
    display: flex;
    justify-content: felx-start;
    margin-left: 30px;
    font-size: 30px;
    text-decoration: underline;
    color: white;
`

export const ProfileForm = styled.form`   
    display: flex;
    justify-content: center;
    align-items: center;
    padding: auto;
    color: white;
`

export const InputProfile = styled.input`
    padding:3px;
    font-size: 25px;
    color: white;
    text-decoration: none;
    background: #37474f;
    border: 2px solid white;
    border-radius: 5px;
    width: 380px;
    &:hover {
        background: white;
        border: 2px solid red;
        color: black;
        ::-webkit-input-placeholder {color: rgba(0,0,0,0.7);} 
        ::-moz-placeholder { color: rgba(0,0,0,0.7);} 
        :-ms-input-placeholder { color: rgba(0,0,0,0.7);} 
        :-moz-placeholder {color: rgba(0,0,0,0.7);} 
    }
`;
export const AddressInputProfile = styled.input`
    padding:3px;
    font-size: 25px;
    color: white;
    text-decoration: none;
    background: #37474f;
    border: 2px solid white;
    border-radius: 5px;
    width: 250px;
    &:hover {
        background: white;
        border: 2px solid red;
        color: black;
        ::-webkit-input-placeholder {color: rgba(0,0,0,0.7);} 
        ::-moz-placeholder { color: rgba(0,0,0,0.7);} 
        :-ms-input-placeholder { color: rgba(0,0,0,0.7);} 
        :-moz-placeholder {color: rgba(0,0,0,0.7);} 
    }
`;

export const DeleteBtn = styled.button`
    background: #37474f;
    color: white;
    font-size: 20px;
    width: 50%;
    height: 40px;
    border: 2px solid white;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        border: 2px solid red;
    }
`

export const UpdateBtn = styled.button`
    background: #37474f;
    color: white;
    font-size: 20px;
    width: 50%;
    height: 40px;
    border: 2px solid white;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        border: 2px solid red;
    }
`

export const TabBtn = styled.button`
    font-weight: 600;
    font-size: 20px;
`
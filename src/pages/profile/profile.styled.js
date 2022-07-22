import styled from "styled-components";

export const ProfileTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 65px;
    text-decoration: double underline;
    color: white;
    padding-top: 50px;
`
export const ProfilePic = styled.img`
    display: flex;
    justify-items: center;
    border: 2px solid white;
    border-radius: 25%;
    background: black;
`

export const ProfileUpdateTitle= styled.h2`
    display: flex;
    justify-content: center;
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

export const ProfileBacking = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: black;
    height: 100%;
    width: 1050px;
    postion: relative;
    left: 400px;
    top: 120px;
    border-left: 8px double white;
    border-right: 8px double white;
`

export const InputProfile = styled.input`
    padding:3px;
    font-size: 25px;
    color: white;
    text-decoration: none;
    background: #37474f;
    border: 2px solid white;
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
    width: 200px;
    height: 40px;
    border: 2px solid white;
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
    width: 200px;
    height: 40px;
    border: 2px solid white;
    &:hover {
        cursor: pointer;
        background: white;
        color: black;
        border: 2px solid red;
    }
`
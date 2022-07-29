import styled from "styled-components";


export const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width:75%;
    margin-left: 240px;
    border-left: 8px double black;
    border-right: 8px double black;
`

export const BassketButton = styled.button`
    width: fit-content;
    height: fit-content;
    border: 10px double white;
    font-size: 25px;
    padding: 5px;
    background: black;
    color: white;
`

export const ListingBox = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 20px 20px 20px;
`

export const ListingContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 4px solid black;
    border-radius: 10px;
    width: 1300px;
    max-height: 400px;
`

export const ListingImg = styled.img`
    border-radius: 10px;
    height: 400px;
    width: 400px;
    background-size: contain;
`

export const ListingTitle = styled.h2`
    colour: black;
    font-size: 25px;
    text-decoration: underline;
`
export const ListingCategory = styled.p`
    colour: black;
    font-size: 15px;
    width: fit-content;
    border-bottom: 1px dotted black;
`

export const ListingDescription = styled.p`
    colour: black;
    font-size: 20px;
    width: 600px;
    height: 150px;
    margin-right: 50px;
`

export const ListingTimer = styled.p`
    font-size: 25px;
    border: 2px dotted red;
    background-color: whitesmoke;
    padding: 5px;
    width: fit-content;
`


export const BuyText = styled.p`
    font-size: 20px;
    font-weight: 600;
`
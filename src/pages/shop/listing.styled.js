import styled from "styled-components";

export const ListingBox = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 200px 20px 0px;
`

export const ListingContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 4px solid black;
    width: 60%;
`

export const ListingImg = styled.img`
    outline: 3px dotted red;
    height: 400px;
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
    width: 400px;
    margin-right: 200px;
`

export const ListingTimer = styled.p`
    font-size: 25px;
    border: 2px dotted black;
    background-color: whitesmoke;
    padding: 5px;
    width: fit-content;
`

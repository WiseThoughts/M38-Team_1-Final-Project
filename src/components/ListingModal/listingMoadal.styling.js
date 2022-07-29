import styled, {css} from "styled-components";

const sharedStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
`;

export const ListingBackground = styled.div`
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
`;

export const ListingWrapper = styled.div`
  background: white;
  width: 75%;
  min-height: 35vw;
  position: absolute;
  border: 0.3rem solid black;
  border-radius: 0.5rem;
  top: 17.5%;
  left: 10%;
`;

export const ListingHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 5rem;
  border-bottom: 1px solid black;
  width: 90%;
  ${sharedStyles}
`
export const ListingBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 10rem;
  border-bottom: 1px solid black;
  width: 90%;
  height: 60%;
  ${sharedStyles}
`;


export const ListingButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`

export const ListingButton = styled.button`
    height: 2rem;
    display: inline-block;
    background: black;
    border: none;
    color: white;
    font-weight: bold;
    width: 10rem;
    gap: 10px;
    &:hover{
      cursor: pointer;
    }
`
export const ListingMapWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

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
  margin-right: 100px;
`

export const ListingTimer = styled.p`
  font-size: 25px;
  border: 2px dotted red;
  background-color: whitesmoke;
  padding: 5px;
  width: fit-content;
`

export const ListingContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 4px solid black;
    border-radius: 10px;
    width: 1300px;
`

export const ListingImg = styled.img`
    height: 300px;
    width: 400px;
    background-size: contain;
    border-radius: 5px;
`

export const ListingBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px 20px 20px;
`

export const ListingTitle = styled.h2`
    colour: black;
    font-size: 25px;
    text-decoration: underline;
`

export const BidButtonBox = styled.div`
    display: flex;
    flex-direction: row;
`

export const BidButtonAlign = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const BidButtons = styled.button`
    width: 60px;
    height: 35px;
    padding: 3px;
    border: 2px solid black;
    border-radius: 7px;
    font-size: 15px;
    &:hover{
      border: 2px solid red
    }
`
export const BidPrice = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`

export const AddToCartBTN = styled.button`
    width: 160px;
    height: 45px;
    padding: 3px;
    border: 2px solid black;
    border-radius: 7px;
    font-size: 25px;
    &:hover{
      border: 2px solid red
    }
`

export const BuyText = styled.p`
    font-size: 20px;
    font-weight: 600;
`
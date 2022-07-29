import styled, {css} from "styled-components";

const sharedStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
`;

export const CartBackground = styled.div`
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
`;

export const CartWrapper = styled.div`
  background: white;
  width: 60vw;
  min-height: 35vw;
  position: absolute;
  border: 0.3rem solid black;
  border-radius: 0.5rem;
  top: 15%;
  left: 20%;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 5rem;
  border-bottom: 1px solid black;
  width: 90%;
  ${sharedStyles}
`

export const CartBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 10rem;
  border-bottom: 1px solid black;
  width: 90%;
  height: 60%;
  ${sharedStyles}
`

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content:center;
  background: whitesmoke;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
export const AddBtn = styled.div`
  width: 25px;
  height: 25px;
  font-size: 20px;
  &:hover{
    cursor: pointer;
  }
`
export const QTY = styled.div`
  width: 25px;
  height: 25px;
  font-size: 20px;
  padding: 0 15px 0 15px;
`
export const MinusBtn = styled.div`
  width: 25px;
  height: 25px;
  font-size: 20px;
  &:hover{
    cursor: pointer;
  }
`

export const CartModalButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const CartModalButton = styled.button`
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
export const CartMapOutline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

`

export const CartMap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  border: 1px solid black;
  width: 225px;
  height: 250px;
`

export const MaodalImage = styled.img`
    width: 50px;
    height: 50px;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
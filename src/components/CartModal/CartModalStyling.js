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
  width: 40vw;
  min-height: 25vw;
  position: absolute;
  border: 0.3rem solid black;
  border-radius: 0.5rem;
  top: 20%;
  left: 30%;
`;

export const CartHeader = styled.div`
  height: 5rem;
  border-bottom: 1px solid black;
  width: 90%;
  ${sharedStyles}
`

export const CartBody = styled.div`
  height: 10rem;
  border-bottom: 1px solid black;
  width: 90%;
  ${sharedStyles}
`;
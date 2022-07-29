import styled from "styled-components";

export const ListingOuter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	height: 55vh;
`;

export const ListingForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	padding: 20px;
`;

export const InputListing = styled.input`
	padding: 3px;
	font-size: 30px;
	color: white;
	text-decoration: none;
	background: #8e8e8e;
	border: 2px solid black;
	border-radius: 10px;
	&:hover {
		background: white;
		border: 2px solid red;
		color: black;
		::-webkit-input-placeholder {
			color: rgba(0, 0, 0, 1);
		}
		::-moz-placeholder {
			color: rgba(0, 0, 0, 1);
		}
		:-ms-input-placeholder {
			color: rgba(0, 0, 0, 1);
		}
		:-moz-placeholder {
			color: rgba(0, 0, 0, 1);
		}
	}
`;

export const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width:65%;
    margin-left: 300px;
    border-left: 8px double black;
    border-right: 8px double black;
`

export const ListingTitle = styled.p`
	display: flex;
	justify-content: center;
	font-size: 50px;
	text-decoration: underline;
`


export const ModalButton = styled.button`
    display: inline-block;
    background: black;
    border: 2px solid black;
    color: white;
    font-weight: 200;
	font-size: 20px;
	padding: 5px;
    width: 150px;
	height: 60px;
    gap: 10px;
    &:hover{
    	cursor: pointer;
		background: white;
		border:2px solid red;
		color: black;
    }
`
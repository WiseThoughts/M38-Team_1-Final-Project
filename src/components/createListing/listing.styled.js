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
			color: rgba(0, 0, 0, 0.7);
		}
		::-moz-placeholder {
			color: rgba(0, 0, 0, 0.7);
		}
		:-ms-input-placeholder {
			color: rgba(0, 0, 0, 0.7);
		}
		:-moz-placeholder {
			color: rgba(0, 0, 0, 0.7);
		}
	}
`;

export const BigBox = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width:75%;
    margin-left: 240px;
    border-left: 8px double black;
    border-right: 8px double black;
`

export const ListingTitle = styled.h3`
	display: flex;
	justify-content: center;
	font-size: 50px;
	text-decoration: underline;
`

export const ProfilePic = styled.img`
    display: flex;
    justify-items: center;
    border: 2px solid white;
    border-radius: 25%;
    background: black;
	width: 150px;
	height: 150px;
`
import styled from "styled-components";

export const ListingOuter = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	height: 90vh;
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


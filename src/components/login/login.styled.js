import styled from "styled-components";

export const FormOuter = styled.div`

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	height: 80vh;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	padding: 20px;
`;

export const InputLogin = styled.input`
	padding: 5px 3px 3px 3px;
	font-size: 30px;
	color: white;
	text-decoration: none;
	background: #8e8e8e;
	border: 3px solid white;
	border-radius: 10px;
	&:hover {
		background: white;
		border: 3px solid red;
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

export const LoginBtn = styled.button`
	background: black;
	color: white;
	font-size: 30px;
	width: 250px;
	height: 40px;
	border: 2px solid white;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
		background: white;
		color: black;
		border: 2px solid red;
	}
`;

export const AccountBtn = styled.button`
	background: black;
	color: white;
	font-size: 20px;
	width: 250px;
	height: 40px;
	border: 2px solid white;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
		background: white;
		color: black;
		border: 2px solid red;
	}
`;

export const FormBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	width: max-content;
	height: max-content;
	background: transparent;
	border: 3px solid white;
	padding-bottom: 20px;
	background-color: black;
`;

export const FormTitle = styled.h3`
	display: flex;
	font-size: 45px;
	background: black;
	padding: 10px;
	border: 2px solid white;
	border-radius: 10px;
	color: white;
`;

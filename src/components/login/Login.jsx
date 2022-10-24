import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";

const Login = ({}) => {
	const navigate = useNavigate();

	const handleButton1 = () => {};

	const handleButton2 = e => {
		e.preventDefault();
		navigate(`/sign`);
	};

	return (
		<>
			<LoginDiv>
				<LogoImg src={logo} />

				<IdPasswordDiv>
					<Input type="text" placeholder="아이디" />
					<Input type="text" placeholder="비밀번호" />
				</IdPasswordDiv>

				<ButtonsDiv>
					<Buttons onClick={handleButton1}>로그인</Buttons>
					<Buttons onClick={handleButton2}>회원가입하기</Buttons>
				</ButtonsDiv>
			</LoginDiv>
		</>
	);
};
export default Login;

const LoginDiv = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;

	position: relative;
	top: -900px;
	right: -1200px;
	width: 500px;
	height: 700px;
`;

const LogoImg = styled.img`
	width: 120px;
	height: 60px;
	margin: 30px 0;
`;

const IdPasswordDiv = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
`;

const Input = styled.input`
	width: 90%;
	height: 50px;
	margin: 20px;
`;

const ButtonsDiv = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Buttons = styled.button`
	width: 70%;
	height: 50px;
	margin: auto;
	background-color: ${props => props.theme.FLUORESCENT};
	font-size: 20px;
	margin-top: 20px;
	margin-bottom: 20px;
`;

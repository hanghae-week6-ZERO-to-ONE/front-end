import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { is_nickname, is_password } from "../../common/logics";
import logo from "../../images/logo.png";
import { __loginDB } from "../../redux/modules/login";

const Login = ({}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [idInput, setIdInput] = useState();
	const [idInputWrong, setIdInputWrong] = useState(false);
	const [pwInput, setPwInput] = useState();
	const [pwInputWrong, setPwInputWrong] = useState(false);

	const login = useSelector(state => state.login.isLogin);

	useEffect(() => {
		if (login) {
			navigate("/");
		}
	}, [login]);

	const handleChange1 = e => {
		e.preventDefault();

		setIdInput(e.target.value);
	};

	const handleChange2 = e => {
		e.preventDefault();
		setPwInput(e.target.value);
	};

	const handleLogin = async e => {
		e.preventDefault();

		if (is_nickname(idInput) && is_password(pwInput)) {
			// { name: "jae12", password: "123asd4@" }

			window.confirm("로그인이 되었습니다!");
			dispatch(__loginDB({ name: idInput, password: pwInput }));
			navigate(`/`);
			// dispatch(__loginDB({ name: "jae12", password: "123asd4@" }));
		} else if (!is_nickname(idInput) && is_password(pwInput)) {
			window.confirm(
				"닉네임이 이상합니다!  1. 2-10자 2. 영문, 숫자를 조합해서 만듬 (한글안됨) 3. 영문만 사용할 수 있음	4. 숫자만 사용해서는 안됨 5. 특수문자 (_-) 이 두가지 사용 가능, 특수문자만 사용하면 안됨"
			);
		} else if (is_nickname(idInput) && !is_password(pwInput)) {
			window.confirm(
				"비번이 이상합니다!  1. 영문, 숫자, 특수문자 !@#$%^&* 적어도 하나씩 포함해야됨 2. 8-20자 3. 특수문자만 사용할 수 없음"
			);
		} else {
			window.confirm(
				"닉네임이 이상합니다!  1. 2-10자 2. 영문, 숫자를 조합해서 만듬 (한글안됨) 3. 영문만 사용할 수 있음	4. 숫자만 사용해서는 안됨 5. 특수문자 (_-) 이 두가지 사용 가능, 특수문자만 사용하면 안됨"
			);
		}
	};

	const handleButton2 = e => {
		e.preventDefault();
		navigate(`/sign`);
	};

	return (
		<>
			<LoginDiv>
				<LogoImg
					src={logo}
					onClick={() => {
						navigate("/");
					}}
				/>

				<IdPasswordDiv>
					<Input type="text" onChange={handleChange1} placeholder="아이디" />
					<Input type="password" onChange={handleChange2} placeholder="비밀번호" />
				</IdPasswordDiv>

				<ButtonsDiv>
					<Buttons onClick={handleLogin}>로그인</Buttons>
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
	&:hover {
		cursor: pointer;
	}
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
	font-size: 16px;
	font-family: Verdana;
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

import React, { useState } from "react";
import styled from "styled-components";
import person from "../../images/sign/person.svg";
import lock from "../../images/sign/lock.svg";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { is_nickname, is_password } from "../../common/logics";
import { useDispatch, useSelector } from "react-redux";
import { __loginDB } from "../../redux/modules/login";

const Sign = ({}) => {
	const login = useSelector(state => state.login.isLogin);

	const navigate = useNavigate();

	const [idInput, setIdInput] = useState();
	const [pwInput1, setPwInput1] = useState();
	const [pwInput2, setPwInput2] = useState();

	const dispatch = useDispatch();

	const handleChange1 = e => {
		e.preventDefault();
		setIdInput(e.target.value);
	};

	const handleChange2 = e => {
		e.preventDefault();
		setPwInput1(e.target.value);
	};

	const handleChange3 = e => {
		e.preventDefault();
		setPwInput2(e.target.value);
	};

	// 회원가입하기
	const handleSign = async e => {
		e.preventDefault();
		// 1. 이메일, 비번 맞나 확인하기
		// 2. axios로 보내기
		//

		if (pwInput1 === pwInput2) {
			if (is_nickname(idInput) && is_password(pwInput1)) {
				// { name: "jae12", password: "123asd4@" }

				await axios.post(`${process.env.REACT_APP_SERVER_URL}/member/signup`, {
					name: idInput,
					password: pwInput1,
				});

				window.confirm("회원가입이 되었습니다!");
				dispatch(__loginDB({ name: idInput, password: pwInput1 }));
				navigate(`/`);
				// dispatch(__loginDB({ name: "jae12", password: "123asd4@" }));
			} else if (!is_nickname(idInput) && is_password(pwInput1)) {
				window.confirm(
					"닉네임이 이상합니다!  1. 2-10자 2. 영문, 숫자를 조합해서 만듬 (한글안됨) 3. 영문만 사용할 수 있음	4. 숫자만 사용해서는 안됨 5. 특수문자 (_-) 이 두가지 사용 가능, 특수문자만 사용하면 안됨"
				);
			} else if (is_nickname(idInput) && !is_password(pwInput1)) {
				window.confirm(
					"비번이 이상합니다!  1. 영문, 숫자, 특수문자 !@#$%^&* 적어도 하나씩 포함해야됨 2. 8-20자 3. 특수문자만 사용할 수 없음"
				);
			} else {
				window.confirm(
					"닉네임이 이상합니다!  1. 2-10자 2. 영문, 숫자를 조합해서 만듬 (한글안됨) 3. 영문만 사용할 수 있음	4. 숫자만 사용해서는 안됨 5. 특수문자 (_-) 이 두가지 사용 가능, 특수문자만 사용하면 안됨"
				);
			}
		} else {
			window.confirm("비밀번호가 서로 다릅니다!");
		}
	};

	const checkOverlap = async e => {
		e.preventDefault();

		// 1. axios로 아이디 보내기

		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/member/check-id`, {
			name: idInput,
		});
		window.confirm(`${response.data.data}`);
	};

	const handleCancel = e => {
		// 1. state값 다 지우기

		e.preventDefault();

		setIdInput("");
		setPwInput1("");
		setPwInput2("");
	};

	if (login) {
		return <Navigate to="/" replace={true} />;
	}

	return (
		<>
			<SignSection>
				<form onSubmit={handleSign}>
					<IdDiv>
						<IdInputDiv>
							<IconImg src={person} />
							<IdInput type="text" onChange={handleChange1} value={idInput} placeholder="아이디" />
						</IdInputDiv>
						<IdButton onClick={checkOverlap}>중복확인</IdButton>
					</IdDiv>

					<PwDiv>
						<IconImg src={lock} />
						<PwInput
							type="password"
							onChange={handleChange2}
							value={pwInput1}
							placeholder="비밀번호"
						/>
					</PwDiv>

					<PwAgainDiv>
						<IconImg src={lock} />
						<PwAgainInput
							type="password"
							onChange={handleChange3}
							value={pwInput2}
							placeholder="비밀번호 재입력"
						/>
					</PwAgainDiv>

					<ButtonsDiv>
						<Button1 onClick={handleCancel}>취소</Button1>
						<Button2>회원가입</Button2>
					</ButtonsDiv>
				</form>
			</SignSection>
		</>
	);
};
export default Sign;

const SignSection = styled.section`
	width: 400px;

	margin: auto;
	margin-top: 200px;
	display: flex;
	flex-direction: column;
`;

// 공용
const Input = styled.input`
	height: 90%;

	border: none;
	margin-left: 2px;
`;

const Button = styled.button`
	background-color: ${props => props.theme.FLUORESCENT};
	height: 100%;
	&:hover {
		cursor: pointer;
	}
`;

const IconImg = styled.img`
	height: 20px;
	margin: 0 6px;
`;

//
const IdDiv = styled.div`
	border: 1px solid black;
	margin: 18px 0;
	height: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const PwDiv = styled.div`
	border: 1px solid black;
	margin: 18px 0;
	height: 40px;
	display: flex;

	align-items: center;
`;

const PwAgainDiv = styled.div`
	border: 1px solid black;
	margin: 18px 0;
	height: 40px;
	display: flex;

	align-items: center;
`;

const ButtonsDiv = styled.div`
	width: 100%;
	display: flex;
	margin: 18px 0;

	height: 40px;
	justify-content: space-between;
`;

const IdButton = styled(Button)`
	border: none;
	width: 110px;
`;

const IdInputDiv = styled.div`
	display: flex;

	align-items: center;
`;
const IdInput = styled(Input)`
	height: 100%;
`;

const PwInput = styled(Input)``;

const PwAgainInput = styled(Input)``;
const Button1 = styled(Button)`
	width: 160px;
`;
const Button2 = styled(Button)`
	width: 160px;
`;

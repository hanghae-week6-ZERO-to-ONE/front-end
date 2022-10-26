import React from "react";
import styled from "styled-components";
import person from "../../images/sign/person.svg";
import lock from "../../images/sign/lock.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sign = ({}) => {
	const navigate = useNavigate();

	// 회원가입하기
	const handleSign = async e => {
		e.preventDefault();
		// 1. 이메일, 비번 맞나 확인하기
		// 2. axios로 보내기
		//

		// const yesJson = JSON.stringify({ name: "jae123", password: "123asd" });
		const yes = { name: "jae12", password: "123asd4@" };
		// Fetch 사용
		// const response = await fetch(`http://3.38.153.4:8080/member/signup`, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(yes),
		// })
		// 	.then(response => console.log(response))
		// 	.catch(error => console.log(error));

		// Axiox 사용
		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/member/signup`, yes);
		console.log(response);

		// const yes = await fetch(`${process.env.REACT_APP_LOGIN_URL}/member/signup`, {
		// 	method: "POST",
		// 	body: yesJson,
		// });

		// console.log(yes);
		// , {
		// 	withCredentials: true, // 쿠키 cors 통신 설정
		// }

		navigate(`/`);
	};

	const checkOverlap = async e => {
		e.preventDefault();

		// 1. axios로 아이디 보내기

		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/member/check-id`, {
			name: "jae12345",
		});

		// const yes = await fetch("/member/check-id", {
		// 	method: "POST",
		// 	body: "jae123",
		// });

		// 2. success 가 true, false 로
		// 메세지 띄우기

		console.log("checkOverlap");
	};

	const handleCancel = e => {
		// 1. state값 다 지우기

		e.preventDefault();
		console.log("handleCancel");
	};

	return (
		<>
			<SignSection>
				<form onSubmit={handleSign}>
					<IdDiv>
						<IdInputDiv>
							<IconImg src={person} />
							<IdInput placeholder="아이디" />
						</IdInputDiv>
						<IdButton onClick={checkOverlap}>중복확인</IdButton>
					</IdDiv>

					<PwDiv>
						<IconImg src={lock} />
						<PwInput placeholder="비밀번호" />
					</PwDiv>

					<PwAgainDiv>
						<IconImg src={lock} />
						<PwAgainInput placeholder="비밀번호 재입력" />
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

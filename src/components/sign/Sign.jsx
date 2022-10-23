import React from "react";
import styled from "styled-components";
import person from "../../images/sign/person.svg";
import lock from "../../images/sign/lock.svg";
import { useNavigate } from "react-router-dom";

const Sign = ({}) => {
	const navigate = useNavigate();

	const handleSign = e => {
		e.preventDefault();

		navigate(`/`);
	};

	return (
		<>
			<SignSection>
				<IdDiv>
					<IdInputDiv>
						<IconImg src={person} />
						<IdInput placeholder="아이디" />
					</IdInputDiv>
					<IdButton>중복확인</IdButton>
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
					<Button1>취소</Button1>
					<Button2 onClick={handleSign}>회원가입</Button2>
				</ButtonsDiv>
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

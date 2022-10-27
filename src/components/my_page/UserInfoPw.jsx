import styled from "styled-components";

function UserInfoPw() {
	return (
		<>
			<Container>
				<form>
					<input type="password" placeholder="기존 비밀번호를 입력해주세요"></input>
					<input type="password" placeholder="변경할 비밀번호를 입력해주세요"></input>
					<button>비밀번호 변경</button>
				</form>
			</Container>
		</>
	);
}

export default UserInfoPw;

const Container = styled.div`
	form {
		display: flex;
		flex-direction: column;
		gap: 5px;
		button {
			border: none;
			border: 1px solid #cde230;
			background-color: #fff;
			width: 120px;
			height: 30px;
			line-height: 30px;
			cursor: pointer;
			transition: all 0.5s;
			:hover {
				background-color: #cde230;
			}
		}
	}
`;

import UserInfoImg from "../my_page/UserInfoImg";
import UserInfoPw from "../my_page/UserInfoPw";
import UserContentImg from "../my_page/UserContentImg";
import styled from "styled-components";

const UserInfo = () => {
	return (
		<>
			<Container>
				<UserInfoImg />
				<UserInfoPw />
			</Container>
			<UserContentImg />
		</>
	);
};

export default UserInfo;
const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
	margin-bottom: 20px;
`;

import mask from "../../images/mask.png";
import styled from "styled-components";
// import Upload from "../pages/upload/Upload";

function UserInfoImg() {
	return (
		<>
			<ImgWrap>
				<img src={mask} alt="mask" />
			</ImgWrap>

			<UserName>유저 이름</UserName>
		</>
	);
}
export default UserInfoImg;

const ImgWrap = styled.div``;

const UserName = styled.p`
	width: 147px;
	height: 52px;
	border: 1px solid #000000;
	font-size: 20px;
`;

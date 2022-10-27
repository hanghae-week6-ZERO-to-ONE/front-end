import zerocider from "../../images/zerocider.png";
import styled from "styled-components";

function UserContentImg({ boards }) {
	return (
		<>
			<ImgWrap>
				<img src={boards.image ? boards.image : undefined} alt="zerocider" />
			</ImgWrap>
			<TextWrap>
				<div>{boards.title}</div>
				<div>{boards.comment}</div>
				<div>❤좋아요 {boards.id}개</div>
			</TextWrap>
		</>
	);
}
export default UserContentImg;

const ImgWrap = styled.div`
	box-sizing: border-box;

	border: 1px solid #000000;
	border-radius: 95px;
`;

const TextWrap = styled.div`
	box-sizing: border-box;

	background: #ffffff;
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

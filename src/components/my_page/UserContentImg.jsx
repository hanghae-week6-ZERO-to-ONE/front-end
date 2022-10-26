import zerocider from "../../images/zerocider.png";
import styled from "styled-components";

function UserContentImg({ board }) {
	return (
		<>
			<ImgWrap>
				<img src={board.image ? board.image : undefined} alt="zerocider" />
			</ImgWrap>
			<TextWrap>
				<div>{board.title}</div>
				<div>{board.title}</div>
				<div>❤좋아요 {board.id}개</div>
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

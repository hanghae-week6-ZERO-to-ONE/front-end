import zerocider from "../../images/zerocider.png";
import styled from "styled-components";

function UserContentImg() {
	return (
		<>
			<ImgWrap>
				<img src={zerocider} alt="zerocider" />
			</ImgWrap>
			<TextWrap>
				<div>상품명</div>
				<div>제품설명</div>
				<div>❤좋아요 30개</div>
			</TextWrap>
		</>
	);
}
export default UserContentImg;

const ImgWrap = styled.div`
	box-sizing: border-box;

	position: absolute;
	width: 144px;
	height: 140px;
	left: 459px;
	top: 1051px;

	background: url(image);
	border: 1px solid #000000;
	border-radius: 95px;
`;

const TextWrap = styled.div`
	box-sizing: border-box;

	position: absolute;
	width: 736px;
	height: 145px;
	left: 691px;
	top: 1043px;

	background: #ffffff;
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

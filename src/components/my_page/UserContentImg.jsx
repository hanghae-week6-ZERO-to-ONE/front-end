import zerocider from "../../images/zerocider.png";
import styled from "styled-components";

function UserContentImg({ boards }) {
	return (
		<>
			<ContentWrap>
				<ImgWrap>
					<img
						src="https://zero-to-one-bucket.s3.ap-northeast-2.amazonaws.com/board/63f70258-7c73-43c9-abf0-c5808739000a(%EC%97%AC%EA%B6%8C%EC%9A%A9)%EC%A1%B0%EC%9E%AC%EC%8B%A0_%EC%A6%9D%EB%AA%85%EC%82%AC%EC%A7%84.jpg"
						alt="zerocider"
					/>
				</ImgWrap>
				<TextWrap>
					<div>
						제로콜라<div>❤좋아요 10개</div>
					</div>
					<div>맛없드라</div>
				</TextWrap>
			</ContentWrap>
		</>
	);
}
export default UserContentImg;
const ContentWrap = styled.div`
	width: 1280px;
	display: flex;
	gap: 40px;
	justify-content: center;
`;
const ImgWrap = styled.div`
	width: 200px;
	height: 200px;
	box-sizing: border-box;
	border: 1px solid #000000;
	border-radius: 50%;
	position: relative;
	img {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: 65%;
		height: 65%;
		object-fit: cover;
	}
`;

const TextWrap = styled.div`
	width: 740px;
	box-sizing: border-box;
	background: #ffffff;
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding: 20px;
	div {
		margin-bottom: 10px;
	}
	div:first-child {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		div {
			font-size: 16px;
		}
	}
	div:last-child {
		font-size: 20px;
	}
`;

import zerocider from "../images/zerocider.png";
import styled from "styled-components";

function UserContentImg() {
	return (
		<>
			<ImgWrap>
				<img src={zerocider} alt="zerocider" />
			</ImgWrap>
		</>
	);
}

export default UserContentImg;

const ImgWrap = styled.div``;

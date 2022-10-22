import React from "react";
import styled from "styled-components";

const DetailImg = () => {
	return (
		<DetailWrap>
			<ImgWrap>
				<img
					src="https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/product/3842779007/B.jpg?500000000"
					alt=""
				/>
			</ImgWrap>
		</DetailWrap>
	);
};

export default DetailImg;

const DetailWrap = styled.section``;
const ImgWrap = styled.article`
	img {
		width: 280px;
		height: 380px;
		object-fit: cover;
	}
`;

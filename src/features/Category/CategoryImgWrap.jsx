import React from "react";
import CategoryImg from "../../features/Category/CategoryImg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryImgWrap = () => {
	return (
		<>
			<BtnWrap>
				<StLink to="/upload">업로드</StLink>
			</BtnWrap>

			<CategorySection>
				<CategoryImg />
				<CategoryImg />
				<CategoryImg />
			</CategorySection>
		</>
	);
};

export default CategoryImgWrap;
const BtnWrap = styled.div`
	margin-bottom: 50px;
	height: 40px;
	float: right;
	::after {
		clear: both;
		display: block;
		content: "";
	}
`;
const StLink = styled(Link)`
	display: block;
	text-align: center;
	background-color: #cde230;
	width: 80px;
	height: 40px;
	line-height: 40px;
	color: #222;
	font-weight: 500;
`;

const CategorySection = styled.section`
	clear: right;
`;

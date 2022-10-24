import styled from "styled-components";

const CategoryExplanation = ({ category }) => {
	return (
		<>
			<Title>{category}</Title>
			<ExplanationWrap>
				<h2>{category}</h2>
				<p>제로슈가는 맛있다</p>
			</ExplanationWrap>
		</>
	);
};

export default CategoryExplanation;

const ExplanationWrap = styled.section`
	border: 1px solid #111;
	width: 1280px;
	height: 415px;
	margin: 80px auto;
	padding: 20px;
	box-sizing: border-box;
	h2 {
		font-size: 30px;
		margin-bottom: 20px;
	}
	p {
		width: 1240px;
		height: 300px;
	}
`;

const Title = styled.h2`
	margin-top: 50px;
	font-size: 30px;
`;

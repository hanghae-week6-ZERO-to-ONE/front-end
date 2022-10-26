import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryImgWrap = ({ boards }) => {
	const navigate = useNavigate();
	return (
		<>
			<Categoryli
				onClick={() => {
					navigate(`/detail/${boards.id}`, {
						state: {
							id: boards.id,
							category: boards.category,
							title: boards.title,
							content: boards.content,
							image: boards.image,
							heartNum: boards.heartNum,
						},
					});
				}}
			>
				<img src={boards.image} alt={boards.title} />
				<p>{boards.title}</p>
			</Categoryli>
		</>
	);
};

export default CategoryImgWrap;

const Categoryli = styled.li`
	margin-bottom: 200px;
	cursor: pointer;
	width: 255px;
	height: 250px;

	img {
		width: 255px;
		height: 250px;
		object-fit: cover;
	}
	p {
		text-align: center;
	}
`;

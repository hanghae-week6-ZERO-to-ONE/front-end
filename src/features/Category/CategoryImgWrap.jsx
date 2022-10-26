import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryImgWrap = ({ board }) => {
	console.log(board);
	const navigate = useNavigate();
	return (
		<>
			<Categoryli
				onClick={() => {
					navigate(`/detail/${board.id}`, {
						state: {
							id: board.id,
							category: board.category,
							title: board.title,
							content: board.content,
							image: board.image,
							heartNum: board.heartNum,
						},
					});
				}}
			>
				<img src={board.image} alt={board.title} />
				<p>{board.title}</p>
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

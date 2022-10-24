import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Drink = ({ board }) => {
	const navigate = useNavigate();
	return (
		<DrinkWrap
			onClick={() => {
				navigate(`/detail/${board.id}`, {
					state: {
						id: board.id,
						category: board.category,
						title: board.title,
						content: board.content,
						image: board.image,
					},
				});
			}}
		>
			<img src={board.image} alt="" />
			<p>{board.title}</p>
		</DrinkWrap>
	);
};

export default Drink;

const DrinkWrap = styled.li`
	margin-bottom: 10px;
	cursor: pointer;
	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}
	p {
		width: 100%;
		font-size: 20px;
		text-align: center;
		margin-top: 10px;
	}
`;

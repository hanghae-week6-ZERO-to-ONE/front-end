import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Drink = ({ boards }) => {
	const navigate = useNavigate();

	return (
		<DrinkWrap
			onClick={() => {
				navigate(`/detail/${boards.id}`);
			}}
		>
			<img src={boards.image} alt={boards.title} />
			<p>{boards.title}</p>
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

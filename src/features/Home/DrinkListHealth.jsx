import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/board";
import Drink from "./Drink";
const DrinkList = () => {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board.data);

	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);

	return (
		<DrinkListWrap>
			<Link to={`/category/:category`}>
				<h2>건강 음료</h2>
			</Link>
			<ul>
				{board?.map(data => (
					<Drink key={data.id} board={data} />
				))}
			</ul>
		</DrinkListWrap>
	);
};

export default DrinkList;

const DrinkListWrap = styled.section`
	margin-bottom: 10px;
	h2 {
		margin-top: 120px;
		margin-bottom: 30px;
		font-weight: 400;
		font-size: 35px;
	}
	ul {
		display: flex;
		justify-content: space-between;
	}
`;

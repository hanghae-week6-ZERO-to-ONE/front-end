import React, { useEffect } from "react";
import styled from "styled-components";
import RecentlyList from "./RecentList";
import DrinkListZero from "./DrinkListZero";
import DrinkListOrganic from "./DrinkListOrganic";
import DrinkListProtein from "./DrinkListProtein";
import DrinkListHealth from "./DrinkListHealth";
import AlcoholList from "./AlcoholList";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/board";
import { Link } from "react-router-dom";
import Drink from "./Drink";
import { useParams } from "react-router-dom";

const DrinkListWrap = () => {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board.data);
	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);

	return (
		<>
			<DrinkWrap>
				<article>
					<h2>최신</h2>
					<ul>
						{board?.map(data => (
							<>
								<Drink key={data.id} board={data} />
							</>
						))}
					</ul>
				</article>
				<article>
					<h2>프로틴</h2>
					<ul>
						{board?.map(data => (
							<>
								<Drink key={data.id} board={data} />
							</>
						))}
					</ul>
				</article>
				<article>
					<h2>제로슈가</h2>
					<ul>
						{board?.map(data => (
							<>
								<Drink key={data.id} board={data} />
							</>
						))}
					</ul>
				</article>
				<article>
					<h2>건강음료</h2>
					<ul>
						{board?.map(data => (
							<>
								<Drink key={data.id} board={data} />
							</>
						))}
					</ul>
				</article>
				<article>
					<h2>
						<Link to={`/category/:category`}>이온음료</Link>
					</h2>
					<ul>
						{board?.map(data => (
							<>
								<Drink key={data.id} board={data} />
							</>
						))}
					</ul>
				</article>
			</DrinkWrap>
		</>
	);
};

export default DrinkListWrap;

const DrinkWrap = styled.section`
	width: 1280px;
	margin: 120px auto;
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
	li {
		width: 200px;
	}
`;

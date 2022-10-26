import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard, __getBoardCategory } from "../../redux/modules/board";
import { Link } from "react-router-dom";
import Drink from "./Drink";

const DrinkListWrap = () => {
	const dispatch = useDispatch();
	const boards = useSelector(state => state.boards.boards);
	const boards_category = useSelector(state => state.boards);
	console.log(boards);
	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(__getBoardCategory());
	// }, [dispatch]);
	const categoryArray = ["프로틴음료", "제로슈가", "건강음료", "이온음료"];
	return (
		<>
			<DrinkWrap>
				<article>
					<h2>최신</h2>
					<ul>
						{boards &&
							boards?.map(data => (
								<>
									<Drink key={data.id} boards={data} />
								</>
							))}
					</ul>
				</article>
				{categoryArray &&
					categoryArray.map((category, index) => {
						return (
							<>
								<article key={index}>
									<h2>
										<Link to={`/category/${category}`}>{category}</Link>
									</h2>
									<ul>
										{boards &&
											boards
												?.filter(data => data.category === `${category}`)
												.map(data => (
													<>
														<Drink key={data.id} boards={data} />
													</>
												))}
									</ul>
								</article>
							</>
						);
					})}
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
		justify-content: flex-start;
		gap: 50px;
		flex-wrap: wrap;
	}
	li {
		width: 200px;
	}
`;

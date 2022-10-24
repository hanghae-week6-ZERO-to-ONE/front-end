import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/board";
import { Link } from "react-router-dom";
import Drink from "./Drink";

const DrinkListWrap = () => {
	const dispatch = useDispatch();
	const board = useSelector(state => state.board.data);

	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);
	const categoryArray = ["최신", "프로틴음료", "제로슈가", "건강음료", "이온음료"];
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
				{categoryArray
					?.filter(category => category === "프로틴음료")
					.map(category => {
						return (
							<>
								<article>
									<h2>
										<Link to={`/category/${category}`}>프로틴음료</Link>
									</h2>
									<ul>
										{board
											?.filter(data => data.category === "프로틴음료")
											.map(data => (
												<>
													<Drink key={data.id} board={data} />
												</>
											))}
									</ul>
								</article>
							</>
						);
					})}
				{categoryArray
					?.filter(category => category === "제로슈가")
					.map(category => {
						return (
							<>
								<article>
									<h2>
										<Link to={`/category/${category}`}>제로슈가</Link>
									</h2>
									<ul>
										{board
											?.filter(data => data.category === "제로슈가")
											.map(data => (
												<>
													<Drink key={data.id} board={data} />
												</>
											))}
									</ul>
								</article>
							</>
						);
					})}
				{categoryArray
					?.filter(category => category === "건강음료")
					.map(category => {
						return (
							<>
								<article>
									<h2>
										<Link to={`/category/${category}`}>건강음료</Link>
									</h2>
									<ul>
										{board
											?.filter(data => data.category === "건강음료")
											.map(data => (
												<>
													<Drink key={data.id} board={data} />
												</>
											))}
									</ul>
								</article>
							</>
						);
					})}
				{categoryArray
					?.filter(category => category === "이온음료")
					.map(category => {
						return (
							<>
								<article>
									<h2>
										<Link to={`/category/${category}`}>이온음료</Link>
									</h2>
									<ul>
										{board
											?.filter(data => data.category === "이온음료")
											.map(data => (
												<>
													<Drink key={data.id} board={data} />
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
		justify-content: space-between;
	}
	li {
		width: 200px;
	}
`;

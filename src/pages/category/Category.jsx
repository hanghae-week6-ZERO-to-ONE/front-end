import CategoryExplanation from "../../features/Category/CategoryExplanation";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import CategoryImgWrap from "../../features/Category/CategoryImgWrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getBoard } from "../../redux/modules/board";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Category = () => {
	const dispatch = useDispatch();
	const params = useParams();
	const board = useSelector(state => state.board.board);
	useEffect(() => {
		dispatch(__getBoard());
	}, [dispatch]);
	console.log(board);
	return (
		<>
			<Layout>
				<CategoryExplanation category={params.id} />
				<BtnWrap>
					<StLink to="/upload">
						<strong>업로드</strong>
					</StLink>
				</BtnWrap>
				<CategoryUl>
					{board &&
						board
							?.filter(data => data.category === `${params.id}`)
							.map(data => (
								<>
									<CategoryImgWrap key={data.id} board={data} />
								</>
							))}
				</CategoryUl>
			</Layout>
		</>
	);
};
export default Category;

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
	position: relative;
	overflow: hidden;
	strong {
		display: block;
	}
	:hover strong {
		animation: moveTextUp 0.3s, moveDownUp 0.3s 0.3s;
	}
	@keyframes moveTextUp {
		to {
			transform: translateY(-100%);
		}
	}

	@keyframes moveDownUp {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
	::before {
		content: "";
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 100%;
		transition: 0.3s;
		transform-origin: 100% 0;
	}
	:hover::before {
		left: 0;
	}
`;

const CategoryUl = styled.ul`
	clear: both;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

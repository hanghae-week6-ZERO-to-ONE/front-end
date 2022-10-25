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
					<StLink to="/upload">업로드</StLink>
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
`;

const CategoryUl = styled.ul`
	clear: both;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
`;

import CategoryExplanation from "../../features/Category/CategoryExplanation";
import Layout from "../../components/Layout";
import CategoryImgWrap from "../../features/Category/CategoryImgWrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Category = () => {
	const params = useParams();
	const board = useSelector(state => state.board.data);

	return (
		<>
			<Layout>
				<CategoryExplanation category={params.id} />
				<BtnWrap>
					<StLink to="/upload">업로드</StLink>
				</BtnWrap>
				<CategoryUl>
					{board
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
	justify-content: space-between;
`;

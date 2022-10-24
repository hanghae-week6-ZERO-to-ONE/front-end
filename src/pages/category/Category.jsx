import CategoryExplanation from "../../features/Category/CategoryExplanation";
import Layout from "../../components/Layout";
import CategoryImgWrap from "../../features/Category/CategoryImgWrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Category = () => {
	const params = useParams();
	// desc 뽑아와야 댐 이미지도 뽑아와야댐
	const board = useSelector(state => state.board.data);
	console.log(board);

	return (
		<>
			<Layout>
				<CategoryExplanation category={params.id} />
				<CategoryImgWrap />
			</Layout>
		</>
	);
};
export default Category;

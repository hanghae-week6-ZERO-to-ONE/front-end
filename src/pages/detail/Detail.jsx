import Layout from "../../components/Layout";
import styled from "styled-components";
import DetailImg from "../../features/Detail/DetailImg";
import DetailExplanation from "../../features/Detail/DetailExplanation";
import DetailComment from "../../features/Detail/DetailComment";
import DetailCommentContent from "../../features/Detail/DetailCommentContent";

const Detail = () => {
	return (
		<>
			<Layout>
				<DetailWrap>
					<DetailImg></DetailImg>
					<DetailExplanation></DetailExplanation>
				</DetailWrap>
				<DetailComment />
				<DetailCommentContent />
			</Layout>
		</>
	);
};
export default Detail;

const DetailWrap = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 60px;
`;

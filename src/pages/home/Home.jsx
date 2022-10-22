import Layout from "../../components/Layout";
import styled from "styled-components";
import Background from "../../components/Background";
import DrinkList from "../../features/Home/DrinkList";
import RecentlyList from "../../features/Home/RecentList";

const Home = () => {
	return (
		<>
			<Background />
			<Layout>
				<DrinkListWrap>
					<RecentlyList />
					<DrinkList />
					<DrinkList />
					<DrinkList />
					<DrinkList />
				</DrinkListWrap>
			</Layout>
		</>
	);
};
export default Home;

const DrinkListWrap = styled.section`
	width: 1280px;
	margin: 120px auto;
`;

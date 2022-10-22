import Layout from "../../components/Layout";
import styled from "styled-components";
import Background from "../../components/Background";
import DrinkListWrap from "../../features/Home/DrinkListWrap";

const Home = () => {
	return (
		<>
			<Background />
			<Layout>
				<DrinkListWrap />
			</Layout>
		</>
	);
};
export default Home;

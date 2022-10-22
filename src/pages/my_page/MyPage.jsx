import Layout from "../../components/Layout";
import UserInfo from "../../components/UserInfo";
import UserContent from "../../components/UserContent";

const Mypage = () => {
	return (
		<>
			{/* <Background /> */}
			<Layout>
				<UserInfo />
				<UserContent />
			</Layout>
		</>
	);
};
export default Mypage;

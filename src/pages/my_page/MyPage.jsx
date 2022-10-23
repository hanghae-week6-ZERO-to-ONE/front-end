import Layout from "../../components/Layout";
import UserInfo from "../../components/my_page/UserInfo";
import UserContent from "../../components/my_page/UserContent";

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

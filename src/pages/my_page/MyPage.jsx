import Layout from "../../components/Layout";
import UserInfo from "../../components/my_page/UserInfo";
import UserContent from "../../components/my_page/UserContent";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Mypage = () => {
	const isLogin = useSelector(state => state.login.isLogin);

	if (!isLogin) {
		return <Navigate to="/" replace={true} />;
	}

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

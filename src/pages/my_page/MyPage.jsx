import Layout from "../../components/Layout";
import UserInfoImg from "../../components/my_page/UserInfoImg";
import UserContent from "../../components/my_page/UserContent";
import UserContentImg from "../../components/my_page/UserContentImg";
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
				<UserInfoImg />
				<UserContent />
			</Layout>
		</>
	);
};
export default Mypage;

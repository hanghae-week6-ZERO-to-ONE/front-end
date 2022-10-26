import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
	const login = useSelector(state => state.login.isLogin);

	if (!login) {
		return <Navigate to="/" replace={true} />;
	}

	return <Outlet context={{ ...rest }} />;
};
export default PrivateRoute;

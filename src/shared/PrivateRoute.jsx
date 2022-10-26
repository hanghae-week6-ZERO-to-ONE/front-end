import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ login, ...rest }) => {
	if (!login) {
		return <Navigate to="/" replace={true} />;
	}

	return <Outlet context={{ ...rest }} />;
};
export default PrivateRoute;

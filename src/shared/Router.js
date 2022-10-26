import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import LoginPage from "../pages/login/LoginPage";
import MyPage from "../pages/my_page/MyPage";

import Upload from "../pages/upload/Upload";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Category from "../pages/category/Category";
import SignPage from "../pages/sign/SignPage";
import { useEffect, useState } from "react";

import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { is_nickname, is_password } from "../common/logics";

const Router = () => {
	// const [login, setLogin] = useState(false);
	// const isLogin = useSelector(state => state.login.isLogin);
	// useEffect(() => {
	// 	const token = localStorage.getItem("authorization");

	// 	if (token) {
	// 		console.log("loggedin");
	// 		setLogin(true);
	// 	} else {
	// 		console.log("loggedout");
	// 		setLogin(false);
	// 	}
	// }, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route path="" element={<Home />} />
					<Route path="category/:id" element={<Category />} />
					<Route path="detail" element={<Detail />}>
						<Route path=":id" element={<Detail />} />
					</Route>
					<Route path="" element={<PrivateRoute />}>
						<Route path="my_page" element={<MyPage />} />
						<Route path="upload" element={<Upload />} />
					</Route>

					<Route path="sign" element={<SignPage />} />
				</Route>
				<Route path="login" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

import { configureStore } from "@reduxjs/toolkit";
import board from "../modules/board";
import login from "../modules/login";
import mypage from "../modules/mypage";
const store = configureStore({
	reducer: {
		board,
		login,
		mypage,
	},
});

export default store;

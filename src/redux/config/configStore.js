import { configureStore } from "@reduxjs/toolkit";
import boards from "../modules/board";
import login from "../modules/login";
import mypage from "../modules/mypage";
const store = configureStore({
	reducer: {
		boards,
		login,
		mypage,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

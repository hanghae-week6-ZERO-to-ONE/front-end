import { configureStore } from "@reduxjs/toolkit";
import boards from "../modules/board";
import login from "../modules/login";
import mypage from "../modules/mypage";
import comment from "../modules/comment";
const store = configureStore({
	reducer: {
		boards,
		login,
		mypage,
		comment,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

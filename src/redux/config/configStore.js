import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/_todoSlice";
import board from "../modules/board";
import user from "../modules/user";

const store = configureStore({
	reducer: {
		board,
		user,
	},
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import boards from "../modules/board";
import comment from "../modules/comment";
const store = configureStore({
	reducer: {
		boards,
		comment,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;

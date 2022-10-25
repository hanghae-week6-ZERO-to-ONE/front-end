import { configureStore } from "@reduxjs/toolkit";

import board from "../modules/board";
import comment from "../modules/comment";
const store = configureStore({
	reducer: {
		board,
		comment,
	},
});

export default store;

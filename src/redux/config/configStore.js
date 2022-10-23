import { configureStore } from "@reduxjs/toolkit";

import board from "../modules/board";
const store = configureStore({
	reducer: {
		board,
	},
});

export default store;

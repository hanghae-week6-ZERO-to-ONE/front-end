import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/_todoSlice";

const store = configureStore({
	reducer: {
		todos,
	},
});

export default store;

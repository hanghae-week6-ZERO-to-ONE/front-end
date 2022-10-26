import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCategory = createAsyncThunk("GET_COMMENT", async (payload, thunkAPI) => {
	try {
		const data = await axios.get(`http://localhost:3001/comments/`, payload);
		return thunkAPI.fulfillWithValue(data.data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

const initialState = {
	category: [],
	error: null,
	isLoading: false,
};

export const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {},
	extraReducers: {
		[__getCategory.pending]: state => {
			state.isLoading = true;
		},
		[__getCategory.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.comments = [...action.payload];
		},
		[__getCategory.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// export const {} = commentSlice.actions;
export default categorySlice.reducer;

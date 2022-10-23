import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	board: [],
	isLoading: false,
	error: null,
};

export const __getBoard = createAsyncThunk("getBoard", async (payload, thunkAPI) => {
	try {
		const data = await axios.get("http://localhost:3001/board", payload);
		return thunkAPI.fulfillWithValue(data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getBoardDelete = createAsyncThunk("DELETE_POST", async (payload, thunkAPI) => {
	try {
		axios.delete(`http://localhost:3001/board/${payload}`);
		return thunkAPI.fulfillWithValue(payload);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});
export const __updateBoard = createAsyncThunk("UPDATE_POST", async (payload, thunkAPI) => {
	// console.log(payload);
	try {
		const { data } = await axios.put(`http://localhost:3001/board/${payload}`, payload);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {},
	extraReducers: {
		[__getBoard.pending]: state => {
			state.isLoading = true;
		},
		[__getBoard.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[__getBoard.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[__getBoardDelete.fulfilled]: () => {},
		[__getBoardDelete.rejected]: () => {},
		[__getBoardDelete.pending]: () => {},

		[__updateBoard.pending]: state => {
			state.isLoading = true;
		},
		[__updateBoard.fulfilled]: (state, action) => {
			state.post = action.payload;
		},
		[__updateBoard.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {} = boardSlice.actions;
export default boardSlice.reducer;

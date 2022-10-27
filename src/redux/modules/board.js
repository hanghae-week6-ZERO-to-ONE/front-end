import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const accessToken = localStorage.getItem("authorization");
const initialState = {
	board: [],
	isLoading: false,
	error: null,
};

export const __getBoard = createAsyncThunk("getBoard", async (payload, thunkAPI) => {
	try {
		const data = await axios.get("http://3.38.153.4:8080/boards/recent", payload);

		return thunkAPI.fulfillWithValue(data.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __getBoardDetail = createAsyncThunk("getBoardDetail", async (payload, thunkAPI) => {
	try {
		const data = await axios.get(`http://3.38.153.4:8080/boards/${payload}`, payload);

		return thunkAPI.fulfillWithValue(data.data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});
// export const __getBoardCategory = createAsyncThunk(
// 	"getBoardCategory",
// 	async (payload, thunkAPI) => {
// 		try {
// 			const data = await axios.get(
// 				"http://3.38.153.4:8080/boards/recent-categories?category=",
// 				payload
// 			);

// 			return thunkAPI.fulfillWithValue(data.data.data);
// 		} catch (error) {
// 			return thunkAPI.rejectWithValue(error);
// 		}
// 	}
// );

export const __getBoardDelete = createAsyncThunk("getBoardDelete", async (payload, thunkAPI) => {
	try {
		const data = axios.delete(`http://3.38.153.4:8080/boards/${payload}`, {
			headers: {
				Authorization: accessToken,
				"Content-Type": "application/json",
			},
		});

		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __updateBoard = createAsyncThunk("updateBoard", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.put(`http://3.38.153.4:8080/boards/${payload.id}`, payload, {
			headers: {
				Authorization: accessToken,
				"Content-Type": "application/json",
			},
		});
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

const updateBoardLogic = (state, comment) => {
	const emptyArray = [];

	state.forEach(content => {
		if (content.id !== comment.id) {
			emptyArray.push(content);
		} else {
			emptyArray.push(comment);
		}
	});

	return emptyArray;
};
export const boardSlice = createSlice({
	name: "boards",
	initialState,
	reducers: {},
	extraReducers: {
		[__getBoard.pending]: state => {
			state.isLoading = true;
		},
		[__getBoard.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.boards = action.payload;
		},
		[__getBoard.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[__getBoardDetail.pending]: state => {
			state.isLoading = true;
		},
		[__getBoardDetail.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.boards = action.payload;
		},
		[__getBoardDetail.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		[__getBoardDelete.pending]: state => {
			state.isLoading = true;
		},

		[__getBoardDelete.fulfilled]: (state, action) => {
			state.boards = state.boards.boards.filter(list => list.id !== action.payload);
		},
		[__getBoardDelete.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[__updateBoard.pending]: state => {
			state.isLoading = true;
		},
		[__updateBoard.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.boards = updateBoardLogic(state.boards, action.payload);
		},
		[__updateBoard.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// export const {} = boardSlice.actions;
export default boardSlice.reducer;

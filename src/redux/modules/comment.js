import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const accessToken = localStorage.getItem("authorization");

export const __addComment = createAsyncThunk("ADD_COMMENT", async (payload, thunkAPI) => {
	// console.log("hi");
	// console.log(payload);
	// console.log(payload.content);

	// console.log(payload.id);

	try {
		const { data } = await axios.post(`http://3.38.153.4:8080/${payload.id}/comments`, payload, {
			headers: {
				Authorization: accessToken,
				"Content-Type": "application/json",
			},
		});
		console.log(data);
		console.log(data.data);
		return thunkAPI.fulfillWithValue(data.data.data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __getComment = createAsyncThunk("GET_COMMENT", async (payload, thunkAPI) => {
	try {
		const data = await axios.get(`http://3.38.153.4:8080/boards/${payload}`, payload);

		return thunkAPI.fulfillWithValue(data.data.data.commentResponseDtoList);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __deleteComment = createAsyncThunk("DELETE_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.delete(`http://3.38.153.4:8080/comments/${payload}`, {
			headers: {
				Authorization: accessToken,
				"Content-Type": "application/json",
			},
		});
		// console.log(data);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __updateComment = createAsyncThunk("UPDATE_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.put(`http://3.38.153.4:8080/comments/${payload.id}`, payload, {
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

const initialState = {
	comment: [],
	error: null,
	isLoading: false,
};

const updateCommentLogic = (state, comment) => {
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

export const commentSlice = createSlice({
	name: "comment",
	initialState,
	reducers: {},
	extraReducers: {
		[__addComment.pending]: state => {
			state.isLoading = true;
		},
		[__addComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			// state.comment = action.payload;
		},
		[__addComment.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		[__getComment.pending]: state => {
			state.isLoading = true;
		},
		[__getComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.comment = action.payload;
		},
		[__getComment.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		[__deleteComment.pending]: state => {
			state.isLoading = true;
		},
		[__deleteComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.comment = state.comment.filter(comment => comment.id !== action.payload);
		},
		[__deleteComment.rejected]: state => {
			state.isLoading = false;
		},
		[__updateComment.pending]: state => {
			state.isLoading = true;
		},
		[__updateComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.comment = updateCommentLogic(state.comment, action.payload);
		},
		[__updateComment.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// export const {} = commentSlice.actions;
export default commentSlice.reducer;

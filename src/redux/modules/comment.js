import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const __addComment = createAsyncThunk("ADD_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.post(`http://localhost:3001/comments`, payload);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __getComment = createAsyncThunk("GET_COMMENT", async (payload, thunkAPI) => {
	try {
		const data = await axios.get(`http://localhost:3001/comments/`, payload);
		return thunkAPI.fulfillWithValue(data.data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __getCommentById = createAsyncThunk("GET_COMMENT_BY_ID", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.get(`http://localhost:3001/comments?postId=${payload}`);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __deleteComment = createAsyncThunk("DELETE_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.delete(`http://localhost:3001/comments/${payload}`);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __updateComment = createAsyncThunk("UPDATE_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.put(`http://localhost:3001/comments/${payload.id}`, payload);
		console.log(data);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

const initialState = {
	comments: [],
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
			// console.log(action.payload);
			state.isLoading = false;
			state.comments.push(action.payload);
		},
		[__addComment.rejected]: state => {
			state.isLoading = false;
		},
		[__getComment.pending]: state => {
			state.isLoading = true;
		},
		[__getComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.comments = [...action.payload];
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
			state.comments = state.comments.filter(comment => comment.id !== action.payload);
		},
		[__deleteComment.rejected]: state => {
			state.isLoading = false;
		},
		[__updateComment.pending]: state => {
			state.isLoading = true;
		},
		[__updateComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			console.log(current(state.comments));
			console.log(action.payload);
			state.comments = updateCommentLogic(state.comments, action.payload);
		},
		[__updateComment.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// export const {} = commentSlice.actions;
export default commentSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __addComment = createAsyncThunk("ADD_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.post(`http://localhost:3001/comment`, payload);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __getComment = createAsyncThunk("GET_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.get(`http://localhost:3001/comment/`, payload);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __getCommentById = createAsyncThunk("GET_COMMENT_BY_ID", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.get(`http://localhost:3001/comment?postId=${payload}`);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __deleteComment = createAsyncThunk("DELETE_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.delete(`http://localhost:3001/comment/${payload}`);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __updateComment = createAsyncThunk("UPDATE_COMMENT", async (payload, thunkAPI) => {
	try {
		const { data } = await axios.put(`http://localhost:3001/comment/${payload.id}`, payload);
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
			state.comment = action.payload;
		},
		[__addComment.rejected]: state => {
			state.isLoading = false;
		},
		[__getComment.pending]: state => {
			state.isLoading = true;
		},
		[__getComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.comment = action.payload;
		},
		[__getComment.rejected]: state => {
			state.isLoading = false;
		},

		[__getCommentById.pending]: state => {
			state.isLoading = true;
		},
		[__getCommentById.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.comment.data = action.payload;
		},
		[__getCommentById.rejected]: state => {
			state.isLoading = false;
		},
		[__deleteComment.pending]: state => {
			state.isLoading = true;
		},
		[__deleteComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			const target = state.comments.data.filter(comment => comment.id !== action.payload);
			state.comment.data = target;
		},
		[__deleteComment.rejected]: state => {
			state.isLoading = false;
		},
		[__updateComment.pending]: state => {
			state.isLoading = true;
		},
		[__updateComment.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[__updateComment.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// export const {} = commentSlice.actions;
export default commentSlice.reducer;

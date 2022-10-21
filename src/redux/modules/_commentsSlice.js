import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(process.env.REACT_APP_DB_HEROKU_COMMENTS);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      await axios.post(process.env.REACT_APP_DB_HEROKU_COMMENTS, payload);

      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delComment = createAsyncThunk(
  "delComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_DB_HEROKU_COMMENTS}/${payload}`
      );
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __fixComment = createAsyncThunk(
  "fixComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(
        `${process.env.REACT_APP_DB_HEROKU_COMMENTS}/${payload.id}`,
        { desc: payload.desc }
      );

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fixCommentFulfilledMethod = (payload, comments) => {
  const newComments = comments.map((comment) => {
    if (comment.id === payload.id) {
      return { ...comment, desc: payload.desc };
    } else {
      return comment;
    }
  });

  return newComments;
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // Get Comment
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Add Comment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Delete Comment
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Fix Comment
    [__fixComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__fixComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = fixCommentFulfilledMethod(
        action.payload,
        state.comments
      );
    },
    [__fixComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;

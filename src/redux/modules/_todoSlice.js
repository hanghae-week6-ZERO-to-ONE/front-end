import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	todos: [],
	isLoading: false,
	error: null,
};

export const __getTodos = createAsyncThunk("getTodos", async (payload, thunkAPI) => {
	try {
		const data = await axios.get(process.env.REACT_APP_DB_HEROKU_TODOS);
		return thunkAPI.fulfillWithValue(data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __addTodos = createAsyncThunk("addTodos", async (payload, thunkAPI) => {
	try {
		axios.post(process.env.REACT_APP_DB_HEROKU_TODOS, payload);
		return thunkAPI.fulfillWithValue(payload);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __delTodos = createAsyncThunk("delTodos", async (payload, thunkAPI) => {
	try {
		await axios.delete(`${process.env.REACT_APP_DB_HEROKU_TODOS}/${payload}`);
		return thunkAPI.fulfillWithValue(payload);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const __fixTodo = createAsyncThunk("fixTodo", async (payload, thunkAPI) => {
	try {
		const data = await axios.patch(`${process.env.REACT_APP_DB_HEROKU_TODOS}/${payload.id}`, {
			desc: payload.desc,
		});

		return thunkAPI.fulfillWithValue(data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: {
		// Todo List Get
		[__getTodos.pending]: state => {
			state.isLoading = true;
		},
		[__getTodos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.todos = action.payload;
		},
		[__getTodos.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		// Todo List Add
		[__addTodos.pending]: state => {
			state.isLoading = true;
		},
		[__addTodos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.todos.push(action.payload);
		},
		[__addTodos.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		// Todo Delete
		[__delTodos.pending]: state => {
			state.isLoading = true;
		},
		[__delTodos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.todos = state.todos.filter(todo => todo.id !== action.payload);
		},
		[__delTodos.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		// Todo Fix
		[__fixTodo.pending]: state => {
			state.isLoading = true;
		},
		[__fixTodo.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.todos.push(action.payload);
		},
		[__fixTodo.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;

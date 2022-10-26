import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	name: "seokwon123",
	password: "123123",
	image: "",
};

// 이미지, 패스워드 수정
export const __updateMypageImg = createAsyncThunk("mypage", async (payload, thunkAPI) => {
	try {
		console.log(payload);
		const data = await axios.post(`http://localhost:3001/mypage/${payload.id}`, payload.formData);
		// console.log(data);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

export const __getBoard = createAsyncThunk("getBoard", async (payload, thunkAPI) => {
	try {
		// const data = await axios.get("http://localhost:3001/board", payload);
		const data = await axios.get("http://localhost:3001/board");
		return thunkAPI.fulfillWithValue(data.data);
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

const mypageSlice = createSlice({
	name: "mypage",
	initialState,
	reducers: {},
	extraReducers: {
		// [__loginDB.fulfilled]: (state, action) => {
		// 	state.success = action.payload;
		// 	state.isLogin = true;
		// },
		// [__loginDB.rejected]: (state, action) => {
		// 	state.isLogin = false;
		// 	state.error = action.payload;
		// },
		[__getBoard.pending]: state => {
			state.isLoading = true;
		},
		[__getBoard.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.board = action.payload;
		},
		[__getBoard.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export default mypageSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { name: "seokwon123", password: "123123", image: "" };

// 이미지, 패스워드 수정
export const __updateMypageImg = createAsyncThunk("mypage", async (payload, thunkAPI) => {
	try {
		console.log(payload);
		const data = await axios.patch(`http://localhost:3001/mypage/${payload.id}`, payload.formData);
		// console.log(data);
		return thunkAPI.fulfillWithValue(data);
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code);
	}
});

const mypageSlice = createSlice({
	name: "mypage",
	initialState,
	reducers: {},
	extraReducers: {
		// [__updateMypageImg.fulfilled]: (state, action) => {
		// 	state.success = action.payload;
		// 	state.isLogin = true;
		// },
		// [__updateMypageImg]: (state, action) => {
		// 	state.isLogin = false;
		// 	state.error = action.payload;
		// },
	},
});

export default mypageSlice.reducer;

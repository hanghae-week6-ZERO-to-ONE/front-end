import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	isLogin: false,
	error: null,
};

// data 값으로 {name: string, password: string}이렇게 넣는다

// body 값 가져오는거 물어봐야됨
export const __loginDB = createAsyncThunk("user/loginDB", async (data, thunkAPI) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/member/login`, data);
		if (response.data.success === false) {
			window.alert(response.data.error.message);
			return thunkAPI.rejectWithValue();
		} else {
			console.log("성공");
			// header에 어떤값들이 또 들어있는지
			localStorage.setItem("authorization", response.headers.authorization);
			localStorage.setItem("refreshToken", response.headers.refreshtoken);

			console.log(response.headers);

			return thunkAPI.fulfillWithValue(response.data);
		}
	} catch (error) {
		window.alert(data.data.error.message);
		return thunkAPI.rejectWithValue(error);
	}
});

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {},
	extraReducers: {
		[__loginDB.fulfilled]: (state, action) => {
			state.isLogin = true;
		},
		[__loginDB.rejected]: (state, action) => {
			state.isLogin = false;
			state.error = action.payload;
		},
	},
});

export default loginSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	isLogin: false,
	error: null,
};

// data 값으로 {name: string, password: string}이렇게 넣는다
export const __loginDB = createAsyncThunk("user/loginDB", async (data, thunkAPI) => {
	try {
		const response = await axios.post("", data);
		if (response.data.success === false) {
			window.alert(response.data.error.message);
			return thunkAPI.rejectWithValue();
		} else {
			localStorage.setItem("authorization", response.headers.authorization);
			localStorage.setItem("refreshToken", response.headers.refreshtoken);
			localStorage.setItem("nickname", response.data.data.nickname);
			localStorage.setItem("isLogin", true);
			return thunkAPI.fulfillWithValue(response.data);
		}
	} catch (error) {
		window.alert(data.data.error.message);
		return thunkAPI.rejectWithValue(error);
	}
});

const userSlice = createSlice({
	name: "user",
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

export default userSlice.reducer;

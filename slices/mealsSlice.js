import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMeals = createAsyncThunk("meals/getMeals", async category => {
	try {
		const { data: response } = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
		);
		return response;
	} catch (error) {
		console.log(error);
	}
});

export const mealsSlice = createSlice({
	name: "meals",
	initialState: [],
	reducers: [],
	extraReducers: builder => {
		builder.addCase(getMeals.fulfilled, (state, action) => {
			return (state = action.payload);
		});
	},
});

export default mealsSlice.reducer;

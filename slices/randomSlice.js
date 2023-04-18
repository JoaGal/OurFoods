import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRandomMeal = createAsyncThunk(
	"randomMeal/getRandomMeal",
	async () => {
		try {
			const { data: response } = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/random.php`
			);
			return response;
		} catch (error) {
			console.log(error);
		}
	}
);

export const randomSlice = createSlice({
	name: "randomMeal",
	initialState: [],
	reducers: [],
	extraReducers: builder => {
		builder.addCase(getRandomMeal.fulfilled, (state, action) => {
			return (state = action.payload);
		});
	},
});

export default randomSlice.reducer;

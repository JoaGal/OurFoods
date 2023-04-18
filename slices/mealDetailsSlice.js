import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMealDetails = createAsyncThunk(
	"mealDetails/getMealDetails",
	async id => {
		try {
			const { data: response } = await axios.get(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
			);
			return response;
		} catch (error) {
			console.log(error);
		}
	}
);

export const mealDetailsSlice = createSlice({
	name: "mealDetails",
	initialState: [],
	reducers: [],
	extraReducers: builder => {
		builder.addCase(getMealDetails.fulfilled, (state, action) => {
			return (state = action.payload);
		});
	},
});

export default mealDetailsSlice.reducer;
